const express = require("express");
const socketServer = require("./web_socket");
const PORT = 3000;

let app;
function init() {
	app = express();
}

function start(afterStart) {
	app.listen(PORT, () => {
		console.log("server started on " + PORT);
		afterStart();
	});
}

function setRoutes() {
	app.get("/", (req, res) => {
		res.send("Hello lovely Person");
	});
}

function setup() {
	init();
	start(() => {
		setRoutes();
		socketServer.setup();
	});
}

module.exports = {
	setup,
};
