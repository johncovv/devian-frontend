import React, { useState } from 'react';

import { FiChevronDown } from 'react-icons/fi';

import {
	Content,
	CommandGroupTitle,
	CommandsContainer,
	Command,
	CommandTitle,
	CommandDescription,
} from './styles';

interface CommandGroupProps {
	group: string;
	commands: { title: string; description: string }[];
}

const CommandGroup: React.FunctionComponent<CommandGroupProps> = ({
	group,
	commands,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Content>
			<CommandGroupTitle
				onClick={() => setIsOpen((state) => !state)}
				className={isOpen ? 'active' : 'hidde'}
			>
				{group} <FiChevronDown size={35} />
			</CommandGroupTitle>
			<CommandsContainer className={`${isOpen ? 'active' : 'hidde'}`}>
				{commands.map(({ title, description }, index) => (
					<Command key={`${title}-${index}`}>
						<CommandTitle>{title}</CommandTitle>
						<CommandDescription>{description}</CommandDescription>
					</Command>
				))}
			</CommandsContainer>
		</Content>
	);
};

export default CommandGroup;
