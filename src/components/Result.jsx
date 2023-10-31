const Result = ({ resultado }) => {
	const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = resultado;
	return (
		<>
			<table className="main-container__container-main-form-container-table">
				<tbody>
					<tr>
						<th>Precio:</th>
						<td>{PRICE}</td>
						<th>HOD:</th>
						<td>{HIGHDAY}</td>
					</tr>

					<tr>
						<th>LOD:</th>
						<td>{LOWDAY}</td>

						<th>Var. 24h:</th>
						<td>{CHANGEPCT24HOUR}</td>
					</tr>

					<tr>
						<th>Última actualización:</th>
						<td>{LASTUPDATE}</td>
					</tr>
				</tbody>
			</table>

			<table className="main-container__container-main-form-container-table-min-size">
				<tbody>
					<tr>
						<th>Precio:</th>
						<td>{PRICE}</td>
					</tr>
					<tr>
						<th>HOD:</th>
						<td>{HIGHDAY}</td>
					</tr>

					<tr>
						<th>LOD:</th>
						<td>{LOWDAY}</td>
					</tr>
					<tr>
						<th>Var. 24h:</th>
						<td>{CHANGEPCT24HOUR}</td>
					</tr>

					<tr>
						<th>Última actualización:</th>
						<td>{LASTUPDATE}</td>
					</tr>
				</tbody>
			</table>
		</>
	);
};

export default Result;
