const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection is successful");
    })
    .catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
    from: "neha",
    to: "riya",
    msg: "send me ur notes",
    created_at: new Date(),
},
{
    from: "riya",
    to: "neha",
    msg: "sure, sending now",
    created_at: new Date(),
},
{
    from: "aman",
    to: "rahul",
    msg: "did you complete the assignment?",
    created_at: new Date(),
},
{
    from: "rahul",
    to: "aman",
    msg: "not yet, planning to finish it tonight",
    created_at: new Date(),
},
{
    from: "anita",
    to: "sneha",
    msg: "can you help me with project ideas?",
    created_at: new Date(),
},
{
    from: "sneha",
    to: "anita",
    msg: "yes! let’s brainstorm after lunch",
    created_at: new Date(),
},
{
    from: "vikas",
    to: "neha",
    msg: "check your email, I’ve shared the document",
    created_at: new Date(),
},

];

Chat.insertMany(allChats);