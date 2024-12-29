const {kafka}  = require('../core/client')
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const findPartition = (group) => {
    switch (group) {
        case "kasukabe":
            return 0;
        default:
            return 1;
    }
}

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");

  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async function (line) {
    const [group, user, message] = line.split(" ");

    const partition = findPartition(group)

    await producer.send({
      topic: "whatsapp",
      messages: [
        {
          partition,
          key: "group-messages",
          value: JSON.stringify({ user, message }),
        },
      ],
    });
  }).on("close", async () => {
    await producer.disconnect();
    console.log("Producer disconnected");
  });
}

init();