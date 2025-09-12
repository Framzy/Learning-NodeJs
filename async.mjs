// no need async function for using await because js module or .mjs already async

function samplePromise(){
    return Promise.resolve("Farden");
}


const name = await samplePromise();
console.info(name);

