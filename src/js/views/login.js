import React, { useContext, useState } from "react";
import { AppContext } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";
import rigoImage from "../../img/usuario.png";

const URL = "http://127.0.0.1:3500";

export const Login = () => {
	const { store, actions } = useContext(AppContext);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	async function login(event) {
		let data = {
			email: email,
			password: password
		};
		const response = await fetch(URL + "/login", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		const body = await response.json();
		if (response.ok) {
			actions.setToken(body.token);
			history.push("/");
		} else alert(response.statusText);
	}

	return (
		<form className="login">
			<div className="img-logo">
				<img
					className="mb-3"
					src="https://cdn-user-icons.flaticon.com/27436/27436137/1636156482965.svg?token=exp=1636157383~hmac=6b468a15e81b205e5197ea84397e03aa"
					width="100px"
					height="100px"
				/>
			</div>
			<div>
				<h2 style={{ textAlign: "center", marginBottom: "40px" }}>Login to the system</h2>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Email address
				</label>
				<input
					placeholder="Enter your e-mail"
					type="email"
					className="form-control fas fa-envelope"
					id="email-login"
					aria-describedby="emailHelp"
					onChange={event => {
						setEmail(event.target.value);
					}}
					value={email}
				/>
			</div>
			<div className="mb-3">
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

			<button onClick={login} type="button" className="btn" id="btn-submit">
				Submit
			</button>
		</form>
	);
};

//<i className="fas fa-envelope" />
