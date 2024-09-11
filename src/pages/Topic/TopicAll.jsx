import './Topic.css';
import {useEffect, useState} from "react";
import {get} from "../../utils/request.jsx";
import TopicBody from "./TopicBody.jsx";

function TopicAll() {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const result = await get('topics');
      setTopic(result);
    }
    fetchApi();
  }, []);
  return (<>
    <div className="topic">
      <h2>Danh sách chủ đề ôn luyện</h2>
      {topic.length > 0 ? (<table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên chủ đề</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {topic.map((item, index) => (<TopicBody item={item} key={index}/>))}
        </tbody>
      </table>) : <div>Chưa có chủ đề để ôn luyện</div>}
    </div>
  </>)
}

export default TopicAll