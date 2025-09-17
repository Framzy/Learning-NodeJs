// ~~ can use to convert float to int by removing decimal part or use math.floor for positive number and math.ceil for negative number

import { get } from "http";

const token = ~~[Math.random() * 123456789];

const pictures = ["pic1.jpg", "pic2.png", "pic3.jpg"];

function login(username,callback) {
    console.info("Login user ...");
    setTimeout(() => {
        callback({token,username});
    },200);
}

function getUser(token,callback) {
    console.info("Get user by token ...");
    if (token) {
    setTimeout(() => {
        callback({apiKey:"xkey123"});
    },100);
    }
}

function getPictures(apiKey,callback){
    console.info("Get pictures by apiKey ...");
    if (apiKey) {
    setTimeout(() => {
        callback({pic:pictures});
    },1500);
    }
}   

// there is deficiency of callback if we have to do multiple async task or nested callback 
// (callback hell) so we have to use promise
login("Farden", function(response){
    const { token } = response;
    console.info(token);
    getUser(token, function(response){
        const { apiKey } = response;
        console.info(apiKey);
        getPictures(apiKey, function(response){
            const { pic } = response;
            console.info(pic);
        });
    });
})