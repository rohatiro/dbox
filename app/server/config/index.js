module.exports = function() {
	var path;

	path = require("path");

	var root,app,server,routes,views;

	root = path.resolve(__dirname, "./../../../");
	app = path.resolve(root, "./app");
	server = path.resolve(app, "./server");
	routes = path.resolve(server, "./routes");
	views = path.resolve(server, "./views");

	return {
		root:root,
		app:app,
		server:server,
		routes:routes,
		views:views
	};
};