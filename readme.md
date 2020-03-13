# Pull Request Title Action

A GitHub Action to ensure a PR title matches a Jira Ticket ID

## Usage

Create a workflow definition at `.github/workflows/pr-title.yml` with the following contents:

```yaml
name: PR Title

on:
  pull_request:
    types: [opened, edited, reopened]

jobs:
  pr-title:
    runs-on: ubuntu-latest
    steps:
    - uses: lendeavor/pr-title-action@v1
```
