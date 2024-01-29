const ws = require("ws");
const PORT = 3001;

let socketServer;
function init() {
	socketServer = new ws.WebSocketServer({ port: PORT });
}

function handleEvents() {
	socketServer.on("connection", (client) => {
		console.log("connected");
		client.send("connected through socketServer ws");
	});
}

function setup() {
	init();
	handleEvents();
}

function start() {
	// socketServer.listen()
}

module.exports = {
	setup,
};
