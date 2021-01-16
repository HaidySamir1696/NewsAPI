const mongoose = require("mongoose")
const News = mongoose.model(
    "news",{
        title:{
            //required
            type: String,
            required:true,
        },
        description:{
            type:String,
        },
        author:{
            //required
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:today=()=>{
                var today = new Date();
                today.setHours(today.getHours() + 2);
                return today
            }
            }
    }
)
module.exports = News