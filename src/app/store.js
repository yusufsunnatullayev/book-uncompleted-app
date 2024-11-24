import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../services/usersApi";
import adminTokenReducer from "../features/admin/adminToken";
import userTokenReducer from "../features/users/userToken";
import modalReducer from "../features/modalSlice";
import modeReducer from "../features/modeSlice";
import { booksApi } from "../services/bookApi";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [booksApi.reducerPath]: booksApi.reducer,
    adminToken: adminTokenReducer,
    userToken: userTokenReducer,
    modal: modalReducer,
    darkMode: modeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, booksApi.middleware),
});
