// need declare async function for using await because js file or .js is sync

function samplePromise(){
    return Promise.resolve("Farden");
}

async function run() {
    const name = await samplePromise();
    console.info(name);
}

run();