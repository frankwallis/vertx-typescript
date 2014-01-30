declare module "vertx/net" /* implements INetStatic */ {

    import strms = require("vertx/streams");

    export interface TCPSupport<TThis> {
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

    export interface ServerTCPSupport<TThis> extends TCPSupport<TThis> {
        acceptBacklog(backlog: number): TThis;
        acceptBacklog(): number;
    }

    export interface SSLSupport<TThis> {
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

    export interface ServerSSLSupport<TThis> extends SSLSupport<TThis>{
        clientAuthRequired(required: boolean): TThis;
        clientAuthRequired(): boolean;
    }

    export interface Handler<TMessage> {
        (message: TMessage): void;
    }

    export interface VoidHandler extends Handler<void> { }
    export interface ListenHandler extends Handler<void> { }
    export interface ConnectHandler extends Handler<NetSocket> { }

    export interface NetServer extends ServerTCPSupport<NetServer>, ServerSSLSupport<NetServer> {
        new (): NetServer;
        listen(port: number, host?: string, handler?: ListenHandler): NetServer;
        connectHandler(handler: ConnectHandler): NetServer;
        host(): string;
        port(): number;
        close(handler: VoidHandler);
    }

    export interface NetClient extends TCPSupport<NetClient>, SSLSupport<NetClient> {
        new (): NetClient;

        connect(port: number, host?: string, connectHandler?: ConnectHandler);

        connectTimeout(): number;
        connectTimeout(millis: number): NetClient;
    }

    interface ReadStream<T> extends strms.ReadStream<T> { }
    interface WriteStream<T> extends strms.WriteStream<T> { }

    export interface NetSocket extends ReadStream<NetSocket>, WriteStream<NetSocket> {
        close();
        closeHandler(handler: VoidHandler): NetSocket;
        localAddress(): string;
        remoteAddress(): string;
        sendFile(filename: string): NetSocket;
        write(chunk: string, encoding?: string): NetSocket;
        writeHandlerID();
    }

    /*
     * INetStatic
     */
    export interface INetStatic {
        createNetServer(): NetServer;
        createNetClient(): NetClient;
    }

    export function createNetServer(): NetServer;
    export function createNetClient(): NetClient;
}
