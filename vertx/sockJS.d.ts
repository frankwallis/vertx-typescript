// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface LocalAddress {
        address: string;
        port: number;
        getHostString(): string;
        getPort(): number;
    }

    interface SockJSSocket extends ReadStream<SockJSSocket>, WriteStream<SockJSSocket> {
        writeHandlerId(): string;
        close();
        localAddress(): LocalAddress;
        headers(): MultiMap;
        uri(): string;
    }

    interface SockJSHandler extends Handler<SockJSSocket> { }

    interface SockJSServer {
        bridge(config: any, inboundPermitted: Array<any>, outboundPermitted: Array<any>);
        installApp(config: any, handler: SockJSHandler);
    }

    interface SockJSStatic {
        createSockJSServer(httpServer: HttpServer): SockJSServer;
    }
}

declare module "vertx/sockJS" /* implements SockJSStatic */ {
    var __sockjs__: Vertx.SockJSStatic;
    export = __sockjs__;
} 