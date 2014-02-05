/// <reference path="./types.d.ts" />

declare module Vertx {
    interface Console {
        log(msg: string);
        warn(msg: string);
        error(msg: string);
    }
}

declare module "vertx/console" /* implements Console */ {
    var __console__: Vertx.Console;
    export = __console__;
}