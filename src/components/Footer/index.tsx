import React from 'react';

import { FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';

// configs
import env from '../../config/enviroment';

// assets
import { ReactComponent as LogoSvg } from '../../assets/global/avatar.svg';

// styles
import {
	Content,
	Container,
	Section,
	Paragraph,
	LinksInline,
	Link,
	FooterTitle,
	FooterLogo,
	Options,
	OptionsTitle,
	Option,
} from './styles';

// enviroment
const { clientId } = env;

const Footer: React.FunctionComponent = () => {
	return (
		<Content>
			<Container>
				<Section>
					<FooterTitle>Devian bot</FooterTitle>
					<Paragraph>
						Desenvolvido por{' '}
						<Link href="https://johncovv.com" target="_blank">
							John Covv
						</Link>
					</Paragraph>

					<LinksInline>
						<Link href="https://twitter.com/johncovv">
							<FaTwitter size={25} />
						</Link>
						<Link href="https://github.com/johncovv">
							<FaGithub size={25} />
						</Link>
						<Link href="https://discordapp.com/users/426609168217276417">
							<FaDiscord size={25} />
						</Link>
					</LinksInline>
				</Section>

				<Section>
					<Options>
						<OptionsTitle>Opções</OptionsTitle>
						<Option
							href={`https://discord.com/oauth2/authorize?client_id=${clientId}&permissions=8&scope=bot`}
						>
							Adicionar
						</Option>
					</Options>
				</Section>
				<Section>
					<FooterLogo>
						<LogoSvg />
					</FooterLogo>
				</Section>
			</Container>
		</Content>
	);
};

export default Footer;
