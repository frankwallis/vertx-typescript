/// <reference path="./core.d.ts" />
/// <reference path="./event_bus.d.ts" />
/// <reference path="./timer.d.ts" />

declare module "vertx" /* implements IVertx */ {

    export interface Address {
	    ipaddress: string;
	    port: number;
    }


    //declare var Buffer: {
    export interface Buffer {
        new (str: string, encoding?: string): Buffer;
        new (sizeHint: number): Buffer;
        new (array: any[]): Buffer;
	
	    length(): number;
	    appendBuffer(buff: Buffer): Buffer;
	    appendBuffer(str: string): Buffer;
	    copy(): Buffer;
    }

    //export interface BodyHandler {
	//    (body: Buffer): void;
    //}

    //import eb = require("vertx/event_bus");
    //import timer = require("vertx/timer");

    //export interface IVertx extends timer.ITimer {
    //    eventBus: eb.EventBus;

//    }

    /* implement IVertx as required */
    //export var eventBus: eb.EventBus;

    export import eventBus = require('vertx/event_bus');
    export import timer = require('vertx/timer');
    export import http = require('vertx/http');
    export import net = require('vertx/net');
    export import sockJS = require('vertx/sockJS');
}


