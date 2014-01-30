/// <reference path="./core.d.ts" />

declare module "vertx/console" /* implements IConsole */ {
    /*
     * Console
     */
    export interface IConsole {
        log(msg: string);
        warn(msg: string);
        error(msg: string);
    }

	export function log(msg: string);
	export function warn(msg: string);
	export function error(msg: string);
}