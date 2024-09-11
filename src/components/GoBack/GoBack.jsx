import {FaAngleLeft} from "react-icons/fa6";
import './GoBack.css';
import {useNavigate} from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/answers');
  }
  return (
    <div className="go-back">
      <div className="go-back__container">
        <FaAngleLeft className='icon' onClick={handleClick} />
      </div>
    </div>
  )
}

export default GoBack