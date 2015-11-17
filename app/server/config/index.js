module.exports = function() {
	var path;

	path = require("path");

	var root,app,server,routes,views,auth;

	root = path.resolve(__dirname, "./../../../");
	settings = path.resolve(root, "./settings.json");
	app = path.resolve(root, "./app");
	server = path.resolve(app, "./server");
	routes = path.resolve(server, "./routes");
	views = path.resolve(server, "./views");
	auth = path.resolve(server, "./auth");

	return {
		root:root,
		app:app,
		server:server,
		routes:routes,
		views:views,
		auth:auth,
		settings:settings
	};
};