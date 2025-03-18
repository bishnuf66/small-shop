function Deals() {
  return (
    <div className="w-full h-full text-white grid grid-cols-1 md:grid-cols-2  space-y-3 md:space-y-0  md:space-x-3 p-3">
      <div className="bg-sky-500 w-full  h-auto relative">
        <div className="w-1/2 h-auto p-4 space-y-2">
          <div className="font-bold text-2xl underline">Lorem Convict</div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing</div>
          <div className="font-bold text-2xl ">From $49.00 USD</div>
          <button className="rounded-md shadow-md bg-white text-black p-1">
            Shop Now
          </button>
        </div>
        <img
          src="/images/delivery-man.jpg"
          alt="product"
          className="w-40 h-48 object-cover absolute right-0 top-0"
        />
      </div>
      <div className="bg-red-500 full  h-auto relative">
        <div className="w-1/2 h-auto p-4 space-y-2">
          <div className="font-bold text-2xl underline">Lorem Convict</div>
          <div>Lorem ipsum dolor, sit amet consectetur adipisicing</div>
          <div className="font-bold text-2xl ">From $49.00 USD</div>
          <button className="rounded-md shadow-md bg-white text-black p-1">
            Shop Now
          </button>
        </div>
        <img
          src="/images/fruit-basket.jpg"
          alt="product"
          className="w-40 h-48   object-cover absolute right-0 top-0"
        />
      </div>
    </div>
  );
}

export default Deals;
