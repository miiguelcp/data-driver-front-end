import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import Usuario from "../../img/usuario.png";
import { AppContext } from "../store/appContext";

export const Perfil = () => {
	const [firstName, setFirstname] = useState("");
	const [lastName, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [prueba, setPrueba] = useState("");
	const { store, actions } = useContext(AppContext);

	const history = useHistory();

	async function perfil(event) {
		let data = {
			first_name: firstName,
			last_name: lastName,
			email: email,
			phone_number: phone
		};

		const response = await fetch(store.URL + "/user", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});

		const getInfo = async () => {
			try {
				const response = await fetch(store.URL + "/user");
				const body = await response.json();
				console.log(body);
				setPrueba(body);
			} catch (error) {
				alert("Sucedió algo inesperado");
			}
		};
		const responsePrueba = await fetch(store.URL + "/user");
		const body = await response.json();
		console.log(body);
		useEffect(() => {
			getInfo();
		}, []);
	}

	return (
		<div className="row m-5">
			<div className="col-4">
				<div className="card">
					<img src={Usuario} className="card-img-top ml-3" alt="..." />
					<div className="card-body">
						<div className="container-father-perfil">
							<p className="card-text text-centrado">First Name</p>
							<button className="btn" id="btn-editar">
								<i className="fas fa-pencil-alt"></i>
							</button>
						</div>
						<div className="container-father-perfil">
							<p className="card-text text-centrado">Last Name</p>
							<button className="btn" id="btn-editar">
								<i className="fas fa-pencil-alt"></i>
							</button>
						</div>

						<p className="card-text text-centrado">Email</p>

						<div className="container-father-perfil">
							<p className="card-text text-centrado">Phone</p>
							<button className="btn" id="btn-editar">
								<i className="fas fa-pencil-alt"></i>
							</button>
						</div>
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
