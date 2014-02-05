/// <reference path="./types.d.ts" />

declare module Vertx {
    interface RecordParser extends Object { } 

    interface ParseTools {
        createDelimitedParser(delim: string, output: Buffer): any; // org.vertx.java.core.parsetools.RecordParser
        createFixedParser(size: number, output: Buffer): any; // org.vertx.java.core.parsetools.RecordParser
    }
}

declare module "vertx/parse_tools" /* implements ParseTools */ {
    var __parsetools__: Vertx.ParseTools;
    export = __parsetools__;
}