import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import AdminContent from "./AdminContent";

const AdminPage = () => {
  return (
    <div className="w-full flex">
      <AdminSidebar />
      <div className="w-full flex flex-col">
        <AdminNavbar />
        <AdminContent />
      </div>
    </div>
  );
};

export default AdminPage;
