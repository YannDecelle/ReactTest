import mongoose from "mongoose";

const connectDB = handler => async (req, res) => {
    // if (mongoose.connection[0].readyState) {
    //     return handler(req, res)
    // }

    await mongoose.connect(process.env.YannDCL, {
        useUnfifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
        usenewurlParser: true
    });
    return handler(req, res)
}

export default connectDB;