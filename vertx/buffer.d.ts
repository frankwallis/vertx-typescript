/// <reference path="./types.d.ts" />

declare module "vertx/buffer" {

    //class Buffer implements VxBuffer {
    //    new(str: string, encoding?: string): Buffer;
    //    new(sizeHint: number): Buffer;
    //    new(array: any[]): Buffer;

    //    length(): number;
    //    appendBuffer(buff: Buffer): Buffer;
    //    appendBuffer(str: string): Buffer;
    //    copy(): Buffer;
    //}

    interface __Buffer__ extends Vertx.Buffer { }
    export = __Buffer__;


    /*
     * Buffer
     */
    //interface IBuffer {
    //    new (str: string, encoding?: string): Buffer;
    //    new (sizeHint: number): Buffer;
    //    new (array: any[]): Buffer;

    //    length(): number;
    //    appendBuffer(buff: Buffer): Buffer;
    //    appendBuffer(str: string): Buffer;
    //    copy(): Buffer;
    //}

    //export function new (str: string, encoding?: string): Buffer;
    //new (sizeHint: number): Buffer;
    //new (array: any[]): Buffer;

    //export function length(): number;
    //export function appendBuffer(buff: Buffer): Buffer;
    //export function appendBuffer(str: string): Buffer;
    //export function copy(): Buffer;

    //export = Vertx.Buffer;
}

