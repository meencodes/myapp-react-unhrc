import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import dos from './image/img1.jpg';
import arrow from './image/arrow_down.svg';

import $ from 'jquery';


const Info = styled.div`
  width: 100%;
  height: 100%;
`
const ControlButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
`

const Info1 = styled.div`
  height: 100vh;
  overflow: hidden;
  position: relative;
`
const Session1 = styled.div`
  top: 0;
  left: 0;
  width: 100vw;
  bottom: 0;
  overflow: hidden;
  position: absolute;
`
const Session2 = styled.div`
  left: 5vw;
  bottom: 5vh;
  position: absolute;
`
const InfoImg1 = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  overflow: hidden;
  position: absolute;
  background: black;
`
const Info2 = styled.div`
  overflow: hidden;
  position: relative;
`
const Button = styled.button`
  cursor: pointer;
  fill: white;
  color: white;
  border: 1px solid white;
  padding: .35rem;
  background: transparent;
  line-height: 0;
  margin-right: 10px;
  border-radius: 100%;

  &:hover {
    border-color: rgb(250,235,00);
    fill: rgb(250,235,00);
  }
`

class App extends Component {

  componentDidMount = () => {
    $(window).on('scroll', function () {
      if ($(window).scrollTop()) {
        $('.AppLayout').addClass('white');
      }
      else {
        $('.AppLayout').removeClass('white');
      }
    })
  }

  render() {
    return (
      <Info>
        <div className="Header">
          <div className="AppLayout">
            <div className="Logo">
              <a href="#top">
                <img src={logo} style={{ width: '160px', alignSelf: 'center', borderRight: '1px solid white', paddingRight: '20px' }} alt="logo" />
              </a>
              <span style={{ color: 'white', alignSelf: 'center' }}>ได้เริ่มทำงานในประเทศไทยตั้งแต่ปี พ.ศ. 2518</span>
            </div>
            <ControlButton>
              <a href="www.google.com">เกี่ยวกับเรา</a>
              <a href="www.google.com">บริจาคช่วยเหลือ</a>
              <Button aria-label="Facebook">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                  <path d="M15.8,21.8h-5v-6h5v-4.7c0-2.5,0.7-4.4,2.1-5.8s3.3-2.1,5.6-2.1c1.9,0,3.4,0.1,4.6,0.3v5.3h-3.1 c-1.2,0-2,0.3-2.4,0.8c-0.3,0.4-0.5,1.1-0.5,2.1v4.1h5.6l-0.8,6h-4.8v15h-6.2V21.8z"></path>
                </svg>
              </Button>
              <button aria-label="Twitter">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                  <path d="M32.6,14c0,3.1-0.8,6.2-2.3,9.1c-1.6,3.1-3.8,5.6-6.6,7.4c-3.1,2.1-6.7,3.1-10.7,3.1c-3.8,0-7.4-1-10.5-3.1 c0.5,0,1,0.1,1.6,0.1c3.2,0,6-1,8.6-2.9c-1.5,0-2.9-0.4-4-1.3c-1.2-0.9-2-2-2.4-3.4C6.7,23,7.1,23,7.5,23c0.6,0,1.2-0.1,1.8-0.2 c-1.6-0.3-2.9-1.2-3.9-2.4c-1-1.3-1.6-2.7-1.6-4.3v-0.1c1,0.6,2,0.9,3.1,0.9c-0.9-0.7-1.7-1.5-2.2-2.5s-0.9-2.1-0.9-3.3 c0-1.2,0.3-2.3,1-3.4c1.7,2.1,3.8,3.8,6.3,5.1c2.5,1.3,5.1,2,7.9,2.1c-0.1-0.5-0.1-1-0.1-1.6c0-1.2,0.3-2.4,0.9-3.4 c0.6-1.1,1.4-1.9,2.5-2.5c1-0.6,2.2-0.9,3.4-0.9c1,0,1.9,0.2,2.8,0.6c0.9,0.4,1.6,0.9,2.3,1.6c1.6-0.3,3-0.9,4.4-1.6 c-0.5,1.6-1.5,2.9-3,3.8c1.3-0.2,2.6-0.5,3.9-1.1c-1,1.4-2.1,2.6-3.5,3.6C32.6,13.4,32.6,13.6,32.6,14z">
                  </path>
                </svg>
              </button>
              <button aria-label="Email">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40"><g>
                  <path d="M34.8,15.9c0,0.3,0,12.2,0,12.2c0,0.7-0.9,1.6-1.7,1.6H6.5c-0.7,0-1.6-0.9-1.6-1.6c0,0,0-11.9,0-12.2 c0-0.3-0.1-0.7,0.6-0.4c0.9,0.5,12.2,6.5,12.8,6.7c0.5,0.3,0.9,0.3,1.5,0.3c0.5,0,0.9-0.1,1.5-0.3c0.6-0.3,11.9-6.2,12.8-6.7 C34.8,15.1,34.8,15.5,34.8,15.9z M5.7,10.3h28.2c1.5,0,0.7,1.4-0.1,1.8c-0.9,0.5-12.1,6.5-12.5,6.7s-0.9,0.3-1.5,0.3 c-0.6,0-1.1-0.1-1.5-0.3S6.7,12.6,5.8,12.1C5,11.7,4.3,10.3,5.7,10.3z">
                  </path></g>
                </svg>
              </button>
            </ControlButton>
          </div>
        </div>

        <Info1>
          <Session1>
            <InfoImg1>
              <img src={dos} className="info1" alt="saron" sizes="180vh">
              </img>
              <span className="jss905">© UNHCR 2019 — ประเทศไทย</span>
            </InfoImg1>
          </Session1>

          <Session2>
            <div className="message">
              —<br />UNHCR<br />Bangkok, Thailand.<br />
            </div>
            <a href="#po" className="action">
              <span className="action_icon">
                <img src={arrow} style={{ width: '23px', height: '23px' }} alt="action" />
              </span>
              <span className="action_message">เลื่อนดูข่าวสาร</span>
            </a>
          </Session2>

        </Info1>

        <Info2>
          <section className="about">
            <h4 className="jss115 jss116">
              <div className="jss135 jss136">
                เราทำงานร่วมกับรัฐบาลและองค์กรเอกชน (NGOs) เอ็นจีโอ เพื่อให้ความช่วยเหลือและให้ความคุ้มครองผู้ลี้ภัยที่พักพิงในค่ายที่พักพิงชั่วคราวในประเทศ ตามคำเชิญของรัฐบาลไทยในปี พ.ศ. 2518 อย่างต่อเนื่องจนถึงปัจจุบัน ..
                รัฐบาลไทยได้ร่วมมือกับหน่วยงานนานาชาติ องค์การนอกภาครัฐ และผู้บริจาคทั้งภาครัฐและเอกชนมาอย่างยาวนานเพื่อให้ความคุ้มครอง ความช่วยเหลือ และหาทางออกที่ยั่งยืนให้แก่ผู้ลี้ภัยที่หลั่งไหลมาจากประเทศกัมพูชา ลาว เวียดนาม เมียนมา และประเทศอื่นๆ
              </div>
            </h4>
            <div className="jss135 jss136">
              <div className="news" id="po">
                <nav className="jss118">
                  <div className="jss119">
                  </div>
                </nav>
              </div>
            </div>
          </section>
        </Info2>

      </Info>
    );
  }
}

export default App;
