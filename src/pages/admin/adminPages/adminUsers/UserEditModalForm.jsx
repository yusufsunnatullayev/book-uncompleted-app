import { useDispatch } from "react-redux";
import {
  useUpdateUserMutation,
  useUserDetailQuery,
} from "../../../../services/usersApi";
import Input from "../../../../components/ui/Input";
import Button from "../../../../components/ui/Button";
import { setModal } from "../../../../features/modalSlice";

function UserEditModalForm({ id }) {
  const { data: currentUser, isSuccess, isLoading } = useUserDetailQuery(id);
  const [editUser] = useUpdateUserMutation();
  const dispatch = useDispatch();
  const handleEditUser = async (event) => {
    event.preventDefault();
    const forma = new FormData(event.target);
    const data = Object.fromEntries(forma.entries());
    const added = new Date();
    const newUser = { ...data, id, added };
    await editUser(newUser).then(() => dispatch(setModal(false)));
  };
  return (
    <>
      <h1 className="text-center text-xl font-medium">Edit user</h1>
      {isLoading && <h1>LOADING</h1>}
      {isSuccess && (
        <form onSubmit={handleEditUser} className="w-full flex flex-col gap-3">
          <Input
            defaultValue={currentUser?.username}
            className
            label={"Username"}
            placeholder="username"
            type={"text"}
            inputStyle={""}
            name="username"
          />
          <Input
            defaultValue={currentUser?.email}
            className
            label={"Email"}
            placeholder="email"
            type={"email"}
            inputStyle={""}
            name="email"
          />
          <Input
            defaultValue={currentUser?.phone}
            className
            label={"Phone"}
            placeholder="phone number"
            type={"tel"}
            inputStyle={""}
            name="phone"
          />
          <Input
            defaultValue={currentUser?.password}
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
              Edit user
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default UserEditModalForm;
