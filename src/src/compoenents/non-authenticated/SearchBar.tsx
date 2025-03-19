
export default function SearchBar() {
  return (
    <div className="flex justify-center items-center">
      <div className="navy-bg p-4 w-1/3 h-auto flex flex-col justify-center items-center  rounded-sm ">
        <div className="mb-4">Find out more about 2,500+ clubs worldwide</div>
        <form action="">
          <div className="flex flex-row">
            <input
              type="search"
              placeholder="Search by City, State, Zip, Country"
              className="rounded-l-md p-2 border border-gray-300 flex-grow"
            />
            <button
              type="submit"
              className="rounded-r-md text-white p-2 w-35 h-12"
              style={{ backgroundColor: "#019EDC" }}
            >
              Join us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
