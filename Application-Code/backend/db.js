const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        
        mongoose.set('strictQuery', false);

        // Get env variables
        const username = process.env.MONGO_USERNAME;
        const password = process.env.MONGO_PASSWORD;
        const url = process.env.MONGO_CONN_STR || "mongodb://127.0.0.1:27017/devops_arsenal";

        let dbUrl = url;
        
        
        if (username && password && !url.includes('@')) {
    
            const protocolSplit = url.split('://');
            const protocol = protocolSplit[0];
            const rest = protocolSplit[1];
            
            // Construct auth URL: mongodb://user:pass@host:port/db?authSource=admin
            dbUrl = `${protocol}://${username}:${password}@${rest}`;
            
            if (!dbUrl.includes('authSource')) {
                const separator = dbUrl.includes('?') ? '&' : '?';
                dbUrl += `${separator}authSource=admin`;
            }
        }

        await mongoose.connect(dbUrl, connectionParams);
        console.log("Connected to database successfully.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
