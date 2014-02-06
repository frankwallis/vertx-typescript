// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./event_bus.d.ts" />
/// <reference path="./timer.d.ts" />
/// <reference path="./http.d.ts" />
/// <reference path="./net.d.ts" />
/// <reference path="./sockJS.d.ts" />
/// <reference path="./pump.d.ts" />
/// <reference path="./shared_data.d.ts" />
/// <reference path="./file_system.d.ts" />
/// <reference path="./parse_tools.d.ts" />

declare module "vertx" /* implements VertxStatic */ {

    interface VertxStatic {
        eventBus: Vertx.EventBus;
        timer: Vertx.Timer;
        http: Vertx.HttpStatic;
        net: Vertx.NetStatic;
        sockJS: Vertx.SockJSStatic;
        sharedData: Vertx.SharedData;
        fileSystem: Vertx.FileSystem;
        parseTools: Vertx.ParseTools;
        
        runOnContext(handler: Vertx.VoidHandler);
    }

    import __buffer__ = require("vertx/buffer");
    export class Buffer extends __buffer__ { }
        
    import __pump__ = require("vertx/pump");
    export class Pump extends __pump__.Pump { }

    export var timer: Vertx.Timer;
    export var http: Vertx.HttpStatic;
    export var net: Vertx.NetStatic;
    export var eventBus: Vertx.EventBus;
    export var sockJS: Vertx.SockJSStatic;
    export var sharedData: Vertx.SharedData;
    export var fileSystem: Vertx.FileSystem;
    export var parseTools: Vertx.ParseTools;

    export function runOnContext(handler: Vertx.VoidHandler);
    export function currentContext(): any; // not sure if this should be exposed   
}


