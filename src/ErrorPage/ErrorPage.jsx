import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-white">
            <h1 className="text-center mt-36 text-9xl  font-bold text-gray-500 font-poppins ">404</h1>
            <div className="text-center space-y-6 mt-10">
                <h2 className="text-4xl font-semibold text-gray-700 font-poppins">Sorry, we couldnt find this page.</h2>
                <p className="text-gray-400 font-semibold font-poppins">But dont worry, you can find plenty  of other things on our home page</p>
                <button to="/" className="btn btn-primary"><Link className="text-xl font-semibold">Back to homepage</Link></button>
            </div>
        </div>
    );
};

export default ErrorPage;