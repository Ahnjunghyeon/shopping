import React from "react";
import ProfileBox from "../components/ProfileBox"; // ProfileBox가 components 폴더에 있는지 확인
import "./styles/MyPage.css";

function MyPage() {
  return (
    <div className="mypage">
      <h2>마이페이지</h2>
      <ProfileBox />
    </div>
  );
}

export default MyPage;
