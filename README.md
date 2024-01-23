# react-library-skeleton
This project provide skeleton or template  aim to help people quickly started with creating their own React library (not app)，using:
- build tool: [vite](https://vitejs.dev/guide/) 
- language: [typescript](https://www.typescriptlang.org/)
- css preprocessor: [less](https://lesscss.org/)
- zustand: [zustand](https://github.com/pmndrs/zustand). 

## Usage
### build output
it will build output to `dist` folder. Also make react, react-dom as peer dependencies to the bundle. **If you want add another dependencies, you can add it to `peerDependencies` in package.json and add external to `vite.config.ts`.**

### state management
if you want to use redux, please check [react-redux](https://github.com/reduxjs/react-redux). **if don't want to use any state management, you can remove zustand and replace it with your own state management.** This project just give a example on [zustand/useConfigStore](https://github.com/codeDebugTest/react-library-skeleton/blob/main/src/zustand/useConfigStore.ts).

### react compatible
this project is **compatible with react 17.0.2**, although it use react 18 as the development version. The implementation references to [rc-util](https://github.com/react-component/util/blob/master/src/React/render.ts).


## Development

### local development 
`npm run serve`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### building
`npm run build`

