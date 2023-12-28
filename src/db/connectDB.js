import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}`);
        console.log('====================================');
        console.log(`MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        console.log('====================================');

    } catch (error) {
        console.log('====================================');
        console.log("MONGO DB CONNECTION FIELD ?? ", error);
        console.log('====================================');

    }
}

export default connectDB;

// import mongoose from "mongoose";


// const connectDB= async ()=>{
//     if(mongoose.connection.readyState){
//         return mongoose.connection;
//     }
//     return await mongoose.connect(`${process.env.MONGO_URI}/contact`,{
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: false,
//         useCreateIndex: true,
//       });
// }
// export default connectDB