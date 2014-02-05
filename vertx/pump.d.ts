/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />

declare module Vertx {
    /* Pump */
    interface Pump {
        new (readStream: ReadStream<any>, writeStream: WriteStream<any>): Pump;

        bytesPumped(): number;
        setWriteQueueMaxSize(bytes: number): Pump;
        start(): Pump;
        stop(): Pump;
    }
}

declare module "vertx/pump" {
    export interface Pump extends Vertx.Pump { }
}

