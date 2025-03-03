# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

Project structure:

app.json: 
Contains the configuration options for the project, and is called the app config. These options change the behavior of your proejct while you are building, updating or submitting your project.
expo object: route object containing all the app configuration
 - name - project name - homescreen or applist
 - slug - unique id used by expo, used for defining url of your project
 - userInterfaceStyle - light, dark or automatic
 - newArchEnabled - uses newer versions of react native for better performance. Bridgless architecture. Before we needed a bridge between JS and native mobile app code. This led to issues. New architecture react native allows communication without the bridge and removes performance issues.



package.json: 
This file contains the project dependencies, scripts, metadata

tsconfig.json:
This file contains the rules that typescript will use to ensure typesafety throughout the project 

.gitignore:
files which are ignored

app folder:
routing functionality similar to Next.JS. There is a tabs group which has more files.
