import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import { Configuration, OpenAIApi } from 'openai';

// establish configuration with openai
dotenv.config();
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

// use express framework to send post request and get request to communicate with the API
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
    res.status(200).send({
        message: 'Hello from CodeX',
    })
});

// settings of ChatGPT's AI
app.post('/', async (req,res) => {
    try {
        const prompt = req.body.prompt;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `${prompt}`,
            temperature: 0,
            max_tokens: 3000,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0,
        });

        // if the status is ok => send text to client via an object
        res.status(200).send({
            bot: response.data.choices[0].text
        })

    } catch (error) {

        // else display error for debugging purposes
        console.log(error);
        res.status(500).send({ error })
    }
})

// always listen for a request sent from client
app.listen(5001, () => console.log('Server is running on port: http://localhost:5001'));
