declare module '*.otf';

declare namespace Global {
	export interface ProcessEnv {
		[key: string]: string | undefined;
	}
}
