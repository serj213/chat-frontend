import { type RouteProps } from "react-router-dom";
import { AuthPage } from "../../pages/AuthPage";
import { NotFoundPage } from "../../pages/NotFoundPage";
import { RoomPage } from "../../pages/RoomPage";

export enum EPaths {
  AUTH = "auth",
  ROOM = "room",
  NOT_FOUND = "not-found",
}

export const routerPaths: Record<EPaths, string> = {
  [EPaths.AUTH]: "/",
  [EPaths.ROOM]: "/room/:id",
  [EPaths.NOT_FOUND]: "*",
};

export const routerConfig: Record<EPaths, RouteProps> = {
  [EPaths.AUTH]: {
    path: routerPaths.auth,
    element: <AuthPage />,
  },
  [EPaths.ROOM]: {
    path: routerPaths.room,
    element: <RoomPage />
  },
  [EPaths.NOT_FOUND]: {
    path: routerPaths["not-found"],
    element: <NotFoundPage />
  },
};
