/// <reference path="./event_bus.d.ts" />
/// <reference path="./timer.d.ts" />
/// <reference path="./http.d.ts" />
/// <reference path="./net.d.ts" />
/// <reference path="./sockJS.d.ts" />
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

    export class Buffer extends Vertx.Buffer { }
    export class Pump extends Vertx.Pump { }

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


