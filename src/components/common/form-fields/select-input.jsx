"use client"
import React from "react";
import { Form } from "react-bootstrap";

const SelectInput = ({ className, options, error, label, ...rest }) => {
	return (
		<Form.Group className={className} controlId={rest.name}>
			<Form.Label>{label}</Form.Label>
			<Form.Select aria-label={label} {...rest} isInvalid={!!error}>
				<option disabled value="">
					Choose
				</option>
				{options.map((item) => (
					<option key={item.value} value={item.value}>
						{item.label}
					</option>
				))}
			</Form.Select>
			<Form.Control.Feedback type="invalid">
				{error}
			</Form.Control.Feedback>
		</Form.Group>
	);
};

export default SelectInput;
