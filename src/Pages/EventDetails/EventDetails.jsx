
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';

const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();

    const event = events.find(event => event.id == id);
    const { title, image, details, date } = event;
    console.log(events, id, event);
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is Event Details</h2>
            <div className="">
                <div className="card max-w-screen-lg mx-auto glass">
                    <figure><img src={image} alt="car!" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl ">{title}</h2>
                        <p>{details}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default EventDetails;