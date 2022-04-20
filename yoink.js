#!/usr/bin/env node

const parseGitUrl = require('git-url-parse')
const pathLib = require('path')
const childProcess = require('child_process')

// I hate Node's child process APIs but I sure as hell aren't pulling in execa for this.
const exec = (cmd, ...opts) => new Promise((resolve, reject) => {
  const proc = childProcess.spawn(cmd, opts)
  proc.stdout.pipe(process.stdout)
  proc.stderr.pipe(process.stderr)
  proc.once('exit', (code) => {
    if (code === 0) {
      resolve()
    } else {
      reject(new Error(`Command '${cmd}' exited with code ${code}`))
    }
  })
})

const url = process.argv[2] || ''
if (url.length === 0) {
  console.error('No URL specified!')
  process.exit(1)
}

const parsed = parseGitUrl(url)
const path = pathLib.join(
  process.env.GIT_YOINK_ROOT || '',
  parsed.resource,
  parsed.owner,
  parsed.name
)

exec('git', 'clone', url, path)
  .then(() => {
    if (process.env.GIT_YOINK_REGISTRY)
      return exec(...process.env.GIT_YOINK_REGISTRY.split(' '), path)
  })
  .catch((err) => {
    console.log()
    console.error(err.message)
    process.exit(1)
  })