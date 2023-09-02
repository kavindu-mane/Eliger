

const AddVehicle = () => {
  return (
    <form>
      <div className="  ml-10 mt-4 rounded-xl  bg-slate-800 pb-4 pt-4  text-2xl text-gray-900">
        <p className=" ml-10 font-bold tracking-wide text-green-500">
          Add Vehicle
        </p>

        <div>
          <label
            for="Vehicle Plate.No"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Vehicle Plate.No
          </label>
          <input
            type="text"
            id="plateno"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="ABC-5678"
          ></input>
        </div>

        <div class="mb-6">
          <label
            for="Vehicle Type"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Vehicle Type
          </label>
          <input
            type="text"
            id="vehicletype"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
          ></input>
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Passenger Amount
          </label>
          <input
            type="text"
            id="passengeramount"
            class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder=""
          ></input>
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-sky-800 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};
export default AddVehicle;
