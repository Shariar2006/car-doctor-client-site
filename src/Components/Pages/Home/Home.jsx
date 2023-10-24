/* eslint-disable react/no-unescaped-entities */
import { useLoaderData } from "react-router-dom";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Service from "./Service";

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <div className="text-center space-y-3 mb-5">
                <h3 className="text-[#FF3811] text-lg font-bold">Service</h3>
                <h1 className="text-4xl font-bold ">Our Service Area</h1>
                <p className="uppercase text-xs  text-gray-400">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5 gap-10">
            {services?.map(service => <Service key={service._id} service={service} ></Service>)}
            </div>
        </div>
    );
};

export default Home;