import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    const { id, title, image, details,price,date } = event;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <div className=" relative">
                   <figure><img src={image} /></figure> 
                   <p className='absolute top-0 right-0 bg-black text-white font-bold text-lg p-4'>${price}</p>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 100)}...</p>
                    <div className="card-actions justify-between">
                    <span className='bg-black p-4 text-white'>{date}</span>
                        <Link to={`/event/${id}`}>
                            <button className="bg-[#F5A425] text-white text-md font-bold px-4 py-2 rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

EventCard.propTypes = {
    event:PropTypes.object
};

export default EventCard;