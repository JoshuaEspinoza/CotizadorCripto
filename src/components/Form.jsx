import { useEffect, useState } from 'react';
import useSelectCoins from '../hooks/useSelectCoins';
import MessageError from './MessageError';

const Form = ({ setMonedas }) => {
	const monedas = [
		{ id: 'USD', name: 'Dolar de Estados Unidos' },
		{ id: 'MXN', name: 'Moneda Mexicana' },
		{ id: 'EUR', name: 'Euro' },
		{ id: 'GBP', name: 'Libra Esterlina' },
	];

	const [criptos, setCriptos] = useState([]);
	const [error, setError] = useState(false);

	const [moneda, SelectCoins] = useSelectCoins('Selecciona tu moneda', monedas);
	const [criptomoneda, SelectCriptoMoneda] = useSelectCoins(
		'Selecciona tu criptomoneda',
		criptos
	);

	useEffect(() => {
		const consultarAPI = async () => {
			const url =
				'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

			const response = await fetch(url);
			const result = await response.json();

			const arrayCriptos = result.Data.map((cripto) => {
				const objeto = {
					id: cripto.CoinInfo.Name,
					name: cripto.CoinInfo.FullName,
				};

				return objeto;
			});

			setCriptos(arrayCriptos);
		};

		consultarAPI();
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();

		if ([moneda, criptomoneda].includes('')) {
			setError(true);
			return;
		}

		setMonedas({ moneda, criptomoneda });
		setError(false);
	};

	return (
		<>
			{error && <MessageError>Todos los campos son obligatorios</MessageError>}
			<form
				onSubmit={handleSubmit}
				className="main-container__container-main-form__second-container-form"
			>
				<SelectCoins />
				<SelectCriptoMoneda />
				<button>Cotizar</button>
			</form>
		</>
	);
};

export default Form;
