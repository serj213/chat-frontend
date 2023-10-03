import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../../../../entites/user/model/slice/userSlice";
import { AuthReducer } from "../../../../features/Auth/";
import { $api } from "../../../../shared/api/api";
import { $rtkApi } from "../../../../shared/api/rtkApi";
// ...

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    user: UserReducer,
    [$rtkApi.reducerPath]: $rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: { extraArgument: { api: $api } },
    }).concat($rtkApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
