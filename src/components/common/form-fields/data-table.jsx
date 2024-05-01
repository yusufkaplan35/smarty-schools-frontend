import React from "react";

export const Column = ({ children }) => {
	return <th scope="col">{children}</th>;
};

export const Row = ({ children }) => {
	return <tr>{children}</tr>;
};

export const Cell = ({ children }) => {
	return <td>{children}</td>;
};

const DataTable = (props) => {
	const { title, dataSource, dataKey, children } = props;

	if (!dataSource || !Array.isArray(dataSource))
		throw new Error("dataSource attribute is required");

	if (!dataKey) throw new Error("dataKey attribute is required");

	return (
		<div className="card">
			<div className="card-body">
				<h3 className="card-title">{title}</h3>
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>{children}</tr>
						</thead>
						<tbody>
							{dataSource.map((row) => (
								<Row key={row[dataKey]}>
									{children.map((cell) => {
										const { dataField } = cell.props;
										const cellData = row[dataField];
										const cellKey = row[dataKey] + dataField + cellData;

										return <Cell key={cellKey}>{cellData}</Cell>;
									})}
								</Row>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
