# phoenix-webpack-relay-react (pwr2)

Docker image based on Ubuntu providing a base setup for a Phoenix+Webpack+Relay+React project, with some sugar and conventions to develop and build your own web applications.

_We will improve docs and code including test coverage in the next releases_

**NOTICE:** The default branch for this repo is **develop**. Check the  [README](https://github.com/iporaitech/pwr2-docker/blob/master/README.md) on master to see what's in the last release.

## Requirements

To run this software you need to install [Docker](https://www.docker.com/) on your system. It is very simple and there are a lot of guides and tutorials out there on the Internet.

>NOTICE: this was only tested in Unix like OS (Mac OS X and Ubuntu) but it should run on Windows without major problems.

## Usage Instructions

With Docker working on localhost, you can setup this project in 2 ways:

1. [Setup cloning this GitHub repo and build the image](#setup-cloning-this-github-repo-and-building-the-image).
2. [Setup pulling Docker image from Docker Cloud repository](#setup-pulling-docker-image-from-docker-cloud-repository).

With all setup, you can start the corresponding containers (_aka services_) by running the following command in your console:

```bash
docker-compose up
```

> you can also just use the [docker-compose.dev.example.yml](docker-compose.dev.example.yml) file directly.

```bash
docker-compose -f docker-compose.dev.example.yml up
```

> add `-d` to the above commands if you want them to execute in background

When the containers are all up and running, you can go inside the web app container and start the web app so you can play with it. To go inside the container execute the following command in the root directory of the project:
> Assuming the files are placed in a directory named **pwr2-docker** and the generated container is named **pwr2docker_web_1**

`docker exec -it pwr2docker_web_1 bash`

> You can see the names of running containers with the command `docker ps` on your localhost

Once inside the container, you'll need to switch to **app** user in order to execute Elixir/Phoenix commands. To switch to **app** user run:

`su app`

> All the stuff in **/home/app** belongs to **app** user. You might experience some errors if you try to execute [Elixir](#elixir) commands as **root**. Take a look at the Dockerfile to see how all the stuff is installed

Once switched to **app** user and in the `APP_HOME` directory, you can:

1. Create and migrate **dev** database: `mix do ecto.create, ecto.migrate`
2. Create and migrate **test** database: `MIX_ENV=mix do ecto.create, ecto.migrate`
3. Run db seeds to create a **superadmin** dev user: `mix run priv/repo/seeds.exs`. Take a look at the seeds file to get the corresponding credentials.
4. Start the application server: `mix phoenix.server`, or if you want to start the server in a Elixir console `iex -S mix phoenix.server`

Now you're ready to start making requests to the web app on the port you specified and [try out some examples](#examples).

### Testing

1. Run all tests `MIX_ENV=test mix espec --trace`.
2. Run tests while coding, for example, to run a specfic spec: `mix test.watch spec/models/user_spec.exs --trace --focus`.

Check [ESpec](https://github.com/antonmi/espec), [ESpec.Phoenix](https://github.com/antonmi/espec_phoenix) and [mix test.watch](https://github.com/lpil/mix-test.watch) to see more info about the testing framework used in this project.

### Stopping containers

Execute `docker-compose stop` in the same directory where you started them with `docker-compose up ...`.

If you want to stop them when running in foreground just press **CTRL+C** once.

### Setup cloning this GitHub repo and building the image

1. Clone the project to your localhost (_you might want to fork it to your account before_)
2. Copy the [docker-compose.dev.example.yml](docker-compose.dev.example.yml) to **docker-compose.yml** and adjust the ports and [volumes](#about-docker-volumes).
3. Build the image. In the root directory of the project execute `docker build .`
4. When the build finishes, **tag** the image to match the _web image_ defined in your **docker-compose** file. For example  `docker tag IMAGE_ID pwr2:latest`

Now you're ready to [start the containers](#usage-instructions) and try some stuff.

### Setup pulling Docker image from Docker Cloud repository

1. Open you console or terminal and execute `docker login`. You might not need this.
2. Pull the image from Docker Cloud. Execute `docker pull iporaitech/pwr2:latest`. You can also search for other **tags** besides latest.
3. Copy the [docker-compose.dev.example.yml](docker-compose.dev.example.yml) to **docker-compose.yml** on your localhost and adjust the ports, [volumes](#about-docker-volumes) and **image** in **web** section to match the image tag you pulled in the step above.

Now you're ready to [start the containers](#usage-instructions) and try some stuff.

Once the containers are up and running you can copy the source code of the base project from the container to your localhost with the following command:

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`

> Assuming you exposed the port 2224 to access the container via SSH

**Notice:** Tags/Releases in this GitHub repo are the equivalent to tags in the Docker Cloud repository, master is the **latest** image in DockerHub.

## Examples

Once all setup and with the app running and assuming your `HTTP_PORT` is 4000, you can:

0. Login with credentials available in [priv/repo/seeds.exs](priv/repo/seeds.exs). Logout is also available.
1. Visit http://localhost:4000/admin/graphiql to access a [GraphiQL](https://github.com/graphql/graphiql) IDE.
2. Visit http://localhost:4000/admin/star-wars to experiment with our implementation of the [Relay Star Wars example](https://github.com/relayjs/relay-examples/tree/master/star-wars). The _[database](./web/graphql/star_wars_db.ex)_ for this example is implemented as an [Elixir.Agent](http://elixir-lang.org/docs/stable/elixir/Agent.html)

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

See [mix.exs](mix.exs) to check current version.

### Absinthe

[GraphQL](http://graphql.org) implementation for Elixir, specifically using the packages [Absinthe.Relay](https://github.com/absinthe-graphql/absinthe_relay) and [Absinthe.Plug](https://github.com/absinthe-graphql/absinthe_plug).

See [mix.exs](mix.exs) to check current versions.

### Node
[Node.js®](https://nodejs.org/en/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

_Phoenix relies on Node to compile and handle static assets._

Take a look at [package.json](package.json) to see all NPM packages used in this application.

**Current**: [Node v6.3.1](https://github.com/nodejs/node/tree/v6.3.1)

### Webpack

[webpack](https://webpack.github.io) is a **module bundler**. webpack takes modules with dependencies and generates static assets representing those modules.

_We use this instead of_ **brunch.io** _, which is the default to compile static assets in Phoenix_

Take a look at [webpack.config.js](webpack.config.js) to see how the loaders and plugins are configured to make things work in the front-end.

See [package.json](package.json) to see the current versions of these NPM packages.

### Relay & React

[Relay](https://facebook.github.io/relay/) is a Javascript framework for building data-driven React applications.

[React](https://facebook.github.io/react/) is a Javascript library for building user interfaces.

See [package.json](package.json) to see the current versions of these dependencies and other NPM packages in this project.

## Base Phoenix+Webpack project

Check mix.exs and mix.lock to know Elixir dependencies and package.json to know about Javascript dependencies.

### How it was created

Inside the container in `APP_HOME` directory with command `mix phoenix.new --no-brunch`.

Later on, we've added Webpack and its Babel stuff; loader, presets, polyfill and runtime.

Take a look at **config/dev.exs** to see how we've configured a watcher for `npm start`, this is how you get live reloading when editing files.

## About Docker Volumes

Although getting better in each release, we still find Docker for Mac volumes to be very slow. That's why we commented out the **volumes** configuration in the **web** section in the **docker-compose.dev.example.yml** file. Obviously, this is not a problem when running Docker on Linux.

Instead of mounting a volume to work with source code on the container we use [Atom](https://atom.io) _IDE_ with the [remote-sync](https://atom.io/packages/remote-sync) plugin. When this plugin is enabled everytime you save a file it gets automatically copied to the container via SSH. Probably, you might find similar or better strategies with your IDE or you local setup.

If you want to try volumes when running the image pulled directly from Docker Cloud, remember to first get the source code of this project into your localhost in the directory you want to share with the container. This is because the volumes are mounted from host to container (HOST:CONTAINER in the volumes definition in the **docker-compose** file). If the file don't exist in your localhost when mounting a dir they won't exist in your container in the specified directory even if they did exist in the image.

## Issues and Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

Anyways, just create an issue if you have any question or want something but don't know exactly what it is.

## Core Maintainers
With love from **[Iporaitech](http://www.iporaitech.com)**, a small startup based in Paraguay.
* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)

## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
