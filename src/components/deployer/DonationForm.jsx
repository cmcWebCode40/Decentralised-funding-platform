import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";
import TextField from "@mui/material/TextField";
import useReach from "../../hooks/useReach";
import VeridaAPI from "../../api/verida";
import ReachAPI from "../../api/reach";

const DonationForm = () => {
	const { deployContract } = useReach();
	const [values, setValues] = useState({});
	const [imageUrl, setImageurl] = useState("");
	const [hasConnected, setHasConnected] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState({});

	const handleSSOLogin = async () => {
		setIsLoading(true);
		try {
			await VeridaAPI.connect();
			setHasConnected(VeridaAPI.isConnected);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	const createBase64Image = (e) => {
		const selectedFile = e.target.files[0];
		const reader = new FileReader();
		reader.onload = (e) => {
			setImageurl(e.target.result);
		};
		reader.readAsDataURL(selectedFile);
	};

	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]:
				event.target.type === "number"
					? +event.target.value
					: event.target.value,
		});
	};

	const createDonationCampaign = async (event) => {
		event.preventDefault();
		const { donationTitle, duration, description, targetAmount } = values;
		const schemaData = {
			donationTitle,
			duration,
			description,
			imageUrl,
			targetAmount,
		};
		setIsLoading(true);

		try {
			const res = await VeridaAPI.save(schemaData);

			const uri = VeridaAPI.buildUri({
				contextName: VeridaAPI.contextName,
				dbName: VeridaAPI.dbName,
				itemId: res.id,
				did: VeridaAPI.did,
			});

			const data = {
				_id: uri,
				targetAmount,
				donationTitle,
				duration,
				description,
				imageUrl,
			};

			await deployContract(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Box
			sx={{
				textAlign: "center",
				maxWidth: "60%",
				marginX: "auto",
			}}
		>
			<Typography
				variant='h4'
				sx={{
					fontWeight: 600,
					marginY: 5,
				}}
			>
				Create Funding Information
			</Typography>
			<form onSubmit={createDonationCampaign}>
				<TextField
					label='Fund Title'
					id='donationTitle'
					fullWidth
					disabled={isLoading}
					name='donationTitle'
					required
					placeholder={"Donation Title"}
					sx={{
						marginY: 1,
					}}
					variant='outlined'
					onChange={handleChange}
				/>
				<TextField
					label={`Goal (Amount) in ${ReachAPI.standardUnit}`}
					id='targetAmount'
					fullWidth
					disabled={isLoading}
					name='targetAmount'
					type='number'
					required
					step='.0001'
					sx={{
						marginY: 1,
					}}
					variant='outlined'
					onChange={handleChange}
				/>
				<TextField
					label='Duration'
					id='duration'
					fullWidth
					disabled={isLoading}
					name='duration'
					type='number'
					required
					step='.01'
					sx={{
						marginY: 1,
					}}
					variant='outlined'
					onChange={handleChange}
				/>
				<TextField
					label='Purpose'
					id='description'
					fullWidth
					multiline
					rows={4}
					disabled={isLoading}
					name='description'
					required
					sx={{
						marginY: 1,
					}}
					variant='outlined'
					onChange={handleChange}
				/>
				<TextField
					label=''
					id='file-img'
					fullWidth
					type='file'
					required
					sx={{
						marginY: 1,
					}}
					variant='outlined'
					onChange={createBase64Image}
				/>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
					}}
				>
					{hasConnected ? (
						<Box sx={{ marginY: 5, marginX: 3 }}>
							<LoadingButton
								loading={isLoading}
								variant='contained'
								type='submit'
								color='primary'
							>
								Deploy contract
							</LoadingButton>
						</Box>
					) : (
						<Box sx={{ marginY: 5, marginX: 3 }}>
							<LoadingButton
								loading={isLoading}
								variant='contained'
								onClick={handleSSOLogin}
								color='primary'
							>
								Connect Verida
							</LoadingButton>
						</Box>
					)}
				</Box>
			</form>
		</Box>
	);
};

export default DonationForm;
