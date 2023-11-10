import { lazy, useState, useCallback, useEffect } from "react";
import { Button, FileInput, Label, TextInput, Select } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
import { MdOutlineError } from "react-icons/md";
import { PiClockCountdownDuotone } from "react-icons/pi";
import { AiFillCheckCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
const LoadingSpinner = lazy(() => import("../Common/LoadingSpinner"));

// create sweet alert object
const Alert = withReactContent(Swal);

const BankDetails = ({ status }) => {
  const [errorCode, setErrorCode] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const bankList = [
    "People's Bank",
    "Bank of Ceylon",
    "Hatton National Bank",
    "Sampath Bank",
    "Commercial Bank",
    "NDB",
    "NSB",
  ];

  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // load data function
  const fetch = useCallback(async () => {
    await axios
      .post("/load_bank_details")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setAlert("error", "Error occured", ErrorData["500"]);
      });
  }, []);

  // submit registration form
  const handleSubmit = async (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    await axios
      .post("/submit_bank_details", formData)
      .then((response) => {
        if (response.status === 200) {
          if (response.data === 200)
            setAlert(
              "success",
              "Bank details submit success",
              "Your bank details is send to approval."
            );
          setIsLoading(false);
          setErrorCode(response.data);
        } else {
          setAlert("error", "Registration failed", ErrorData[500]);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        setAlert("error", "Registration failed", ErrorData[500]);
        setIsLoading(false);
      });
  };

  // error messages
  const errorContainer = (errCode) => {
    return (
      <p className="flex items-center gap-x-1 font-Poppins text-sm font-semibold text-red-500">
        <MdOutlineError /> {ErrorData[errCode]}
      </p>
    );
  };

  useEffect(() => {
    if (status !== "not submitted") fetch();
  }, [fetch, status]);

  // bank details form
  const bankDetailsForm = () => {
    return (
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleSubmit(e)}
        encType="multipart/form-data"
      >
        {/* beneficiary name */}
        <div>
          <Label
            htmlFor="beneficiary"
            value="Beneficiary Name"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <TextInput
            id="beneficiary"
            placeholder="John Perera"
            required
            type="text"
            name="beneficiary"
            defaultValue={data?.Beneficiary_Name}
            className="inputs"
          />
          {/* error text */}
          {errorCode === 50 && errorContainer(errorCode)}
        </div>
        {/* bank */}
        <div>
          <Label
            htmlFor="bank"
            value="Bank"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          {((data && status !== "not submitted") ||
            status === "not submitted") && (
            <Select
              id="bank"
              name="bank"
              required
              className="inputs"
              defaultValue={data?.Bank}
            >
              {bankList.map((bank, key) => {
                return (
                  <option value={bank} key={key}>
                    {bank}
                  </option>
                );
              })}
            </Select>
          )}
          {/* error text */}
          {errorCode === 51 && errorContainer(errorCode)}
        </div>
        {/* branch */}
        <div>
          <Label
            htmlFor="branch"
            value="Branch"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <TextInput
            id="branch"
            placeholder="001"
            required
            type="number"
            name="branch"
            defaultValue={data?.Branch}
            className="inputs"
          />
          {/* error text */}
          {errorCode === 52 && errorContainer(errorCode)}
        </div>
        {/* account number */}
        <div>
          <Label
            htmlFor="acc_number"
            value="Account Number"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />
          <TextInput
            id="acc_number"
            required
            type="number"
            name="acc_number"
            placeholder=""
            defaultValue={data?.Acc_Number}
            className="inputs"
          />
          {/* error text */}
          {errorCode === 11 && errorContainer(errorCode)}
        </div>
        {/* statement doc */}
        <div>
          <Label
            htmlFor="statement"
            value="Bank Statement / 1st page of passbook"
            className="after:ml-0.5 after:text-red-500 after:content-['*']"
          />

          <FileInput
            id="statement"
            name="statement"
            required
            accept=".png,.jpeg,.jpg"
            helperText="Accept png , jpg , jpeg only.File size should be less than 2MB."
            className="inputs"
          />
          {/* error text */}
          {[54, 55, 56, 57].includes(errorCode) && errorContainer(errorCode)}
        </div>
        <div className="mt-5 flex w-full justify-center font-Poppins">
          <Button
            type="submit"
            className="w-full max-w-sm disabled:bg-gray-500 dark:disabled:bg-gray-500"
            disabled={status === "pending"}
          >
            Submit for Approval
          </Button>
        </div>
      </form>
    );
  };

  // pending status
  const waitingForApproval = () => {
    return (
      <div className="absolute inset-0 top-0 z-[999] flex h-full w-full flex-col items-center justify-center bg-slate-950/60">
        <PiClockCountdownDuotone className="mb-5 h-20 w-20" />
        <p className="font-Poppins  text-xl font-medium text-white">
          Bank details approval in progress.
        </p>
      </div>
    );
  };

  return (
    <div className="h-full w-full max-w-4xl">
      {/* loading */}
      {isLoading && <LoadingSpinner />}

      <div className="mb-9 font-Poppins text-2xl font-medium">
        Setup Bank Details
      </div>

      {/* approved */}
      {status === "verified" && (
        <p className="mb-4 flex items-center gap-x-2 rounded-sm bg-green-500 p-2 italic text-white">
          <AiFillCheckCircle />
          Bank details are verified.
        </p>
      )}

      {/* rejected */}
      {status === "rejected" && (
        <p className="mb-4 flex items-center gap-x-2 rounded-sm bg-red-600 p-2 italic text-white">
          <RxCrossCircled />
          Bank details are rejected.
        </p>
      )}

      {/* bank details form for new accounts */}
      {bankDetailsForm()}

      {/* waiting for approval */}
      {status === "pending" && waitingForApproval()}
    </div>
  );
};
export default BankDetails;
