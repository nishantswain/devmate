const mongoose=require('mongoose');
const config=require('config');
const db=config.get('mongoURI');


//we will write a async arrow function to connect with mongo atlas using url in 'db'

const connectDB=async()=>{
    try{
            await mongoose.connect(db,{useUnifiedTopology: true}) //we pass useUnifiedTopology: true to MongodbClient url because other option wiil be removed in future
            console.log('MongoDB connected..');
    }
    catch(err){

        console.error(err.message);

        //exit process with failure

        process.exit(1);

    }
}

module.exports=connectDB;

//if you want to export a particular function from the module then,  exports.funcNAme=funcName;