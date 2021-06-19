#!/usr/bin/env node

const parseGitUrl = require('git-url-parse')
const pathLib = require('path')
const childProcess = require('child_process')

const url = process.argv[2] || ''
if (url.length === 0) {
  console.error('No URL specified!')
  process.exit(1)
}

const parsed = parseGitUrl(url)
const path = pathLib.join(
  parsed.resource,
  parsed.owner,
  parsed.name
)

childProcess.execSync(`git clone ${url} ${path}`)