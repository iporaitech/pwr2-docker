# phoenix-webpack-react-redux (pwr2)

Docker image based on Ubuntu setup with Phoenix+Webpack+Redux+React, with some sugar and conventions to develop and build web applications.

## Usage Instructions

Clone this repo to your local and start your own Docker image from these. You might want to watch this repo so you don't miss upgrades or releases you might to apply to your own projects.

**Notice:** Tags/Releases in GitHub are the equivalent to tags in DockerHub repository, master is the **latest** image in DockerHub.

### Use from DockerHub (TODO)

_In the future we might add a mechanism so we can use this project from DockerHub by_

`docker pull iporaitech/pwr2:v0.0.1`

or

build you own image from this one by starting your **Dockerfile** with:

```shell
FROM iporaitech/pwr2:latest
```

_The mechanism would have to generate the base files at container creation time._

###

## About the technology stack

Following a brief description of major components of this technology stack. For more details take a look into the [Dockerfile](https://github.com/iporaitech/pwr2-docker/blob/master/Dockerfile).

### Baseimage-docker

_A minimal Ubuntu base image modified for Docker-friendliness_. This is the base Ubuntu image for this images (see `FROM` in the Dockerfile). It provides a **correct** init process, syslog-ng, logrotate among other stuff needed in most server installations.

**Current**: [phusion/baseimage:0.9.18](https://github.com/phusion/baseimage-docker/tree/rel-0.9.18)

### Erlang

The programming language

### Phoenix

The programming framework

### Elixir
### Node
### Webpack
### React
### Redux

### How the base Phoenix project was generated

**TODO:** Improve the following explanation
_Because we're not using volumes due to their extremely low performance we had to copy the project files to include them later in the images with the following command_ :

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`


## Contributing
About the process of accepting changes.

## Credits
* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)

## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
