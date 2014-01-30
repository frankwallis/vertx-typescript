/// <reference path="./event_bus.d.ts" />
/// <reference path="./timer.d.ts" />
/// <reference path="./http.d.ts" />
/// <reference path="./net.d.ts" />
/// <reference path="./sockJS.d.ts" />

declare module "vertx" /* implements IVertxStatic */ {

    //export interface Address {
    //    ipaddress: string;
    //    port: number;
    //}


    //declare var Buffer: {
    //export interface Buffer {
    //    new (str: string, encoding?: string): Buffer;
    //    new (sizeHint: number): Buffer;
    //    new (array: any[]): Buffer;

    //    length(): number;
    //    appendBuffer(buff: Buffer): Buffer;
    //    appendBuffer(str: string): Buffer;
    //    copy(): Buffer;
    //}

    //export interface BodyHandler {
    //    (body: Buffer): void;
    //}

    interface IVertxStatic {
        eventBus: eventBus.EventBus;
        timer: timer.Timer;
        http: http.IHttpStatic;
        net: net.INetStatic;
        sockJS: sockJS.ISockJSStatic;
    }

    /* implement IVertxStatic as required */
    export import eventBus = require('vertx/event_bus');
    export import timer = require('vertx/timer');
    export import http = require('vertx/http');
    export import net = require('vertx/net');
    export import sockJS = require('vertx/sockJS');
}


