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