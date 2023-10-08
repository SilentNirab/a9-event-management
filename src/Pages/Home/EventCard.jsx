import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
    const { id, title, image, details } = event;
    return (
        <div className="">
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={image} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p>{details.slice(0, 100)}<span>...</span></p>
                    <div className="card-actions justify-end">
                        <Link to={`/event/${id}`}>
                            <button className="bg-[#F5A425] text-white text-md font-bold px-4 py-2 rounded-md">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventCard;