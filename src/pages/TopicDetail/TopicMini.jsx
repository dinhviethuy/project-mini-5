function TopicMini(props) {
  const {item, index, name} = props;
  return (<>
    <div className="question" key={name}>
      <h3>Câu {index}: {item.question}</h3>
      {item.answers.map((items, index) => (<div key={index}>
        <input type="radio" id={`answer${index}of${name}`} name={name} value={index}/>
        <label htmlFor={`answer${index}of${name}`}>{items}</label>
        <br/>
      </div>))}
    </div>
  </>)
}

export default TopicMini