/// <reference path="./types.d.ts" />
/// <reference path="./buffer.d.ts" />

declare module Vertx {
    interface WriteStream<TThis> {
        drainHandler(handler: VoidHandler): TThis;
        exceptionHandler(handler: VoidHandler): TThis;
        // This method causes issues because of overloads in subinterfaces, so needs to be defined there
        //write(data: Buffer): TThis;
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

declare module "vertx/streams" {

    //interface WriteStream<TThis> extends Vertx.WriteStream<TThis> { }
    //interface ReadStream<TThis> extends Vertx.ReadStream<TThis> { }

    //interface WriteStream<TThis> {
    //    drainHandler(handler: VoidHandler): TThis;
    //    exceptionHandler(handler: VoidHandler): TThis;
    //    writeBuffer(data: Buffer): TThis; // <--- TODO check this - renamed from write as it's incompatible with HTTPClientRequest.write will probably work as long as Buffer and string are distinguishable ie Buffer is a class not an interface
    //    writeQueueFull: boolean;
    //    writeQueueMaxSize(max: number): TThis;
    //}
     
    //interface ReadStream<TThis> {
    //    dataHandler(handler: BodyHandler): TThis;
    //    endHandler(handler: VoidHandler): TThis;
    //    exceptionHandler(handler: VoidHandler): TThis;
    //    pause(): TThis;
    //    resume(): TThis;
    //}
}