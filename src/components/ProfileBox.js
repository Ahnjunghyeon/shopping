import React from "react";
import "./styles/ProfileBox.css";

function ProfileBox() {
  return (
    <div className="profile-box">
      <h3>내 프로필</h3>
      <p>이름: 사용자 이름</p>
      <p>이메일: 사용자 이메일</p>
      {/* 추가 프로필 정보 */}
    </div>
  );
}

export default ProfileBox;
