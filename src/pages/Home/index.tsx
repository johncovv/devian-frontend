import React, { FunctionComponent, useRef } from 'react';

// utils
import { scrollToElement } from '../../utils/scrollTo';

// components
import Button from '../../components/Button/Primary';
import GoToCommands from '../../components/Button/Secondary';

// assets
import { ReactComponent as AvatarSvg } from '../../assets/global/avatar.svg';

// styles
import {
	MainContainer,
	Jumb,
	Card,
	CardBottom,
	CardContent,
	CardAvatar,
	CardTitle,
	CardDescription,
} from './styles';

const Home: FunctionComponent = () => {
	const CommandsGroup = useRef<HTMLDivElement>(null);

	return (
		<MainContainer>
			<Jumb>
				<Card>
					<CardContent>
						<CardAvatar>
							<AvatarSvg />
						</CardAvatar>
						<CardTitle>
							Devian <span>bot</span>
						</CardTitle>
						<CardDescription>Desenvolvimento e Administração.</CardDescription>
					</CardContent>
					<CardBottom>
						<GoToCommands onClick={() => scrollToElement(CommandsGroup)}>
							Ver comandos
						</GoToCommands>
						<Button>Continuar</Button>
					</CardBottom>
				</Card>
			</Jumb>
			<Jumb ref={CommandsGroup}>
				<Card>
					<CardContent>
						<CardAvatar>
							<AvatarSvg />
						</CardAvatar>
						<CardTitle>
							Devian <span>bot</span>
						</CardTitle>
						<CardDescription>Desenvolvimento e Administração.</CardDescription>
					</CardContent>
					<CardBottom>
						<GoToCommands>Ver comandos</GoToCommands>
						<Button>Continuar</Button>
					</CardBottom>
				</Card>
			</Jumb>
		</MainContainer>
	);
};

export default Home;
