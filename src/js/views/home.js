import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import geeks from "../../img/4geeks.png";
import "../../styles/home.scss";
import lb from "../../img/foto1.jpg";

export const Home = () => (
	<>
		<div className="row">
			<img
				style={{ width: "100%", height: "800px", opacity: "0.7" }}
				src="https://i0.wp.com/noticias.masrefacciones.mx/wp-content/uploads/2018/10/1469809096588.jpg?w=1024&ssl=1"
			/>
			<h1 className="texto-encima">Haz de Data Driver tu Asistente en cada Viaje</h1>
			<p className="texto-encima2">Utiliza la plataforma con la red más grande de conductores activos.</p>
		</div>
		<div className="container-fluid mt-3">
			<div className="row section-icon">
				<div className="card text-center" style={{ width: "28.5rem", border: "none" }}>
					<i className="fas fa-calculator icono" />

					<div className="card-body text-center">
						<p className="card-text">
							Lleva un orden en tus gastos, todo desde un solo lugar y desde la comodidad de tu
							smartphone.
						</p>
					</div>
				</div>
				<div className="card text-center" style={{ width: "28.5rem", border: "none" }}>
					<i className="fas fa-route icono" />
					<div className="card-body text-center">
						<p className="card-text">
							Puedes visualizar, gestionar, y crear viajes. Llevando un orden de tus destinos en todo
							momento.
						</p>
					</div>
				</div>
				<div className="card text-center" style={{ width: "28.5rem", border: "none" }}>
					<i className="fas fa-file-invoice-dollar icono" />
					<div className="card-body text-center">
						<p className="card-text">
							Contarás con una validez legal de cada servicio laborado mediante facturas que se generarán
							para cada viaje.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<div className="row p-2 section-text-image" style={{ marginLeft: "50px", marginRight: "50px" }}>
				<div className="col" style={{ paddingTop: "7%" }}>
					<h3>Practicidad</h3>
					<p className="mt-3">
						Este tipo de aplicaciones permite al usuario efectuar un variado conjunto de tareas de acceso a
						servicios y utilidades. Facilitando así las necesidades del conductor en todo momento y lugar.
					</p>
					<button type="button" className=" text-center btn mt-2" id="btn-submit">
						Ver Más
					</button>
				</div>
				<div className="col">
					<img
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "650px", height: "400px" }}
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<div className="row p-2 section-text-image" style={{ marginLeft: "50px", marginRight: "50px" }}>
				<div className="col">
					<img
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "650px", height: "400px" }}
						alt="Card image cap"
					/>
				</div>
				<div className="col" style={{ paddingTop: "7%" }}>
					<h3>Seguridad</h3>
					<p className="card-text mt-3">
						La seguridad es fundamental, esta aplicación resguarda y protege la información de cada usuario
						buscando siempre mantener la confidencialidad.
					</p>
					<button type="button" className="btn mt-2" id="btn-submit">
						Ver Más
					</button>
				</div>
			</div>
		</div>

		<div className="container-fluid mt-3">
			<div className="row p-2 section-text-image" style={{ marginLeft: "50px", marginRight: "50px" }}>
				<div className="col" style={{ paddingTop: "7%" }}>
					<h3 className="mt-3">Practicidad</h3>
					<p>Ligera, gratis y sin anuncios</p>
					<button type="button" className=" text-center btn mt-2" id="btn-submit">
						Ver Más
					</button>
				</div>
				<div className="col">
					<img
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "650px", height: "400px" }}
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>

		<div className="container-fluid">
			<div className="row" style={{ marginLeft: "150px", marginTop: "70px", marginBottom: "70px" }}>
				<div className="col-4" style={{ marginTop: "150px" }}>
					<div className="card mb-3" style={{ maxWidth: "540px" }}>
						<div className="row g-0">
							<div className="col-md-4">
								<img src={geeks} className="img-fluid rounded-start" alt="..." />
							</div>
							<div className="col-md-8">
								<div className="card-body">
									<h5 className="card-title">Desarrolladores</h5>
									<p className="card-text">
										This is a wider card with supporting text below as a natural lead-in to
										additional content. This content is a little bit longer.
									</p>
									<p className="card-text">
										<small className="text-muted">Last updated 3 mins ago</small>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-3">
					<div className="card" style={{ width: "19rem" }}>
						<img
							src={lb}
							className="card-img-top rounded"
							alt="..."
							style={{ width: "302px", height: "500px" }}
						/>
						<div className="card-body">
							<h5 className="card-title">Leshlie Bideau</h5>
							<p className="card-text">Student Full Stack</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<i className="fab fa-github" />
							</li>
							<li className="list-group-item">
								<i className="fab fa-linkedin-in" />
							</li>
							<li className="list-group-item">
								<i className="fas fa-globe" />
							</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link" style={{ color: "#000000", fontWeight: "500" }}>
								Más información
							</a>
						</div>
					</div>
				</div>

				<div className="col-3">
					<div className="card" style={{ width: "19rem" }}>
						<img
							src={lb}
							className="card-img-top rounded"
							alt="..."
							style={{ width: "302px", height: "500px" }}
						/>
						<div className="card-body">
							<h5 className="card-title">Miguel Carreño</h5>
							<p className="card-text">Student Full Stack</p>
						</div>
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<i className="fab fa-github" />
							</li>
							<li className="list-group-item">
								<i className="fab fa-linkedin-in" />
							</li>
							<li className="list-group-item">
								<i className="fas fa-globe" />
							</li>
						</ul>
						<div className="card-body">
							<a href="#" className="card-link" style={{ color: "#000000", fontWeight: "500" }}>
								Más información
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
