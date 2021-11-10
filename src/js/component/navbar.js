import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(AppContext);
	const history = useHistory();

	const logout = event => {
		actions.deleteToken();
		return history.push("/");
	};

	return (
		<nav id="header" className="navbar navbar-light menu">
			<Link to="/" className="enlace" style={{ textDecoration: "none" }}>
				<span className="h4 text-light m-2">Data Driver</span>
			</Link>

			<div className="ml-auto">
				{store.token ? (
					<>
						<button className="m-2 btn text-light" id="btn" onClick={logout}>
							Log Out
						</button>
						<div className="dropdown">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								Dropdown button
							</button>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
								<li>
									<a className="dropdown-item" href="#">
										Action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Another action
									</a>
								</li>
								<li>
									<a className="dropdown-item" href="#">
										Something else here
									</a>
								</li>
							</ul>
						</div>
					</>
				) : (
					<>
						<Link to="/login" className="m-2 text-light	btn" id="btn">
							Login
						</Link>

						<Link to="/register" className="m-2 text-light btn" id="btn">
							Register
						</Link>
					</>
				)}
			</div>
		</nav>
	);
};
