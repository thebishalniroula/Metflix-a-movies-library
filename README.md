## About

Metflix is a full fledged movies library website that uses NextJS as its frontend layer and The Movie DataBase API as the data souce.

## Prerequisites

You will need [Node.js](https://nodejs.org) version 8.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

```
https://github.com/thebishalniroula/movies-library-website-nextjs.git
```

... or [downloading source code](https://github.com/thebishalniroula/movies-library-website-nextjs/archive/refs/heads/main.zip) code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

```
npm install
```

Go to [TBDB](https://www.themoviedb.org/) and get an API access Key.

Once you get an API key, set up environment variables with:

```
echo "API_KEY=<<Your api key>>" >> .env.local
```

Then run the development server with:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to run the app.
