import master from "../../../assets/payment-method/master-card.jpg";
import paypal from "../../../assets/payment-method/paypal.jpg";
const PaymentSection = () => {
  return (
    <div className="mt-20 p-3 md:p-0">
      <div>
        <h1 className="text-6xl md:text-4xl text-blue-950 font-bold text-center">
          Payment Method
        </h1>
      </div>
      <div className="flex items-center gap-2 mt-6">
        <h3 className="text-2xl mt-5 font-semibold">
          {" "}
          <input type="radio" /> Derect Bank Transfer
        </h3>
      </div>
      <div className="mt-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam autem
          reiciendis repellat nulla quaerat fuga rem maiores. Accusamus,
          sapiente ipsam.
        </p>
      </div>
      <div className="flex gap-8 mt-5 items-center">
        <div className="space-y-2">
          <p>
            <input type="radio" name="" id="" />
            Cheque
          </p>
          <p>
            <input type="radio" name="" id="" />
            Credit Card
          </p>
          <p>
            <input type="radio" name="" id="" />
            Paypal
          </p>
        </div>
        <div className="space-y-3 ml-36">
          <img src={master} alt="" />
          <img src={paypal} className="" />
        </div>
      </div>
      <div className="text-end">
        <button className="btn btn-primary">Reserve Now</button>
      </div>
    </div>
  );
};

export default PaymentSection;
