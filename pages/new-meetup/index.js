import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import Head from "next/head";

function NewMeetupPage() {
    const router = useRouter();

    async function addMeetupHandler(enterdMeetupData) {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enterdMeetupData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        console.log(data);
        router.push("/");
    }

    return (
        <>
            <Head>
                <title>Add Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetups and create amazing networking opportunities"
                />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    );
}

export default NewMeetupPage;
