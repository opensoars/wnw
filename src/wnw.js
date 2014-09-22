// Get some colored logging
var Ezlog = require('ezlog'),
    cls = require('opensoars_cls'),
    log = new Ezlog({ pref: {t: '[wnw]', c: 'yellow'} }),
    logErr = new Ezlog({ pref: {t: '[wnw]', c: 'yellow'}, text: {c: 'red'} });

function green(t){ return cls({ t: t, c: 'green' }); }


// Get command line arguments
var argv = process.argv,
    watchDir = argv[2]


// Try to set up our watcher
try {

  if(!watchDir) throw 'No project directory given.';


  // Log about watching dir
  log('Watching: ' + green(watchDir));
  console.log('---------------');


  // Require them here, since we don't need them if we throw
  var watch = require('node-watch'),
      spawn = require('child_process').spawn;

  // Node-Webkit namespace
  var nw = spawn('nw', [watchDir]);

  // Start watching given directory recursively
  watch(watchDir, {recursive: true}, function (fn){

    nw.kill();

    log('Restart due to change in ' + green(fn));

    nw = spawn('nw', [watchDir]);

  });



}
// If we can't set wnw up, log about it and exit
catch(e) {
  console.log('');
  logErr('Failed to watch project, because:');
  logErr('  * ' + e);
  console.log('');
  process.exit();
}

