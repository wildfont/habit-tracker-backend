try {
  process.loadEnvFile();
} catch (error) {
  console.warn(".env file not found, using default environment variables.");
}

const jsonServer = require("json-server"); // to start building the server

const server = jsonServer.create(); // to create the Server Object

const middlewares = jsonServer.defaults(); //to set common configurations from the jsonServer library 

const router = jsonServer.router(__dirname + "/db.json");

const PORT = process.env.PORT || 5005;

server.use(middlewares);
server.use(router);

server.listen(PORT, () => {
    console.log(`JSON Server is running at port ${PORT}`);
    console.log(`Local Acces at http://localhost:${PORT}`)
})