import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { AppContext } from "../store/appContext";
import Usuario from "../../img/usuario.png";

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
						<Link to="/travel" className="dropdown-item m-2 text-light	btn" id="btn">
							Create Travel
						</Link>
						<div className="dropdown ">
							<button
								className="btn btn-secondary dropdown-toggle"
								type="button"
								id="dropdownMenuButton1"
								data-bs-toggle="dropdown"
								aria-expanded="false">
								<img src={Usuario} width="25px" height="25px" />
							</button>

							<ul
								className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start"
								style={{ backgroundColor: "#000000" }}
								aria-labelledby="dropdownMenuButton1">
								<Link to="/perfil" className="dropdown-item m-2 text-light	btn" id="btn">
									Perfil
								</Link>
								<li>
									<hr className="dropdown-divider bg-light" />
								</li>
								<button className="dropdown-item m-2 btn text-light" id="btn" onClick={logout}>
									Log Out
								</button>
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
