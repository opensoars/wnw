wnw
===

[![Build Status](https://img.shields.io/travis/opensoars/wnw.svg?style=flat)](https://travis-ci.org/opensoars/wnw)

Watch Node-Webkit projects for automatic restarts

---

## What is Watch Node-Webkit (wnw)?
It's a simple application that will watch a Node-Webkit project folder and automaticly refreshes the whole Node-Webkit instance. It will shut down the current Node-Webkit and start a new one. This will ensure everything is restarted. An example is reading the `package.json` file.


## Dependencies
* [Node.js](http://nodejs.org/)
* [ezlog](https://github.com/opensoars/ezlog)
* [opensoars_cls](https://github.com/opensoars/cls)
* [node-watch](https://github.com/yuanchuan/node-watch)


## Install
Clone repository source code or run `npm install wnwn -g`. Make sure it works by typing `wnw` in your terminal.


## Use
Go to your project directory in your terminal and type `wnw`. This should launch your Node-Webkit project. If you update the source code in the folder wnw is watching, it will refresh for you!


## Todo
* Write tests
* Reach 100% coverage
* Make travis build this project
* Better Linux support