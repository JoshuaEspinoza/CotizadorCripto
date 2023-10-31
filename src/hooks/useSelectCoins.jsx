import { useState } from 'react';

const useSelectCoins = (label, options) => {
	const [state, setState] = useState('');
	const SelectCoins = () => (
		<>
			<label>{label}</label>
			<select
				value={state}
				onChange={(e) => setState(e.target.value)}
			>
				<option value="">Seleccione</option>
				{options.map((option) => (
					<option
						key={crypto.randomUUID()}
						value={option.id}
					>
						{option.name}
					</option>
				))}
			</select>
		</>
	);

	return [state, SelectCoins];
};

export default useSelectCoins;
