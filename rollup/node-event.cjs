const EventEmitter = require('events').EventEmitter;


const myEvent = new EventEmitter();

myEvent.on('start', function() {
  console.log('event start');
})

myEvent.once('once', function() {
  console.log('event once');
})

setTimeout(() => {
  myEvent.emit('start');
}, 1000);
setTimeout(() => {
  myEvent.emit('once');
}, 2000);
setTimeout(() => {
  myEvent.emit('once');
}, 3000);

