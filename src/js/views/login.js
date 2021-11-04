import React, { useContext, useState } from "react";
export const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	async function login(event) {
		let data = {
			email: email,
			password: password
		};
		const response = await fetch(URL + "/user", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		console.log(response);
		if (response.ok) {
			console.log("Todo bien");
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

			<button type="button" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
