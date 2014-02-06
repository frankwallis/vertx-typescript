// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />

declare module Vertx {
    interface Address {
        ipaddress: string;
        port: number;
    }

    interface TCPSupport<TThis> {
        receiveBufferSize(): number;
        receiveBufferSize(bufferSize: number): TThis;

        reuseAddress(): boolean;
        reuseAddress(reuse: boolean): TThis;

        sendBufferSize(): number;
        sendBufferSize(bufferSize: number): TThis;

        soLinger(): boolean;
        soLinger(linger: boolean): TThis;

        tcpKeepAlive(): boolean;
        tcpKeepAlive(keepAlive: boolean): TThis;

        tcpNoDelay(): boolean;
        tcpNoDelay(noDelay: boolean): TThis;

        trafficClass(): number;
        trafficClass(traffic: number): TThis;

        usePooledBuffers(): boolean;
        usePooledBuffers(pooled: boolean): TThis;
    }

    interface ServerTCPSupport<TThis> extends TCPSupport<TThis> {
        acceptBacklog(backlog: number): TThis;
        acceptBacklog(): number;
    }

    interface SSLSupport<TThis> {
        keyStorePassword(): string;
        keyStorePassword(password: string): TThis;

        keyStorePath(): string;
        keyStorePath(path: string): TThis;

        trustStorePassword(): string;
        trustStorePassword(password: string): TThis;

        trustStorePath(): string;
        trustStorePath(password: string): TThis;

        ssl(): boolean;
        ssl(ssl: boolean): TThis;
    }

    interface ServerSSLSupport<TThis> extends SSLSupport<TThis> {
        clientAuthRequired(required: boolean): TThis;
        clientAuthRequired(): boolean;
    }

    interface ListenHandler extends Vertx.VoidHandler { }
    interface ConnectHandler extends Vertx.Handler<NetSocket> { }

    interface NetServer extends ServerTCPSupport<NetServer>, ServerSSLSupport<NetServer> {
        new (): NetServer;
        listen(port: number, host?: string, handler?: ListenHandler): NetServer;
        connectHandler(handler: ConnectHandler): NetServer;
        host(): string;
        port(): number;
        close(handler: Vertx.VoidHandler);
    }

    interface NetClient extends TCPSupport<NetClient>, SSLSupport<NetClient> {
        new (): NetClient;

        connect(port: number, host?: string, connectHandler?: ConnectHandler);

        connectTimeout(): number;
        connectTimeout(millis: number): NetClient;
    }

    interface NetSocket extends ReadStream<NetSocket>, WriteStream<NetSocket> {
        close();
        closeHandler(handler: Vertx.VoidHandler): NetSocket;
        localAddress(): Address;
        remoteAddress(): Address;
        sendFile(filename: string): NetSocket;
        write(data: Buffer): NetSocket;
        write(chunk: string, encoding?: string): NetSocket;
        writeHandlerID();
    }

    /*
     * NetStatic
     */
    interface NetStatic {
        createNetServer(): NetServer;
        createNetClient(): NetClient;
    }
}

declare module "vertx/net" /* implements NetStatic */ {
    var __net__: Vertx.NetStatic;
    export = __net__;
}
