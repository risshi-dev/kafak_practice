const {kafka}  = require('../core/client')

async function init() {
    const admin = kafka.admin();
    
    admin.connect();
    console.log("Admin Connection Success...");
   
    await admin.createTopics({
        topics: [
          {
            topic: "whatsapp",
            numPartitions: 2,
            replicationFactor:1
          },
        ],
      });
    
    console.log("Topic Created Success");

    await admin.disconnect();
    console.log("Admin Disconnected");
}
  
init();