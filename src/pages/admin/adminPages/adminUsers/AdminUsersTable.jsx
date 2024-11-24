import React from "react";
import { CiEdit } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import Button from "../../../../components/ui/Button";
import { useDeleteUserMutation } from "../../../../services/usersApi";
import { formatTime } from "../../../../utils/formatTime";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrentUserId,
  setModal,
  setModalType,
} from "../../../../features/modalSlice";
import Modal from "../../../../components/ui/Modal";

const AdminUsersTable = ({ user }) => {
  const modal = useSelector((state) => state.modal.modal);
  const [deleteUser] = useDeleteUserMutation();
  const dispatch = useDispatch();
  return (
    <>
      <tr className="border-b cursor-pointer dark:border-gray-950 dark:hover:bg-gray-700 border-gray-200 hover:bg-gray-100">
        <td className="font-semibold text-sm py-3 px-6 text-left whitespace-nowrap">
          {user?.username}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {user?.email}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {user?.phone}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {user?.password}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {/* {formatTime(user?.added || "-")} */}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left flex gap-5 ">
          <Button
            handleClick={() => {
              dispatch(setModal(true));
              dispatch(setModalType("editUser"));
              dispatch(setCurrentUserId(user.id));
            }}
          >
            <CiEdit />
          </Button>
          <Button handleClick={() => deleteUser(user.id)}>
            <FaTrash />
          </Button>
        </td>
      </tr>
      {modal && <Modal>Edit User</Modal>}
    </>
  );
};

export default AdminUsersTable;
