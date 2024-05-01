import { useEffect, useState } from "react";
import ServicesLists from "../ServicesLists/ServicesLists";


const ServicesList = () => {
    const [serviceData, setServiceData] = useState([])

    useEffect( () => {
        fetch('ServiceData.json')
        .then(ref => ref.json())
        .then(data => setServiceData(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto mt-20 bg-white md:w-full w-[425px]">
           <div className="space-y-5 text-center">
           <h3 className="text-2xl font-bold font-poppins text-[#f9a826] ">See Our</h3>
            <h1 className="text-5xl font-poppins font-bold text-[#000d6b]">Popular Services</h1>
           </div>
            <div className="grid md:grid-cols-3 md:gap-5 p-2">
                {
                    serviceData.map( services => <ServicesLists key={services.id} services={services}></ServicesLists> )
                }
            </div>
        </div>
        
    );
};

export default ServicesList;