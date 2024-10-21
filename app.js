const express = require('express');
const crypto = require('crypto');
const imageRoute = require('./routes/image');
const app = express();
app.use(express.json());

app.use((req, res, next) => {
    const hmacHeader = req.headers['auth-hmac'];

    const secretKey = 'xxx-secret-key-xxx'; 
    
    const requestBody = JSON.stringify(req.body);

    const hmac = crypto.createHmac('sha512', secretKey)
                       .update(requestBody)
                       .digest('hex');

    if (hmac !== hmacHeader) {
        return res.status(403).json({ 
          status: 'error', 
          message: 'Invalid HMAC authentication' 
        });
    }

    next();
});

app.use('/api/image', imageRoute);

const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
