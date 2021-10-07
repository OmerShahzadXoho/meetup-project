import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from 'next/head'
const url =
    "https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

function HomePage(props) {

    return (
        <>
            <Head>
                <title>React Meetup</title>
                <meta
                    name='description'
                    content="Browseer a huge list of Highly Active React Meatups"
                />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </>
    )
}
export async function getStaticProps() {
    //fetch data from api

    //-----------connection code ---------------
    const client = await MongoClient.connect(
        "mmongodb+srv://omer:omer123@cluster0.mc5ss.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    //----------------------------------

    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: {
            //convert data to displayable form
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}
export default HomePage;
