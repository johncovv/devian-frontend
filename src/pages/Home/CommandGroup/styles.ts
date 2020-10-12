import styled, { css } from 'styled-components';

interface CommandGroupProps {
	isOpen: boolean;
}

export const Content = styled.div<CommandGroupProps>`
	position: relative;
	max-height: 425px;
	max-width: 354px;
	width: 100%;
	height: fit-content;

	display: flex;
	flex-flow: column nowrap;

	box-shadow: ${(props) => props.theme.boxShadow.high};

	${(props) =>
		props.isOpen
			? css`
					& > div:first-child {
						border-top-right-radius: ${props.theme.rounded[8]};
						border-top-left-radius: ${props.theme.rounded[8]};

						svg {
							transform: scaleY(-1);
						}
					}

					& > div:last-child {
						height: fit-content;
						max-height: calc(425px - 60px);
					}
			  `
			: css`
					& > div:first-child {
						border-radius: ${props.theme.rounded[8]};
						transition: border-radius 200ms 200ms;
					}
			  `};
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

	svg {
		position: absolute;
		right: 15px;

		transition: transform 200ms;
	}
`;

export const CommandsContainer = styled.div`
	overflow-y: auto;
	position: absolute;
	width: 100%;
	left: 0;
	right: 0;
	top: 100%;

	padding: 0 15px;

	background-color: ${(props) => props.theme.background.secondary};
	border-bottom-right-radius: ${(props) => props.theme.rounded[8]};
	border-bottom-left-radius: ${(props) => props.theme.rounded[8]};
	box-shadow: ${(props) => props.theme.boxShadow.high};

	transition: max-height 200ms;
	max-height: 0px;
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
