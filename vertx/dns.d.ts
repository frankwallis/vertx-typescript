// Type definitions for vert.x
// Project: http://vertx.io
// Definitions by: Frank Wallis <https://github.com/frankwallis>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="./types.d.ts" />

declare module Vertx {
    interface DnsClient {
        lookup(name: string, handler: ResultHandler<string>): DnsClient;
        lookup4(name: string, handler: ResultHandler<string>): DnsClient;
        lookup6(name: string, handler: ResultHandler<string>): DnsClient;
        resolveA(name: string, handler: ResultHandler<string>): DnsClient;
        resolveAAAA(name: string, handler: ResultHandler<string>): DnsClient;
        resolveCNAME(name: string, handler: ResultHandler<string>): DnsClient;
        resolveMX(name: string, handler: ResultHandler<string>): DnsClient;
        resolveNS(name: string, handler: ResultHandler<string>): DnsClient;
        resolvePTR(name: string, handler: ResultHandler<string>): DnsClient;
        resolveSRV(name: string, handler: ResultHandler<string>): DnsClient;
        resolveTXT(name: string, handler: ResultHandler<string>): DnsClient;
        reverseLookup(name: string, handler: ResultHandler<string>): DnsClient;
    }

    interface DnsStatic {
        createDnsClient(server: string): DnsClient;
        createDnsClient(servers: Array<string>): DnsClient;
    }
}

declare module "vertx/dns" /* implements DnsStatic */ {
    var __dns__: Vertx.DnsStatic;
    export = __dns__;
}