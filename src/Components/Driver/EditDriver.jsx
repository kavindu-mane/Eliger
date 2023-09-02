import { Button, Card, Label, TextInput } from "flowbite-react";

const EditDriver = () => {
  return (
    <div className="px-5">
      <Card className="dark:bg-slate-700">
        <p className="justify-center text-3xl font-semibold tracking-wide ">
          Edit Account
        </p>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="fname" value="First Name" />
              </div>
              <TextInput id="fname" required type="text" />
            </div>

            <div className="w-1/2">
              <div className="mb-2 block">
                <Label htmlFor="lname" value="Last Name" />
              </div>
              <TextInput id="lname" required type="text" />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="tele" value="Contact Number" />
            </div>
            <TextInput id="name" required type="number" />
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

          <div>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
export default EditDriver;
