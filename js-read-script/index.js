// var R = require("r-script");
var express = require('express');
var router = express.Router();
var app = express();
 
var child_process = require('child_process');
var exec = child_process.exec;

app.listen(3000, function() {
    console.log('server running on port 3000');
});

app.get('/r', function (req, res) {
    // var cmd = 'Rscript rScript/2.R ' + 3.0+ " " + 4.0;
    const cmd = 'Rscript rScript/NormalizationandCorrelation.R';
    exec(cmd, function(error, stdout, stderr) {
        if (error) {
            console.log(error);
            res.send(error);
        }
        else if (stderr) {
            console.log(stderr);
            res.send(stderr);
        }
        else if (stdout) {
            console.log("RAN SUCCESSFULLY");
            res.send(stdout);
        }
    });
});

const path = require('path');
const spawn = require("child_process").spawn;

app.get('/rscript', async function(req, res){
    // this is the path to the r text mining cript. It's more or less
    // hardcoded here but could be a cmdline arg in a more elaborate setup
    const rscriptPath = path.resolve("src", "rScript", "NormalizationandCorrelation.R");

    const callR = (path) => {
        return new Promise((resolve, reject) => {
            let err = false;
            // const child = spawn('Rscript', ["--vanilla", path, "--args", commandArgs]);
            var child = spawn('R',['--vanilla','--slave', '--args']);
            child.stderr.on("data", (data) => {
                console.log(data.toString());
            });
            child.stdout.on("data", (data) => {
                console.log(data.toString());
            });
            // child.stdin.write("message('bam bam')\n");
            // child.stdin.write("message('tada!')\n");
            child.on('error', (error) => {
                err=true;
                reject(error);
            });
            child.on('exit', () => {
                if(err) return; // debounce - already rejected
                resolve("done."); // TODO: check exit code and resolve/reject accordingly
            });
        });
    }

    const result = await callR();
    console.log('result: ',result);
})

app.get('/p', callName);

function callName(req, res) {
    var spawn = require("child_process").spawn;
    var process = spawn('python',[
        "./pScript/1.py",
        req.query.firstname,
        req.query.lastname,
        req.query.etc,
    ]);
    process.stdout.on('data', function(data) {
        res.send(data.toString());
    } )
}
 
module.exports = router;
