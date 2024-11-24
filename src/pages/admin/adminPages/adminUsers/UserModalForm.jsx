import { useDispatch } from "react-redux";
import { useAddUserMutation } from "../../../../services/usersApi";
import Button from "../../../../components/ui/Button";
import Input from "../../../../components/ui/Input";
import { setModal } from "../../../../features/modalSlice";

function UserModalForm() {
  const [addUser] = useAddUserMutation();
  const dispatch = useDispatch();
  const handleAddUser = async (event) => {
    event.preventDefault();
    const forma = new FormData(event.target);
    const data = Object.fromEntries(forma.entries());
    const added = new Date();
    const newUser = { ...data, added };

    await addUser(newUser).then(() => dispatch(setModal(false)));
  };
  return (
    <>
      <h1 className="text-center text-xl font-medium mb-5">Add User</h1>
      <form onSubmit={handleAddUser} className="w-full flex flex-col gap-3">
        <Input
          className
          label={"Username"}
          placeholder="username"
          type={"text"}
          inputStyle={""}
          name="username"
        />
        <Input
          className
          label={"Email"}
          placeholder="email"
          type={"email"}
          inputStyle={""}
          name="email"
        />
        <Input
          className
          label={"Phone"}
          placeholder="phone number"
          type={"tel"}
          inputStyle={""}
          name="phone"
        />
        <Input
          className
          label={"Password"}
          placeholder="password"
          type={"password"}
          inputStyle={""}
          name="password"
        />
        <div className="w-full flex items-center gap-3 ">
          <Button
            type="button"
            handleClick={() => dispatch(setModal(false))}
            buttonStyles={"bg-red-500 text-white flex-1 text-base py-2 "}
          >
            Cancel
          </Button>
          <Button buttonStyles={"bg-blue-600 text-white flex-1 w-full py-2 "}>
            +Add new User
          </Button>
        </div>
      </form>
    </>
  );
}

export default UserModalForm;
