import {
  createGlobalStyle
}

from 'styled-components';
import Recoleta from './fonts/Recoleta-Bold.woff';
import afterImage from './components/Header/new-tag.png';
import afterImageBg from './components/Header/girl-bg.png';
import borderBg from './images/border.png';
import borderBg2 from './images/border-bottom.svg';

import wave from './images/wave.png';
import waveMob from './images/small-bg.png';
import btnBGs from './images/btn-bg-skew.png';
import RecoletaRegular from './fonts/Recoleta-Regular.woff';
import VulfSansLight from './fonts/vulf-sans-light.woff';

const GlobalStyle=createGlobalStyle` @font-face {
  font-family: Recoleta;
  src: url(${Recoleta});
}

@font-face {
  font-family: Recoleta-regular;
  src: url(${RecoletaRegular});
}

@font-face {
  font-family: Vulf-Sans-Light;
  src: url(${VulfSansLight});
}



html,
body {
  height: 100%;
  width: 100%;
  line-height: 1.5;
}

.animate__animated.animate__slower {
  // animation-duration: calc(var(--animate-duration) * 7) !important;
}

#animation-down-arrow {
  background: url(https://www.nxworld.net/example/css-scroll-down-button/bg04.jpg) center center / cover no-repeat;
}

#animation-down-arrow a {
  padding-top: 30px;
}

#animation-down-arrow a span {
  position: absolute;
  top: 0;
  left: 50%;
  width: 30px;
  height: 30px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb04 2s infinite;
  animation: sdb04 2s infinite;
  box-sizing: border-box;
}

.page-down-arrow a {
  position: absolute;
  bottom: 20px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font: normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}

.page-down-arrow a:hover {
  opacity: .5;
}

@keyframes sdb04 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }

  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }

  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}

.phone-black-border {
  width: 315px;
}

.get-approved-div {
  width: 300px;
  height: 563px;

}

.video-get-approved {
  width: 300px;
  height: 563px;
  object-fit: cover;
}

.device-get-approved-div {
  margin-top: 30px !important;
  padding-top: 60px !important;
  padding-left: 28%;
  padding-bottom: 90px;
}

.how-it-work-div {
  width: 300px;
  height: 563px;

}

.video-how-it-work {
  width: 300px;
  height: 563px;
  object-fit: cover;
}

.device-how-it-work-div {
  margin-top: 0px !important;
  padding-top: 60px !important;
  padding-left: 0%;
  padding-bottom: 90px;
}

.ship-div {
  padding-left: 6%;
}

.get-approved {
  padding-right: 13%;
}

.submit-disabled {
  background-color: #3633357d !important;
  border-radius: 50px;
}

.download-app {
  position: absolute;
  left: 0;
  right: 0;
  top: 45%;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.main-section {
  margin-right: 0 !important;
}

.seller-section {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
}

.seller-drop-text {
  font-family: 'Recoleta-regulat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
}

.linie-1 {
  position: absolute;
  margin-top: -30px;
}

.video-inner {
  width: 140vw;
  margin-left: -20vw;
  margin-top: -5px;
  z-index: 5;
}

.linie-3 {
  position: absolute;
  margin-top: 50px;
}

.central-bold {
  min-width: 110px;
  position: absolute;
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;
  margin-left: 15px;
  padding: 3px 15px;
  border-bottom: 1px solid #fff;
}

.inactive-text {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: rgba(255, 255, 255, 0.3);
  margin-left: 30px;
  text-align: center;
}

.seller-border {
  border: 1px solid #D9D9D9;
  border-radius: 16px;
  position: relative;
  padding: 60px 80px;
  padding-right: 190px;
}

.description {
  padding-top: 30px !important;
}

.right-side {
  padding-left: 32px;
}

.my-input-class {
  color: white;
  border: none !important;
  border-bottom: 2px solid #3d3d3d !important;
  border-radius: 0 !important;
  height: 50px !important;
  font-family: 'Recoleta-regular' !important;
  font-style: normal !important;
  font-weight: 400 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  width: 400px !important;
  margin-top: 30px !important;
}

.my-input-class:focus {
  color: white;
  border-color: #80bdff !important;
  outline: none;
  background: transparent !important;
  background-color: transparent important;
  box-shadow: none;
  input: -webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,

}

.my-container-class {
  margin-top: 30px;
}

.vide-header {
  position: relative;
  max-height: 100vh;
  overflow: hidden;
  margin-bottom: 50px
}

.gredient1 {
  overflow: hidden;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background: #0d0d0d;

}

body.fontLoaded {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.demo-image {
  width: 95%;
}

.demo-2 {
  width: 100%
}

#app {
  background-color: #fafafa;
  min-height: 100%;
  min-width: 100%;
  background: #0d0d0d;
  overflow-x: hidden;
}

p,
label {
  font-family: Georgia, Times, 'Times New Roman', serif;
  line-height: 1.5em;
}

.flex-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.flex-colmun {
  display: flex;
  flex-direction: colmun;
}

.flex-center {
  text-align: center;
  justify-content: center;
  align-item: center;
}

.space-between {
  justify-content: space-between;
}

.border-top-1 {
  border-top: 1px solid #ffffff;

}

.bg-bottom {
  height: 620px;
  max-width: 1920px;
  margin-top: -180px;
  z-index: 999;
  position: relative;
}

.radial-gredient {
  position: relative;
  background: radial-gradient(137.12% 137.12% at 50% 50%, #4B355A 0%, rgba(75, 53, 90, 0) 100%);
  height: 100%;
  width: 100%
}

.main-section {
  overflow: hidden !important;
}

.shoes-left-img {
  width: 100%;
}

.img-text {
  color: #fff;
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 700;
  font-size: 52px;
  line-height: 50px;
}

.img-text-regular {
  color: #fff;
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  line-height: 44px;
}

.ellips {
  position: relative;
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #FFFFFF;
  z-index: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  padding-left: 45px;
  width: max-content;
  margin-top: 10px;
}

.ellips:after {
  content: "";
  height: 100px;
  position: absolute;
  /* padding: 40px 110px; */
  border-radius: 50%;
  border: 1px solid #9c9999;
  width: 250px;
  left: -20px;
  -webkit-transform: rotate(350deg);
  -ms-transform: rotate(350deg);
  transform: rotate(350deg);
}

.small-text {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  display: flex;
  align-items: center;

  color: #9B9B9B;
}

.img-new {
  position: absolute;
  top: 105px;
  left: 75px;
  width: 134px;
  height: 134px;
}

.btn-blood-drop {
  position: absolute;
  border: none;
  height: 140px;
  width: 122px;
  background: transparent;
  padding-top: 15px;
  color: #fff;
  bottom: 55px
}

.input-section {
  justify-content: center color: #fff
}

.left-title {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  max-width: 360px;
  color: #FFFFFF;
}

.left-title-div {
  justify-content: flex-end;
}

.text-drop-calendar,
.text-drop-calendar:hover {
  color: #FFFFFF;
  text-decoration-line: none;
}

.custom-input {
  background: transparent;
  border: none;
  border-bottom: 2px solid #3d3d3d;
  border-radius: 0;
  height: 50px;
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  width: 400px;
  margin-top: 30px;
  color: white;
}

::placeholder {
  color: rgba(255, 255, 255, 0.2) !important;
  opacity: 1;
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}

.custom-input:focus {
  outline: none;
  color: white;
  background: transparent !important;
  background-color: transparent important;
  box-shadow: none;
  input: -webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,


}

.btn-blood-drop:focus,
.btn-blood-drop-top:focus {
  outline: none;
  box-shadow: none;
}

.right-img-main {
  position: relative;
}

.layer {
  position: absolute;
  left: 13px;
  bottom: 28px;
  width: 64.5%
}

.info-area {
  justify-content: center;
  // gap: 10px;
}

.info-left {
  max-width: 470px;
  margin-left: 35px;
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: #FFFFFF;

}

.info-right {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #9b9b9b;
  max-width: 300px
}

.border-bottom {
  border-bottom: 1px solid #fff;
  margin: 0 auto;
  margin-bottom: 20px;
  position: relative;
  margin-top: 50px
}

.border-bottom:after {
  content: '';
  background-image: url(${borderBg});
  height: 100px;
  width: 100px;
  position: absolute;
  margin-top: 32px;
  right: 15%
}

.border-section {
  display: flex;
  justify-content: space-around;
  max-width: 1920px;
  background: #0d0d0d;
  margin: 0 auto;
  background-image: url('${borderBg2}')
}

.border-main {
  background: #0d0d0d;
  margin: 0 auto;
  max-width: 1920px
}

.wave-box {
  height: 10vw;
  max-width: 100%;
  margin: 0 auto;
  background-image: url(${wave});
  background-size: cover;
}

.number-head {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 300;
  font-size: 56px;
  line-height: 56px;
  color: #4B355A;
  padding-right: 0
}

.img-above {
  position: relative;
  margin-top: -30%;
  z-index: 1;
}

.ml-120 {
  margin-left: 150px !important;
}

.custom-description {
  position: relative;
  z-index: 5;
  font-family: 'Recoleta';
  max-width: 780px;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 40px;
  color: #FFFFFF;
}

.product-section {
  max-width: 1920px;
  margin: 0 auto
}

.product-descriptions {
  font-family: 'Vulf-Sans-Light';
  max-width: 400px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */


  color: #9B9B9B;
}

.gredient1 {
  background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #4B355A 100%);
  margin: 0 auto;
}

.last-description {
  /* Display/Regular/40 */

  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 38px;
  line-height: 44px;
  /* or 110% */

  max-width: 610px;
  padding: 10px 20px;
  color: #FFFFFF;
}

.hiw {
  // overflow: hidden;
}

.gredient-2 {
  background: linear-gradient(180deg, #4B355A 0%, rgba(13, 13, 13, 0) 100%);
  // max-width: 1920px;
  margin: 0 auto;
}

.hiw-head {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  color: #FFFFFF;
  padding: 10px 0px;
}

.p-150 {
  padding-left: 150px;
}

.hiw-sub-head {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  color: #9B9B9B;
}

.hiw {
  max-width: 1920px;
  border-top: 1px solid #fff;
  margin: 0 auto;
  padding-top: 10px;
  background: #010000;
  padding-bottom: 20px;
}

.section-ship {
  background: #010000;
}

.description-hiw {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  /* or 144% */
  padding-left: 17%;
  margin-bottom: 100px;
  padding-right: 10%;
  color: #9B9B9B;

}

.get-approved-number-div {
  padding-left: 15%;
  padding-right: 3%;
}

.wave1 {
  left: 17%;
  top: 10%;
}

.wave2 {
  left: 32%;
  top: 70%;
}

.wave3 {
  left: 49%;
  top: 10%;
}

.wave4 {
  left: 61.5%;
  top: 70%;
}

.wave5 {
  left: 75%;
  top: 10%;
}

.wave-texts {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 32px;
  /* identical to box height, or 133% */

  text-align: center;

  color: #FFFFFF;
}

section {
  // overflow: hidden;
}

.border-layer {
  height: 1px;
  max-width: 1920px;
  background: #fff height: 1px;
  width: 1280px;
  background: #fff;
  position: absolute;
  margin-top: -36px;
  left: 30%;

}

.top-logo {
  height: 45px
}

.footer-text-right {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
}

.right-img-main {
  width: 408px;
}

.left-side {

  padding-left: 80px;
  position: relative;
}

.left-side:after {
  content: "";
  position: absolute;
  height: 110px;
  width: 110px;
  background-image: url(${afterImage});
  right: 5%;
  top: 150px;
  background-size: cover;
  z-index: 3;
}

.wave-up-text {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;
}

.right-text-float {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-transform: uppercase;
  color: #9B9B9B;
  opacity: 0.5;
  width: 115px;
  padding: 10px;
  margin-left: 30px;
  margin-top: 50%
}

.v-1 {
  position: absolute;
  right: 120px;
  top: 230px;
  z-index: 4;
}

.v-2 {
  position: absolute;
  right: 52px;
  top: 325px;
  z-index: 4;
}

.v-3 {
  position: absolute;
  right: 50px;
  top: 155px;
  z-index: 4;
}

.img-right {
  margin-top: 40px;
  display: flex;
  positon: relative;
  flex-direction: row;
  padding-bottom: 18px
}

.flex-colmun {
  flex-direction: column;
}

.btn-blood-drop-top video {
  display: inline-block;
  height: 240px;
  transform: rotate(-45deg);
  position: absolute;
  left: -35px;
  bottom: -40px;
}

.drop-container {
  position: absolute;
  bottom: 50px;
}

.text-drop-video {
  position: absolute;
  transform: rotate(-45deg);
  top: 60px;
  right: 22px;
  text-align: center;
}

.text-download-app-video {
  position: absolute;
  transform: rotate(-45deg);
  top: 50px;
  right: 30px;
  text-align: center;
}

.btn-blood-drop-top {
  border-radius: 0 50% 50% 50%;
  border-radius: 0 50% 50% 50%;
  border: none;
  transform: rotate(45deg);
  overflow: hidden;
  position: relative;
  height: 140px;
  width: 140px;
  background: red;
  padding-top: 15px;
  color: #fff;
  float: right;
  // font-family: 'Recoleta';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 120%;
  text-align: center;
  color: #FFFFFF;
  margin-top: -20px;
}

.title-new {
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 40px;
  display: flex;
  align-items: flex-end;
  color: #FFFFFF;
}

.left-img-main {
  max-width: calc(100% - 20px)
}

.para-left {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  max-width: 300px;
  font-size: 18px;
  line-height: 26px;
  color: #9B9B9B;
}

.img-left {
  position: relative;
  width: fit-content;
  margin: 0 auto;
  margin-top: 0px;
}

.img-left:before {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background-image: url(${afterImageBg});
  background-position: left bottom;
  left: -20px;
  bottom: 20px;
  z-index: 2;
}

.top-nav {
  border-bottom: 1px solid #ffffff;
  align-item: center;
  padding: 20px;
  // background: red;
  display: flex;
  flex-diection: row;
  justify-content: space-between;
  max-width: 1920px;
  position: absolute;
  // height: 40px;
  z-index: 99;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto
}

.left-header {
  align-items: center;
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  display: flex;
  color: #FFFFFF;

}

.right-header {
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 120%;
  align-items: center;
  display: flex;


  text-align: right;

  color: #FFFFFF;
}

.footer-text {
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
}

.vertical-center {
  align-items: center;
}

.gap-1 {
  gap: 20px
}

.text-white {
  color: #ffffff !important
}

.text-footer {
  font-size: 14px;
  line-height: 22px;
}

.img-text {
  margin-top: 40px;
}

.main-img {
  align-items: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

.box:focus {
  outline: none;
  box-shadow: none
}

.box-skew {
  position: absolute;
  top: -80px;
  right: 100px;
  height: 180px;
  background-position: center;
  width: 385px;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  background-image: url(${btnBGs});
  background-size: cover;
  height: 120px;
  width: 320px;
  color: #fff;
  font-family: 'Recoleta';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  /* identical to box height, or 111% */


  color: #FFFFFF;
}

.heading {
  font-family: 'Recoleta-regular';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 44px;
  color: #FFFFFF;
  padding: 5px 20px;
}

.description-3 {
  padding: 5px 20px;
  font-family: 'Vulf-Sans-Light';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;



  color: #9B9B9B;
}

.border-top {
  border-top: 1px solid;
  padding-top: 20px;
}

.box {
  position: relative;
  padding: 20px;
  color: #fff;
  width: 400px;
  background: transparent;
  border: none;
  margin-top: 50px;
  margin-bottom: 50px;
}

.custom-padding-top {
  padding-top: 47px;
}

.bottom-icons {
  height: 40px;
}

.box::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50px;
  padding: 2px;
  background: linear-gradient(to right, rgba(75, 53, 90, 1), rgba(55, 132, 171, 1), rgba(64, 195, 151, 1), rgba(240, 230, 129, 1), rgba(235, 73, 73, 1));
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.logo-bottom {
  border-right: 1px solid #fff;
  padding-right: 50px;
  height: 45px
}

.bottom-globe {
  height: 35px
}


@media(max-width: 1920px) {
  .wave-box {
    background-size: cover;
  }

  .layer {
    width: 407px;
  }
  
  .left-side:after {
    right: 2%;
  }
}

@media(max-width: 1024px) {

  .left-title {
    max-width: 350px;
  }

  .img-new {
    left: unset;
    top: 130px;
    right: -30px;
    height: 134px;
  }

  .iIGhgt .check {
    display: flex;
    flex-direction: column;
  }

  .small-text.col-md-5 {
    max-width: 100% !important;
    width: 100% !important;
    padding-left: 100px !important;
  }

  .main-section {
    margin-top: 90px;
  }

  .custom-padding-top {
    padding-top: 50px;
  }

  .right-text-float {
    margin-top: 10%;
    width: 180px;
    margin-left: 0;

    align-self: self-start;
  }

  .right-img-main {
    align-self: self-start;
    margin-left: 0;

  }

  .img-right {
    flex-direction: column-reverse;
    align-items: center;
    margin-top: 0;
    padding-left: 20px;

  }

  .layer {
    position: absolute;
    bottom: 158px;
    left: 15px;
  }

  .v-1 {
    position: absolute;
    right: 40%;
    top: 18%;
    z-index: 4;
  }

  .description,
  .title-new,
  .para-left {
    padding-left: 0 !important;
    margin-left: 0 !important;
  }

  .border-bottom {
    padding-left: 50px;
  }

  .v-3 {
    position: absolute;
    right: 30%;
    top: 10%;
    z-index: 4;
  }

  .v-2 {
    position: absolute;
    right: 30%;
    top: 30%;
    z-index: 4;
  }

}


@media(max-width: 768px) {
  .download-app {
    top: 70%;
  }

  .left-title-div {
    justify-content: unset;
  }

  .left-title {
    max-width: 400px;
    margin-right: -80px;

  }

  .img-new {
    left: unset;
    top: 0;
    right: -100px;
    height: 134px;
  }

  .iIGhgt {
    padding: 0
  }

  .right-img-main {
    width: 100%;
  }

  .layer {
    bottom: 0;
    width: 85%;
    left: 15px;
  }

  .border-bottom:after {
    margin-top: 35px;
    right: 0;
  }

  .info-left {
    font-size: 20px;
    line-height: 24px;
  }

  .wave-up-text {
    font-size: 24px;
    line-height: 32px;
  }


  .product-descriptions.p-5 {
    padding: 5px !important;
    font-size: 16px;
    line-height: 22px;
  }


 

  .p-150 {
    padding-left: 50px;
  }

  .ml-120 {
    margin-left: 50px !important;
  }

  .v-1 {
    position: absolute;
    right: 30%;
    top: 18%;
    z-index: 4;
  }

  .v-2 {
    position: absolute;
    right: 15%;
    top: 28%;
    z-index: 4;
  }

  .check {
    display: flex;
    flex-direction: column;

  }

  .mr-md-5 {
    margin-right: 0 !important;
  }

  .v-3 {
    position: absolute;
    right: 20%;
    top: 15%;
    z-index: 4;
  }

  .custom-description {
    font-size: 28px;
    line-height: 34px;
  }
}

@media(max-width: 414px) {
  .inactive-text {
   
      font-size: 16px;
    }

    .central-bold {
      font-size: 16px;
    }

    .left-title-div {
      justify-content: unset;
    }

    .description {
      padding-top: 10px !important;
    }

    .device-get-approved-div {
      padding-left: 6%;
      padding-right: 6%;
    }

    .device-how-it-work-div {
      padding-left: 6%;
      padding-right: 6%;
    }

    .get-approved-number-div {
      padding-left: 5%;
    }

    .download-app {
      top: 33%;
    }

    .get-approved {
      padding-left: 0px;
      margin-left: -12px;
    }

    .btn-apply-to-sell {
      margin-top: 36px !important;
      margin-right: 50px;
    }

    .shoes-left-img {
      width: 120%;
      margin-top: 40px;
    }

    .text-download-app-video {
      top: 40px;
      right: 19px;
    }

    .left-title {
      text-align: left;
      font-size: 28px;
      line-height: 36px;
      padding-left: 15px;
      max-width: 280px;
    }

    .img-above {
      width: 120%;
      margin-top: -37%;
      margin-left: -20%;
    }

    .video-inner {
      width: unset;
      height: 100vh;
      margin-left: -120vw;
      margin-top: -5px;
      z-index: 5;
    }

    .seller-border {
      border: 1px solid #D9D9D9;
      border-radius: 16px;
      position: relative;
      padding: 40px 15px;
      padding-right: 130px;
      padding-bottom: 50px;
    }

    .ellips {
      padding-left: 10px;
      width: -webkit-max-content;
      width: -moz-max-content;
      width: max-content;
      font-size: 12px;
      margin-top: 40px;
      margin-left: 6px;
    }

    .ellips:after {
      content: "";
      height: 50px;
      position: absolute;
      border-radius: 50%;
      border: 1px solid #9c9999;
      width: 140px;
      left: 15pxpx;
      -webkit-transform: rotate(350deg);
      -ms-transform: rotate(350deg);
      -webkit-transform: rotate(350deg);
      -ms-transform: rotate(350deg);
      transform: rotate(350deg);
    }

    .left-header,
    .right-header {
      font-size: 12px;
    }

    .wave-box {
      height: 20vw;
    }

    .mobile-border {
      border-top: none !important;
    }

    .logo-bottom {
      border-right: 1px solid #fff;
      padding-right: 20px;
      height: 32px
    }

    .footer-text {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
    }

    .bottom-globe {
      height: 25px
    }

    .img-new {
      left: unset;
      top: -32px;
      right: -113px;
      height: 134px;
    }

    .footer-text-right {
      font-size: 12px;
      line-height: 18px;
    }

    .gap-1 {
      gap: 10px
    }

    .bottom-icons {
      height: 32px
    }

    .input-section {
      flex-direction: column !important;
      margin-top: 50px;
    }

    .custom-input,
    .box {
      max-width: 100%;
      width: 100%
    }

    .my-input-class {
      width: 100% !important;
    }

    .top-logo {
      height: 32px
    }

    .main-section {
      margin-top: 73px
    }

    .left-side {
      padding-left: 5px;
      padding-right: 0;
    }

    .img-left:before {
      bottom: 0
    }

    .iIGhgt {
      padding: 0 10px;
    }

    .left-img-main {
      max-width: 100%;
      margin-left: 7px;
    }

    .left-side:after {
      height: 50px;
      width: 50px;
      background-size: cover;
      top: 1%;
      right: -17%;
    }

    .title-new {
      font-size: 24px;
      line-height: 32px;
      max-width: 100%;
      margin-left: 6px !important;
    }

    .btn-blood-drop-top {
      height: 120px;
      width: 120px;
      margin-top: 20px;
    }

    .text-drop-video {

      top: 50px;
      right: 15px;

    }

    .para-left {

      max-width: 200%;
      font-size: 18px;
      width: 200%;
      line-height: 26px;
      color: #9B9B9B;
      padding-top: 140px;
    }

    .custom-padding-top {
      padding-top: 20px;
      padding-left: 15px !important;
    }

    .v-1,
    .v-2,
    .v-3 {
      display: none;
    }

    .layer {
      position: absolute;
      left: 19px;
      bottom: 118px;
      width: 83%;
    }

    .border-layer {
      margin-top: -30px;
      left: 12px;
    }

    .para-left {
      padding-top: 170px;
      font-size: 16px;
      padding-left: 10px !important;
    }

    .border-bottom {
      margin-top: 0;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      padding-left: 0 !important;
      padding-right: 20%;
    }

    .row.shoes {
      flex-direction: column;
      margin-top: 20px
    }

    .gredient-2,
    container {
      padding-left: 11px !important;

      padding-right: 1px !important;
    }

    .description-3 {
      font-size: 16px
    }

    .last-description {
      font-size: 24px;
      line-height: 32px;
    }

   
    .icon-box img {
      margin-top: 15px;
      height: 28px;
    }

    .heading {
      font-size: 28px;
    }

    .product-descriptions {
      max-width: 150%;
      margin-top: 10px;
      width: 170%;
      margin: 16%;
    }

    .ml-120 {
      margin-left: 30px !important;
    }

    .custom-description {
      font-size: 20px;
      line-height: 24px;
      width: 70%;
    }

    .wave-up-text {
      font-size: 18px;
      line-height: 24px;
    }

    .info-left {
      margin-bottom: 20px;
      margin-left: 0px;
    }

    .border-bottom:after {
      display: none;
    }

    .wave-box {
      background-image: url(${waveMob});
    }

    .img-right {
      flex-direction: column-reverse;
      align-items: center;
      margin-top: 0;
      padding-left: 0;
    }

    .right-text-float {
      margin-top: 0;
      margin-left: 23px;
      padding-left: 0;
      width: unset;
      margin-bottom: 50px;
    }

    .right-img-main {
      width: 138%
    }

    .p-150 {
      padding-left: 0;
    }

    .box-skew {
      top: -50px;
      right: 50px;
      font-size: 22px;
      line-height: 26px;
      width: 275px;
    }

    .last-description {
      margin-bottom: 40px;
      margin-top: 50px !important;
      padding-left: 0px;
    }

    .description-hiw {
      width: auto;
      font-family: 'Vulf-Sans-Light';
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 26px;
      color: #9B9B9B;
      margin-top: 40px;
      padding: 30px;
      margin-bottom: 30px;
    }

    .demo-image {
      width: 85%;
      padding-left: 20px;
    }


    .wave1 {
      left: 8vw;
      top: 25%;
    }

    .wave2 {
      left: 25vw;
      top: 74%;
    }

    .wave3 {
      top: 25%;
      left: 47vw;
    }

    .wave-texts {
      font-size: 3vw;
    }

    .wave4 {
      left: 60vw;
      top: 75%;
    }

    .wave-texts {
      font-size: 3vw;
    }



    .number-head {
      font-size: 22px;
      line-height: 34px;
    }

    .demo-2 {
      width: 90%;
      display: flex;
      margin: 0 auto;
    }

    .hiw-head {
      font-size: 24px;
      line-height: 32px;
    }
  }

  `;

  export default GlobalStyle;