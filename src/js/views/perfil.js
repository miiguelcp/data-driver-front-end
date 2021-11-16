import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, Redirect } from "react-router-dom";
import Usuario from "../../img/usuario.png";
import { AppContext } from "../store/appContext";
import { TravelCard } from "./travel-card";

export const Perfil = () => {
	const [travels, setTravels] = useState([]);
	const [prueba, setPrueba] = useState([]);
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
	}
	const getInfo = async () => {
		try {
			const response = await fetch(store.URL + "/perfil", {
				headers: { Authorization: `Bearer ${store.token}` }
			});
			const body = await response.json();
			console.log(body);

			setPrueba(body);
		} catch (error) {
			alert("Sucedió algo inesperado");
		}
	};

	const getTravel = async () => {
		try {
			const response = await fetch(store.URL + "/travels", {
				headers: { Authorization: `Bearer ${store.token}` }
			});
			const body = await response.json();
			console.log(body);

			setTravels(body);
		} catch (error) {
			alert("Sucedió algo inesperado");
		}
	};

	useEffect(
		() => {
			if (store.token) getInfo(), getTravel();
		},
		[store.token]
	);

	return (
		<>
			{store.token ? (
				<div className="row " style={{ margin: "95px 50px 160px 50px" }}>
					<div className="col-4">
						<div className="card">
							<img src={Usuario} className="card-img-top ml-3" alt="..." />
							<div className="card-body">
								<div className="container-father-perfil">
									<p className="card-text text-centrado">First Name: {prueba.first_name}</p>
									<button className="btn" id="btn-editar">
										{/* <i className="fas fa-pencil-alt" /> */}
									</button>
								</div>
								<div className="container-father-perfil">
									<p className="card-text text-centrado">Last Name: {prueba.last_name}</p>
									<button className="btn" id="btn-editar">
										{/* <i className="fas fa-pencil-alt" /> */}
									</button>
								</div>

								<p className="card-text text-centrado">Email: {prueba.email}</p>

								<div className="container-father-perfil">
									<p className="card-text text-centrado">Phone: {prueba.phone_number}</p>
									<button className="btn" id="btn-editar">
										{/* <i className="fas fa-pencil-alt" /> */}
									</button>
								</div>
							</div>
						</div>
					</div>

					<h2>Viajes</h2>
					{travels.map(travel => {
						return <TravelCard key={travel.id} travel={travel} />;
					})}
				</div>
			) : (
				<Redirect to="/" />
			)}
		</>
	);
};
