const path = require('path');
const spawn = require("child_process").spawn;

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

console.log("Invoking R script... at:", rscriptPath);
console.log(new Date());
callR(rscriptPath)
.then(result => {
  console.log("finished with result:", result);
  console.log(new Date());
})
.catch(error => {
  console.log("Finished with error:", error);
  console.log(new Date());
});