/// <reference path="./core.d.ts" />

declare module "vertx/timer" /* implements ITimer */ {
    
    export interface TimerId extends Number { }

    export interface Handler {
        (): void;
    }

    /*
     * Timer
     */
    export interface ITimer {
        cancelTimer(id: TimerId);
        setPeriodic(millis: number, handler: Handler): TimerId;
        setTimer(millis: number, handler: Handler): TimerId;
    }

    /* implement ITimer */
    export function cancelTimer(id: TimerId);
    export function setPeriodic(millis: number, handler: Handler): TimerId;
    export function setTimer(millis: number, handler: Handler): TimerId;
}