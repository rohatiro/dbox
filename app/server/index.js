module.exports = function(server) {
	var swig, config, routes;

	swig = require("swig");
	routes = require("./routes");
	config = require("./config")();

	server.engine("html", swig.renderFile);
	server.set("views", config.views);
	server.set("view engine", "html");

	routes(server);

	server.listen(16427);
};