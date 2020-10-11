import React, { FunctionComponent } from 'react';

// components
import Button from '../../components/Button/Primary';
import GoToCommands from '../../components/Button/Secondary';

// styles
import { MainContainer, Jumb, JumbBottom, JumbContent } from './styles';

const Home: FunctionComponent = () => {
	return (
		<MainContainer>
			<Jumb>
				<JumbContent>OK</JumbContent>
				<JumbBottom>
					<GoToCommands>Ver comandos</GoToCommands>
					<Button>Continuar</Button>
				</JumbBottom>
			</Jumb>
		</MainContainer>
	);
};

export default Home;
