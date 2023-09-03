import { Button, Card, Label, TextInput } from "flowbite-react";

const EditDriver = () => {
  return (
    <div className="px-5">
      <Card className="dark:bg-slate-900">
        <p className="text-center text-3xl font-semibold tracking-wide ">
          Edit Account
        </p>
        <form className="flex flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="status" value="Status" />
            </div>
            <TextInput id="status" required type="text" />
          </div>
          <div className="flex flex-col space-y-2 font-Poppins lg:flex-row lg:space-y-0">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="firstname" value="First Name" />
              </div>
              <TextInput id="firstname" required type="text" />
            </div>

            <div className="w-full lg:space-x-2">
              <div className="mb-2 block lg:pl-2">
                <Label htmlFor="lastname" value="Last Name" />
              </div>
              <TextInput id="lastname" required type="text" />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Contact Number " />
            </div>
            <TextInput id="phone" required type="number" />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Address" />
            </div>
            <TextInput id="address" required type="text" />
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
            />
          </div>

          <div className="flex flex-col space-y-2 font-Poppins lg:flex-row lg:space-y-0">
            <div className="w-full">
              <div className="mb-2 block">
                <Label htmlFor="password" value="Initial password" />
              </div>
              <TextInput id="password" required type="password" />
            </div>
            <div className="w-full lg:space-x-2">
              <div className="mb-2 block lg:pl-2">
                <Label htmlFor="Repassword" value="Confirm Initial password" />
              </div>
              <TextInput id="Repassword" required type="password" />
            </div>
          </div>

          <div className="flex w-full justify-center font-Poppins">
            <Button type="submit" className="w-full max-w-sm">
              Save Changes
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default EditDriver;
