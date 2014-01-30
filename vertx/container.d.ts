declare module "vertx/container" /* implements Container */ {

    export interface Logger {
        trace(msg: string);
        debug(msg: string);
        info(msg: string);
        warn(msg: string);
        error(msg: string);
        fatal(msg: string);
    }

    export interface AsyncResult<T> {
        failed: boolean;
        succeeded: boolean;
        cause(): any;
        result(): T;
    }

    export interface Handler<TMessage> {
        (message: TMessage): void;
    }

    export interface VoidHandler extends Handler<void> { }
    export interface AsyncResultHandler<T> extends Handler<AsyncResult<T>> { }

    export interface DeploymentId extends String { }

    export interface Container {
        logger: Logger;
        env: any;
        config: any;

        deployModule(name: string, handler?: AsyncResultHandler<DeploymentId>);
        deployModule(name: string, config: any, handler?: AsyncResultHandler<DeploymentId>);
        deployModule(name: string, instances: number, handler?: AsyncResultHandler<DeploymentId>);
        deployModule(name: string, instances: number, config: any, handler?: AsyncResultHandler<DeploymentId>);
        undeployModule(id: DeploymentId, doneHandler?: VoidHandler);

        deployVerticle(name: string, handler?: AsyncResultHandler<DeploymentId>);
        deployVerticle(name: string, config: any, handler?: AsyncResultHandler<DeploymentId>);
        deployVerticle(name: string, instances: number, handler?: AsyncResultHandler<DeploymentId>);
        deployVerticle(name: string, instances: number, config: any, handler?: AsyncResultHandler<DeploymentId>);

        deployWorkerVerticle(name: string, instances?: number, config?: any, handler?: AsyncResultHandler<DeploymentId>, multithreaded?: boolean);
        undeployVerticle(id: DeploymentId, doneHandler?: VoidHandler);

        exit();
    }

    export var logger: Logger;
    export var env: any;
    export var config: any;

    export function deployModule(name: string, handler?: AsyncResultHandler<DeploymentId>);
    export function deployModule(name: string, config: any, handler?: AsyncResultHandler<DeploymentId>);
    export function deployModule(name: string, instances: number, handler?: AsyncResultHandler<DeploymentId>);
    export function deployModule(name: string, instances: number, config: any, handler?: AsyncResultHandler<DeploymentId>);
    export function undeployModule(id: DeploymentId, doneHandler?: VoidHandler);

    export function deployVerticle(name: string, handler?: AsyncResultHandler<DeploymentId>);
    export function deployVerticle(name: string, config: any, handler?: AsyncResultHandler<DeploymentId>);
    export function deployVerticle(name: string, instances: number, handler?: AsyncResultHandler<DeploymentId>);
    export function deployVerticle(name: string, instances: number, config: any, handler?: AsyncResultHandler<DeploymentId>);
    export function deployWorkerVerticle(name: string, instances?: number, config?: any, handler?: AsyncResultHandler<DeploymentId>, multithreaded?: boolean);
    export function undeployVerticle(id: DeploymentId, doneHandler?: VoidHandler);

    export function exit();
}
