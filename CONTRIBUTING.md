# How to contribute

We **try** to use [Semantic Versioning](http://semver.org) and some sort of **Kanban** in our software development processes _as much as possible_. The [issues](https://github.com/iporaitech/pwr2-docker/issues) are grouped into [milestones](https://github.com/iporaitech/pwr2-docker/milestones) and most of the times will be labeled as: **Feature**, **Bug**, **Task**.

A milestone can be either a **Release** or a **Hotfix**. A **Release** must increment the MINOR version number and usually corresponds to the work (issues) done in 1 sprint. A **Hotfix** must increment the PATCH version number and usually contains **Bug** fixes. We name milestones prefixing the name with the word **Release** or **Hotfix** accordingly.

If you're in our organization and have rights to push to this repository, we recommend creating a branch **per issue** using the following naming conventions:

1. Start the branch name with the issue number, i.e.: 23-fix-logout-error.
2. If the issue is labeled with **Feature** add `-feature-` after the issue number, i.e.: 23-feature-login-with-facebook.
3. If you need to do some work specific for a **release** or a **hotfix** create a corresponding branch, i.e.: **release-v0.5.0** or **hotfix-v0.5.1**

If you don't have rights to push directly to this repo but still want to contribute, just send us a pull request to master, explaining in it what issues it solves.

Always try to write meaningful commit messages referencing/closing issues.

We use **master** for our main/default branch.  When a pull request is accepted, we rebase it to master so we can keep a linear history. When we have code ready to be release to "production", we create an annotated tag  `git tag ...` which can be seen in the [releases](https://github.com/iporaitech/pwr2-docker/releases) section of this repo. This section also serves as our CHANGELOG.

A **Task** is something that is not complex enough to be defined as a **Feature**. For example, changing a text, fixing a typo, or other _relatively minor tasks_.

Last but not least, [stop using `git pull`](https://adamcod.es/2014/12/10/git-pull-correct-workflow.html)
