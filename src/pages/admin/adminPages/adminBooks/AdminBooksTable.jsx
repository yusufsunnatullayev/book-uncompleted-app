import React from "react";
import Button from "../../../../components/ui/Button";
import { FaTrash } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { useDeleteBookMutation } from "../../../../services/bookApi";
import { useDispatch } from "react-redux";
import {
  setCurrentBookId,
  setModal,
  setModalType,
} from "../../../../features/modalSlice";

const AdminBooksTable = ({ book }) => {
  const [deleteBook] = useDeleteBookMutation();
  const dispatch = useDispatch();
  return (
    <>
      <tr className="border-b cursor-pointer dark:border-gray-950 dark:hover:bg-gray-700 border-gray-200 hover:bg-gray-100">
        <td className="font-semibold text-sm py-3 px-6 text-left whitespace-nowrap">
          {book?.title}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {book?.author}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {book?.year}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          ${book?.price}
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left">
          {book?.img.substring(0, 20)}...
        </td>
        <td className="font-semibold text-sm py-3 px-6 text-left flex gap-5 ">
          <Button
            handleClick={() => {
              dispatch(setModal(true));
              dispatch(setModalType("editBook"));
              dispatch(setCurrentBookId(book.id));
            }}
          >
            <CiEdit />
          </Button>
          <Button
            handleClick={() => {
              deleteBook(book.id);
            }}
          >
            <FaTrash />
          </Button>
        </td>
      </tr>
    </>
  );
};

export default AdminBooksTable;
