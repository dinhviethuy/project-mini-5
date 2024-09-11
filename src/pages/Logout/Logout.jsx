import {deleteAllCookies, deleteCookie} from "../../helpers/cookie.jsx";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {LoginAction, LogoutAction} from "../../action/payload.jsx";
import {useDispatch} from "react-redux";

function Logout() {
  const dispatch = useDispatch();
  deleteAllCookies();
  useEffect(() => {
    dispatch(LogoutAction(true));
    navigate('/login');
  }, []);
  const navigate = useNavigate();
  return (<></>)
}

export default Logout