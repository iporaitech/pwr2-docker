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

### Node

### Webpack

### Relay & React

See also the [Dockerfile](https://github.com/iporaitech/pwr2-docker/blob/master/Dockerfile).


### How the base Phoenix project was generated

**TODO:** Improve the following explanation
_Because we're not using volumes due to their extremely low performance we had to copy the project files to include them later in the images with the following command_ :

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`

## TODO
### Use from DockerHub

_In the future we might add a mechanism so we can use this project from DockerHub by_

`docker pull iporaitech/pwr2:v0.0.1`

or

build you own image from this one by starting your **Dockerfile** with:

```shell
FROM iporaitech/pwr2:latest
```

_The mechanism would have to generate the base files at container creation time._



## Contributing

We follow **[git flow](http://nvie.com/posts/a-successful-git-branching-model/)** so make your pull requests to the corresponding branch based on if its a **feature**, **hotfix** or **release** issues.

In case of any doubts just ask before.

## Credits

* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)

## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
