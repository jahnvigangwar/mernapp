const mongoose = require('mongoose');
const mongoURI = process.env.MONGODB_URI;
if (!mongoURI) {
    throw new Error("Set MONGODB_URI before starting the backend.");
}
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