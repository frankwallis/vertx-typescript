/// <reference path="./types.d.ts" />

declare module Vertx {
    interface JSONMessage extends Object { }

    interface MessageHandler extends Handler<JSONMessage> { }

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