FROM phusion/baseimage:0.9.19

# Set basic ENV vars
ENV HOME=/root \
  TERM=xterm-color \
  NODE_VERSION_MAJOR=6 \
  PHOENIX_VERSION=1.2.0

# Elixir requires UTF-8
RUN locale-gen en_US.UTF-8
ENV LANG=en_US.UTF-8 \
  LANGUAGE=en_US:en \
  LC_ALL=en_US.UTF-8

WORKDIR $HOME

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Install packages needed later
RUN apt-get update && apt-get install -y wget git inotify-tools postgresql-client

# Download and install Erlang and Elixir
RUN wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb \
  && dpkg -i erlang-solutions_1.0_all.deb \
  && apt-get update \
  && apt-get install -y esl-erlang elixir

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION_MAJOR.x | bash - && apt-get install -y nodejs

# Create app user and set WORKDIR to its home dir
RUN adduser --ingroup staff --disabled-password --gecos "" app
ENV APP_HOME=/home/app/webapp
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Install Hex, Phoenix and Rebar
RUN setuser app mix local.hex --force
RUN setuser app mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new-$PHOENIX_VERSION.ez
RUN setuser app mix local.rebar --force

# Install dependencies in mix.exs / mix.lock
ENV APP_MIX_DEPS_DIR /home/app/mix_deps
RUN mkdir $APP_MIX_DEPS_DIR
RUN cd $APP_HOME && ln -s $APP_MIX_DEPS_DIR deps
COPY mix.exs mix.lock $APP_HOME/
RUN chown -R app:staff /home/app && chmod -R g+s /home/app
RUN setuser app mix do deps.get --force, deps.compile

# Install package.json to build the Front end.
# Set PATH so we can install node_modules outside of sources (mounted) dir and to allow npm find the bin(s) to execute npm commands later.

COPY package.json $APP_HOME/
ENV PATH="/home/app/node_modules/.bin:$PATH"
RUN mkdir /home/app/node_modules \
  && ln -s /home/app/node_modules $APP_HOME/node_modules
RUN cd $APP_HOME && npm install && npm prune

# Copy sources
COPY . $APP_HOME

# Re RUN this to make sure all the stuff we've put in app have the right permissions
RUN chown -R app:staff /home/app && chmod -R g+s /home/app

# Clean up apt-get
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Enable SSH (Authorized keys must be copied in each specific project/environment)
RUN rm -f /etc/service/sshd/down
RUN /etc/my_init.d/00_regen_ssh_host_keys.sh

MAINTAINER Iporaitech
