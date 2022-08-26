import * as React from "react";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useReach from "../../hooks/useReach";
import ReachAPI from "../../api/reach";

export default function BasicTable() {
	const { contributions } = useReach();

	return (
		<>
			<TableContainer sx={{ width: "80%", m: "2rem auto" }} component={Paper}>
				<Table aria-label='simple table'>
					<TableHead>
						<TableRow>
							<TableCell>Address</TableCell>
							<TableCell align='right'>
								Amount ({ReachAPI.standardUnit})
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{contributions.map((row) => (
							<TableRow
								key={Math.random()}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
							>
								<TableCell component='th' scope='row'>
									{row.address}
								</TableCell>
								<TableCell align='right'>{row.amount}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
