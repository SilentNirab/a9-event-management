
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../Shared/Navbar/Navbar';
import { FaCalendar } from 'react-icons/fa';

const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();

    const event = events.find(event => event.id == id);
    const { title, image, details, price, date } = event;
    console.log(events, id, event);
    return (
        <div>
            <Navbar></Navbar>
            <h2>This is Event Details</h2>
            <div className="">
                <div className="card max-w-screen-lg mx-auto glass">
                    <div className=" relative">
                        <figure><img src={image} /></figure>
                        <p className='absolute bottom-0 left-0 bg-black text-white font-bold text-lg p-4'>${price}</p>
                    </div>
                    <div className="card-body">
                       <div className="">
                       <span className='flex items-center text-lg '><FaCalendar></FaCalendar>:{date}</span>
                        <button className='bg-[#F5A425] text-white text-md font-bold px-4 py-2 rounded-md'>Book Now</button>
                       </div>
                        <h2 className="card-title text-3xl ">{title}</h2>
                        <p>{details}</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;