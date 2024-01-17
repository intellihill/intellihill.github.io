---
layout: post
tag: nodejs
---
***

## The Node.js Event Emitter

On the backend side, Node.js offers us the option to build a similar system using  
the events modules.
<br>
this module, in particular, offers the EventEmitter class, which we'll use to handle our ebents.  

You initialize that using
```
const EventEmitter = require('node:events');
const eventEmitter = new EventEmitter();
```
<br>

This object exposes, among many others, the 'on' and 'emit' methods.

- 'emit' is used to trigger an event
- 'on' is used to add a callback function that's going to be executed when the event is triggered
<br>

```
eventEmitter.on('start', () => {
  console.log('started');
});
```
<br>
##### example>

```
// index.js
eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});
eventEmitter.emit('start', 1, 100);

// node index.js is execution
```


