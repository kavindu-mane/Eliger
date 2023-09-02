import { Button, Card, Label, TextInput } from "flowbite-react";

const CreateHelpAccount = () => {
  return (
    <Card>
      <form className="flex flex-col gap-4">
        <div className="text-center font-Poppins text-xl font-medium md:text-2xl">
          <h1>New Help & Support Staff Member Registration Form </h1>
        </div>
        <div>
          <div className="mb-2 block font-Poppins">
            <Label htmlFor="name" value="Member Name" />
          </div>
          <TextInput id="name" required type="text" />
        </div>
        <div>
          <div className="mb-2 block font-Poppins">
            <Label htmlFor="email" value="Member email" />
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
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <div className="flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Register
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default CreateHelpAccount;
