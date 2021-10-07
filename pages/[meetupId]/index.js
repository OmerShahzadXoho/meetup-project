import MeetupDetail from "../../components/meetups/MeetupDetail"

function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            title="First Meetup"
            address='SomeStreet 5, Some City'
            description='This is First Meetup'
        />
    )
}
export async function getStaticPaths() {
    return {
        fallback: false, 
        paths: [
            {
                params: {
                    meetupId: 'm1',

                }
            },
            {
                params: {
                    meetupId: 'm2',

                }
            }
        ],
    }
}
export async function getStaticProps(context) {
    //fetch data for single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            meetupDetail: {
                image:
                    "https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
                id: meetupId,
                title: "First Meetup",
                address: 'SomeStreet 5, Some City',
                description: 'This is First Meetup'
            },

        },
    }
}
export default MeetupDetails