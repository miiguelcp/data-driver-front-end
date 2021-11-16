import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

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
			<div className="row p-2 section-text-image">
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
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "660px", height: "400px" }}
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
		<div className="container-fluid mt-3">
			<div className="row p-2 section-text-image">
				<div className="col">
					<img
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "675px", height: "400px" }}
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
		<div className="container-fluid mt-3" style={{ marginBottom: "75px" }}>
			<div className="row p-2 section-text-image">
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
						className="card-img-top rounded"
						src="https://directivosygerentes.es/wp-content/uploads/2018/01/business-consulting-681x454.jpg"
						style={{ width: "660px", height: "400px" }}
						alt="Card image cap"
					/>
				</div>
			</div>
		</div>
	</>
);
