
const CarBookingSection = () => {
    const submitHandler = (event) => {
        event.preventDefault();
      };
    return (
        <div>
            <div className="md:mt-5">
              <div className="flex ">
              <div className="w-[650px]">
    <div className="card shadow-xl">
      <form onSubmit={submitHandler} className="card-body ">
        <div className="grid md:grid-cols-2 gap-6">
        <div className="form-control">
          <input type="text" placeholder="First Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="Last Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="email" placeholder="Email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="phone" placeholder="Phone" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="From address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="text" placeholder="To address" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <select value="" className="input input-bordered">
          <option value="1 person">Select person</option>
          <option value="1 person">1 Person</option>
          <option value="2 person">2 Person</option>
          <option value="3 person">3 Person</option>
          <option value="4 person">4 Person</option>
          <option value="5+ person">5+ Person</option>
          </select>
        </div>
        <div className="form-control">
        <select placeholder="password" className="input input-bordered">
          <option value="1 luggage">1 luggage</option>
          <option value="2 luggage">2 luggage</option>
          <option value="3 luggage">3 luggage</option>
          <option value="4 luggage">4 luggage</option>
          <option value="5+ luggage">5+ luggage</option>
        </select>
        </div>
        <div className="form-control">
          <input type="date" placeholder="date" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <input type="time" placeholder="password" className="input input-bordered" required />
        </div>
        </div>
        <textarea name="" id="" className="border rounded px-2" placeholder="type your comment" cols="30" rows="5"></textarea>
        <button className="btn btn-primary mt-5">Booking</button>
      </form>
    </div>
  </div>
              </div>
</div>
        </div>
    );
};

export default CarBookingSection;