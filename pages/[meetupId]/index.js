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

export default MeetupDetails