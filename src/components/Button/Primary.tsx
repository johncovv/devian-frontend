import React, { ButtonHTMLAttributes } from 'react';

import { PrimaryContent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	...rest
}) => (
	<PrimaryContent type="button" {...rest}>
		{children}
	</PrimaryContent>
);

export default Button;
