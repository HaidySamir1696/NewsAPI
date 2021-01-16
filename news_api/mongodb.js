const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:127.0.0.1:27017'
const dbname = 'taskh'
const dbname2 = 'taskh2'
// MongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
//     if(error)
//     {
//         return console.log('Error has occured')
//     }
//     console.log('sucess')
//     const db = client.db(dbname)
    
// db.collection('users').insertMany({
//     name:'ahmed',
//     age:26

// })

    
// })
MongoClient.connect(url,{useNewUrlParser:true},(error,client)=>{
    if(error)
    {
        return console.log('Error has occured')
    }
    console.log('sucess')
    const db = client.db(dbname2)
    
// db.collection('users').insertMany([
//     {description:'task1', code:'true'},
//     {description:'task2', code:'true'},
//     {description:'task3', code:'false'},
//     {description:'task4', code:'false'}
// ])
// ////////////////////
// db.collection('users').findOne({code:'true'},(error,user)=>{
//     if(error)
//     {
//         return console.log('error has occured')
//     }
//     console.log(user)
// })
//     db.collection('users').find({code:'true'}).toArray((error,user)=>{
//     if(error)
//     {
//         return console.log('error has occured')
//     }
//     console.log(user)
// })
// db.collection('users').find({code:'true'}).limit(2).toArray((error,user)=>{
//     if(error)
//     {
//         return console.log('error has occured')
//     }
//     console.log(user)
// })
const ObjectID= mongodb.ObjectID
const _id= new ObjectID()
// db.collection('users').updateOne({_id: new ObjectID("6001e267832b9145846d0027")},{
//     $set:{description:"task1"}
// }).then((result)=>{
//     console.log(result.modifiedCount);

// }).catch((error)=>{
//     console.log(error)
// })
// db.collection('users').updateMany({},{
//     $set:{code:"true"}
// }).then((result)=>{
//     console.log(result.modifiedCount);

// }).catch((error)=>{
//     console.log(error)
// })
db.collection('users').deleteOne({description:'task4'}).then((result)=>{
    console.log(result.deletedCount);

}).catch((error)=>{
    console.log(error)
})
 db.collection('users').deleteMany({}
 ).then((result)=>{
     console.log(result.deletedCount);

 }).catch((error)=>{
     console.log(error)
})
})
 