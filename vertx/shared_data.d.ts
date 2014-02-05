/// <reference path="./types.d.ts" />

declare module Vertx {
    /*
     * Shared Data
     */
    interface SharedData {
        getMap(name: string): any;
        removeMap(name: string): boolean;
        getSet(name: string): Array<any>;
        removeSet(name: string): boolean;
    }
}

declare module "vertx/shared_data" /* implements SharedData */ {
    var __shareddata__: Vertx.SharedData;
    export = __shareddata__;
}