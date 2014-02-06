// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />
/// <reference path="./streams.d.ts" />
/// <reference path="./multi_map.d.ts" />
/// <reference path="./buffer.d.ts" />
/// <reference path="./net.d.ts" />

declare module Vertx {

    interface ResponseHandler extends Handler<HttpClientResponse> { }

    interface RequestHandler extends Handler<HttpClientRequest> { }

    interface WebSocketHandler extends Handler<WebSocket> { }

    interface HttpClient extends TCPSupport<HttpClient>, SSLSupport<HttpClient> {
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

        trustAll(): boolean;
        trustAll(trust: boolean): HttpClient;

        verifyHost(): boolean;
        verifyHost(verify: boolean): HttpClient;
    }

    interface HttpServer extends ServerTCPSupport<HttpServer>, ServerSSLSupport<HttpServer> {
        close(handler?: Vertx.VoidHandler);
        listen(port: number, host?: string, handler?: ListenHandler): HttpServer;
        requestHandler(handler: RequestHandler): HttpServer;
        webSocketHandler(handler: WebSocketHandler): HttpServer;
    }

    interface HttpClientResponse extends ReadStream<HttpClientResponse> {
        bodyHandler(handler: VoidHandler): HttpClientResponse;
        cookies(): Array<any>;
        headers(): MultiMap;
        trailers(): MultiMap;
        statusCode(): number;
        statusMessage(): string;
        netSocket(): NetSocket;
    }

    interface HttpServerRequest extends ReadStream<HttpServerRequest> {
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
        netSocket(): NetSocket;
        remoteAddress: any; // java.net.InetSocketAddress
        expectMultiPart(expect: boolean): HttpServerRequest;
        uploadHandler(handler: Handler<HttpServerFileUpload>): HttpServerRequest;
        bodyHandler(handler: BodyHandler): HttpServerRequest;
    }

    interface HttpOutgoing<TThis> extends WriteStream<TThis> {
        chunked(): boolean;
        chunked(chunked: boolean): TThis;

        write(data: Buffer): TThis;
        write(chunk: any, encoding?: number);
        end(chunk?: string, encoding?: string);

        headers(): MultiMap;
        putHeader(name: string, value: string): TThis;
        sendHead();
    }

    interface HttpClientRequest extends HttpOutgoing<HttpClientRequest> {
        continueHandler(handler: VoidHandler): HttpClientRequest;
        timeout(millis: number): HttpClientRequest;
    }

    interface HttpServerResponse extends HttpOutgoing<HttpServerResponse> {
        trailers(): MultiMap;
        putTrailer(trailerName: string, trailerValue: string): HttpServerResponse;

        sendFile(filename: string, notFoundFile: string): HttpServerResponse;

        statusCode(code: number): HttpServerResponse;
        statusCode(): number;

        statusMessage(message: string): HttpServerResponse;
        statusMessage(): string;
    }

    interface HttpServerFileUpload extends ReadStream<HttpServerFileUpload> {
        charset(): string;
        contentTransferEncoding(): string;
        contentType(): string;
        filename(): string;
        name(): string;
        size(): number;
        streamToFileSystem(filename: string): HttpServerFileUpload;
    }

    interface RouteMatcher {
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

    interface WebSocket extends ReadStream<WebSocket>, WriteStream<WebSocket> {
        binaryHandlerID(): string;
        textHandlerID(): string;
        close();
        closeHandler(handler: VoidHandler): WebSocket;
        headers(): MultiMap;
        path(): string;
        reject(): WebSocket;
        write(data: Buffer): WebSocket;
        writeBinaryFrame(data: Buffer);
        writeTextFrame(data: Buffer);
    }

    /*
     * HttpStatic
     */
    interface HttpStatic {
        createHttpClient(): HttpClient;
        createHttpServer(): HttpServer;
    }
}

declare module "vertx/http" {
    var __http__: Vertx.HttpStatic;
    export = __http__;
}

