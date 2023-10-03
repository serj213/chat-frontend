import { useSelector } from "react-redux";
import { RegisterForm } from "../../../features/Auth";
import { getAuthTypeForm } from "../../../features/Auth/models/selectors/AuthSelector";
import { LoginForm } from "../../../features/Auth/ui/LoginForm/LoginForm";

const AuthPage = () => {
  const authTypeForm = useSelector(getAuthTypeForm);
  
  return (
    <div>{authTypeForm === "register" ? <RegisterForm /> : <LoginForm />}</div>
  );
};

export default AuthPage;
