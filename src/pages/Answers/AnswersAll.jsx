import {useEffect, useState} from "react";
import {get} from "../../utils/request.jsx";
import AnswersBody from "./AnswersBody.jsx";
import {getCookie} from "../../helpers/cookie.jsx";

function AnswersAll() {
  const id = getCookie('id');
  const [topic, setTopic] = useState([]);
  const [name, setName] = useState([]);
  useEffect(() => {
    const fetchApi = async (patch) => {
      const result = await get(patch);
      return result;
    }

    const fetchData = async () => {
      const resTopic = await fetchApi(`answers?userId=${id}`);
      const resName = await fetchApi(`topics`);
      setTopic(resTopic);
      setName(resName);
    }
    fetchData();
  }, []);
  topic.reverse();
  return (<>
    <div className="topic">
      <h2>Danh sách bài đã luyện tập</h2>
      {topic.length > 0 ? (<table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tên chủ đề</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {topic.map((item, index) => (<AnswersBody item={item} key={index} name={name[item.topicId - 1].name}/>))}
        </tbody>
      </table>) : <div>Bạn chưa luyện tập lần nào</div>}
    </div>
  </>)
}

export default AnswersAll