import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => (
	<>
		<div className="container-fluid">
			<img
				style={{ width: "100%", height: "800px", opacity: "0.7" }}
				src="https://i0.wp.com/noticias.masrefacciones.mx/wp-content/uploads/2018/10/1469809096588.jpg?w=1024&ssl=1"
			/>
			<h1 className="texto-encima">Haz de Data Driver tu Asistente en cada Viaje</h1>
			<p className="texto-encima2">Utiliza la plataforma con la red más grande de conductores activos.</p>
		</div>
		<div className="container-fluid mt-1">
			<div className="row">
				<div className="card" style={{ width: "28.5rem", border: "none" }}>
					<img
						className="card-img-top text-center"
						style={{ display: "block", margin: "auto", width: "80px" }}
						src="https://cdn-user-icons.flaticon.com/27436/27436137/1636169508602.svg?token=exp=1636170410~hmac=89e4b8b46a931de5f7be926a792e55a7"
						alt="Card image cap"
					/>

					<div className="card-body text-center">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
				</div>
				<div className="card" style={{ width: "28.5rem", border: "none" }}>
					<img
						className="card-img-top text-center"
						style={{ display: "block", margin: "auto", width: "80px" }}
						src="https://cdn-user-icons.flaticon.com/27436/27436137/1636169508602.svg?token=exp=1636170410~hmac=89e4b8b46a931de5f7be926a792e55a7"
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
				</div>
				<div className="card" style={{ width: "28.5rem", border: "none" }}>
					<img
						className="card-img-top text-center"
						style={{ display: "block", margin: "auto", width: "80px" }}
						src="https://cdn-user-icons.flaticon.com/27436/27436137/1636169508602.svg?token=exp=1636170410~hmac=89e4b8b46a931de5f7be926a792e55a7"
						alt="Card image cap"
					/>
					<div className="card-body text-center">
						<p className="card-text">
							Some quick example text to build on the card title and make up the bulk of the cards
							content.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<div className="row">
				<div className="col" style={{ paddingTop: "7%" }}>
					<h3>Encabezado</h3>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
						Some quick example text to build on the card title and make up the bulk of the cards content.
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<button type="button" className="btn mt-2" id="btn-submit">
						Ver Más
					</button>
				</div>
				<div className="col">
					<img
						className="card-img-top"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "650px" }}
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<div className="row">
				<div className="col">
					<img
						className="card-img-top"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "650px" }}
						alt="Card image cap"
					/>
				</div>
				<div className="col" style={{ paddingTop: "7%" }}>
					<h3>Encabezado</h3>
					<p className="card-text">
						Some quick example text to build on the card title and make up the bulk of the cards content.
						Some quick example text to build on the card title and make up the bulk of the cards content.
						Some quick example text to build on the card title and make up the bulk of the cards content.
					</p>
					<button type="button" className="btn mt-2" id="btn-submit">
						Ver Más
					</button>
				</div>
			</div>
		</div>
	</>
);
