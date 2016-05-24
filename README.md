# phoenix-webpack-react-redux (pwr2)

Docker image based on Ubuntu setup with Phoenix+Webpack+Redux+React, with some sugar and conventions to build web applications.

**TODO:** Improve the following explanation
_Because we're not using volumes due to their extremely low performance we had to copy the project files to include them later in the images with the following command_ :

`rsync -rav -e "ssh -p2224 -i insecure_key" --exclude "_build" --exclude "deps" root@localhost:/home/app/webapp/* .`

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

## Usage

### Get the image from Docker Hub
> TODO

### Build Instructions
> TODO

## Contributing
About the process of accepting changes.

## Credits
* [Hisa Ishibashi](https://github.com/hisapy)
* [Edipo Da Silva](https://github.com/edipox)
* [Tania Paiva](https://github.com/taniadaniela)

## License
This project is licensed under [MIT](https://github.com/iporaitech/pwr2-docker/blob/master/LICENSE).
