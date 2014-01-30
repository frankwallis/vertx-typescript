declare module "vertx/streams" {

    export interface VoidHandler {
        (): void;
    }

    export interface Handler<TMessage> {
        (message: TMessage): void;
    }

    export interface BodyHandler extends Handler<Buffer> { }

    interface Buffer {
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
        writeBuffer(data: Buffer): TThis; // <--- TODO check this - renamed from write as it's incompatible with HTTPClientRequest.write will probably work as long as Buffer and string are distinguishable ie Buffer is a class not an interface
        writeQueueFull: boolean;
        writeQueueMaxSize(max: number): TThis;
    }
     
    interface ReadStream<TThis> {
        dataHandler(handler: BodyHandler): TThis;
        endHandler(handler: VoidHandler): TThis;
        exceptionHandler(handler: VoidHandler): TThis;
        pause(): TThis;
        resume(): TThis;
    }
}