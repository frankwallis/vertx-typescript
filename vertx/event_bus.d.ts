declare module "vertx/event_bus" /* implements EventBus */ {

    export interface JSONMessage extends Object { }

    export interface MessageHandler {
        (msg: JSONMessage): void;
    }

    /*
     * Event Bus
     */
    interface EventBus {
        publish(address: string, message: any);
        send(address: string, message: any, handler?: MessageHandler);
        registerHandler(address: string, handler: MessageHandler);
        registerLocalHandler(address: string, handler: MessageHandler);
        unregisterHandler(address: string, handler: MessageHandler);
    }

    /* implement IEventBus */
    export function publish(address: string, message: any);
    export function send(address: string, message: any, handler?: MessageHandler);
    export function registerHandler(address: string, handler: MessageHandler);
    export function registerLocalHandler(address: string, handler: MessageHandler);
    export function unregisterHandler(address: string, handler: MessageHandler);
}