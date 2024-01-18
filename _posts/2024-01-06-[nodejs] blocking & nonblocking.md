---
layout: post
tag: nodejs
---
***

[출처](https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking)
<br>
Blocking is when the execution of additional JavaScript in the Node.js process must wait  
until a non-JavaScript operation completes. This happens because the event loop is unable  
to continue running JavaScript while a blocking operation is occurring.



### Comparing Code
<br>

Using the File System module as an example, this is a synchronous file read:
```
const fs = require('node:fs');
const data = fs.readFileSync('/file.md'); // blocks here until file is read
```
<br>

And here is an equivalent asynchronous example:
```
const fs = require('node:fs');
fs.readFile('/file.md', (err, data) => {
  if (err) throw err;
});
```
<br>


