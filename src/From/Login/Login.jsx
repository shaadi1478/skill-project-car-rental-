import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="max-w-7xl mx-auto w-[425px] md:w-full">
            <div className="hero  bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left mt-7">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-3">
          <button className="btn btn-primary">Login</button>
        </div>
        <div className="text-center">
            <p className="text-gray-600">Dont have an account? <Link to="/register" className="text-blue-400 font-semibold hover:underline">Register</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;