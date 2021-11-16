import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, useParams } from "react-router-dom";
import { AppContext } from "../store/appContext";
import Usuario from "../../img/usuario.png";

export const DetailsTravel = props => {
	const params = useParams();
	const [details, setDetails] = useState([]);

	const getDetails = async id => {
		try {
			const response = await fetch(`${store.URL}/details/${travel_id} `, {
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
			alert("Sucedió algo inesperado");
		}
		useEffect(
			() => {
				if (params.travel_id) getDetails(params.travel_id);
			},
			[params.travel_id]
		);
	};
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={Usuario} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">Destino</h5>
				<p className="card-text">Fecha del Viaje</p>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item">Lodging: {details.lodging}</li>
				<li className="list-group-item">Amount</li>
				<li className="list-group-item">Food</li>
				<li className="list-group-item">Fuel</li>
				<li className="list-group-item">Toll</li>
				<li className="list-group-item">Unexpected</li>
			</ul>
			<div className="card-body">
				<Link to="/" className="enlace" style={{ textDecoration: "none" }}>
					<span className="h4 text-light m-2">Regresar</span>
				</Link>
			</div>
		</div>
	);
};

DetailsTravel.protoType = {
	details: PropTypes.object
};
