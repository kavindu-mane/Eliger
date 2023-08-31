import { Button, Card, Label, TextInput } from "flowbite-react";

const CreateHelpAccount = () => {
  return (
    <Card>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Member Name" />
          </div>
          <TextInput id="name" required type="text" />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Member email" />
          </div>
          <TextInput
            id="email"
            placeholder="abc@gmail.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Initial password" />
          </div>
          <TextInput id="password" required type="password" />
          <div className="mb-2 block">
            <Label htmlFor="Repassword" value="Confirm Initial password" />
          </div>
          <TextInput id="Repassword" required type="password" />
        </div>
        {/* <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div> */}
        <Button type="submit">Register</Button>
      </form>
    </Card>
  );
};
export default CreateHelpAccount;