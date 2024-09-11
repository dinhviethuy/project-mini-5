import {get, post} from "../../utils/request.jsx";
import Swal from "sweetalert2";
import {Navigate, useNavigate} from "react-router-dom";
import {useState} from "react";
import './Register.css';
import generatorToken from "../../helpers/generatorToken.jsx";
import {getCookie} from "../../helpers/cookie.jsx";

function Register() {
  const navigate = useNavigate();
  const token = getCookie('token');
  const [show, setShow] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault()
    const fullName = e.target[2].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const res = await get(`users?email=${email}`);
    if (res.length === 0) {
      navigate('/login');
      const token = generatorToken();
      const res = await post("users", {fullName: fullName, email: email, password: password, token: token});
      Swal.fire({
        icon: "success", title: "Đăng ký thành công", showConfirmButton: false, timer: 1500
      });
    } else {
      if (!show) setShow(true);
    }
  }
  const handleChange = () => {
    if (show) setShow(false);
  }
  return (<>
    {token ? (navigate('/home')) : (<>
      <div className="form-login">
        <div className="form-head">
          <h2 className="title">Register</h2>
        </div>
        <form className="form-body" onSubmit={handleSubmit}>
          <input placeholder="FullName" name="fullName" required/>
          <input type="email" placeholder="Email" name="email" required onChange={handleChange}/>
          <input type="password" placeholder="Password" name="password" required/>
          {show && <div className="text-red-500 font-bold">Email đã tồn tại</div>}
          <div className="button">
            <button className="btn" type="submit">Register</button>
          </div>
        </form>
      </div>
    </>)}
  </>)
}

export default Register;