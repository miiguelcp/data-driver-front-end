import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Usuario from "../../img/usuario.png";

export const Perfil = () => {
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");

	const history = useHistory();

	async function perfil(event) {
		let data = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone_number: phone
		};
		const response = await fetch(URL + "/user", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
		console.log(response);
		if (response.ok) {
			history.push("/login");
		} else alert(response.statusText);
	}
	return (
		<div className="row m-5">
			<div className="col-4">
				<div className="card">
					<img src={Usuario} className="card-img-top ml-3" alt="..." />
					<div className="card-body">
						<p className="card-text text-centrado">First Name</p>
						<p className="card-text text-centrado">Last Name</p>
						<p className="card-text text-centrado">Email</p>
						<p className="card-text text-centrado">Phone</p>
					</div>
				</div>
			</div>
			<div className="col-8">
				<h2>Viajes</h2>
				<div className="card">
					<div className="card-body">
						<h5 className="card-title">Destino</h5>
						<p className="card-text">Fecha del Viaje</p>
						<a href="#" className="btn" id="btn-submit">
							Detalles
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
