// ~~ can use to convert float to int by removing decimal part or use math.floor for positive number and math.ceil for negative number

const token = ~~[Math.random() * 123456789];

const pictures = ["pic1.jpg", "pic2.png", "pic3.jpg"];

function login(username) {
  console.info("Login user ...");
  return new Promise((success, failed) => {
    setTimeout(() => {
      if (username != "Farden") failed("user not found");
      success({ token });
    }, 200);
  });
}

function getUser(token) {
  console.info("Get user by token ...");
  return new Promise((success, failed) => {
    if (!token) failed("token not valid");
    setTimeout(() => {
      success({ apiKey: "xkey123" });
    }, 100);
  });
}

function getPictures(apiKey) {
  console.info("Get pictures by apiKey ...");
  return new Promise((success, failed) => {
    if (!apiKey) failed("apiKey not valid");
    setTimeout(() => {
      success({ pic: pictures });
    }, 500);
  });
}

async function UserDisplay() {
  try {
    const { token } = await login("Farden");
    const { apiKey } = await getUser(token);
    const { pic } = await getPictures(apiKey);

    console.info(`
        token anda adalah : ${token}
        apiKey anda adalah : ${apiKey}
        pictures anda adalah : ${pic}    
        `);
  } catch (error) {
    console.error(error);
    return;
  }
}

UserDisplay();
