import React from "react";
import { useUsersQuery } from "../../../../services/usersApi";
import AdminUsersTable from "./adminUsersTable";
import Button from "../../../../components/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../../../../components/ui/Modal";
import { setModal, setModalType } from "../../../../features/modalSlice";
import { useTranslation } from "react-i18next";

const AdminUsers = () => {
  const modal = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();
  const { data, isSuccess } = useUsersQuery();
  const { t } = useTranslation();

  return (
    <div className="overflow-x-auto rounded-md flex flex-col gap-5">
      <Button
        handleClick={() => {
          dispatch(setModal(true));
          dispatch(setModalType("user"));
        }}
        buttonStyles={"bg-blue-600 text-white w-28 self-end"}
      >
        {t("+Add User")}
      </Button>
      <table className="dark:bg-gray-800 dark:text-white dark:border-gray-950 rounded-md min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full dark:bg-gray-950 dark:text-white bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">{t("Username")}</th>
            <th className="py-3 px-6 text-left">{t("Email")}</th>
            <th className="py-3 px-6 text-left">{t("Phone")}</th>
            <th className="py-3 px-6 text-left">{t("Password")}</th>
            <th className="py-3 px-6 text-left">{t("Time")}</th>
            <th className="py-3 px-6 text-left">{t("Actions")}</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 dark:text-white text-sm font-light">
          {isSuccess &&
            data.map((user) => <AdminUsersTable key={user.id} user={user} />)}
        </tbody>
      </table>
      {modal && <Modal />}
    </div>
  );
};

export default AdminUsers;
