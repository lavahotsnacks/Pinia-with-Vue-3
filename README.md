# pinia-tasks

My own copy of the files.

Part of my vision project MEL.

## Future Tasks
- Use firebase as database (instead of fake rest api tools)

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Run JSON Server Manually

To start the JSON server and watch the `data/dj.json` file:

##### (Ignore the first step if you did an "npm install")

1. Ensure you have `json-server` installed. If not, install it globally or locally:

   ```sh
   npm install -g json-server
   ```

   Or as a local project dependency:

   ```sh
   npm install json-server
   ```

2. Start the JSON server:

   If json-server is installed globally: 
   
   ```sh
   json-server -w ./data/db.json
   ````

   If json-server is installed as a local project depedency:

   ```sh
   npx json-server --watch ./data/db.json
   ```



   The server will run at `http://localhost:3000` by default.

3. (Optional) Specify a custom port if needed:

   ```sh
   npx json-server --watch data/db.json --port 4000
   ```

### Compile and Minify for Production

```sh
npm run build
```

---