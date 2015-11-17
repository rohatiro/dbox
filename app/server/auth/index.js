module.exports = function() {
	var passport, DropBoxStrategy;

	passport = require("passport");
	DropBoxStrategy = require("passport-dropbox");

	passport.use(new DropBoxStrategy({
		consumerKey:process.env.DBKEY,
		consumerSecret:process.env.DBSKEY,
		callbackURL:process.env.DBCALLURL,
	}, function(token, tokenSecret, profile, done) {
		process.nextTick(function() {
			return done(null, profile);
		});
	}));

	return passport;
};