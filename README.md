#  unskool
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](http://standardjs.com/)

* Standard compliant React Native App Utilizing [Ignite](https://github.com/infinitered/ignite)

## :arrow_up: How to Setup

**Step 1:** git clone this repo:

**Step 2:** cd to the cloned repo:

**Step 3:** 

1. nvm install 10.0.0

2. modify runIos.js

3. RCTModuleMethod.mm add the following line 93

         RCTReadString(input, "__attribute__((__unused__))") ||

Install the Application with `yarn` or `npm i`


## :arrow_forward: How to Run App

1. cd to the repo
2. Run Build for either OS
  * for iOS
    * run `react-native run-ios`
  * for Android
    * Run Genymotion
    * run `react-native run-android`

## :no_entry_sign: Standard Compliant

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
This project adheres to Standard.  Our CI enforces this, so we suggest you enable linting to keep your project compliant during development.

**To Lint on Commit**

This is implemented using [husky](https://github.com/typicode/husky). There is no additional setup needed.

**Bypass Lint**

If you have to bypass lint for a special commit that you will come back and clean (pushing something to a branch etc.) then you can bypass git hooks with adding `--no-verify` to your commit command.

**Understanding Linting Errors**

The linting rules are from JS Standard and React-Standard.  [Regular JS errors can be found with descriptions here](http://eslint.org/docs/rules/), while [React errors and descriptions can be found here](https://github.com/yannickcr/eslint-plugin-react).

## :closed_lock_with_key: Secrets

This project uses [react-native-config](https://github.com/luggit/react-native-config) to expose config variables to your javascript code in React Native. You can store API keys
and other sensitive information in a `.env` file:

```
API_URL=https://myapi.com
GOOGLE_MAPS_API_KEY=abcdefgh
```

and access them from React Native like so:

```
import Secrets from 'react-native-config'

Secrets.API_URL  // 'https://myapi.com'
Secrets.GOOGLE_MAPS_API_KEY  // 'abcdefgh'
```

The `.env` file is ignored by git keeping those secrets out of your repo.

### Get started:
1. Copy .env.example to .env
2. Add your config variables
3. Follow instructions at [https://github.com/luggit/react-native-config#setup](https://github.com/luggit/react-native-config#setup)
4. Done!


### appcenter setup

1. `$ npm install -g appcenter-cli`

2. `$ npm install -g code-push-cli`

3. type this to command line `appcenter login`

4. create app to appcenter by typing this command to command line

  `appcenter apps create -d <appDisplayName> -o <operatingSystem>  -p <platform>` 
    appDisplayName = unskool
    operatingSystem = Android OR iOS
    platform = React-Native

5. deploy changes using this command

    # for staging
    `appcenter codepush deployment add -a <ownerName>/<appName> Staging`

    # for production
    `appcenter codepush deployment add -a <ownerName>/<appName> Production`


please once check this link for more info
https://docs.microsoft.com/en-us/appcenter/distribution/codepush/cli



## Code Setup ##

1. Install node dependancy 

    ```
    $ npm i
    ```

2. pod install 

    ``` 
    $ cd ios
    $ pod install 
    ```

3. run in ios device

    ```
    $ react-native run-ios
    ```

4. run in android device

    ```
    $ react-native run-android
    ```


## Version ##

```
Node : 12.16.3
npm  : 6.14.4
pod  : 1.9.1
```