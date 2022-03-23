const express = require('express');
const cors = require('cors');
const user = require('./FirebaseConfig');
const app = express();
app.use(express.json());
app.use(cors());

app.post("/create", async(req, res)=>{
    const data = req.body;
    await user.add(data);
    res.send({msg: "send"});
})

app.get("/getData", async(req, res)=>{
    const snapshot = await user.get();
    const list = snapshot.docs.map((doc)=>
        doc.data());
    res.send(list);
})

app.listen(4000, ()=>console.log("UP"));