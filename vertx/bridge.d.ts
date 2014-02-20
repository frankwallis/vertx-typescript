// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />
/// <reference path="./event_bus.d.ts" />

declare module Vertx {
	interface EventBusBridge extends EventBus {
		onopen: VoidHandler;
		onclose: VoidHandler;
		login(username: string, password: string, handler?: MessageHandler);
		close();
    }
}

declare module vertx {
	export class EventBus implements Vertx.EventBusBridge {
		constructor(url: string, 
					options?: {
         				debug: boolean;
         				devel: boolean;
         				protocols_whitelist: string[]; });

		// inherited from Vertx.EventBus
        publish(address: string, message: any);
        send(address: string, message: any, handler?: Vertx.MessageHandler);
        registerHandler(address: string, handler: Vertx.MessageHandler);
        registerLocalHandler(address: string, handler: Vertx.MessageHandler);
        unregisterHandler(address: string, handler: Vertx.MessageHandler);

		// specific to the bridge
		onopen: Vertx.VoidHandler;
		onclose: Vertx.VoidHandler;
		login(username: string, password: string, handler?: Vertx.MessageHandler);
		close();

	}
}