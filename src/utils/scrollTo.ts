import React from 'react';

export const scrollToElement = (ref: React.RefObject<HTMLElement>): void => {
	const element = ref.current;

	if (!element) return;

	window.scrollTo({
		top: element.clientHeight,
		behavior: 'smooth',
	});
};
