import styled from 'styled-components';

import BackgroundImage from '../../assets/home/background.jpg';

export const MainContainer = styled.div`
	min-height: 100vh;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	background-image: url(${BackgroundImage});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
`;

// JUMB
export const Jumb = styled.div`
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

export const JumbContent = styled.div`
	background-color: ${(props) => props.theme.background.primary};
	height: 100%;
	width: 100%;

	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const JumbBottom = styled.div`
	background-color: ${(props) => props.theme.background.secondary};

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 20px 15px;
`;

// COMMANDS
export const CommandsGroupsContainer = styled.div``;
