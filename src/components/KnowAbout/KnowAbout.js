import React from "react";
import JavaScript from '../../images/javascript2.png'
import html from '../../images/html2.png'
import css from '../../images/css2.png'
import react from '../../images/react2.png'
import bootstrap from '../../images/bootstrap2.png'
import material from '../../images/material.png'
import node from '../../images/node.png'
import express from '../../images/express2.png'
import mongodb from '../../images/mongodb2.png'
import heroku from '../../images/heroku.png'
import gitbash from '../../images/gitbash.png'
import firebase from '../../images/firabase.png'
import vs from '../../images/vs.png'
import github from '../../images/github.png'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./knowAbout.css";
import SwiperCore, { Pagination } from "swiper/core";
SwiperCore.use([Pagination]);


const KnowAbout = () => {
  return (
    <main className="knowAbout-container main-container">
      <h1 className="top-header" style={{color:'#2196F3'}}>What i know</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <div className="swiperSliderContainer">
          <SwiperSlide>
            <div>
              <h1 className="position-header">Font End</h1>
              <img className="icon" src={JavaScript} alt=""/>
              <img className="icon" src={react} alt=""/>
              <img className="icon" src={html} alt=""/>
              <img className="icon" src={css} alt=""/>
              <img className="icon" src={bootstrap} alt=""/>
              <img className="icon" src={material} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="position-header">Back End</h1>
              <img className="icon" src={node} alt=""/>
              <img className="icon" src={express} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="position-header">Database</h1>
              <img className="icon" src={mongodb} alt=""/>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <h1 className="position-header">Tools</h1>
              <img className="icon" src={firebase} alt=""/>
              <img className="icon" src={heroku} alt=""/>
              <img className="icon" src={gitbash} alt=""/>
              <img className="icon" src={github} alt=""/>
              <img className="icon" src={vs} alt=""/>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </main>
  );
};

export default KnowAbout;
