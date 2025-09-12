import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("HI", (name)=>{
    console.info("Hi "+name);
})

emitter.addListener("HI", (name)=>{
    console.info("Hi "+name.toLowerCase());
})

emitter.emit("HI", "FARDEN");