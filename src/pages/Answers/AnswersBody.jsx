import {Link} from "react-router-dom";

function AnswersBody(props) {
  const {item, name} = props;
  return (<>
    <tr>
      <td>{item.id}</td>
      <td>{name}</td>
      <td>
        <Link className="btn" to={`/answers/${item.id}`}>Xem chi tiết</Link>
      </td>
    </tr>
  </>)
}

export default AnswersBody