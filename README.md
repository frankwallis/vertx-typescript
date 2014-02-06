vertx-typescript
================

vert.x typescript definitions

All the interfaces are declared in namespace Vertx.

There are external modules defined which correspond to the ones defined in the vert.x API. Some of these are also exposed via the main "vertx" module as they are in vert.x

Buffer and Pump are exposed as classes which can be created from your code.

JSDocs for vert.x can be found here: http://vertx.io/api/javascript/module-vertx.html

Example usage:
```typescript
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
```
```typescript
/// <reference path="../vertx/vertx.d.ts" />
/// <reference path="../vertx/console.d.ts" />
/// <reference path="../vertx/container.d.ts" />

import vertx = require('vertx');
import console = require('vertx/console');
import timer = require('vertx/timer');
import container = require('vertx/container');

var buffer = new vertx.Buffer();
buffer.appendInt(1);

function IncrementNumber(buff: Vertx.Buffer) {
    buff.setInt(0, buff.getInt(0) + 1);
}

function CancelTimer(id: Vertx.TimerId) {
    timer.cancelTimer(id);
}

timer.setPeriodic(400, () => console.log("Value now is " + JSON.stringify(buffer.getInt(0))));

var timerId = timer.setPeriodic(100, () => IncrementNumber(buffer));
timer.setTimer(5000, () => CancelTimer(timerId));

timer.setTimer(8000, () => container.exit());
```
