import React, { ButtonHTMLAttributes } from 'react';

import { SecondaryContent } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FunctionComponent<ButtonProps> = ({
	children,
	...rest
}) => (
	<SecondaryContent type="button" {...rest}>
		{children}
	</SecondaryContent>
);

export default Button;
