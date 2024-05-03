"use client";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useFormStatus } from "react-dom";
import Icon from "../icon";

const SubmitButton = ({
	title = "Submit",
	icon = "MdSend",
	iconfamily = "md",
	spinnerVariant = "secondary",
	...rest
}) => {
	const { pending } = useFormStatus();
	return (
		<Button type="submit" {...rest} disabled={pending}>
			{pending ? (
				<Spinner variant={spinnerVariant} size="sm" />
			) : (
				<>
					<Icon family={iconfamily} icon={icon} /> {title}
				</>
			)}
		</Button>
	);
};

export default SubmitButton;
