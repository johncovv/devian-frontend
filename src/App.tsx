import React from 'react';

import Home from './pages/Home';

// styles
import ThemeStyled from './styles/Theme.styles';
import GlobalStyle from './styles/global.styles';

const App: React.FunctionComponent = () => {
	return (
		<ThemeStyled>
			<Home />

			<GlobalStyle />
		</ThemeStyled>
	);
};

export default App;
