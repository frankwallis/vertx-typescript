/// <reference path="./core.d.ts" />

declare module "vertx/console" /* implements Console */ {
    /*
     * Console
     */
    export interface Console {
        log(msg: string);
        warn(msg: string);
        error(msg: string);
    }

	export function log(msg: string);
	export function warn(msg: string);
	export function error(msg: string);
}