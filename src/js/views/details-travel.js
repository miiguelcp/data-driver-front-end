import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const DetailsTravel = props => {
	const { store, actions } = useContext(AppContext);
	const params = useParams();
	const [details, setDetails] = useState([]);

	const getDetails = async id => {
		try {
			const response = await fetch(`${store.URL}/travel/${id} `, {
				headers: { Authorization: `Bearer ${store.token}` }
			});
			const body = await response.json();
			console.log(body);
			let arrayItem = [];
			arrayItem.push(
				["Lodging", body.lodging],
				["Fuel", body.fuel],
				["Food", body.food],
				["Toll", body.toll],
				["Unexpected", body.unexpected],
				["Amount", body.amount]
			);
			setDetails(body);
		} catch (error) {
			alert(error);
		}
	};

	useEffect(
		() => {
			if (params.travel_id) {
				getDetails(params.travel_id);
				console.log(params);
			}
		},
		[params.travel_id]
	);

	return (
		<>
			<h2 className="text-center mt-5	">Detailed Travel Information</h2>
			<div className="card details-travel" style={{ marginTop: "33px", marginBottom: "55px" }}>
				<i className="fas fa-route icono-travel-information" />

				<div className="card-body">
					<h5 className="card-title">Caracas - Maracay </h5>
					<p className="card-text">18/11/2021</p>
				</div>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">Amount: {details.initial_amount}</li>
					<li className="list-group-item">Lodging: {details.lodging}</li>
					<li className="list-group-item">Food: {details.food}</li>
					<li className="list-group-item">Fuel: {details.fuel}</li>
					<li className="list-group-item">Toll: {details.toll}</li>
					<li className="list-group-item">Unexpected: {details.unexpected}</li>
					<li className="list-group-item" style={{ backgroundColor: "#73DE09", color: "white" }}>
						Total: 1000
					</li>
				</ul>
				<div className="card-body">
					<Link to="/perfil" className="enlace" style={{ textDecoration: "none" }}>
						<span
							className="h4 m-2"
							style={{ color: "#000000", fontSize: "15px", fontWeight: "bold", textAlign: "center" }}>
							Regresar
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

DetailsTravel.protoType = {
	details: PropTypes.object
};
