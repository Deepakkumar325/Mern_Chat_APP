import mongoose, { connect } from "mongoose";
 

const connectToMongoDB = async () =>{
    
    try {
          await mongoose.connect(process.env.MONGO_DB_URI, { 

      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("Error in connecting to MongoDb",error.message)
    }
}
export default connectToMongoDB