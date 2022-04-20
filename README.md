# git-yoink

a tiny git utility for golang-style directory structures.

for example, `git@github.com:kognise/water.css.git` will go into the folder structure `github.com/kognise/water.css`. this helps a lot with duplicate names and organization.

## installation

to install...

```sh
# NPM
npm install -g git-yoink

# Yarn v1
yarn global add git-yoink
```

i recommend adding a git alias as well so you can simply run `git yoink`...

```sh
git config --global alias.yoink '!git-yoink'
```

i personally have it aliased to `git get`.

## usage

just use it instead of your normal clone...

```sh
git yoink git@github.com:kognise/water.css.git
```

create an issue if you have any questions!

## config

all configuration is done via environment variables:

- **`GIT_YOINK_ROOT`**

	this is recommended! git-yoink will always clone everything into this directory instead of the working directory.

	example: `/Users/kognise/Documents/Programming/`

- **`GIT_YOINK_REGISTRY`**

	if you use a smart cd command like [zoxide](https://github.com/ajeetdsouza/zoxide/), you can set this to automatically add the cloned directory to make it easier to cd into. the command passed will be called after clone with the directory passed as an argument.

	example: `zoxide add`