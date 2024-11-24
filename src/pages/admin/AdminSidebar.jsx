import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AdminSidebar = () => {
  const [activeId, setActive] = useState(
    JSON.parse(sessionStorage.getItem("activeId")) || 1
  );
  useEffect(() => {
    sessionStorage.setItem("activeId", JSON.stringify(activeId));
  }, [activeId]);
  const { t } = useTranslation();

  const sidebarItems = [
    {
      link: "/admin",
      title: t("Dashboard"),
      id: 1,
    },
    {
      link: "/admin/users",
      title: t("Users"),
      id: 2,
    },
    {
      link: "/admin/books",
      title: t("Books"),
      id: 3,
    },
    {
      link: "/admin/favourites",
      title: t("Favourites"),
      id: 4,
    },
    {
      link: "/admin/baskets",
      title: t("Baskets"),
      id: 5,
    },
  ];

  return (
    <div className="dark:bg-gray-950 dark:text-white flex flex-col gap-7 items-start w-80 py-6">
      <h1 className="text-3xl font-semibold ms-10">{t("Logo")}</h1>
      <div className="flex flex-col items-start w-full">
        {sidebarItems.map((item) => (
          <Link
            onClick={() => setActive(item.id)}
            className={`${
              activeId === item.id
                ? "bg-blue-500 text-white"
                : "bg-white text-blue hover:bg-gray-100 duration-150"
            } w-full p-3 text-base px-10 font-medium dark:bg-gray-950 dark:text-white`}
            key={item.id}
            to={item.link}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
