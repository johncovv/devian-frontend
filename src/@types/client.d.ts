declare namespace DevianClient {
	export interface CommandsType {
		tag: string;
		description: string;
		permissions: Array<string>;
	}

	export interface CommandsGroupType {
		group: string;
		commands: Array<CommandsType>;
	}
}
