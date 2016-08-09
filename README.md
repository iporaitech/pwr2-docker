# phoenix-webpack-relay-react (pwr2)

Docker image based on Ubuntu setup with Phoenix+Webpack+Relay+React, with some sugar and conventions to develop and build web applications.

## Usage Instructions

Clone this repo to your local and start your own Docker image from these files. You might want to watch this repo so you don't miss upgrades or releases you might to apply to your own projects.

**Notice:** Tags/Releases in this GitHub repo are the equivalent to tags in DockerHub repository, master is the **latest** image in DockerHub.

### app user and Elixir commands

Most of the code is copied to **APP_HOME=/home/app/webapp**, owned by **app** user.

If you want to go into the container to execute Elixir/Phoenix commands and other stuff you can use `docker exec -it pwr2docker_web_1 bash` and once inside the container execute `su app` to become the **app** user.

You might experience some errors if trying to execute [Elixir](#elixir) commands as root inside the container.

Once switched to **app** user and in the `APP_HOME` directory, you can start the application server by running:

`mix phoenix.server`

> or if you want to start the server in a Elixir console

`iex -S mix phoenix.server`

### GraphiQL and Relay Examples

Currently, once all setup and with the app running, you can visit http://localhost:4000/graphiql to access a [GraphiQL](https://github.com/graphql/graphiql) IDE, and http://localhost:4000/star-wars to experiment with our implementation of the [Relay Star Wars example](https://github.com/relayjs/relay-examples/tree/master/star-wars)

## About the technology stack

Basically, the stack is composed of server application and a Javascript client _rendered in the browser_.

Following a brief description of major components of this technology stack.
See also the [Dockerfile](https://github.com/iporaitech/pwr2-docker/blob/master/Dockerfile).

### Baseimage-docker

_A minimal Ubuntu base image modified for Docker-friendliness_. This is the base Ubuntu image for this images (see `FROM` in the Dockerfile). It provides a **correct** init process, syslog-ng, logrotate among other stuff needed in most server installations.

**Current**: [phusion/baseimage:0.9.19](https://github.com/phusion/baseimage-docker/tree/rel-0.9.19)

### Erlang/OTP

[Erlang](http://erlang.org) is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.

_This provides the Virtual Machine(VM) on top of which Elixir and Phoenix run_

**Current**: [Erlang/OTP 19.0](https://github.com/erlang/otp/tree/maint-19)

### Elixir

[Elixir](http://elixir-lang.org/) is a dynamic, functional language designed for building scalable and maintainable applications.

Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems, while also being successfully used in web development and the embedded software domain.

**Current**: [Elixir 1.3.1](https://github.com/elixir-lang/elixir/tree/v1.3.1)

### Phoenix
A productive web framework that does not compromise speed and maintainability.

[Phoenix](http://www.phoenixframework.org) leverages the Erlang VM ability to handle millions of connections alongside Elixir's beautiful syntax and productive tooling for building fault-tolerant systems.

_We use Phoenix as our backend programming framework_

**Current**: [Phoenix V1.2.0](http://www.phoenixframework.org/v1.2.0)

### Absinthe

[GraphQL](http://graphql.org) implementation for Elixir, specifically using the packages [Absinthe.Relay](https://github.com/absinthe-graphql/absinthe_relay) and [Absinthe.Plug](https://github.com/absinthe-graphql/absinthe_plug).

**Current versions**:

  >{:absinthe_relay, ["~> 0.9.4"](https://github.com/absinthe-graphql/absinthe_relay/tree/v0.9.4)},
  >{:absinthe_plug, "~> 1.1.3"},

### Node
[Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

_Phoenix relies on Node to compile and handle static assets._

Take a look at [package.json](package.json) to see all NPM packages used in this application.

**Current**: [Node v6.3.1](https://github.com/nodejs/node/tree/v6.3.1)

### Webpack

[webpack](https://webpack.github.io) is a **module bundler**. webpack takes modules with dependencies and generates static assets representing those modules.

_We use this instead of_ **brunch.io** _, which is the default to compile static assets in Phoenix_

Take a look at [webpack.config.js](webpack.config.js) to see how the loaders and plugins are configured to make things work in the front-end.

See [package.json](package.json) to see the current versions of this NPM packages.

### Relay & React

[Relay](https://facebook.github.io/relay/) is a Javascript framework for building data-driven React applications.

[React](https://facebook.github.io/react/) is a Javascript library for building user interfaces.

See [package.json](package.json) to see the current versions of this NPM packages.

## Base Phoenix+Webpack project

Check mix.exs and mix.lock to know Elixir dependencies and package.json to know about Javascript dependencies.

### How it was created

Inside the container in `APP_HOME` directory with command `mix phoenix.new --no-brunch`.

Later on, we've added Webpack and its Babel stuff; loader, presets, polyfill and runtime.

Take a look at **config/dev.exs** to see how we've configured a watcher for `npm start`, this is how you get live reloading when editing files.

### Using

**TODO:** Improve the following explanation
_Because we're not using volumes due to their extremely low performance we had to copy the project files to include them later in the images with the following command_ :

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`


## Issues and Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

Anyways, just create an issue if you have any question or want something but don't know exactly what it is.

## Core Maintainers
From **[Iporaitech](http://www.iporaitech.com)**, a small startup based in Paraguay.
* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)



## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
