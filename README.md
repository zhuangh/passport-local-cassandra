

We build the flow using the code based on git@github.com:passport/express-4.x-local-example.git. The example demonstrates how to use [Express](http://expressjs.com/) 4.x and [Passport](http://passportjs.org/) to authenticate users using a username and password by [form-based authentication](https://en.wikipedia.org/wiki/HTTP%2BHTML_form-based_authentication).

We customize the flow for cassandra database. 

## Instructions

Start the server using Jade template.

```bash
$ node server.js

```

Start the server using EJS template.

```bash
$ node server_ejs.js
```



Open a web browser [http://localhost:3000/](http://127.0.0.1:3000/)
Log in using username `kitty` and password `hello`.

## Software details:

Cassandra: 2.0.11 (some parts in datastax's node.js driver for Cassandra 3.0 have glitches at this moment, 2015-11-24)

cqlsh: 4.1.1

CQL spec 3.1.1

Thrift protocol 19.39.0



Regards,

Hao Zhuang, and Zhou Fang

UCSD CSE 

2015 Nov. 


