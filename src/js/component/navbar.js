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
						<div className="row">
							<div className="col">
								<Link to="/travel" className="dropdown-item pt-1 pb-1 text-light btn" id="btn-travel">
									<i className="fas fa-route icono-travel" />
									<span> Create Travel</span>
								</Link>
							</div>
							<div className="col">
								<div className="dropdown">
									<button
										className="btn btn-secondary dropdown-toggle"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										style={{
											marginRight: "20px",
											backgroundColor: "#000000",
											border: "1px solid #73DE09"
										}}>
										<img src={Usuario} width="25px" height="25px" />
									</button>

									<ul
										className="dropdown-menu  dropdown-menu-lg-start"
										style={{ backgroundColor: "#000000" }}
										aria-labelledby="dropdownMenuButton1">
										<Link to="/perfil" className="dropdown-item  text-light	btn" id="btn-inicio">
											Perfil
										</Link>
										<li>
											<hr className="dropdown-divider bg-light" />
										</li>
										<button
											className="dropdown-item pt-1 pb-2 mb-1 btn text-light"
											id="btn-inicio"
											onClick={logout}>
											Log Out
										</button>
									</ul>
								</div>
							</div>
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
