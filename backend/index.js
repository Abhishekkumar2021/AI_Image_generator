const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
app.use(cors());

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.API_KEY,
});
const openai = new OpenAIApi(configuration);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port', process.env.PORT || 3000);
});

app.post('/generate', async (req, res) => {
    let {prompt , number, size} = req.body;
    if(!number) number = 2;
    number = number%10;
    if(size == 'Small') size = "256x256";
    else if(size == 'Medium') size = "512x512";
    else if(size == 'Large') size = "1024x1024";
    else size = "256x256";
    if(!prompt) prompt = "A question mark"

    const response = await openai.createImage({
        prompt: prompt,
        n: number,
        size: size,
    });
    let urls = [];
    for(let item of response.data.data) {
        urls.push(item.url);
    }
    return res.json({urls});
});