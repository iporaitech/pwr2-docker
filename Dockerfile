FROM phusion/baseimage:0.9.19

# Set basic ENV vars
ENV HOME=/root TERM=xterm-color

# Elixir requires UTF-8
RUN locale-gen en_US.UTF-8
ENV LANG=en_US.UTF-8 \
  LANGUAGE=en_US:en \
  LC_ALL=en_US.UTF-8

WORKDIR $HOME

# Use baseimage-docker's init process.
CMD ["/sbin/my_init"]

# Install packages needed later
RUN apt-get update && apt-get install -y wget git inotify-tools postgresql-client build-essential

# Download and install Erlang and Elixir
RUN wget https://packages.erlang-solutions.com/erlang-solutions_1.0_all.deb \
  && dpkg -i erlang-solutions_1.0_all.deb \
  && apt-get update \
  && apt-get install -y esl-erlang elixir
RUN rm erlang-solutions*.deb

# Install Node.js
ENV NODE_VERSION_MAJOR=6
RUN curl -sL https://deb.nodesource.com/setup_$NODE_VERSION_MAJOR.x | bash - && apt-get install -y nodejs

# Install Yarn
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

# Create app user and set WORKDIR to its home dir
RUN adduser --ingroup staff --disabled-password --gecos "" app
ENV APP_HOME=/home/app/pwr2
RUN mkdir $APP_HOME
WORKDIR $APP_HOME

# Install Hex, Phoenix and Rebar
ENV PHOENIX_VERSION=1.2.0
RUN setuser app mix local.hex --force
RUN setuser app mix archive.install --force https://github.com/phoenixframework/archives/raw/master/phoenix_new-$PHOENIX_VERSION.ez
RUN setuser app mix local.rebar --force

# Copy umbrella mix.exs / mix.lock
ENV APP_MIX_DEPS_DIR /home/app/mix_deps
RUN mkdir $APP_MIX_DEPS_DIR
RUN cd $APP_HOME && ln -s $APP_MIX_DEPS_DIR deps
COPY mix.exs mix.lock $APP_HOME/

# Copy config for some packages like Guardian that config to compile
RUN mkdir $APP_HOME/config
COPY config $APP_HOME/config/

# Set ownership and permissions
RUN chown -R app:staff /home/app && chmod -R g+s /home/app

# Install Elixir deps for all apps inside the umbrella project
RUN setuser app mix do deps.get --force, deps.compile

#
# Install package.json to build the Front end.
#
# Set PATH so we can install node_modules outside of sources (mounted) dir and
# to allow npm find the bin(s) to execute npm commands later.
COPY ./apps/star_wars/package.json $APP_HOME/star_wars
COPY ./apps/star_wars/yarn.lock $APP_HOME/star_wars
COPY ./apps/core/package.json $APP_HOME/core
COPY ./apps/core/yarn.lock $APP_HOME/core
ENV PATH="/home/app/node_modules/.bin:$PATH"

# Create shared node_modules for all the apps inside the umbrella
RUN mkdir /home/app/node_modules \
  && ln -s /home/app/node_modules $APP_HOME/apps/core/node_modules
  && ln -s /home/app/node_modules $APP_HOME/apps/star_wars/node_modules

# Install NPM dependencies for each app inside the umbrella
RUN cd $APP_HOME/apps/star_wars/ && yarn install
RUN cd $APP_HOME/apps/core/ && yarn install

# Install useful pkg to check npm dependencies.
# TODO: research for a yarn equivalent of npm-check
RUN cd $APP_HOME && yarn install -g npm-check

# Copy sources
COPY . $APP_HOME

# Re RUN this to make sure all the stuff we've put in app have the right permissions
RUN chown -R app:staff /home/app && chmod -R g+s /home/app

# Uninstall some "heavy" packages and clean up apt-get
RUN apt-get remove build-essential -y
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Enable SSH (Authorized keys must be copied in each specific project/environment)
RUN rm -f /etc/service/sshd/down
RUN /etc/my_init.d/00_regen_ssh_host_keys.sh

# Make mix don't ask for deps.compile again when starting container
# See: https://github.com/elixir-lang/elixir/issues/5130
RUN rm -rf deps/*/.fetch

MAINTAINER Iporaitech
