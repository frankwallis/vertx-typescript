// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />

declare module Vertx {
    interface Pump {
        bytesPumped(): number;
        setWriteQueueMaxSize(bytes: number): Pump;
        start(): Pump;
        stop(): Pump;
    }
}

declare module "vertx/pump" {
    export class Pump implements Vertx.Pump {
        constructor(readStream: Vertx.ReadStream<any>, writeStream: Vertx.WriteStream<any>);
        bytesPumped(): number;
        setWriteQueueMaxSize(bytes: number): Pump;
        start(): Pump;
        stop(): Pump;
    }
}

