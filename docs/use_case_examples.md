# Use Case examples.

Here we will provide some examples on how to pwr2-docker your project.

## Add pwr2-docker to a recently started project.

You can add stuff from **pwr2-docker** in your project by performing the following procedure.

1. Add **pwr2-docker** as a remote in your local git repository

  `git remote add pwr2 git@github.com:iporaitech/pwr2-docker.git`

2. Fetch **pwr2-docker** repo to your local

  `git fetch pwr2`

3. Now, you can merge the pwr2 branch you want into your project. For example:

  ```
  # Squash commits so you don't pollute your project's history
  git merge --squash pwr2/master

  # Resolve possible conflicts
  git commit -m "Start base system from pwr2-docker/master"
  ```

4. Adjust your **docker-compose.yml** and follow the usage instructions in the README.

That's it. Now you'll have a working base system based on the technologies in **pwr2-docker**.


## Update your pwr2-docker based project.
> TODO

## Add specific pwr2-docker stuff into your project.
> TODO (maybe here we'll explain how to cherrypick specific commits)
