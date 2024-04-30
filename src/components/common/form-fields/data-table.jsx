import React from "react";



export const Column = () => {
  return (
    <div>Column</div>
  )
}


const DataTable = (props) => {

    const { title, children } = props;

    console.log(children)

	return (
		<div className="card">
			<div className="card-body">
                <h3 className="card-title">{title}</h3>
				<div className="table-responsive">
					<table className="table table-striped">
						<thead>
							<tr>
								
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>sdfs</td>
								<td>sdfssdd</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default DataTable;
