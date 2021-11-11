import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Usuario from "../../img/usuario.png";

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
		<form className="register">
			<div className="img-logo">
				<img className="mb-3" src={Usuario} width="100px" height="100px" />
			</div>
			<div>
				<h2 style={{ textAlign: "center", marginBottom: "40px" }}>Create New Account </h2>
			</div>
			<div className="mb-2">
				<div className="mb-3">
					<label className="form-label">First Name</label>
					<input
						placeholder="Enter your first name"
						type="text"
						className="form-control"
						onChange={event => {
							setFirstname(event.target.value);
						}}
						value={firstName}
					/>
				</div>
				<div className="mb-2">
					<label className="form-label">Last Name</label>
					<input
						placeholder="Enter your last name"
						type="text"
						className="form-control fas fa-envelope"
						onChange={event => {
							setLastname(event.target.value);
						}}
						value={lastName}
					/>
				</div>
				<div className="mb-2">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						placeholder="Enter your e-mail"
						type="email"
						className="form-control fas fa-envelope"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={event => {
							setEmail(event.target.value);
						}}
						value={email}
					/>
				</div>
				<div className="">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Phone Number
					</label>
					<input
						placeholder="Enter your phone number"
						type="text"
						className="form-control fas fa-envelope"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						onChange={event => {
							setPhone(event.target.value);
						}}
						value={phone}
					/>
				</div>
			</div>
			<div className="mb-2">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Password
				</label>
				<input
					placeholder="Enter your password"
					type="password"
					className="form-control fas fa-envelope"
					id="exampleInputPassword1"
					onChange={event => {
						setPassword(event.target.value);
					}}
					value={password}
				/>
			</div>

			<button type="button" className="btn" id="btn-submit" onClick={signup}>
				Submit
			</button>
		</form>
	);
};
