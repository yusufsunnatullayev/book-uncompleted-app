import { useDispatch, useSelector } from "react-redux";
import UserModalForm from "../../pages/admin/adminPages/adminUsers/UserModalForm";
import UserEditModalForm from "../../pages/admin/adminPages/adminUsers/UserEditModalForm";
import BookModalForm from "../../pages/admin/adminPages/adminBooks/BookModalForm";
import Button from "./Button";
import { IoMdClose } from "react-icons/io";
import { setModal } from "../../features/modalSlice";
import BookEditForm from "../../pages/admin/adminPages/adminBooks/BookEditForm";

function Modal() {
  const currentUserId = useSelector((state) => state.modal.currentUserId);
  const currentBookId = useSelector((state) => state.modal.currentBookId);
  const dispatch = useDispatch();
  const modalTypes = {
    user: <UserModalForm />,
    editUser: <UserEditModalForm id={currentUserId} />,
    book: <BookModalForm />,
    editBook: <BookEditForm id={currentBookId} />,
  };
  const modalType = useSelector((state) => state.modal.modalType);

  return (
    <div
      className="h-screen top-0 left-0 flex items-center justify-center
         w-full fixed bg-slate-600 bg-opacity-20 dark:bg-black dark:bg-opacity-5"
    >
      <div className="relative w-96 min-h-80 bg-white p-4 dark:bg-slate-700 rounded-md">
        <Button
          buttonStyles={"absolute top-3 right-3 text-base"}
          handleClick={() => dispatch(setModal(false))}
        >
          <IoMdClose />
        </Button>
        {modalTypes[modalType]}
      </div>
    </div>
  );
}

export default Modal;
