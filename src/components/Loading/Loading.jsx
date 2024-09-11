import './Loading.css';

function Loading() {
  return (<>
    <div className="loader-container">
      <div className="bouncing-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  </>)
}

export default Loading