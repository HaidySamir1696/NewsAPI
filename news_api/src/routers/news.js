const express = require('express')
const router = new express.Router()
const News = require('../models/news')
//const User = require('../models/user')

router.post('/news',(req,res)=>{
    const news = new News(req.body)
    news.save().then(()=>{
        res.status(200).send(news)

    }).catch((error)=>{
        res.status(400).send(error)
    })
})
////
router.get('/news',(req,res)=>{
News.find({}).then((news)=>{
    res.status(200).send(news)
}).catch((error)=>{
        res.status(500).send()
    })
})
router.get('/news/:id',(req,res)=>{
    const _id = req.params.id
   console.log(_id)
    News.findById(_id).then((news)=>{
        if(!news)
        {
            return res.status(400).send('user not found')
        }
        res.status(200).send(news)
    }).catch((error)=>{
            res.status(500).send()
        })
    })
    //////
    router.patch('/news/:id', async(req,res)=>{
        const updates = Object.keys(req.body) 
        const allowedUpdates = ['title','description','author']
        const isValid = updates.every((update) => allowedUpdates.includes(update))
        if(!isValid){
          return  res.status(400).send("can not update")
        }
        const _id = req.params.id
        try{
            const news = await News.findById(_id)
            console.log(news)
            updates.forEach((update)=> news[update]= req.body[update])
            await news.save()
            

        if(!news){
            return res.send('can not find news')
        }
        res.status(200).send(news)
        } catch(e){
            res.status(400).send('Error has occurred')
        }
    })
    ////////
    router.delete('/news/:id',async(req,res)=>{
        const _id = req.params.id
        try{
            const news = await News.findByIdAndDelete(_id)
            if(!news){
                return res.status(400).send('Not found')
            }
            res.status(200).send(news)
        }
        catch(e){
            res.send(e)
        }
    })
    
module.exports = router