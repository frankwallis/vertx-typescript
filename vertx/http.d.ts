/// <reference path="./streams.d.ts" />
/// <reference path="./multi_map.d.ts" />
/// <reference path="./buffer.d.ts" />

declare module "vertx/http" /* implements IHttp */ {

    import strms = require("vertx/streams");
    import mltmap = require("vertx/multi_map");
    import buffer = require("vertx/buffer");

    export interface Buffer { }

    export interface VoidHandler {
        (): void;
    }

    export interface Handler<TMessage> {
        (message: TMessage): void;
    }

    export interface ResponseHandler extends Handler<HttpClientResponse> { }
    export interface RequestHandler extends Handler<HttpClientRequest> { }
    export interface BodyHandler extends Handler<Buffer> { }

    interface HttpConnection<TThis, TRequest, TResponse> {

        keyStorePassword(): string;
        keyStorePassword(password: string): TThis;

        keyStorePath(): string;
        keyStorePath(path: string): TThis;

        receiveBufferSize(): number;
        receiveBufferSize(bufferSize: number): TThis;

        reuseAddress(): boolean;
        reuseAddress(reuse: boolean): TThis;

        sendBufferSize(): number;
        sendBufferSize(bufferSize: number): TThis;

        soLinger(): boolean;
        soLinger(linger: boolean): TThis;

        ssl(): boolean;
        ssl(ssl: boolean): TThis;

        tcpKeepAlive(): boolean;
        tcpKeepAlive(keepAlive: boolean): TThis;

        tcpNoDelay(): boolean;
        tcpNoDelay(noDelay: boolean): TThis;

        trafficClass(): number;
        trafficClass(traffic: number): TThis;

        trustStorePassword(): string;
        trustStorePassword(password: string): TThis;

        trustStorePath(): string;
        trustStorePath(password: string): HttpClient;

        usePooledBuffers(): boolean;
        usePooledBuffers(pooled: boolean): TThis;
    }

    export interface HttpClient extends HttpConnection<HttpClient, HttpClientRequest, HttpClientResponse> {
        /* control */
        connect(uri: string, handler: ResponseHandler): HttpClientRequest;
        connectWebSocket(uri: string, handler: ResponseHandler);
        exceptionHandler(handler: VoidHandler): HttpClient;
        close();

        /* requests */
        request(method: string, uri: string, handler: ResponseHandler): HttpClientRequest;
        delete(uri: string, handler: ResponseHandler): HttpClientRequest;
        get(uri: string, handler: ResponseHandler): HttpClientRequest;
        getNow(uri: string, handler: ResponseHandler): HttpClientRequest;
        head(uri: string, handler: ResponseHandler): HttpClientRequest;
        options(uri: string, handler: ResponseHandler): HttpClientRequest;
        patch(uri: string, handler: ResponseHandler): HttpClientRequest;
        post(uri: string, handler: ResponseHandler): HttpClientRequest;
        put(uri: string, handler: ResponseHandler): HttpClientRequest;
        trace(uri: string, handler: ResponseHandler): HttpClientRequest;

        /* options */
        host(): string;
        host(host: string): HttpClient;

        keepAlive(): boolean;
        keepAlive(keepAlive: boolean): HttpClient;

        maxPoolSize(): number;
        maxPoolSize(poolSize: number): HttpClient;

        port(): number;
        port(port: number): HttpClient;

        reuseAddress(): boolean;
        reuseAddress(reuse: boolean): HttpClient;

        trustAll(): boolean;
        trustAll(trust: boolean): HttpClient;

        verifyHost(): boolean;
        verifyHost(verify: boolean): HttpClient;
    }

    export interface HttpServer extends HttpConnection<HttpServer, HttpServerRequest, HttpServerResponse> {

    }

    interface MultiMap extends mltmap.MultiMap { }
    interface ReadStream<T> extends strms.ReadStream<T> { }
    interface WriteStream<T> extends strms.WriteStream<T> { }

    export interface HttpClientResponse extends ReadStream<HttpClientResponse> {
        bodyHandler(handler: VoidHandler): HttpClientResponse;
        cookies(): Array<any>;
        headers(): MultiMap;
        trailers(): MultiMap;
        statusCode(): number;
        statusMessage(): string;

        //netSocket(): NetSocket;
    }

    export interface HttpServerRequest extends ReadStream<HttpServerRequest> {
        response: HttpServerResponse;
        absoluteURI(): string;
        formAttributes(): MultiMap;
        headers(): MultiMap;
        params(): MultiMap;
        path(): string;
        uri(): string;
        query(): string;
        method(): string;
        version(): string;
        peerCertificationChain(): Array<any>;
        //netSocket(): NetSocket;
        remoteAddress: any; // java.net.InetSocketAddress
        expectMultiPart(expect: boolean): HttpServerRequest;
        uploadHandler(handler: Handler<HttpServerFileUpload>): HttpServerRequest;

        bodyHandler(handler: BodyHandler): HttpServerRequest;
        //dataHandler(handler: BodyHandler): HttpServerRequest;
    }

    interface HttpOutgoing<TThis> extends WriteStream<TThis> {
        chunked(): boolean;
        chunked(chunked: boolean): TThis;

        write(chunk: string, encoding?: string): TThis;
        end(chunk?: string, encoding?: string);

        headers(): MultiMap;
        putHeader(name: string, value: string): TThis;
        sendHead();
    }

    export interface HttpClientRequest extends HttpOutgoing<HttpClientRequest> {
        continueHandler(handler: VoidHandler): HttpClientRequest;
        timeout(millis: number): HttpClientRequest;
    }

    export interface HttpServerResponse extends HttpOutgoing<HttpServerResponse> {
        trailers(): MultiMap;
        putTrailer(trailerName: string, trailerValue: string): HttpServerResponse;

        sendFile(filename: string, notFoundFile: string): HttpServerResponse;

        statusCode(code: number): HttpServerResponse;
        statusCode(): number;

        statusMessage(message: string): HttpServerResponse;
        statusMessage(): string;
    }

    export interface HttpServerFileUpload extends ReadStream<HttpServerFileUpload> {
        charset(): string;
        contentTransferEncoding(): string;
        contentType(): string;
        filename(): string;
        name(): string;
        size(): number;
        streamToFileSystem(filename: string): HttpServerFileUpload;
    }

    export interface RouteMatcher {
        new (): RouteMatcher;
        all(pattern: string, handler: RequestHandler): RouteMatcher;
        allWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        connect(pattern: string, handler: RequestHandler): RouteMatcher;
        connectWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        delete(pattern: string, handler: RequestHandler): RouteMatcher;
        deleteWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        get(pattern: string, handler: RequestHandler): RouteMatcher;
        getWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        head(pattern: string, handler: RequestHandler): RouteMatcher;
        headWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        options(pattern: string, handler: RequestHandler): RouteMatcher;
        optionsWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        patch(pattern: string, handler: RequestHandler): RouteMatcher;
        patchWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        post(pattern: string, handler: RequestHandler): RouteMatcher;
        postWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        put(pattern: string, handler: RequestHandler): RouteMatcher;
        putWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        trace(pattern: string, handler: RequestHandler): RouteMatcher;
        traceWithRegEx(pattern: string, handler: RequestHandler): RouteMatcher;
        noMatch(handler: RequestHandler): RouteMatcher;
    }

    export interface WebSocket {

    }

    /*
     * IHttpStatic
     */
    interface IHttpStatic {
        createHttpClient(): HttpClient;
        createHttpServer(): HttpServer;
    }

    export function createHttpClient(): HttpClient;
    export function createHttpServer(): HttpServer;
}
