import {Link} from "react-router-dom";

function TopicBody(props) {
  const {item} = props;
  return (<>
    <tr>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>
        <Link className="btn" to={`/topics/${item.id}`}>Làm bài</Link>
      </td>
    </tr>
  </>)
}

export default TopicBody