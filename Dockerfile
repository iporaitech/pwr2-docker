FROM ubuntu:16.04
RUN apt-get update && apt-get install -y apt-utils curl wget git make inotify-tools

# Elixir requires UTF-8
RUN locale-gen en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Set basic ENV vars
ENV HOME=/root TERM=xterm-color
WORKDIR $HOME

# Download and install Erlang and Elixir
RUN wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb \
  && dpkg -i erlang-solutions_1.0_all.deb \
  && apt-get update \
  && apt-get install -y esl-erlang elixir

# Install Phoenix and its dependencies
ENV PHOENIX_VERSION 1.1.4
RUN mix local.hex
RUN mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new-$PHOENIX_VERSION.ez

# Create app user and set WORKDIR to its home dir
RUN adduser --ingroup staff --disabled-password --gecos "" app
ENV APP_HOME=/home/app/webapp
WORKDIR $APP_HOME

# Install Node.js
ENV NODE_VERSION_MAJOR 6
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION_MAJOR.x | bash - && apt-get install -y nodejs


MAINTAINER Iporaitech <hisa@iporaitech.com>
