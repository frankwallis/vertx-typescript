// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />
/// <reference path="./event_bus.d.ts" />

declare module Vertx {
	interface EventBusBridge {
		// these could be inherited from Vertx.EventBus but the bridge does not observer the fluent interfaces
        publish(address: string, message: any);
        send<T>(address: string, message: any, handler?: Vertx.MessageHandler<T>);
        registerHandler<T>(address: string, handler: Vertx.MessageHandler<T>);
        registerLocalHandler<T>(address: string, handler: Vertx.MessageHandler<T>);
        unregisterHandler<T>(address: string, handler: Vertx.MessageHandler<T>);

		onopen: VoidHandler;
		onclose: VoidHandler;
		login(username: string, password: string, handler?: Handler<any>);
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

        publish(address: string, message: any);
        send<T>(address: string, message: any, handler?: Vertx.MessageHandler<T>);
        registerHandler<T>(address: string, handler: Vertx.MessageHandler<T>);
        registerLocalHandler<T>(address: string, handler: Vertx.MessageHandler<T>);
        unregisterHandler<T>(address: string, handler: Vertx.MessageHandler<T>);
		onopen: Vertx.VoidHandler;
		onclose: Vertx.VoidHandler;
		login(username: string, password: string, handler?: Vertx.Handler<any>);
		close();

	}
}