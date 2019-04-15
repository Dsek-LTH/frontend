# Development

## Prerequisites
* npm & node, for guide see https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* [docker and docker-compose](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
* [an ssh key registered with your Github account](https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account)

## Setup
When cloning the repository, clone with the `--recurse-submodules` flag to clone down the backend submodule as well. If you cloned normally, you can fix it after the fact with `git submodule update --init --recursive`. If this is not working, it may be because you do not have an ssh key registered with Github.

run `npm install`

## Available Scripts
`npm start` - Runs react dev server and docker-composes back-end in parallel. You may have to run with `sudo`.

`npm start-user-def` - Runs react dev server with user specified docker-compose file. Path uses environment variable $GATEWAY_PATH.

`npm start-use-existing` - Runs react dev server with existing back-end already running.

# Contribute
TODO

# Deployment
TODO

# Linter
TODO

# Folder Structure Description
TODO
