const {Router} = require('express')
const router = Router()
const panel = require('../model/chatpanel')
const model = require("../model/message")
router.post("/chatpanel",async(req,res)=>{
    const {senderid,receiverid} = req.body
  
        try
        {
            const adminpanel = await panel.findOne({adminid:receiverid})

            if(!adminpanel)
            {
                const insertpanel = await new panel({
                    adminid:receiverid,
                    memebers:[senderid]
                })

                await insertpanel.save()

               return res.send(insertpanel)
            }
            else
            {
               const checkuser= await adminpanel.memebers.includes(senderid)

               if(!checkuser)
               {
                    adminpanel.memebers.push(senderid)
                    await adminpanel.save()

                    return res.send(adminpanel)
               }

               else
               {
                   return res.send("Users is Already found") 
               }
            }

        }

        catch(er)
        {
          
            console.log(er)
        }
    

})

router.post("/unread",async(req,res)=>{
    const {adminid} = req.body

    try
    {
        const messagepanel = await panel.findOne({adminid}).populate('memebers')
        const data = []

        for(const member of messagepanel.memebers)
        {
            const unreadcount = await model.countDocuments({
                sender:member._id,
                isRead:false,
                receiver:adminid
            })

            data.push({memberid:member._id,count:unreadcount})
        }

        res.send(data)


    }
    catch(err)
    {
        res.send(err)
    }
})

router.post("/message",async(req,res)=>{
    const {senderid,receiverid,message} = req.body
  
        try
        {

            const messagedata =  await new model({
                sender:senderid,
                receiver:receiverid,
                message:message,           
            })

            await messagedata.save()

            res.send(messagedata)
        }

        catch(er)
        {
            console.log(er)
        }
    

})


router.post("/getmessage", async(req, res) => {
    const { senderid, receiverid } = req.body;
    console.log(senderid)
    console.log(receiverid)
    try{
        const messagedata = await model.find(
         
           {
            $or:[
                {sender:senderid,receiver:receiverid},
                {sender:receiverid,receiver:senderid}
            ]
           }
        )  
        console.log(messagedata)
        res.send(messagedata)
    
    }catch(err)
    {
            console.log(err)
    }   
  });


router.post("/getpanel",async(req,res)=>{
    const {adminid} = req.body
    try
    {
        
        const userdata = await panel.findOne({adminid:adminid})
        console.log(userdata)
        const extend = await userdata.populate('memebers')
        console.log(extend)
        res.send(extend)
    }catch(err)
    {
        res.send(err)
    }
})

router.put("/read",async(req,res)=>{

    const {senderid} = req.body
    try
    {
        
        const sender = await model.updateMany(
            {sender:senderid},
            {isRead:true}
        )

        res.send(sender)
        

    }catch(err)
    {
        console.log(err)
    }
})

module.exports = router