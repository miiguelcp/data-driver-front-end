import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const Travel = () => {
	const { store, actions } = useContext(AppContext);
	const [lodging, setLodging] = useState(0);
	const [amount, setAmount] = useState(0);
	const [food, setFood] = useState(0);
	const [fuel, setFuel] = useState(0);
	const [toll, setToll] = useState(0);
	const [unexpected, setUnexpected] = useState(0);

	async function travel(event) {
		let data = {
			amount: amount,
			lodging: lodging,
			food: food,
			fuel: fuel,
			toll: toll,
			unexpected: unexpected
		};
		const response = await fetch(store.URL + "/travel", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(data)
		});
	}

	return (
		<form className="travel">
			<h2>Travel Information</h2>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Initial Amount
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputAmount"
					onChange={event => {
						setAmount(event.target.value);
					}}
					value={amount}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputEmail1" className="form-label">
					Lodging
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputLogging"
					onChange={event => {
						setLodging(event.target.value);
					}}
					value={lodging}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Food
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputFood"
					onChange={event => {
						setFood(event.target.value);
					}}
					value={food}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Fuel
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputFuel"
					onChange={event => {
						setFuel(event.target.value);
					}}
					value={fuel}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Toll
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputToll"
					onChange={event => {
						setToll(event.target.value);
					}}
					value={toll}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleInputPassword1" className="form-label">
					Unexpected
				</label>
				<input
					type="number"
					className="form-control"
					id="exampleInputUnexpected"
					onChange={event => {
						setUnexpected(event.target.value);
					}}
					value={unexpected}
				/>
			</div>

			<button type="submit" className="btn" id="btn-submit" onClick={travel}>
				Submit
			</button>
		</form>
	);
};
