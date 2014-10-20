var path = require('path');
var spawn = require('child_process').spawn;
var command = 'node_modules/phantomcss/node_modules/casperjs/bin/casperjs';
var args = [
	'test',
	'--ignore-ssl-errors=true',
	// Overwrite sslv3 default which fastly blocks because of POODLE vulnerability
	'--ssl-protocol=tlsv1',
	'runner.js'
];

var cmd = spawn(command, args, {
	env: {
		PHANTOMJS_EXECUTABLE: require('phantomcss/node_modules/phantomjs').path
	}
});
cmd.stdout.pipe(process.stdout);
cmd.stderr.pipe(process.stderr);
cmd.on('exit', function (code) {
	console.log('CasperJS exited with code ' + code);
	process.exit(code);
});
