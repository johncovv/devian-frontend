import React from 'react';

import Home from './pages/Home';

import Footer from './components/Footer';

// styles
import ThemeStyled from './styles/Theme.styles';
import GlobalStyle from './styles/global.styles';

const App: React.FunctionComponent = () => {
	return (
		<ThemeStyled>
			<Home />

			<Footer />
			<GlobalStyle />
		</ThemeStyled>
	);
};

export default App;
