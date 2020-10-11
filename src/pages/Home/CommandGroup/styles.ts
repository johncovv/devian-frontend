import styled from 'styled-components';

export const Content = styled.div`
	max-height: 427px;
	max-width: 354px;
	width: 100%;
	height: fit-content;

	background-color: ${(props) => props.theme.background.secondary};
	border-radius: ${(props) => props.theme.rounded[8]};

	overflow: hidden;

	display: flex;
	flex-flow: column nowrap;
`;

export const CommandGroupTitle = styled.div`
	position: relative;
	min-height: 60px;
	padding: 0 15px;
	width: 100%;

	cursor: pointer;
	user-select: none;

	background-color: ${(props) => props.theme.background.primary};
	font-size: ${(props) => props.theme.font[20]};
	color: ${(props) => props.theme.colors.light};

	text-transform: capitalize;
	font-weight: 700;

	display: flex;
	justify-content: center;
	align-items: center;

	&.active {
		svg {
			transform: rotate(-180deg);
		}
	}

	svg {
		position: absolute;
		right: 15px;

		transition: transform 200ms;
	}
`;

export const CommandsContainer = styled.div`
	width: 100%;
	overflow-y: scroll;

	padding: 0 15px;

	transition: max-height 200ms;

	&.active {
		height: calc(427px - 60px);
		max-height: calc(427px - 60px);
	}

	&.hidde {
		max-height: 0px;
	}
`;

export const Command = styled.div`
	display: flex;
	flex-flow: column nowrap;
	width: 100%;

	padding: 10px;

	background-color: ${(props) => props.theme.background.ternary};
	border-radius: ${(props) => props.theme.rounded[3]};

	margin-bottom: 15px;

	&:first-child {
		margin-top: 15px;
	}
`;

export const CommandTitle = styled.div`
	color: ${(props) => props.theme.colors.light};
	font-weight: 700;
`;

export const CommandDescription = styled.div`
	margin-top: 5px;
	color: ${(props) => props.theme.colors.secondary};
	font-weight: 400;
	white-space: pre-wrap;
`;
