import {useRef} from "react";
import {useNavigate} from "react-router-dom";

function HomeTrue() {
  const pages = useRef();
  const navigate = useNavigate();
  const handleClick = (e) => {
    switch (e.target.id) {
      case '1':
        navigate('/topics');
        break;
      case '2':
        navigate('/answers');
        break;
      default:
        console.error('ERROR');
    }
  }
  return (<>
    <div className="home-true">
      <div className="home-head">
        <div className="home-content">
          <p>Chúc mừng bạn đã đăng nhập thành công!</p>
        </div>
        <div className="home-menu">
          <button ref={pages} className="btn" id="1" onClick={handleClick}>Danh sách chủ đề ôn luyện</button>
          <button ref={pages} className="btn" id="2" onClick={handleClick}>Danh sách bài đã luyện tập</button>
        </div>
      </div>
      <div className="home-body">
        <p>Website trắc nghiệm online lập trình Frontend là một nền táng trực tuyến cho phép các lâp trình viên
          Frontend thực hiên các bài kiểm tra trắc nghiệm, đánh giá và đo đạc kiến thức của mình trong lĩnh vực lập
          trình Frontend.</p>
        <p>Đối với các lập trình viên Frontend, website trắc nghiệm online cung cấp các bài kiểm tra để giúp họ nâng
          cao kiến thức và kÿ năng của mình trong các công nghệ và công cụ lâp trình như HTML, CSS, JavaScript,
          jQuery,
          Bootstrap, Angular, React, Vue...</p>
      </div>
    </div>
  </>)
}

export default HomeTrue