vertx-typescript
================

vert.x typescript definitions

All the interfaces are declared in namespace Vertx.

There are external modules defined which correspond to the ones defined in the vert.x API. Some of these are also exposed via the main "vertx" module as they are in vert.x

Buffer and Pump are exposed as classes which can be created from your code.

JSDocs for vert.x can be found here: http://vertx.io/api/javascript/module-vertx.html

Example usage:

/// <reference path="../vertx/vertx.d.ts" />
/// <reference path="../vertx/console.d.ts" />

import vertx = require('vertx');
import console = require('vertx/console');

var connections = new Array<Vertx.NetSocket>();

vertx.net.createNetServer().connectHandler((sock) => {
    new vertx.Pump(sock, sock).start();

    connections.push(sock);
    console.log("Received connection from " + sock.remoteAddress().ipaddress);

    sock.closeHandler(() => {
        console.log(sock.remoteAddress().ipaddress + " disconnected");
        connections.splice(connections.indexOf(sock), 1)
        });
}).listen(1234);

