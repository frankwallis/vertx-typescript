declare module Vertx {

    /* Buffer */
    interface Buffer {
        new (str: string, encoding?: string): Buffer;
        new (sizeHint: number): Buffer;
        new (array: any[]): Buffer;

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