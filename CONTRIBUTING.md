# How to contribute

In this repo we follow the conventions defined in Vincent Driessen's **[git branching model](http://nvie.com/posts/a-successful-git-branching-model/)**. See **[git-flow](https://github.com/nvie/gitflow)** if you want some git extensions to help you with the mentioned model.

We **try** to use [Semantic Versioning](http://semver.org) and **Scrum** in our software development processes _as much as possible_. The [issues](https://github.com/iporaitech/pwr2-docker/issues) are grouped into [milestones](https://github.com/iporaitech/pwr2-docker/milestones) and most of the times will be labeled as: **Feature**, **Bug**, **Task**.  

A milestone can be either a **Release** or a **Hotfix**. A **Release** must increment the MINOR version number and usually corresponds to the work (issues) done in 1 sprint. A **Hotfix** must increment the PATCH version number and usually contains **Bug** fixes. Name milestones prefixing with the work **Release** or **Hotfix** accordingly.

The title of a an issue that is expected to be treated as a **Feature** must be prefixed with **FEATURE:**, i.e., **FEATURE: Login with Facebook**; and its specification/request is expected to be written in **[Gherkin](https://github.com/cucumber/cucumber/wiki/Gherkin)** and be described using the template:

```gherkin
  As a <type of user>,
  I want <some goal>
  so that <some reason>.
```

A **Task** is something that is not complex enough to be defined as a **Feature**. For example, changing a text, fixing a typo, or other _relatively minor tasks_.

The title of a an issue that is expected to be treated as a **BUG** must be prefixed with **BUG:**, i.e., **BUG: Wrong new notifications count**.

Submit your pull requests to the corresponding branch according to the branching model mentioned at the beginning of this section.
