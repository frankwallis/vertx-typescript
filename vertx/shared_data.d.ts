/// <reference path="./core.d.ts" />

declare module "vertx/shared_data" /* implements ISharedData */ {
    /*
     * Shared Data
     */
    export interface ISharedData {
        getMap(name: string): any;
        removeMap(name: string): boolean;
        getSet(name: string): Array<any>;
        removeSet(name: string): boolean;
    }

    /* implement ISharedData */
    export function getMap(name: string): any;
    export function removeMap(name: string): boolean;
    export function getSet(name: string): Array<any>;
    export function removeSet(name: string): boolean;
}