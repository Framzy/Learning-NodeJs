// if there is an error in this file, a report will be generated to investigate the issue.

import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.report.filename = "report.json";

function sampleError() {
  throw new Error("Ups");
}

sampleError();
