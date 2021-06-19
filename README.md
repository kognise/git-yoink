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

although i personally have it aliased to `git get`.

## usage

just use it instead of your normal clone...

```sh
git yoink git@github.com:kognise/water.css.git
```

create an issue if you have any questions!