import React from "react";
import Button from "../../../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { setModal, setModalType } from "../../../../features/modalSlice";
import Modal from "../../../../components/ui/Modal";
import { useBooksQuery } from "../../../../services/bookApi";
import AdminBooksTable from "./AdminBooksTable";
import { useTranslation } from "react-i18next";

const AdminBooks = () => {
  const modal = useSelector((state) => state.modal.modal);
  const { data: books, isSuccess } = useBooksQuery();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  return (
    <div className="w-full min-h-screen flex flex-col gap-5">
      <Button
        buttonStyles={"bg-blue-600 text-white w-28 self-end"}
        handleClick={() => {
          dispatch(setModal(true));
          dispatch(setModalType("book"));
        }}
      >
        {t("+Add book")}
      </Button>
      <table className="rounded-md min-w-full dark:bg-gray-800 dark:text-white dark:border-gray-950 bg-white border border-gray-200">
        <thead>
          <tr className="w-full dark:bg-gray-950 dark:text-white bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">{t("Title")}</th>
            <th className="py-3 px-6 text-left">{t("Author")}</th>
            <th className="py-3 px-6 text-left">{t("Year")}</th>
            <th className="py-3 px-6 text-left">{t("Price")}</th>
            <th className="py-3 px-6 text-left">{t("Image")}</th>
            <th className="py-3 px-6 text-left">{t("Actions")}</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 dark:text-white text-sm font-light">
          {isSuccess &&
            books.map((book) => <AdminBooksTable key={book.id} book={book} />)}
        </tbody>
      </table>
      {modal && <Modal />}
    </div>
  );
};

export default AdminBooks;
