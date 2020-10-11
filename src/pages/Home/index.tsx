import React, { FunctionComponent, useRef } from 'react';

import { FiChevronDown } from 'react-icons/fi';

// utils
import { scrollToElement } from '../../utils/scrollTo';

// components
import Button from '../../components/Button/Primary';
import GoToCommands from '../../components/Button/Secondary';

import CommandGroup from './CommandGroup';

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
	CommandsGroupsContainer,
} from './styles';

const commands = [
	{ title: 'help', description: 'return all commands' },
	{ title: 'help', description: 'return all commands' },
	{
		title: 'help',
		description:
			'return all commands.\nLorem ipsum dolor sit amet consectetur adipisicing elit. Optio, deserunt!',
	},
	{ title: 'help', description: 'return all commands' },
	{ title: 'help', description: 'return all commands' },
	{ title: 'help', description: 'return all commands' },
];

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
			<CommandsGroupsContainer ref={CommandsGroup}>
				<CommandGroup group="music" commands={commands} />
				<CommandGroup group="music" commands={commands} />
				<CommandGroup group="music" commands={commands} />
			</CommandsGroupsContainer>
		</MainContainer>
	);
};

export default Home;
