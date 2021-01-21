Today, working with a versioning tool is mandatory. Fortunately, many teams use Git, and they adopt a branching model to prevent commons problems of working without one. Quickly people do a very short research in internet and adopts `GitFlow` as branching model. People use to confuse 'GitFlow' with 'Branching model' and use this terms like synonyms. This fact is even more worrying. This is understandable after know that GitFlow was one of the first proposals to use git branches and it has gotten a lot of attention, it is very well documented, and in my opinion, has an excellent marketing strategy.

You should to choose a branching model that adapts better to your project and your process. Usually, people (specially programmers) do not stop to do this and use always the same tool for every project. In most cases is unknow the differences between difference projects. Let's see the common workflows and their applications.

## [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/)
GitFlow is probably the most popular Git branching model in use today. It was created by [Vincent Driessen](https://nvie.com/about/) in 2010 based on [`releases`](https://simple.wikipedia.org/wiki/Software_release_life_cycle) and you should to use it only in certain cases.

### Very large development lifecycles
Applications that have a slow deployment flow, like any operative system adapts perfectly to this flow. For example, Apple release a major version of they OS one a year. The newest [macOS](https://it.wikipedia.org/wiki/MacOS_Catalina) beta version (10.15 Beta 1) on June 3 2019 for developers who participate on the beta program. After that, Apple releases 10 beta versions more. Last one was the macOS 10.15 GM on October 3 2019. Finally, Apple releases for everyone the final and stable version for all users on October 7 2019.

### You have not control of publication
Other example of software that need releases are iOS Apps. In this cases, apps owner do not have control of publication date because the AppStore team need to validate the app before public them and it can take some days. So, app owner send to Apple a release that include all features developed and Apple public the version number in the App Store.

### Multiple online versions
Facebook makes its updates on the platform gradually and incrementally, seeking feedback from the new functionality in a growing group of users until finally it is finally accepted in the main version. In other words, the changes are published first for 10k people, then for 1M and finally if the functionality is accepted, it will be available to everyone.

This implies that Facebook must have at least one version of software for each functionality being evaluated. As a consequence in a single branch version system, it is impossible to carry it forward and a suitable branching model is necessary to maintain the development of many branches in parallel.

### One-time payment model distribution
Many programs are distributed in a one pay model.  For example, PlayStation 4 games, Sibelius, Logic Pro X or some antiviruses. In this cases is it possible to need a post sales support and than can not track the software installed in the client computer. In this cases it is necessary to have a software version number. Maybe developers need to patch something for a particular version or simplier, buyers maybe want a particualar version to have in theirs computers.

[GitHub](https://guides.github.com/introduction/flow/)
GitHub flow is the branching model used inside the GitHub to develop GitHub.com and it is the most extended branching model in the open-source comunity. It was created to satisfy the [continues integration](https://en.wikipedia.org/wiki/Continuous_integration) and the short process development impulsed by the Agile metodology adopted in the company.

### SaaS
Software as a Service is web based, needs frequently updates to be competitive and users do not have to install/updated anything to get the updates. For these reasons, continuous integration and agile methodologies are perfect for SaaS. In fact, GitHub developed this model to be efficient in agile methodologies. Examples of SaaS are Wikipedia.org, Duolingo.com, Mailchimp.com, Armani.com, GitHub.com, Finecobank.com, Wix.com, nytimes.com, any personal or product Website.

### Open-source projects
Lovers of Open Source programs put their code on internet waiting for a community feedback. To collaborate them you should to push your own Pull-Request. Most programmers do not know it, but this is a GitHub flow!  

### Starting projects
GitHub flow is the simplest branching model, and it is perfect to adopt early in your project. The reason to adopt this branching model is that in this kind of project is it not necessary add unnecessary complexity. Keep it simple. Do not adopt difficult branching model if you do not need and remember you can change it in the future.


[GitLab](https://about.gitlab.com/blog/2014/09/29/gitlab-flow/)
GitLab flow was created focusing in the simplicity, but keeping the master branch as stable as possible. It combines feature driven development and feature branches with issue tracking. You should to implement this branching flow when you absolute need stability in your main branch. Usualy this occurs when you are managing huge projects with millions users and you do not can apply the 40min rule.

### Huge projects
Huge projects gets millions of visits a day. For Example, Youtube have 60M visitors a day and this is the most video platform online in the world. Imagine an error that occurs at 0.1% users for only one day: 60k users will be affected. Naturally, is convenient to adopt a very strong branching model to keep project stable. Other examples of huge projects are Amazon, Instagram, Google algorithm and Netflix.

## Donde no se pueda usar la regla de  40min
Many software are incompatible with the [the 40min rule](article/the-40-min-rule). Imagine your are developing a medical software or a driver for an airplane instrument. In these cases, simply you can not restart or fix your bug in less than 40min to update. Even if your bug occurs in the 0.1% of time, there are persons that can dead. You have to be absolutely careful. Example of these critical software are critical bank system, airplane software, medical software, and satellites or car self-driven controller.

## Summary
Use GitHub flow if your have only one version online and your project is not critical, so, in the 99% times.
Use GitLab flow if you are developing an app with millions of users or execution is critical.
Use GitFlow only if your code is having multiple versions in production.
