import TextField from "@material-ui/core/TextField";
import React from "react";
import { Button } from "@material-ui/core";
import { Controller, useForm } from "react-hook-form";
import styles from "./SignIn.module.css";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
	const navigate = useNavigate();
	const defaultValues = { username: "" };
	const {
		handleSubmit,
		reset,
		control,
		formState: { errors },
	} = useForm({ defaultValues: defaultValues });
	const onSubmit = (data) => {
		if (data.username.length < 3) {
			return;
		}
		console.log(data);
		navigate(`/chat/${data.username}`);
		reset(defaultValues);
	};

	return (
		<form className={styles.container}>
			<Controller
				name={"username"}
				control={control}
				render={({ field: { onChange, value } }) => (
					<TextField
						className={styles.input}
						onChange={onChange}
						value={value}
						label={"Username"}
						required={true}
					/>
				)}
			/>
			{errors.username && (
				<p className={styles.error}>This field is required</p>
			)}

			<Button
				variant={"contained"}
				color={"primary"}
				style={{ padding: '10px', fontSize: '16px', borderRadius: '0', }}
				onClick={handleSubmit(onSubmit)}
			>
				Sign In
			</Button>
			<Button
				variant={"contained"}
				style={{ padding: '10px', fontSize: '16px', borderRadius: '0',}}
				onClick={() => reset()}
			>
				Reset
			</Button>
		</form>
	);
};

export default SignIn;
