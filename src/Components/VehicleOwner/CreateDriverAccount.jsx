import { lazy, useState } from "react";
import { Button, Card, Label, TextInput } from "flowbite-react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ErrorData from "../../Data/ErrorData";
import { MdOutlineError } from "react-icons/md";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const PasswordSwitcher = lazy(() => import("../Common/PasswordSwitcher"));
// create sweet alert object
const Alert = withReactContent(Swal);

const CreateDriverAccount = () => {
   const [errorCode, setErrorCode] = useState(null);
   const [isLoading, setIsLoading] = useState(false);
   const [ setIsConfPassword] = useState(true);
   const [isPassword, setIsPassword] = useState(true);


  // custom allert function with sweet alert 2
  const setAlert = (icon, title, desc) => {
    return Alert.fire({
      icon: icon,
      title: title,
      text: desc,
    });
  };

  // submit registration form
  const handleSubmit = (e) => {
    // clear previous errors
    setErrorCode(null);
    // remove default form submission
    e.preventDefault();
    // get data from form fields as FormData object
    const formData = new FormData(e.target);
    // change loading state to true
    setIsLoading(true);
    // send data using axios post function
    axios
      .post("/create_driver", formData)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          if (response.data === 200)
            setAlert(
              "success",
              "Registration success",
              "Successfully sent the email verification message to your email."
            );
          else if (response.data === 15)
            setAlert("error", "Registration failed", ErrorData[15]);
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


  return (
    <Card className="mt-8 dark:bg-slate-900">
        {/* loading */}
      {isLoading && (
        <div className="absolute start-0 z-[999] flex h-full w-screen items-center justify-center bg-slate-950/60">
          <CgSpinnerTwoAlt className="h-20 w-20 animate-spin text-emerald-400" />
        </div>
      )}
      <div className="text-center text-2xl font-semibold tracking-wide  ">
        Create Driver Account{" "}
      </div>
      <form className="flex flex-col gap-4"
      onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col gap-4 lg:flex-row ">
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="fname" value="First Name" />
            </div>
            <TextInput
              id="fname"
              placeholder="John"
              required
              type="text"
              name="fname"
            />
          </div>

          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="lname" value="Last Name" />
            </div>
            <TextInput
              id="lname"
              placeholder="Samual"
              required
              type="text"
              name="lname"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="contactno" value="Contact No" />
          </div>
          <TextInput
            id="contactno"
            placeholder="123-456-79-78"
            required
            type="text"
            name="contactno"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            placeholder="abc@gmail.com"
            required
            type="email"
            name="email"
          />
          {/* error text */}
          {[7, 10].includes(errorCode) && errorContainer(errorCode)}
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            placeholder="•••••••••"
            required
            type={isPassword ? "password" : "text"}
            name="password"
          />
          <PasswordSwitcher
              isPassword={isPassword}
              setIsPassword={setIsPassword}
            />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="address" value="Address" />
          </div>
          <TextInput
            id="address"
            placeholder="Colombo"
            required
            type="text"
            name="address"
          />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <div className="flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Create Account
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default CreateDriverAccount;
