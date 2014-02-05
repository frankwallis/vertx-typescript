/// <reference path="./types.d.ts" />

declare module Vertx {
    interface DnsClient {
        lookup(name: string, handler: ResultHandler): DnsClient;
        lookup4(name: string, handler: ResultHandler): DnsClient;
        lookup6(name: string, handler: ResultHandler): DnsClient;
        resolveA(name: string, handler: ResultHandler): DnsClient;
        resolveAAAA(name: string, handler: ResultHandler): DnsClient;
        resolveCNAME(name: string, handler: ResultHandler): DnsClient;
        resolveMX(name: string, handler: ResultHandler): DnsClient;
        resolveNS(name: string, handler: ResultHandler): DnsClient;
        resolvePTR(name: string, handler: ResultHandler): DnsClient;
        resolveSRV(name: string, handler: ResultHandler): DnsClient;
        resolveTXT(name: string, handler: ResultHandler): DnsClient;
        reverseLookup(name: string, handler: ResultHandler): DnsClient;
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