// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module "vertx/buffer" {
    class __Buffer__ implements Vertx.Buffer {
        constructor();
        constructor(str: string, encoding?: string);
        constructor(sizeHint: number);
        constructor(array: any[]);

        length(): number;
        copy(): Vertx.Buffer;
        toString(encoding?: string): string;

        appendBuffer(buff: Vertx.Buffer): Vertx.Buffer;
        appendByte(byte: number): Vertx.Buffer;
        appendBytes(bytes: Array<number>): Vertx.Buffer;
        appendDouble(double: number): Vertx.Buffer;
        appendFloat(float: number): Vertx.Buffer;
        appendInt(int: number): Vertx.Buffer;
        appendLong(long: number): Vertx.Buffer;
        appendShort(short: number): Vertx.Buffer;
        appendString(str: string, encoding?: string): Vertx.Buffer;

        getBuffer(start: number, end: number): Vertx.Buffer;
        getByte(pos: number): number;
        getBytes(pos: number): Array<number>;
        getDouble(pos: number): number;
        getFloat(pos: number): number;
        getInt(pos: number): number;
        getLong(pos: number): number;
        getShort(pos: number): number;
        getString(start: number, end: number, encoding?: string): string;

        setBuffer(pos: number, buff: Vertx.Buffer): Vertx.Buffer;
        setByte(pos: number, byte: number): Vertx.Buffer;
        setBytes(pos: number, bytes: Array<number>): Vertx.Buffer;
        setDouble(pos: number, double: number): Vertx.Buffer;
        setFloat(pos: number, float: number): Vertx.Buffer;
        setInt(pos: number, int: number): Vertx.Buffer;
        setLong(pos: number, long: number): Vertx.Buffer;
        setShort(pos: number, short: number): Vertx.Buffer;
        setString(pos: number, str: string, encoding?: string): Vertx.Buffer;
    }

    export = __Buffer__;
}
