# Job Portal

This is a sample job portal project.

## dependencies
This project will require following dependencies to be installed on your system

- [ ] nodejs
- [ ] yarn package manager
- [ ] browser
- [ ] active internet connection

## Setup

clone this project to you local using the following command

```bash
$ git clone https://github.com/iyogeshjoshi/jobPortal.git <path/on/your/machine>
```

once it is cloned execute the following commands to install and run it

```bash
$ cd <path/to/root>
# installs dependencies
$ yarn install

# build prod build
$ yarn build

# runs on your system (needs internet)
$ npx serve -s build
```

then open [http://localhost:5000](http://localhost:5000) to run it on any browser.

## running test
Execute the following command to run tests
```bash
$ yarn test
```