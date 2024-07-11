---
title: Course Setup
description: This activity will have you create a Github repository that will be used to keep track of the code we write, and be used for hosting our pages as well.
time: 15 minutes
---

## **01** Check to make sure you have git installed.

Begin by opening up a command prompt for your operating system. The easiest way to do this would be to open VS Code and open a terminal (ctrl + ~). Enter the following:

```bash
 git
```

You should see some instructions as a result. If you see an error then follow [these git installation instructions](https://byui-cit.github.io/learning-modules/modules/general/hosting-git-gihub/ponder1/)

## **02** Install NodeJs

Next, we need to install NodeJs. NodeJs is a runtime environment that will allow us to run tools that will help us with our development.

Follow the instructions for your operating system found here: [Node Installation](https://byui-cit.github.io/learning-modules/modules/general/node-installation/)

## **03** Copy the starter project for the individual project.

Create a new folder to hold the work you will perform this semester called `wdd231`.

Visit this [template repository](https://github.com/matkat99/nps). Make sure that you are logged into Github, and press the "Use this template" button in the top right corner of the page. Then select "Create a new repository" and give it a name. You can keep the same name if you would like. This will create a copy of the repository in your account for you to use.

Next get the URL for the new repository (Green "Code" button.) then open a new window in VS Code (File->New Window). You should see a link that says: "Clone Git Repository..." Click it and paste in the URL you got from Github. It will ask you where you want to store the repository files on your computer, select the `wdd231` folder you created earlier.

After it is done cloning, VS Code will ask if you want to open the repository, say yes.

## **03** Configure Netlify

 We will be using a product called Netlify to host our site. Create an account there and login (I would recommend just using the Github button).

 After logging in you need to add a new site. Click on the "Add New Site" button and select "Import an Existing Project". Connect to your Github account using the "Github" button. You should see a list of repositories on your account. Find the one that contains the NPS project.

 Select the "main" branch. Then in the "build command" box enter `npm run build`. Then "Deploy Site". Netlify will produce a randomized URL for the site that you need to remember. Copy it and put it somewhere you can find it easily. This is the link to your "production" site and is the one you will be turning in. (You could even put this into the Readme.md file to make it easy to find!)

> The build version of the site will be considered the production version. This should always work! The instructor should be able to go to that address at any time and not see any errors. Netlify will update your site everytime it sees a change to the "main" branch. So after committing you should probably go check Netlify to make sure nothing broke.
