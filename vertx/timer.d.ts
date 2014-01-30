declare module "vertx/timer" /* implements Timer */ {
    
    export interface TimerId extends Number { }

    export interface VoidHandler {
        (): void;
    }

    /*
     * Timer
     */
    interface Timer {
        cancelTimer(id: TimerId);
        setPeriodic(millis: number, handler: VoidHandler): TimerId;
        setTimer(millis: number, handler: VoidHandler): TimerId;
    }

    /* implement Timer */
    export function cancelTimer(id: TimerId);
    export function setPeriodic(millis: number, handler: VoidHandler): TimerId;
    export function setTimer(millis: number, handler: VoidHandler): TimerId;
}