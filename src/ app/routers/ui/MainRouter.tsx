import { Route, Routes } from "react-router-dom";
import { routerConfig } from "../config";

export const MainRouter = () => {
  return (
    <Routes>
      {Object.values(routerConfig).map(({path, element}) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routes>
  );
};
