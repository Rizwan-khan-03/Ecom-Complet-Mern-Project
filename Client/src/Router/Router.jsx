import { Routes, Route, Navigate } from "react-router-dom";
import ProtectRoutes from './ProtectRoutes'
import AuthPoint from "./Auth";
import Layout from "../Component/common/layout/Laout";
import SignIn from "../Pages/Login";

function Router() {
  return (
    <div className="anvContainer">
      <Routes>
        <Route path='/'>
          <Route index element={<AuthPoint Component={SignIn} />} />
        </Route>
        <Route path='/*'>
          <Route index path='*' element={<ProtectRoutes Component={Layout} />} />
        </Route>
      </Routes>

    </div>
  );
}
export default Router