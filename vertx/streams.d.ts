/// <reference path="./core.d.ts" />

declare module "vertx/streams" {

    export interface VoidHandler {
        (): void;
    }

    export interface Handler<TMessage> {
        (message: TMessage): void;
    }

    export interface BodyHandler extends Handler<Buffer> { }

    export interface Buffer {
        new (str: string, encoding?: string): Buffer;
        new (sizeHint: number): Buffer;
        new (array: any[]): Buffer;

        length(): number;
        appendBuffer(buff: Buffer): Buffer;
        appendBuffer(str: string): Buffer;
        copy(): Buffer;
    }

    interface WriteStream<TThis> {
        drainHandler(handler: VoidHandler): TThis;
        exceptionHandler(handler: VoidHandler): TThis;
        writeQueueMaxSize(max: number): TThis;
        writeBuffer(data: Buffer): TThis; // <--- TODO check this - renamed from write as it's incompatible with HTTPClientRequest.write
        writeQueueFull: boolean;
    }
     
    interface ReadStream<TThis> {
        dataHandler(handler: BodyHandler): TThis;
        endHandler(handler: VoidHandler): TThis;
        exceptionHandler(handler: VoidHandler): TThis;
        pause(): TThis;
        resume: TThis;
    }
}