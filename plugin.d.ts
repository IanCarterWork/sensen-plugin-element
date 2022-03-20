
declare module '*.plugin' {
	
	const value: string;

	export default value
	
}



declare interface SensenPluginElementState extends SensenElementState {

    status?: number;

}
