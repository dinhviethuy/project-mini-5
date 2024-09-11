import './LayoutDefault.css'
import {Link, NavLink, Outlet} from "react-router-dom";
import {getCookie} from "../../helpers/cookie.jsx";
import {useSelector} from "react-redux";

function LayoutDefault() {
  const token = getCookie('token');
  const login = useSelector(state => state.LoginReducer);
  return (<>
    <div className="layout-default">
      <header className="header-default">
        <div className="logo">
          <Link to="/">Quiz</Link>
        </div>
        {token ? (<div className="menu-user">
          <ul>
            <li>
              <NavLink className="item" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className="item" to="topics">Topics</NavLink>
            </li>
            <li>
              <NavLink className="item" to="answers">Answers</NavLink>
            </li>
          </ul>
        </div>) : (<></>)}
        <div className="menu">
          <ul>
            {token ? (<li>
              <NavLink to="/logout" className="item">Logout</NavLink>
            </li>) : (<>
              <li>
                <NavLink className="item" to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink className="item" to="/register">Register</NavLink>
              </li>
            </>)}
          </ul>
        </div>
      </header>
      <main className="main">
        <Outlet/>
      </main>
      <footer className="footer">Copyright dinhviethuy - All Rights Reserved</footer>
    </div>
  </>)
}

export default LayoutDefault