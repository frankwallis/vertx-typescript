// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface RecordParser {
        /**
         * Flip the parser into delimited mode, and where the delimiter can be represented
         * by the String delim encoded in latin-1 . Don't use this if your String contains other than latin-1 characters.<p>
         *
         * This method can be called multiple times with different values of delim while data is being parsed.
         * @param delim
         */
        delimitedMode(delim: string);
        /**
         * Flip the parser into fixed size mode, where the record size is specified by size in bytes.<p>
         * This method can be called multiple times with different values of size while data is being parsed.
         *
         * @param {number} size
         */
        fixedSizeMode(size: number);
        /**
         *
         * @returns {Function} a function you should pass in as function to {module:vertx/streams~ReadStream} dataHandler.
         */
        handle(buffer: Buffer);
    }

    interface ParseTools {
        /**
         * Create a new <code>RecordParser</code> instance, initially in delimited
         * mode, and where the delimiter can be represented by <code>delim</code>.
         * <code>output</code> will receive whole records which have been parsed.
         * @param {string} delim The record delimiter
         * @param {Function} output The function to call once more data is ready
         * @returns {module:vertx/parse_tools.RecordParser} A delimited record parser
         */
        createDelimitedParser(delim: string, output: Buffer): RecordParser; 

        /**
         * Create a new <code>RecordParser</code> instance, initially in fixed size
         * mode, and where the record size is specified by the <code>size</code>
         * parameter.  <code>output</code> will receive whole records which have been
         * parsed.
         * @param {number} size The record size
         * @param {Function} The function to call once more data is ready
         * @returns {module:vertx/parse_tools.RecordParser} A fixed size record parser
         */
        createFixedParser(size: number, output: Buffer): RecordParser; 
    }
}

declare module "vertx/parse_tools" /* implements ParseTools */ {
    var __parsetools__: Vertx.ParseTools;
    export = __parsetools__;
}