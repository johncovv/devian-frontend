import React from 'react';

import { SecondaryContent } from './styles';

const Button: React.FunctionComponent = ({ children }) => (
	<SecondaryContent>{children}</SecondaryContent>
);

export default Button;
