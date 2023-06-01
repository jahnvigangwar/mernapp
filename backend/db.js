const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://goFood:goFood@cluster0.kwgc6ch.mongodb.net/gofoodmern?retryWrites=true&w=majority'

const mongoDB = async()=>{
    await mongoose.connect(mongoURI,{ useNewUrlParser: true },async (err, result) => {
        if (err) console. log ("----",err)
        else{
            console.log("Mongo Connectd");
            const fetched_data = await mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray( async function(err,data){

                const foodcategory = await mongoose.connection.db.collection("foodcategory");
                foodcategory.find({}).toArray(function(err,catData)
                {
                if (err) console.log (err);
                else{
                    console.log("connected at the backend");
                    global.food_items = data;
                    global.foodcategory = catData; 
                    // console.log(global.food_items);
                    // console.log(global.foodcategory)
                } 
                })
            })
        }

    });
}
module.exports = mongoDB;