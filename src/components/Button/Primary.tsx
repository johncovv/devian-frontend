import React, { ButtonHTMLAttributes, useCallback } from 'react';

import { PrimaryContent } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	link?: string;
	sameSite?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
	link,
	sameSite,
	children,
	...rest
}) => {
	const openLink = useCallback(() => {
		window.open(link, sameSite ? '_self' : '_blank');
	}, [link, sameSite]);

	return (
		<>
			{(link && (
				<PrimaryContent type="button" {...rest} onClick={openLink}>
					{children}
				</PrimaryContent>
			)) || (
				<PrimaryContent type="button" {...rest}>
					{children}
				</PrimaryContent>
			)}
		</>
	);
};

export default Button;
