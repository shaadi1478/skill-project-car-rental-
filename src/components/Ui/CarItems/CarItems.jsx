import { useEffect, useState } from "react";
import CarItem from "../CarItem/CarItem";

const CarItems = () => {
    const [carData, setCarData] = useState([])

    useEffect( () => {
        fetch('carData.json')
        .then(ref => ref.json())
        .then(data => setCarData(data))
    },[])
    return (
        <div className="max-w-7xl mx-auto bg-white">
            <div className="grid md:grid-cols-3 gap-5 mt-11
            ">
            {
                carData.slice(0,6).map(carData => <CarItem key={carData.id} carData={carData}></CarItem>)
            }
            </div>
        </div>
    );
};

export default CarItems;