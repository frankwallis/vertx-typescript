// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface TimerId extends Number { }

    interface Timer {
        cancelTimer(id: TimerId);
        setPeriodic(millis: number, handler: VoidHandler): TimerId;
        setTimer(millis: number, handler: VoidHandler): TimerId;
    }
}

declare module "vertx/timer" /* implements Timer */ {
    var __timer__: Vertx.Timer;
    export = __timer__;
}