import styled from 'styled-components';

const Button = styled.button.attrs({
	type: 'button',
})`
	cursor: pointer;
	border: 0;
	outline: none;
`;

export const PrimaryContent = styled(Button)`
	background-color: ${(props) => props.theme.background.blue};
	border-radius: ${(props) => props.theme.rounded[3]};
	color: ${(props) => props.theme.colors.light};

	padding: 0 15px;
	min-width: 96px;
	height: 38px;
`;

export const SecondaryContent = styled(Button)`
	background-color: transparent;
	color: ${(props) => props.theme.colors.light};
`;
