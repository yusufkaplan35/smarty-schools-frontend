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

export const Pagination = ({ totalPages }) => {
	return (
		<nav aria-label="Navigation" className="d-flex justify-content-center ">
			<ul className="pagination">
				<li className="page-item">
					<a className="page-link" href="#">
						&laquo;
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						&lsaquo;
					</a>
				</li>
				{[...new Array(totalPages)].map((_, index) => (
					<li className="page-item" key={index}>
						<a className="page-link" href={`?page=${index}`}>
							{index + 1}
						</a>
					</li>
				))}

				<li className="page-item">
					<a className="page-link" href="#">
						&rsaquo;
					</a>
				</li>
				<li className="page-item">
					<a className="page-link" href="#">
						&raquo;
					</a>
				</li>
			</ul>
		</nav>
	);
};

const DataTable = (props) => {
	const { title, dataSource, dataKey, totalPages, children } = props;

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
							{dataSource.map((row, rowIndex) => (
								<Row key={row[dataKey]}>
									{children.map((cell) => {
										const { dataField, index } = cell.props;
										let cellData = "";
										const cellKey =
											row[dataKey] + dataField + cellData;

										if (index) {
											cellData = rowIndex + 1;
										} else if (dataField) {
											cellData = row[dataField];
										}

										return (
											<Cell key={cellKey}>
												{cellData}
											</Cell>
										);
									})}
								</Row>
							))}
						</tbody>
					</table>

					<Pagination totalPages={totalPages} />
				</div>
			</div>
		</div>
	);
};

export default DataTable;
