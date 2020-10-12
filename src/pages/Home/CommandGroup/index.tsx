import React, { useState, HtmlHTMLAttributes } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import {
	Content,
	CommandGroupTitle,
	CommandsContainer,
	Command,
	CommandTitle,
	CommandDescription,
} from './styles';

interface CommandGroupProps extends HtmlHTMLAttributes<HTMLDivElement> {
	group: string;
	commands: { title: string; description: string }[];
	position: number;
}

const CommandGroup: React.FunctionComponent<CommandGroupProps> = ({
	group,
	commands,
	position,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Content isOpen={isOpen} style={{ zIndex: 100 - position }}>
			<CommandGroupTitle onClick={() => setIsOpen((state) => !state)}>
				{group} <FiChevronDown size={35} />
			</CommandGroupTitle>
			<CommandsContainer>
				{commands.map(({ title, description }, index) => (
					<Command key={index}>
						<CommandTitle>{title}</CommandTitle>
						<CommandDescription>{description}</CommandDescription>
					</Command>
				))}
			</CommandsContainer>
		</Content>
	);
};

export default CommandGroup;
