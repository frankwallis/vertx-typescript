// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Vertx {
    //interface MessageHandler extends Handler<any> { }

    interface MessageHandler<TMessage> {
       (message: TMessage, replier: MessageHandler<any>): void;
    }

    interface EventBus {
        publish(address: string, message: any): EventBus;
        send<T>(address: string, message: any, replyHandler?: MessageHandler<T>): EventBus;
        sendWithTimeout<T>(address: string, message: any, timeout: number, replyHandler?: MessageHandler<T>): EventBus;
        setDefaultReplyTimeout(millis: number): EventBus;
        registerHandler<T>(address: string, handler: MessageHandler<T>): EventBus;
        registerLocalHandler<T>(address: string, handler: MessageHandler<T>): EventBus;
        unregisterHandler<T>(address: string, handler: MessageHandler<T>): EventBus;
    }
}

declare module "vertx/event_bus" {
    var __eventBus__: Vertx.EventBus;
    export = __eventBus__;
}