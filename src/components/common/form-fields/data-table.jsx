import Link from "next/link";
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

export const FirstPageButton = ({ currentPage }) => {
	return (
		<li className="page-item">
			<Link
				className={`page-link ${currentPage ? "" : "disabled"}`}
				href="?page=0"
			>
				&laquo;
			</Link>
		</li>
	);
};

export const PreviousPageButton = ({ currentPage }) => {
	return (
		<li className="page-item">
			<a
				className={`page-link ${currentPage ? "" : "disabled"}`}
				href={`?page=${currentPage - 1}`}
			>
				&lsaquo;
			</a>
		</li>
	);
};

export const PageButton = ({ totalPages, currentPage }) => {
	return [...new Array(totalPages)].map((_, index) => (
		<li className="page-item" key={index}>
			<Link
				className={`page-link ${
					index === currentPage ? "disabled" : ""
				}`}
				href={`?page=${index}`}
			>
				{index + 1}
			</Link>
		</li>
	));
};

export const NextPageButton = ({ currentPage, totalPages }) => {
	return (
		<li className="page-item">
			<a
				className={`page-link ${
					currentPage + 1 < totalPages ? "" : "disabled"
				}`}
				href={`?page=${currentPage + 1}`}
			>
				&rsaquo;
			</a>
		</li>
	);
};

export const LastPageButton = ({ currentPage, totalPages }) => {
	return (
		<li className="page-item">
			<a
				className={`page-link ${
					currentPage + 1 < totalPages ? "" : "disabled"
				}`}
				href={`?page=${totalPages - 1}`}
			>
				&raquo;
			</a>
		</li>
	);
};

export const Pagination = ({ totalPages, currentPage }) => {
	return (
		<nav aria-label="Navigation" className="d-flex justify-content-center ">
			<ul className="pagination">
				<FirstPageButton currentPage={currentPage} />
				<PreviousPageButton currentPage={currentPage} />
				<PageButton totalPages={totalPages} currentPage={currentPage} />
				<NextPageButton
					totalPages={totalPages}
					currentPage={currentPage}
				/>
				<LastPageButton
					totalPages={totalPages}
					currentPage={currentPage}
				/>
			</ul>
		</nav>
	);
};

const DataTable = (props) => {
	const {
		title,
		dataSource,
		dataKey,
		children,
		totalPages = 0,
		currentPage = 0,
		pageSize = 0,
	} = props;

	if (!dataSource || !Array.isArray(dataSource))
		throw new Error("dataSource attribute is required");

	if (!dataKey) throw new Error("dataKey attribute is required");

	if (!children) throw new Error("Column required");

	const columns = Array.isArray(children) ? [...children] : [children];

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
									{columns.map((cell) => {
										const { dataField, index, template } =
											cell.props;
										let cellData = "";
										const cellKey =
											row[dataKey] + dataField + cellData;

										if (index) {
											cellData =
												pageSize * currentPage +
												rowIndex +
												1;
										} else if (dataField) {
											cellData = row[dataField];
										} else if (template) {
											cellData = template(row);
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

					{totalPages > 1 ? (
						<Pagination
							totalPages={totalPages}
							currentPage={currentPage}
						/>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default DataTable;
