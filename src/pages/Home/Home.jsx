import {getCookie} from "../../helpers/cookie.jsx";
import HomeFalse from "./HomeFalse.jsx";
import HomeTrue from "./HomeTrue.jsx";


function Home() {
  const token = getCookie('token');
  return (<>
    {token ? (<HomeTrue/>) : (<HomeFalse/>)}
  </>)
}

export default Home