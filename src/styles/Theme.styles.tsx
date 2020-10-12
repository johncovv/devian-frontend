import React from 'react';

import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#B9BBBE',
		secondary: '#72767a',
		dark: '#202225',
		light: '#ffffff',
		yellow: '#FFAC00',
		green: '#43B581',
		blue: '#7289DA',
		link: '#289bee',
		red: '#F04747',
	},
	background: {
		primary: '#202225',
		secondary: '#2E3036',
		ternary: '#37393F',
		fields: '#40444B',
		blue: '#7289DA',
	},
	font: {
		10: '0.625rem',
		14: '0.875rem',
		16: '1rem',
		18: '1.125rem',
		20: '1.25rem',
		24: '1.5rem',
	},
	boxShadow: {
		high: '0px 8px 16px rgba(0,0,0,0.24)',
	},
	rounded: {
		max: '50%',
		8: '8px',
		3: '3px',
	},
} as const;

const Theme: React.FunctionComponent = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
