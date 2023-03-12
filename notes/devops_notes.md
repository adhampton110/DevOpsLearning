# DevOps Overview

- Software development methodology that impacts the culture, practices and tools of software development.
- Companies must transform in how they build and deliver software. Software is an integral component of every part of a business.

## Benefits

- **Speed**: Move at high velocity so you can innovate for customers faster, adapt to changing markets better, and grow more efficient at driving business results
- **Rapid Delivery**: Increase the frequency & pace of releases so you can innovate and improve your product faster. The quicker you can release new features and fix bugs, the faster you can respond to customers’ needs.
- **Reliability**: Ensures the quality of application updates and infrastructure changes.
- **Scale**: Operate & manage infrastructure & development processes at scale. Automation & consistency help manage complex or varying systems efficiently and with reduced risk.
- **Improved Collaboration**: Developers and operation teams collaborate closely, share responsibilities, and combine their workflows. This, in turn, reduces inefficiencies and saves time.
- **Security**: You can adopt a DevOps model without sacrificing sacrificing security by using automated compliance policies, find-grained controls, and configuration management techniques.

## DevOps Stages

- The following stages are not implemented sequentially:
- **Plan**
    - Infrastructure, resources, and technologies are determined.
    - Outcome: Plans of actions and a roadmap for the product/service are created
- **Code**
    - Development of the product/service based on the features from the roadmap occurs
    - Outcome: Collection of code blocks come from various developer
- **Build**
    - Developers add their code to a centralized repository.
    - Automated testing tools are used to find bugs, errors, and any other issues. These can be can be corrected before moving to integration or QA testing.
    - Outcome: A build of the software
- **Testing**
    - Build is deployed in a testing environment
    - Automated testing tools are used to test for security, performance and infrastructure changes
    - Outcome: A release of the software. The release is deployed to the production environment. Automation can be used to ensure the availability of the product/service.
- **Deploy**
    - End-users have full access to the product.
    - Outcome: A live application
- **Operate**
    - Feedback loops for end-users are setup to collect data on the application’s utilization, performance.
    - Outcome: Looking for areas to continuously improve the application.
- **Monitor**
    - Operational data is collected and analyzed as feedback into the plan stage for the next iteration through the DevOps lifecycle.

## DevOps Practices

- The following are “best practices” incorporated in a DevOps environment.
- **Continuous Integration (CI)**
    - Software development practice where developers regularly merge their code changes into a central repository, after which automated builds and tests are run.
    - The goal is to find and address bugs quicker, improve software quality, and reduce the time it takes to validate & release new software updates
- **Continuous Delivery (CD)**
    - Software development practice where code changes are automatically built, tested, and prepared for a release to production.
    - Code changes are deployed to a test environment after the build stage.
- **Microservices**
    - Design approach to build a single application as a set of small services.
    - Microservices are built around business capabilities; each service is scoped to a single purpose.
- **Infrastructure as Code**
    - **Infrastructure** refers to the tools, processes, and environments used to create software applications.
    - Practice in which infrastructure is provisioned and managed using code and software development techniques, such as version control and continuous integration
    - Developers and system administrators can interact with infrastructure programmatically, and at scale, instead of needing to manually set up and configure resources.
- **Monitor and Logging**
    - Metrics and logs are monitored to see how an application and infrastructure’s performance impacts the experience of their product’s end user.
    - Capturing these events allows organizations to understand how changes or updates impact users.

## Toolchains

- No two enterprises implement DevOps nor have the exact same toolchain.
    - **Toolchains** are the combination of tools used during each stage of the DevOps Lifecycle
- The DevOps Toolchain is used to shorten and automate tasks for the stages of the DevOps lifecycle.
- The following represent some commonly used tools:
    - Plan: Jira, Trello, ProjectTracker, git
    - Code: Eclipse, Intellij, Github, Gitlab, Bitbucket
    - Build: Grade, Maven, Packer, Puppet, Chef, Ansible
    - Test: Junit, Selenium, Vagrant, Applitools
    - Release: Jenkins, Travis, Circle CI
    - Deploy: Puppet, Chef, Jenkins, Ansible, Docker, Kubernetes, Terraform, AWS Cloud Formation
    - Operate: Docker, Kubernetes, Terraform, AWS Cloud Formation
    - Monitor: Splunk, AWS Cloud Watch, New Relic