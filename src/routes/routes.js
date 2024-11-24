import { lazy } from "react";

const Users = lazy(() => import("../pages/users"));
const AdminPage = lazy(() => import("../pages/admin"));
const AdminDashboard = lazy(() =>
  import("../pages/admin/adminPages/adminDashboard")
);
const AdminUsers = lazy(() => import("../pages/admin/adminPages/adminUsers"));
const AdminBooks = lazy(() => import("../pages/admin/adminPages/adminBooks"));
const AdminFavourites = lazy(() =>
  import("../pages/admin/adminPages/adminFavourites")
);
const AdminBaskets = lazy(() =>
  import("../pages/admin/adminPages/adminBaskets")
);

export const protectedRoutes = [
  {
    id: 1,
    route: AdminPage,
    path: "/admin/*",
    subRoutes: [
      {
        id: 1,
        subRoute: AdminDashboard,
        path: "/",
      },
      {
        id: 2,
        subRoute: AdminUsers,
        path: "/users",
      },
      {
        id: 3,
        subRoute: AdminBooks,
        path: "/books",
      },
      {
        id: 4,
        subRoute: AdminFavourites,
        path: "/favourites",
      },
      {
        id: 5,
        subRoute: AdminBaskets,
        path: "/baskets",
      },
    ],
  },
];

export const userProtectedRoutes = [
  {
    id: 1,
    route: Users,
    path: "/",
  },
];
