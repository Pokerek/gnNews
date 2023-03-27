

<h1 align="center">gnNews</h1>

---

<h4 align="center"> An app for viewing world news
    <br> 
</h4>

## 🧐 About

Application made as part of a recruitment task. The most important functionalities are downloading messages from an external API and translating the site into two languages, Polish and English.

Of the smaller functionalities:
- The application has two modes for displaying news
- In the side panel, you can search for the country you are interested in
- You can change the mode to day/night

## 🏁 Getting Started 

To fire up the project on your computer, follow these steps.

### Prerequisites

Rename the .env.examle file to .env and complete the api key. You can get the key here: https://newsapi.org/

```
VITE_NEWS_API = YOUR_KEY
```

### Installing

Install dependencies before first use.

```
yarn 
or 
npm install
```

To run the program locally, run the following command: 

```
yarn dev 
or 
npm run dev
```

## 🔧 Running the tests 

To run tests:

```
yarn test
or
npm run test
```

## 🎈 Usage 

To use the application, select the country of interest in the side panel. When you click, news from that country will be loaded for you.

You can choose the language, the way the news is displayed and the day/night mode.

## ⛏️ Built Using

- [Vite](https://vitejs.dev/) - Development Tooling
- [React](https://react.dev/) - Web Library
- [React-Router](https://reactrouter.com/en/main) - Router for React
- [i18next](https://www.i18next.com/) - Translation system
- [MaterialUI](https://mui.com/) - UI tools for React
- [Typescript](https://www.typescriptlang.org/) - Types for JavaScript

## ✍️ Author

- [@Pokerek](https://github.com/Pokerek) - The crazy developer of this code
