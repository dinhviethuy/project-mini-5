// import {getCookie} from "../../helpers/cookie.jsx";
// import {useEffect, useState} from "react";
// import {get} from "../../utils/request.jsx";
// import {Link, useParams} from "react-router-dom";
// import DrawAnswers from "./DrawAnswers.jsx";
// import {useDispatch} from "react-redux";
//
// function AnswerUserId() {
//   const id = getCookie('id');
//   const param = useParams();
//   const [answers, setAnswers] = useState([]);
//   const [questions, setQuestions] = useState([]);
//   const [title, setTitle] = useState("");
//   const [total, setTotal] = useState(0);
//   useEffect(() => {
//     const fetchApi = async (options) => {
//       try {
//         const result = await get(options);
//         return result;
//       } catch (error) {
//         console.error("Failed to fetch data:", error);
//       }
//     };
//
//     const fetchData = async () => {
//       const resAnswer = await fetchApi(`answers?userId=${id}&id=${param.id}`);
//       if (resAnswer && resAnswer.length > 0) {
//         const resQuestion = await fetchApi(`questions?topicId=${resAnswer[0].topicId}`);
//         const resTitle = await fetchApi(`topics/${resAnswer[0].topicId}`);
//         setTitle(resTitle);
//         setAnswers(resAnswer);
//         setQuestions(resQuestion);
//       }
//     };
//     fetchData();
//   }, [id, param.id]);
//
//   return (
//     <>
//       {title !== "" ? (<div className="answer">
//         <h3 className="title">Kết quả của chủ để: {title.name}</h3>
//         <h3>Đúng: | Sai: | Tổng số câu: {questions.length} | Tỷ lệ đúng: </h3>
//         <div className="answer">
//           {questions.map((item, index) => (
//             <DrawAnswers key={item.id} index={index} output={answers[0]?.answers[index]} input={item}/>
//           ))}
//         </div>
//         {answers.length > 0 &&
//           <Link className="btn" to={`/topics/${answers[0].topicId}`}>Làm lại</Link>}
//       </div>) : (<div>Vui lòng đợi</div>)}
//     </>
//   )
// }
//
// export default AnswerUserId;

import {getCookie} from "../../helpers/cookie.jsx";
import {useEffect, useState} from "react";
import {get} from "../../utils/request.jsx";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import DrawAnswers from "./DrawAnswers.jsx";
import Loading from "../../components/Loading/Loading.jsx";
import GoBack from "../../components/GoBack/GoBack.jsx";

function AnswerUserId() {
  const id = getCookie('id');
  const param = useParams();
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [title, setTitle] = useState("");
  const [correctCount, setCorrectCount] = useState(0); // Count of correct answers
  const [total, setTotal] = useState(0); // Total number of questions
  const navigate = useNavigate();
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
      const resAnswer = await fetchApi(`answers?userId=${id}&id=${param.id}`);
      if (resAnswer && resAnswer.length > 0) {
        const resQuestion = await fetchApi(`questions?topicId=${resAnswer[0].topicId}`);
        const resTitle = await fetchApi(`topics/${resAnswer[0].topicId}`);
        setTitle(resTitle);
        setAnswers(resAnswer);
        setQuestions(resQuestion);
        const correctAnswers = resAnswer[0].answers.filter((ans, index) => ans.answer === resQuestion[index].correctAnswer);
        setCorrectCount(correctAnswers.length);
        setTotal(resQuestion.length);
      } else navigate('/answers')
    };
    fetchData();
  }, [id, param.id]);
  const correctRate = total > 0 ? ((correctCount / total) * 100).toFixed(2) : 0;
  return (<>
    {title !== "" ? (<div className="answer">
      <GoBack/>
      <h3 className="title">Kết quả của chủ đề: {title.name}</h3>
      <h3>
        Đúng: {correctCount} | Sai: {total - correctCount} | Tổng số câu: {total} | Tỷ lệ đúng: {correctRate}%
      </h3>
      <div className="answer-content">
        {questions.map((item, index) => (
          <DrawAnswers key={item.id} index={index} output={answers[0]?.answers[index]} input={item}/>))}
        {answers.length > 0 && (<div className="answers-button">
          <Link className="btn" to={`/topics/${answers[0].topicId}`}>Làm lại</Link>
        </div>)}
      </div>
    </div>) : (<>
      <div className="answer">
        <div className="loading">
          <Loading/>
        </div>
      </div>
    </>)}
  </>);
}

export default AnswerUserId;
