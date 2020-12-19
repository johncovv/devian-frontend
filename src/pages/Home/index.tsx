import React, { FunctionComponent, useEffect, useRef, useState } from 'react';

import api from '../../services/api.client';

// utils, configs
import { scrollToBottom } from '../../utils/scrollTo';
import env from '../../config/enviroment';

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
	DiscordIcon,
} from './styles';

// enviroment
const { clientId } = env;

const Home: FunctionComponent = () => {
	const CommandsGroup = useRef<HTMLDivElement>(null);

	const [commandsGroupList, setCommandsGroupList] = useState<
		Array<DevianClient.CommandsGroupType>
	>([] as Array<DevianClient.CommandsGroupType>);

	useEffect(() => {
		api
			.get('/commands')
			.then((response) => {
				const commandsData = response.data as Array<
					DevianClient.CommandsGroupType
				>;

				setCommandsGroupList(commandsData);
			})
			.catch((err) => console.error(err));
	}, []);

	return (
		<MainContainer>
			<Jumb>
				<DiscordIcon />

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
						<GoToCommands onClick={() => scrollToBottom()}>
							Ver comandos
						</GoToCommands>
						<Button
							link={`https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot`}
							sameSite
						>
							Continuar
						</Button>
					</CardBottom>
				</Card>
			</Jumb>
			<CommandsGroupsContainer ref={CommandsGroup}>
				{commandsGroupList.map(({ group, commands }, index) => (
					<CommandGroup
						key={index}
						group={group}
						commands={commands}
						position={index}
					/>
				))}
			</CommandsGroupsContainer>
		</MainContainer>
	);
};

export default Home;
