import React, { useContext, useState } from "react";
import { AppContext } from "../store/appContext";
import { Link, useHistory } from "react-router-dom";

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
		<form>
			<div className="mb-3">
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

			<button onClick={login} type="button" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
