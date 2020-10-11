import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	:root {
		font-size: 16px;
	}

	* {
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100vh;
	}

	body {
		--webkit-font-smoothing: antialiased;

		font-family: 'Open Sans', sans-serif;
		font-size: ${(props) => props.theme.font[16]};
		color: ${(props) => props.theme.colors.primary};
		background-color: ${(props) => props.theme.background.ternary};
	}

	body, input, button {
		font-weight: 400;

		font-size: var(--font-16);
	}

	h1, h1, h3, h4, h5, h6, strong {
		font-weight: bold;
	}

	a {
		text-decoration: none;
		color: ${(props) => props.theme.colors.link};
	}

	::-webkit-scrollbar {
		width: 8px;
	}

	::-webkit-scrollbar-track {
		background: #2e3338;
		border-radius: 50px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #202225;
		border-radius: 50px;
	}
`;
