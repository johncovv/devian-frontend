import React from 'react';

import { PrimaryContent } from './styles';

const Button: React.FunctionComponent = ({ children }) => (
	<PrimaryContent>{children}</PrimaryContent>
);

export default Button;
