# Expense tracker

<p>
  <a href=""><img src="https://img.shields.io/azure-devops/build/rustwasm/gloo/6.svg?style=flat-square" alt="Build Status" /></a>
  <a href=""><img src="./badges/badge-functions.svg" alt="Coverage functions Status" /></a>
  <a href=""><img src="./badges/badge-lines.svg" alt="Coverage lines Status" /></a>
  <a href=""><img src="./badges/badge-statements.svg" alt="Coverage functions Status" /></a>
</p>

## Table of Contents

- [About](#about)
  - [Built with](#built-with)
- [License](#license)
- [Getting started](#getting-started)
  - [Local installing](#local-installing)
  - [Setting up your firebase](#setting-up-firebase)

## About <a name="about"></a>

This app was inspired by [zenmoney](https://zenmoney.ru/). It is a simple expense tracker app which allows you to add and edit your transactions in order to keep track of your budget. The app has a responsive design so you can use it on all devices.

### Built with <a name="built-with"></a>

[![Built with](https://skillicons.dev/icons?i=ts,jest,sass,react,redux,webpack,bootstrap,firebase)](https://skillicons.dev)

## Getting started <a name="getting-started"></a>

This app has already been deployed via github pages. You can try out the app [here](https://ivan-pl.github.io/expense-tracker-front).

### Local installing <a name="local-installing"></a>

If you would like to run this app locally you should:

1. Clone repo

```
git clone https://github.com/ivan-pl/expense-tracker-front.git
```

2. Install dependencies

```
npm install
```

3. Run

```
npm start
```

### Setting up your <a name="setting-up-firebase"></a>firebase setting-up-firebase

In order to set up the app for your firebase instance you need:

1. Create your firebase project and instantiate an app to get web config. All instructions you will find [here](https://firebase.google.com).
2. Add Firebase Realtime Database and change rules to:

```
{
  "rules": {
    "metadata": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "false",
      }
    },
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

3. Add Authentication and allow auth via email/password:
4. Edit configuration file with your config:

```
src/app/firebase-config.ts
```

5. Set new url for your Firebase Realtime Database here:

```
src/api/variables.ts
```

6. Run 🤗

## License <a name="license"></a>

[![MIT License][license-shield]][license-url]

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
