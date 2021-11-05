import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";

const URL = "http://127.0.0.1:3500";

export const Register = () => {
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	async function signup(event) {
		let data = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone_number: phone,
			password: password,
			salt: "14dd1258saas78"
		};
		const response = await fetch(URL + "/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		console.log(response);
		if (response.ok) {
			history.push("/login");
		} else alert(response.statusText);
	}

	return (
		<form>
			<div className="mb-3">
				<div>
					<label className="form-label">First Name</label>
					<input
						type="text"
						className="form-control"
						onChange={event => {
							setFirstname(event.target.value);
						}}
						value={firstName}
					/>
				</div>
				<div>
					<label className="form-label">Last Name</label>
					<input
						type="text"
						className="form-control"
						onChange={event => {
							setLastname(event.target.value);
						}}
						value={lastName}
					/>
				</div>
				<div>
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={event => {
							setEmail(event.target.value);
						}}
						value={email}
					/>
				</div>
				<div>
					<label htmlFor="exampleInputEmail1" className="form-label">
						Phone Number
					</label>
					<input
						type="text"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={event => {
							setPhone(event.target.value);
						}}
						value={phone}
					/>
				</div>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					onChange={event => {
						setPassword(event.target.value);
					}}
					value={password}
				/>
			</div>

			<button type="button" className="btn btn-primary" onClick={signup}>
				Submit
			</button>
		</form>
	);
};
