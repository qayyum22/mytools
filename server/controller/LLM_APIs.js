import { CohereClient } from 'cohere-ai';

export async function chat(req, res) {

    try {
        const {message} = req.body;
        const cohere = new CohereClient({
            token: API_KEY,
        })

        const response = await cohere.chat({
            message: message
        });
        console.log(response);

        return res.json({
            success: true,
            message: response
        })

    } catch (err) {
        return res.json({
            success: false,
            message: err
        })
    }
}



