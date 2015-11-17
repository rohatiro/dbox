module.exports = function(server, passport) {

	var isLogged = function(req, res, next) {
		if(req.isAuthenticated())
			return next();
		else
			res.redirect("/auth");
	};

	passport.serializeUser(function(user,done) {
		done(null,user);
	});

	passport.deserializeUser(function(user,done) {
		done(null,user);
	});

	server.get("/", function(req, res) {
		res.render("home");
	});

	server.get("/auth", passport.authenticate('dropbox'));

	server.get("/callback", passport.authenticate('dropbox', {failureRedirect:"/auth"}), function(req, res) {
		res.redirect("/logged");
	});

	server.get("/logged", isLogged, function(req, res) {
		console.log(req.user);
		res.render("logged");
	});
};