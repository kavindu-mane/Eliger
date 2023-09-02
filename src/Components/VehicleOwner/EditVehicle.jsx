import { Button, Card, Label, TextInput } from "flowbite-react";

const EditVehicle = () => {
  return (
    <Card className="mt-8 dark:bg-slate-900">
      <div className="text-center text-2xl font-semibold tracking-wide  ">
        Edit Vehicle
      </div>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="regno" value="Vehicle Reg.No" />
          </div>
          <TextInput id="regno" placeholder="ABC-4567" required type="text" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="type" value="Vehicle Type" />
          </div>
          <TextInput
            id="type"
            placeholder="Car/Van/Bike/Tuk Tuk "
            required
            type="text"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="amount" value="Pasenger Amount" />
          </div>
          <TextInput id="amount" placeholder="" required type="text" />
        </div>

        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <div className="flex w-full justify-center font-Poppins">
          <Button type="submit" className="w-full max-w-sm">
            Save Changes
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default EditVehicle;
