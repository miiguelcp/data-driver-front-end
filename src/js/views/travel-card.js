import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory, Redirect } from "react-router-dom";
import Usuario from "../../img/usuario.png";
import { AppContext } from "../store/appContext";

export const TravelCard = props => {
	return (
		<div className="col-8">
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">Destino </h5>
					<p className="card-text">{`Fecha del Viaje: ${props.travel.date}`}</p>
					<Link to={`/details/${props.travel.id}`} className="btn" id="btn-submit">
						Detalles
					</Link>
					<div>
						<a className="btn btn-sm btn-outline-danger border-0">
							<i className="fa fa-file-pdf" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

TravelCard.propTypes = {
	travel: PropTypes.object
};
