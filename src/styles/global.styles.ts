import { createGlobalStyle } from 'styled-components';

import WhitneyLight from '../assets/fonts/whitneylight.otf';
import WhitneyBook from '../assets/fonts/whitneybook.otf';
import WhitneyRegular from '../assets/fonts/whitneymedium.otf';
import WhitneySemiBold from '../assets/fonts/whitneysemibold.otf';
import WhitneyBold from '../assets/fonts/whitneybold.otf';

export default createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');

	@font-face {
		font-family: 'Whitney';
		src: url('${WhitneyLight}') format('opentype');
		font-weight: 200;
	}
	@font-face {
		font-family: 'Whitney';
		src: url('${WhitneyBook}') format('opentype');
		font-weight: 300;
	}
	@font-face {
		font-family: 'Whitney';
		src: url('${WhitneyRegular}') format('opentype');
		font-weight: 400;
	}
	@font-face {
		font-family: 'Whitney';
		src: url('${WhitneySemiBold}') format('opentype');
		font-weight: 600;
	}
	@font-face {
		font-family: 'Whitney';
		src: url('${WhitneyBold}') format('opentype');
		font-weight: 700;
	}

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

		font-family: 'Whitney';
		font-weight: 400;
		line-height: 1.2;
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
		background: ${(props) => props.theme.background.primary};
	}

	::-webkit-scrollbar-thumb {
		background-color: ${(props) => props.theme.colors.yellow};
		border-radius: 50px;
	}
`;
