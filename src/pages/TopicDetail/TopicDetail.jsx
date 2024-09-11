import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {get, post} from "../../utils/request.jsx";
import TopicMini from "./TopicMini.jsx";
import {getCookie} from "../../helpers/cookie.jsx";
import './TopicDetail.css';
import Loading from "../../components/Loading/Loading.jsx";

function TopicDetail() {
  const param = useParams();
  const [questions, setQuestions] = useState([]);
  const id = getCookie('id');
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  useEffect(() => {
    const fetchApi = async (options) => {
      try {
        const result = await get(options);
        return result;
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    const fetchData = async () => {
      const resQuestion = await fetchApi(`questions?topicId=${param.id}`);
      if (resQuestion && resQuestion.length > 0) {
        const resTitle = await fetchApi(`topics/${param.id}`);
        setTitle(resTitle);
        setQuestions(resQuestion);
      }
    };
    fetchData();
  }, [param.id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = questions.map((item) => {
      const name = item.id.toString();
      const search = `input[name=\"${name}\"]:checked`;
      const temp = document.querySelector(search);
      let value = -1;
      if (temp) value = parseInt(temp.value);
      return {
        "questionId": item.id, "answer": value
      }
    })
    const res = await post('answers', {userId: parseInt(id), topicId: parseInt(param.id), answers: question});
    await navigate(`/answers/${res.id}`);
  }

  return (<>
    {questions.length > 0 ? (<div className="quiz">
      <h2>Bài Quiz chủ đề: {title.name}</h2>
      <form onSubmit={handleSubmit} className="form">
        {questions.map((item, index) => (<TopicMini key={item.id} index={index + 1} name={item.id} item={item}/>))}
        <div className="button">
          <button type="submit" className="btn">Nộp bài</button>
        </div>
      </form>
    </div>) : (<>
      <>
        <div className="quiz">
          <div className="loading">
            <Loading/>
          </div>
        </div>
      </>
    </>)}
  </>)
}

export default TopicDetail


