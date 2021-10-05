import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";


const url = 'https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const DUMMY_MEETUPS = [
    {
        Id: 'm1',
        title: 'A first Meetup',
        image: url,
        address: 'some address',
        description: 'this is forst '
    },
    {
        Id: 'm2',
        title: 'A 2nd Meetup',
        image: url,
        address: 'some address',
        description: 'this is forst '
    },
    {
        Id: 'm3',
        title: 'A 3rd Meetup',
        image: url,
        address: 'some address',
        description: 'this is forst '
    }
];
function HomePage() {

    return (
        
        
            <MeetupList meetups={DUMMY_MEETUPS} />
      
    );
}

export default HomePage;