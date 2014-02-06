// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module Vertx {

    /* Buffer */
    interface Buffer {
        length(): number;
        appendBuffer(buff: Buffer): Buffer;
        appendBuffer(str: string): Buffer;
        copy(): Buffer;
    }

    /* Handlers */
    interface Handler<TMessage> {
        (message: TMessage): void;
    }

    interface VoidHandler extends Handler<void> { }

    interface BodyHandler extends Handler<Buffer> { }

    interface ResultHandler {
        (cause: any, result: any): void;
    }
}