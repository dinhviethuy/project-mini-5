import './Login.css';
import {get} from "../../utils/request.jsx";
import {useState} from "react";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import {getCookie, setCookie} from "../../helpers/cookie.jsx";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {LoginAction} from "../../action/payload.jsx";

function Login() {
  const token = getCookie('token');
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const res = await get(`users?email=${email}&password=${password}`);
    if (res.length > 0) {
      navigate('/');
      setCookie('id', res[0].id, 1);
      setCookie('fullName', res[0].fullName, 1);
      setCookie('email', res[0].email, 1);
      setCookie('token', res[0].token, 1);
      Swal.fire({
        icon: "success", title: "Login thành công", showConfirmButton: false, timer: 1500
      });
      dispatch(LoginAction(true));
    } else {
      if (!show) setShow(true);
    }
  }

  const handleChange = () => {
    if (show) setShow(false);
  }
  return (<>
    {token ? navigate('/') : (<><div className="form-login">
      <div className="form-head">
        <h2 className="title">Login Quiz</h2>
      </div>
      <form className="form-body" onSubmit={handleSubmit}>
        <input type="email" placeholder="dinhviethuy055@gmail.com" name="email" required onChange={handleChange}/>
        <input type="password" placeholder="1" name="password" required onChange={handleChange}/>
        {show && <div className="text-red-500 font-bold">Email hoặc mật khẩu sai</div>}
        <div className="button">
          <button className="btn" type="submit">Login</button>
        </div>
      </form>
    </div>
    </>)}
  </>)
}

export default Login
