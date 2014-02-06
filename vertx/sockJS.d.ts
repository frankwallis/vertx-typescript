// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface SockJSSocket extends Object {

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