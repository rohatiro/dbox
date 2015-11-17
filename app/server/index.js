module.exports = function(server) {
	var swig, config, routes, session;

	swig = require("swig");
	routes = require("./routes");
	config = require("./config")();
	extend = require("util")._extend;
	session = require("express-session");

	if(!process.env.ENV || process.env.ENV != "prod")
		extend(process.env, require(config.settings));

	Passport = require(config.auth)();

	server.engine("html", swig.renderFile);
	server.set("views", config.views);
	server.set("view engine", "html");

	server.use(session({ secret: "keyboard cat"}));
	server.use(Passport.initialize());
	server.use(Passport.session());

	routes(server, Passport);

	server.listen(!process.env.ENV || process.env.ENV != "prod" ? process.env.DEVPORT : 16427);
};