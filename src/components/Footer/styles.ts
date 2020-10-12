import styled from 'styled-components';

import { shade } from 'polished';

export const Content = styled.footer`
	padding: 25px;
	min-height: 150px;
	background-color: ${(props) => props.theme.background.primary};
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1240px;

	display: flex;
	flex-flow: row nowrap;

	@media (max-width: 767px) {
		justify-content: space-between;

		& > div:last-of-type {
			display: none;
		}
	}

	margin: 0 auto;
`;

export const FooterLogo = styled.div`
	height: 70px;
	width: 70px;
	margin: auto 0;

	svg {
		height: 100%;
		width: 100%;

		fill: ${(props) => props.theme.colors.yellow};
	}
`;

export const Section = styled.div`
	display: flex;
	flex-flow: column nowrap;

	margin: 0 50px;

	@media (max-width: 767px) {
		margin: 0;
	}

	&:last-child {
		margin: 0 0 0 auto;
	}
`;

export const Paragraph = styled.p``;

export const Link = styled.a.attrs({
	target: '_blank',
})`
	color: ${(props) => props.theme.colors.yellow};

	transition: color 100ms;

	&:hover {
		color: ${(props) => shade(0.3, props.theme.colors.yellow)};
	}
`;

export const LinksInline = styled.div`
	display: inline;
	margin-top: 10px;

	a:not(:first-child) {
		margin-left: 10px;
	}
`;

export const FooterTitle = styled.h1`
	color: ${(props) => props.theme.colors.blue};
`;

export const Options = styled.div``;

export const OptionsTitle = styled.p`
	color: ${(props) => props.theme.colors.blue};
`;

export const Option = styled.a`
	color: ${(props) => props.theme.colors.secondary};
	display: block;
	margin-top: 10px;
`;
