import './Answers.css';

function DrawAnswers(props) {
  const {input, output, index} = props;
  let check = false;
  if (input.correctAnswer !== output.answer) check = true;
  return (<>
    <div className="output-item">
      <div>
        <span className={check ? "no" : "yes"}>Câu {index + 1}: {input.question}</span>
      </div>
      <div className="content">
        {input.answers.map((item, index) => (<div key={index}>
          <input type="radio" disabled checked={index === output.answer}/>
          <label htmlFor={`answer${index}of${name}`}
                 className={(index === input.correctAnswer ? "acp " : "") + ((check && index === output.answer) ? " wr" : "")}>{item}</label>
          <br/>
        </div>))}
      </div>
    </div>
  </>)
}

export default DrawAnswers