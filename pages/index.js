import MeetupList from "../components/meetups/MeetupList";

const url = 'https://images.unsplash.com/photo-1590738066647-164aa47af7c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first Meetup',
        image: url,
        address: 'some address',
        description: 'this is forst '
    },
    {
        id: 'm2',
        title: 'A 2nd Meetup',
        image: 'https://images.unsplash.com/photo-1625685290865-1236e3dad3cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
        address: 'some address',
        description: 'this is forst '
    },
    {
        id: 'm3',
        title: 'A 3rd Meetup',
        image: 'https://images.unsplash.com/photo-1509024644558-2f56ce76c490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        address: 'some address',
        description: 'this is forst '
    }
];
function HomePage(props) {


    return (
        <MeetupList meetups={props.meetups} />
    );
}
export async function getStaticProps() { 
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        revalidate: 1 
    };
                   
}
export default HomePage;