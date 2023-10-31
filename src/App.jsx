import { useState, useEffect } from 'react';
import Form from './components/Form';
import Result from './components/Result';
import Spinner from './components/Spinner';

import ImageLeft from './img/ilustration-one-min.png';

function App() {
	const [monedas, setMonedas] = useState({});
	const [resultado, setResultado] = useState({});
	const [cargando, setCargando] = useState(false);

	useEffect(() => {
		if (Object.keys(monedas).length > 0) {
			const { moneda, criptomoneda } = monedas;
			const cotizarCripto = async () => {
				setCargando(true);
				setResultado({});
				const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
				const response = await fetch(url);
				const result = await response.json();
				setResultado(result.DISPLAY[criptomoneda][moneda]);
				setCargando(false);
			};

			cotizarCripto();
		}
	}, [monedas]);

	return (
		<main className="main-container">
			<figure>
				<img
					src={ImageLeft}
					alt="Imagen decorativa del panel izquierdo"
				/>
			</figure>

			<article className="main-container__container-main-form">
				<h1>Cotiza criptomonedas al instante</h1>
				<Form setMonedas={setMonedas} />
				{cargando && <Spinner />}
				{Object.keys(resultado).length !== 0 && (
					<Result resultado={resultado} />
				)}
			</article>
		</main>
	);
}

export default App;
