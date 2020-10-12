import styled from 'styled-components';

import BackgroundImage from '../../assets/art/home.jpg';

import { ReactComponent as DiscordSvg } from '../../assets/global/discord-logo.svg';

export const MainContainer = styled.div`
	min-height: 100vh;
	width: 100%;

	background-image: url(${BackgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

// JUMB
export const Jumb = styled.div`
	height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	min-width: 200px;
	max-width: 400px;
	min-height: 400px;

	width: 100%;
	margin: 15px;

	display: flex;
	flex-flow: column nowrap;

	border-radius: ${(props) => props.theme.rounded[8]};
	box-shadow: ${(props) => props.theme.boxShadow.high};
	overflow: hidden;
`;

export const CardContent = styled.div`
	background-color: ${(props) => props.theme.background.primary};
	height: 100%;
	width: 100%;

	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-flow: column nowrap;
`;

export const CardBottom = styled.div`
	background-color: ${(props) => props.theme.background.secondary};

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 15px;
`;

export const CardAvatar = styled.div`
	border-radius: ${(props) => props.theme.rounded.max};
	background-color: ${(props) => props.theme.background.secondary};

	width: 125px;
	height: 125px;

	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 70%;
		height: 70%;
		margin-left: 15%;

		fill: ${(props) => props.theme.colors.yellow};
	}
`;

export const CardTitle = styled.h1`
	font-size: ${(props) => props.theme.font[20]};
	color: ${(props) => props.theme.colors.light};

	margin: 20px 0;

	span {
		background-color: ${(props) => props.theme.background.blue};
		border-radius: ${(props) => props.theme.rounded[3]};
		font-size: ${(props) => props.theme.font[10]};
		text-transform: uppercase;
		font-weight: 700;
		margin-left: 5px;
		padding: 5px;
	}
`;

export const CardDescription = styled.p`
	font-size: ${(props) => props.theme.font[16]};
	color: ${(props) => props.theme.colors.light};
`;

// COMMANDS
export const CommandsGroupsContainer = styled.div`
	min-height: calc(100vh - 150px);
	width: 100%;

	padding: 50px 15px;

	@media (max-width: 767px) {
		display: flex;
		flex-flow: column nowrap;
		align-items: center;
		row-gap: 15px;
	}

	@media (min-width: 768px) {
		display: grid;
		grid-auto-rows: fit-content(60px);
		gap: 25px;
		justify-content: center;

		grid-template-columns: repeat(2, 354px);
	}

	@media (min-width: 1366px) {
		gap: 50px;
		grid-template-columns: repeat(3, 354px);
	}
`;

export const DiscordIcon = styled(DiscordSvg)`
	position: absolute;
	top: 15px;
	right: 15px;
	color: ${(props) => props.theme.colors.dark};
`;
