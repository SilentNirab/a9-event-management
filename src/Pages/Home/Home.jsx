import { useLoaderData } from "react-router-dom";
import Banner from "../Shared/Header/Header";
import EventCard from "./EventCard";


const Home = () => {
    const events = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <div className="px-2 py-5 mb-5">
                <h2 className="text-2xl font-bold text-center my-10">UPCOMING <span className="text-[#F5A425]">MEETINGS</span></h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
                    {
                        events.map(event => <EventCard key={event.id} event={event}></EventCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;