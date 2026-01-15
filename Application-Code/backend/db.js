const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        
        // Fix strictQuery warning for newer Mongoose versions
        mongoose.set('strictQuery', false);

        // Connect to MongoDB (Fallbacks to localhost if env var is missing)
        const dbUrl = process.env.MONGO_CONN_STR || "mongodb://127.0.0.1:27017/devops_arsenal";

        await mongoose.connect(dbUrl, connectionParams);
        console.log("Connected to database successfully.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
