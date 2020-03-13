const core = require('@actions/core');
const github = require('@actions/github');

const pattern = /[A-Z]+-\d+/

const payload = github.context.payload

const title = payload && payload.pull_request && payload.pull_request.title

core.info(title)

if (!pattern.test(title)) core.setFailed(`Pull request title "${title}" does not contain a JIRA issue key.`,)
