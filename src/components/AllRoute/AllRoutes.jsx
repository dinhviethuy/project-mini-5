import {useRoutes} from "react-router-dom";
import {routes} from "../../routes/routes.jsx";

function AllRoutes() {
  const route = useRoutes(routes);
  return (<>
    {route}
  </>)
}

export default AllRoutes
