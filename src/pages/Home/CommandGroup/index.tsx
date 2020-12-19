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

interface CommandGroupProps extends DevianClient.CommandsGroupType {
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
				{commands.map(({ tag, description }, index) => (
					<Command key={index}>
						<CommandTitle>{tag}</CommandTitle>
						<CommandDescription>{description}</CommandDescription>
					</Command>
				))}
			</CommandsContainer>
		</Content>
	);
};

export default CommandGroup;
