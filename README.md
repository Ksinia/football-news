# :soccer: Football News :soccer:

This app shows football news that are fetched from [https://newsapi.org](https://newsapi.org/).
Each news tile is clickable to redirect to this news url.

## Installation

- Clone the repository
- Run npm install
  ```
  npm install
  ```

## Setup

Please create `.env.local` file in root folder with `REACT_APP_API_KEY=<your_key>`, where `<your_key>` is replaced with API key from [https://newsapi.org](https://newsapi.org/).

## Security notice

Please run this application only locally as you [can't secure API key used in it](https://www.quora.com/Where-do-I-hide-the-API-key-when-developing-a-frontend-website/answer/Aditya-Rao-133). In order to make it secure, all API calls should be done trough the self-written backend.

## Run the app in the development mode

- Run npm start
```
npm start
```
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Technologies used

- TypeScript
- React
- Redux
