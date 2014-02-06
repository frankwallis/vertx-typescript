// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface Logger {
        trace(msg: string);
        debug(msg: string);
        info(msg: string);
        warn(msg: string);
        error(msg: string);
        fatal(msg: string);
    }

    interface AsyncResult<T> {
        failed: boolean;
        succeeded: boolean;
        cause(): any;
        result(): T;
    }

    interface AsyncResultHandler<T> extends Handler<AsyncResult<T>> { }

    interface DeploymentId extends String { }

    interface Container {
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
}

declare module "vertx/container" /* implements Container */ {
    var __container__: Vertx.Container;
    export = __container__;
}
