/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />

declare module Vertx {
    /* Pump */
    class Pump {
        new (readStream: ReadStream<any>, writeStream: WriteStream<any>): Pump;

        bytesPumped(): number;
        setWriteQueueMaxSize(bytes: number): Pump;
        start(): Pump;
        stop(): Pump;
    }
}

declare module "vertx/pump" {
    export class Pump extends Vertx.Pump { }
}

