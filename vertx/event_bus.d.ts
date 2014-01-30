/// <reference path="./core.d.ts" />

declare module "vertx/event_bus" {

    export interface JSONMessage extends JSON { }

    export interface MessageHandler {
        (msg: JSONMessage): void;
    }

    /*
     * Event Bus
     */
    interface IEventBusStatic {
        publish(address: string, message: any);
        send(address: string, message: any, handler?: MessageHandler);
        registerHandler(address: string, handler: MessageHandler);
        registerLocalHandler(address: string, handler: MessageHandler);
        unregisterHandler(address: string, handler: MessageHandler);
    }

    /* implement IEventBusStatic */
    export function publish(address: string, message: any);
    export function send(address: string, message: any, handler?: MessageHandler);
    export function registerHandler(address: string, handler: MessageHandler);
    export function registerLocalHandler(address: string, handler: MessageHandler);
    export function unregisterHandler(address: string, handler: MessageHandler);
}