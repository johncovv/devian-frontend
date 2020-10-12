import React, { ButtonHTMLAttributes, useCallback } from 'react';

import { SecondaryContent } from './styles';

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
				<SecondaryContent type="button" {...rest} onClick={openLink}>
					{children}
				</SecondaryContent>
			)) || (
				<SecondaryContent type="button" {...rest}>
					{children}
				</SecondaryContent>
			)}
		</>
	);
};

export default Button;
