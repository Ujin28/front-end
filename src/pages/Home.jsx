import React, { useState } from "react";
import styled from "styled-components";
import SearchFilterBox from "../components/Common/Box_Search&Back/SearchFilterBox";
import Navigation from "../components/Common/Navigation";
import HomeContents from "../components/Page_Components/Home/Home_Contents";
import MapButton from "../components/Common/MapButton";
import { useNavigate } from "react-router-dom";


const Text = styled.div`
  padding-top: 16px;
  padding-left: 16px;
  color: #ffffff;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
  padding-bottom: 8px;
`;

const Text2 = styled.text`
  padding-top: 16px;
  padding-left: 2px;
  color: #D7FC6F;
  font-size: 16px;
  font-family: "Apple-SD-GothicNeo-Bold";
  letter-spacing: -0.3%;
  line-height: 140%;
  padding-bottom: 8px;
`;

const Text3 = styled.text`
  padding-top: 23px;
  padding-left: 94px;
  color: #4F5052;
  font-size: 11px;
  font-family: "Apple-SD-GothicNeo-Regular";
  letter-spacing: -0.3%;
  line-height: 140%;
  padding-bottom: 8px;
  cursor: pointer;
  text-decoration: underline;
`;

const Home = () => {
  const accessToken = window.localStorage.getItem("accessToken");
  const navigate = useNavigate();

  const handleButtonClick = () => {
    console.log('Navigating to /placelist'); 
    navigate("/placelist"); 
  };


  if (window.localStorage.getItem("login") == "로그인") {
    // fetch함수 추가
    fetch(`http://localhost:8080/home/ai`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        // ai_recommend 배열의 각 요소를 로컬 스토리지에 저장
        data.ai_recommend.forEach((item, index) => {
          const idx = index + 1; // 인덱스를 1부터 시작
          localStorage.setItem(`tag${idx}`, item.tag);
          localStorage.setItem(`placename${idx}`, item.placename);
          localStorage.setItem(`category${idx}`, item.category);
          localStorage.setItem(`URL${idx}`, item.URL);
          localStorage.setItem(`rating${idx}`, item.rating);
        });
      })
      .catch((error) => {
        console.error("취향 카테고리 오류:", error);
      });
  }

  return (
    <div>
      <SearchFilterBox></SearchFilterBox>
      <Text>
        이길로 추천 장소 <Text2>종로구</Text2> <Text3 onClick={handleButtonClick}>다른 종로구 장소 보러가기</Text3>
      </Text>
      <HomeContents></HomeContents>
      <MapButton></MapButton>
      {/* <Navigation></Navigation> */}
    </div>
  );
};

export default Home;
