# phoenix-webpack-relay-react (pwr2)

Docker image based on Ubuntu setup with Phoenix+Webpack+Relay+React, with some sugar and conventions to develop and build web applications.

## Usage Instructions

Clone this repo to your local and start your own Docker image from these files. You might want to watch this repo so you don't miss upgrades or releases you might to apply to your own projects.

**Notice:** Tags/Releases in GitHub are the equivalent to tags in DockerHub repository, master is the **latest** image in DockerHub.

## About the technology stack

Following a brief description of major components of this technology stack.

### Baseimage-docker

_A minimal Ubuntu base image modified for Docker-friendliness_. This is the base Ubuntu image for this images (see `FROM` in the Dockerfile). It provides a **correct** init process, syslog-ng, logrotate among other stuff needed in most server installations.

**Current**: [phusion/baseimage:0.9.19](https://github.com/phusion/baseimage-docker/tree/rel-0.9.19)

### Erlang/OTP

Erlang is a programming language used to build massively scalable soft real-time systems with requirements on high availability. Some of its uses are in telecoms, banking, e-commerce, computer telephony and instant messaging. Erlang's runtime system has built-in support for concurrency, distribution and fault tolerance.

_This provides the Virtual Machine(VM) on top of which Elixir and Phoenix run_

**Current**: [Erlang/OTP 19.0](https://github.com/erlang/otp/tree/maint-19)

### Elixir

Elixir is a dynamic, functional language designed for building scalable and maintainable applications http://elixir-lang.org/.

Elixir leverages the Erlang VM, known for running low-latency, distributed and fault-tolerant systems, while also being successfully used in web development and the embedded software domain.

**Current**: [Elixir 1.3.1](https://github.com/elixir-lang/elixir/tree/v1.3.1)

### Phoenix
A productive web framework that does not compromise speed and maintainability.

Phoenix leverages the Erlang VM ability to handle millions of connections alongside Elixir's beautiful syntax and productive tooling for building fault-tolerant systems.

_We use Phoenix as our backend programming framework_

**Current**: [Phoenix V1.2.0](http://www.phoenixframework.org/v1.2.0)

### Absinthe

GraphQL implementation for Elixir, specifically using the packages [Absinthe.Relay](https://github.com/absinthe-graphql/absinthe_relay) and [Absinthe.Plug](https://github.com/absinthe-graphql/absinthe_plug).

**Current versions**:

  >{:absinthe_relay, ["~> 0.9.4"](https://github.com/absinthe-graphql/absinthe_relay/tree/v0.9.4)},
  >{:absinthe_plug, "~> 1.1.3"},

_Note that these packages are under active development_

### Node

**NPM NOTICE**: In the container **node_modules/** directory is placed in **/home/app/node_modules/** because if in /home/app/webapp in this directory is mounted (see docker-compose.yml) for development, then the modules would dissappear because they don't exists localhost.

Considering the above NOTICE, to install a new npm module inside the container

```bash
$ cd /home/app
$ cp webapp/package.json . # if not already there
$ npm install --save && cp package.json webapp/ # If package is meant to be installed as dependency
$ npm install --save-dev && cp package.json webapp/ # If package is meant to be installed as devDependency
```


### Webpack


### Relay & React

See also the [Dockerfile](https://github.com/iporaitech/pwr2-docker/blob/master/Dockerfile).


## Base Phoenix project

### How it was created

### Using

**TODO:** Improve the following explanation
_Because we're not using volumes due to their extremely low performance we had to copy the project files to include them later in the images with the following command_ :

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`


## Issues and Contributing

In this repo we follow the conventions defined in Vincent Driessen's **[git branching model](http://nvie.com/posts/a-successful-git-branching-model/)**. See **[git-flow](https://github.com/nvie/gitflow)** if you want some git extensions to help you with the mentioned model.

We try to use [Semantic Versioning](http://semver.org) and **Scrum** in our software development processes as much as possible. The [issues](https://github.com/iporaitech/pwr2-docker/issues) are grouped into [milestones](https://github.com/iporaitech/pwr2-docker/milestones) and most of the times will be labeled as: **Feature**, **Bug**, **Task**.  

A milestone can be either a **Release** or a **Hotfix**. A **Release** must increment the MINOR version number and usually corresponds to the work (issues) done in 1 sprint. A **Hotfix** must increment the PATCH version number and usually contains **Bug** fixes. Name milestones prefixing with the work **Release** or **Hotfix** accordingly.

The title of a an issue that is expected to be treated as a **Feature** must be prefixed with **FEATURE:**, i.e., **FEATURE: Login with Facebook**; and its specification/request is expected to be written in **[Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)** and be described using the template:

```gherkin
  As a <type of user>,
  I want <some goal>
  so that <some reason>.
```

A **Task** is something that is not complex enough to be defined as a **Feature**. For example, changing a text, fixing a typo, or other _relatively minor tasks_.

The title of a an issue that is expected to be treated as a **BUG** must be prefixed with **BUG:**, i.e., **BUG: Wrong new notifications count**.

Submit your pull requests to the corresponding branch according to the branching model mentioned at the beginning of this section.

Just create an issue if you have any question.

## Credits

* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)

## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
