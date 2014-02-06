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
