// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface MessageHandler extends Handler<any> { }

    interface EventBus {
        publish(address: string, message: any);
        send(address: string, message: any, handler?: MessageHandler);
        registerHandler(address: string, handler: MessageHandler);
        registerLocalHandler(address: string, handler: MessageHandler);
        unregisterHandler(address: string, handler: MessageHandler);
    }
}

declare module "vertx/event_bus" {
    var __eventBus__: Vertx.EventBus;
    export = __eventBus__;
}