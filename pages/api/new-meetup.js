import { MongoClient } from 'mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;   //body of incomming request

        const client = await MongoClient.connect('mmongodb+srv://omer:omer123@cluster0.mc5ss.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne(data)
        console.log(result);

        client.close();
        res.status(201).json({ message: "meetup inserted!" });


    }
}

export default handler;