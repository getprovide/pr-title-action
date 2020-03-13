const core = require('@actions/core');
const github = require('@actions/github');

const pattern = /[A-Z]+-\d+/

async function run() {
  const token = core.getInput("repo_token", { required: true })
  const client = new github.GitHub(token)

  const pullRequest = github.context.payload.pull_request

  const response = await client.pulls.get({
    owner: pullRequest.base.repo.owner.login,
    repo: pullRequest.base.repo.name,
    pull_number: pullRequest.number
  });

  const title = response.data.title;

  core.info(title)

  if (!pattern.test(title)) core.setFailed(`Pull request title "${title}" does not contain a JIRA issue key.`)
}

run()
