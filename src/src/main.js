let str = `/* RESET */
/*  ------------------------------------------------------------*/
* {
  padding: 0;
  margin: 0;
  border: 0;
}

*,
*:before,
*:after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

:focus,
:active {
  outline: none;
}

a:focus,
a:active {
  outline: none;
}

nav,
footer,
header,
aside {
  display: block;
}

html,
body {
  height: 100%;
  width: 100%;
  font-size: 100%;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}

input,
button,
textarea {
  font-family: inherit;
  color: inherit;
}

input::-ms-clear {
  display: none;
}

button {
  cursor: pointer;
}

button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

a:hover {
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hamburger {
  margin-right: 10px;
  width: 30px;
  height: 30px;
  position: relative;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 3px;
  background-color: #000;
  display: block;
  border-radius: 4px;
  -webkit-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 5px;
}

.bar2,
.bar3 {
  top: 13.5px;
}

.bar3 {
  right: 0;
}

.bar4 {
  bottom: 5px;
}

/* HAMBURGER 2 */
.checkbox2:checked + label > .hamburger2 > .bar1 {
  -webkit-transform: translateX(40px);
      -ms-transform: translateX(40px);
          transform: translateX(40px);
  background-color: transparent;
}

.checkbox2:checked + label > .hamburger2 > .bar2 {
  -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
          transform: rotate(45deg);
}

.checkbox2:checked + label > .hamburger2 > .bar3 {
  -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.checkbox2:checked + label > .hamburger2 > .bar4 {
  -webkit-transform: translateX(-40px);
      -ms-transform: translateX(-40px);
          transform: translateX(-40px);
  background-color: transparent;
}

@media (max-width: 575px) {
  .hamburger {
    margin-right: 10px;
  }
}

/*!
 * animate.css - https://animate.style/
 * Version - 4.1.1
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2020 Animate.css
 */
:root {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
}

.animate__animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animate__animated.animate__infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.animate__animated.animate__repeat-1 {
  -webkit-animation-iteration-count: 1;
  animation-iteration-count: 1;
  -webkit-animation-iteration-count: var(--animate-repeat);
  animation-iteration-count: var(--animate-repeat);
}

.animate__animated.animate__repeat-2 {
  -webkit-animation-iteration-count: calc(1 * 2);
  animation-iteration-count: calc(1 * 2);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 2);
  animation-iteration-count: calc(var(--animate-repeat) * 2);
}

.animate__animated.animate__repeat-3 {
  -webkit-animation-iteration-count: calc(1 * 3);
  animation-iteration-count: calc(1 * 3);
  -webkit-animation-iteration-count: calc(var(--animate-repeat) * 3);
  animation-iteration-count: calc(var(--animate-repeat) * 3);
}

.animate__animated.animate__delay-1s {
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
  -webkit-animation-delay: var(--animate-delay);
  animation-delay: var(--animate-delay);
}

.animate__animated.animate__delay-2s {
  -webkit-animation-delay: calc(1s * 2);
  animation-delay: calc(1s * 2);
  -webkit-animation-delay: calc(var(--animate-delay) * 2);
  animation-delay: calc(var(--animate-delay) * 2);
}

.animate__animated.animate__delay-3s {
  -webkit-animation-delay: calc(1s * 3);
  animation-delay: calc(1s * 3);
  -webkit-animation-delay: calc(var(--animate-delay) * 3);
  animation-delay: calc(var(--animate-delay) * 3);
}

.animate__animated.animate__delay-4s {
  -webkit-animation-delay: calc(1s * 4);
  animation-delay: calc(1s * 4);
  -webkit-animation-delay: calc(var(--animate-delay) * 4);
  animation-delay: calc(var(--animate-delay) * 4);
}

.animate__animated.animate__delay-5s {
  -webkit-animation-delay: calc(1s * 5);
  animation-delay: calc(1s * 5);
  -webkit-animation-delay: calc(var(--animate-delay) * 5);
  animation-delay: calc(var(--animate-delay) * 5);
}

.animate__animated.animate__faster {
  -webkit-animation-duration: calc(1s / 2);
  animation-duration: calc(1s / 2);
  -webkit-animation-duration: calc(var(--animate-duration) / 2);
  animation-duration: calc(var(--animate-duration) / 2);
}

.animate__animated.animate__fast {
  -webkit-animation-duration: calc(1s * 0.8);
  animation-duration: calc(1s * 0.8);
  -webkit-animation-duration: calc(var(--animate-duration) * 0.8);
  animation-duration: calc(var(--animate-duration) * 0.8);
}

.animate__animated.animate__slow {
  -webkit-animation-duration: calc(1s * 2);
  animation-duration: calc(1s * 2);
  -webkit-animation-duration: calc(var(--animate-duration) * 2);
  animation-duration: calc(var(--animate-duration) * 2);
}

.animate__animated.animate__slower {
  -webkit-animation-duration: calc(1s * 3);
  animation-duration: calc(1s * 3);
  -webkit-animation-duration: calc(var(--animate-duration) * 3);
  animation-duration: calc(var(--animate-duration) * 3);
}

@media print, (prefers-reduced-motion: reduce) {
  .animate__animated {
    -webkit-animation-duration: 1ms !important;
    animation-duration: 1ms !important;
    -webkit-transition-duration: 1ms !important;
    -o-transition-duration: 1ms !important;
       transition-duration: 1ms !important;
    -webkit-animation-iteration-count: 1 !important;
    animation-iteration-count: 1 !important;
  }
  .animate__animated[class*="Out"] {
    opacity: 0;
  }
}

/* Back entrances */
@-webkit-keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

@keyframes backInUp {
  0% {
    -webkit-transform: translateY(1200px) scale(0.7);
    transform: translateY(1200px) scale(0.7);
    opacity: 0.7;
  }
  80% {
    -webkit-transform: translateY(0px) scale(0.7);
    transform: translateY(0px) scale(0.7);
    opacity: 0.7;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}

.animate__backInUp {
  -webkit-animation-name: backInUp;
  animation-name: backInUp;
}

/* Fading entrances  */
@-webkit-keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}

@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@-webkit-keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

/* Flippers */
@-webkit-keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

@keyframes flipInX {
  from {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  60% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    -webkit-transform: perspective(400px);
    transform: perspective(400px);
  }
}

.animate__flipInX {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: flipInX;
  animation-name: flipInX;
}

/* Zooming entrances */
@-webkit-keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

.animate__zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}

@-webkit-keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

@keyframes zoomInUp {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
}

.animate__zoomInUp {
  -webkit-animation-name: zoomInUp;
  animation-name: zoomInUp;
}

/* Slider */
.slick-slider {
  position: relative;
  display: block;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -khtml-user-select: none;
  -ms-touch-action: pan-y;
  touch-action: pan-y;
  -webkit-tap-highlight-color: transparent;
}

.slick-list {
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.slick-list:focus {
  outline: none;
}

.slick-list.dragging {
  cursor: pointer;
  cursor: hand;
}

.slick-slider .slick-track,
.slick-slider .slick-list {
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.slick-track {
  position: relative;
  top: 0;
  left: 0;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.slick-track:before,
.slick-track:after {
  display: table;
  content: "";
}

.slick-track:after {
  clear: both;
}

.slick-loading .slick-track {
  visibility: hidden;
}

.slick-slide {
  display: none;
  float: left;
  height: 100%;
  min-height: 1px;
}

[dir="rtl"] .slick-slide {
  float: right;
}

.slick-slide img {
  display: block;
}

.slick-slide.slick-loading img {
  display: none;
}

.slick-slide.dragging img {
  pointer-events: none;
}

.slick-initialized .slick-slide {
  display: block;
}

.slick-loading .slick-slide {
  visibility: hidden;
}

.slick-vertical .slick-slide {
  display: block;
  height: auto;
  border: 1px solid transparent;
}

.slick-arrow.slick-hidden {
  display: none;
}

html,
body {
  height: 100%;
}

#cube-loader {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: #fff;
}

#cube-loader .caption {
  margin: -55px auto 0;
}

#cube-loader .caption span {
  display: block;
  margin-top: 40px;
  font-size: 2rem;
  font-weight: 700;
  color: #f9235c;
}

#cube-loader .cube-loader {
  width: 73px;
  height: 73px;
  margin: 0 auto;
  margin-top: 49px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
      -ms-transform: rotate(45deg);
          transform: rotateZ(45deg);
}

#cube-loader .cube-loader .cube {
  position: relative;
  -webkit-transform: rotateZ(45deg);
      -ms-transform: rotate(45deg);
          transform: rotateZ(45deg);
  width: 50%;
  height: 50%;
  float: left;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1);
}

#cube-loader .cube-loader .cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #34495e; */
  background-color: #f9235c;
  -webkit-animation: cube-loader 2.76s infinite linear both;
          animation: cube-loader 2.76s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}

#cube-loader .cube-loader .loader-2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
      -ms-transform: scale(1.1) rotate(90deg);
          transform: scale(1.1) rotateZ(90deg);
}

#cube-loader .cube-loader .loader-3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
      -ms-transform: scale(1.1) rotate(180deg);
          transform: scale(1.1) rotateZ(180deg);
}

#cube-loader .cube-loader .loader-4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
      -ms-transform: scale(1.1) rotate(270deg);
          transform: scale(1.1) rotateZ(270deg);
}

#cube-loader .cube-loader .loader-2:before {
  -webkit-animation-delay: 0.35s;
          animation-delay: 0.35s;
}

#cube-loader .cube-loader .loader-3:before {
  -webkit-animation-delay: 0.69s;
          animation-delay: 0.69s;
}

#cube-loader .cube-loader .loader-4:before {
  -webkit-animation-delay: 1.04s;
          animation-delay: 1.04s;
}

@-webkit-keyframes cube-loader {
  0%,
  10% {
    -webkit-transform: perspective(136px) rotateX(-180deg);
            transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(136px) rotateX(0deg);
            transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(136px) rotateY(180deg);
            transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@keyframes cube-loader {
  0%,
  10% {
    -webkit-transform: perspective(136px) rotateX(-180deg);
            transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
  75% {
    -webkit-transform: perspective(136px) rotateX(0deg);
            transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
  100% {
    -webkit-transform: perspective(136px) rotateY(180deg);
            transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat/Montserrat-Medium.woff2") format("woff2"), url("../fonts/Montserrat/Montserrat-Medium.woff") format("woff"), url("../fonts/Montserrat/Montserrat-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat/Montserrat-Bold.woff2") format("woff2"), url("../fonts/Montserrat/Montserrat-Bold.woff") format("woff"), url("../fonts/Montserrat/Montserrat-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "Montserrat";
  src: url("../fonts/Montserrat/Montserrat-ExtraBold.woff2") format("woff2"), url("../fonts/Montserrat/Montserrat-ExtraBold.woff") format("woff"), url("../fonts/Montserrat/Montserrat-ExtraBold.ttf") format("truetype");
  font-style: normal;
  font-weight: 800;
}

@font-face {
  font-family: "BebasNeue";
  src: url("../fonts/BebasNeue/BebasNeueBold.woff2") format("woff2"), url("../fonts/BebasNeue/BebasNeueBold.woff") format("woff"), url("../fonts/BebasNeue/BebasNeueBold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Montserrat";
  font-size: 1.6rem;
  font-weight: 500;
  background-size: cover;
}

.webp {
  background-image: url(../img/bg-main.webp);
}

.no-webp {
  background-image: url(../img/bg-main.jpg);
}

.webp .hero {
  background-image: url(../img/bg-hero.webp);
}

.webp .hero::after {
  background-image: url(../img/hero-woman.webp);
}

.no-webp .hero {
  background-image: url(../img/bg-hero.png);
}

.no-webp .hero::after {
  background-image: url(../img/hero-woman.png);
}

.webp .news {
  background-image: url(../img/news/bg-news.webp);
}

.no-webp .news {
  background-image: url(../img/news/bg-news.jpg);
}

.webp .footer {
  background-image: url(../img/bg-footer.webp);
}

.no-webp .footer {
  background-image: url(../img/bg-footer.jpg);
}

button {
  background-color: transparent;
  cursor: pointer;
  border: none;
}

.container {
  max-width: 1170px;
  margin: 0 auto;
}

.btn-nice {
  display: block;
  padding: 12px 27px;
  font-size: 2rem;
  font-weight: 800;
  background-image: -webkit-gradient(linear, left top, right top, from(#f9236f), to(#f92346));
  background-image: -webkit-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: -o-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: linear-gradient(to right, #f9236f 0%, #f92346 100%);
  color: #ffffff;
}

.ratings {
  max-width: 95px;
}

.ratings__star {
  width: 15px;
  height: 15px;
}

.price-wrap {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.price-wrap__old {
  margin-right: 8px;
  text-decoration: line-through;
  color: #6b6b6b;
}

.price-wrap__current {
  font-weight: 800;
  font-size: 1.8rem;
}

.partners .partners__image-wrap {
  padding: 65px 0 55px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

@media (min-width: 1200px) {
  .btn-nice {
    position: relative;
    border: 1px solid transparent;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    overflow: hidden;
  }
  .btn-nice::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 101%;
    -webkit-transform: translateX(-101%);
        -ms-transform: translateX(-101%);
            transform: translateX(-101%);
    background-color: #fff;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .btn-nice:hover {
    color: #f92346;
    border-color: #f92346;
  }
  .btn-nice:hover::before {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
  }
  .btn-nice span {
    position: relative;
  }
  .underline {
    position: relative;
  }
  .underline::after {
    position: absolute;
    bottom: -2px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #f92346;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    -webkit-transform: scale(0);
        -ms-transform: scale(0);
            transform: scale(0);
  }
  .underline:hover::after {
    -webkit-transform: scale(1);
        -ms-transform: scale(1);
            transform: scale(1);
  }
}

@media (max-width: 1199px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}

.shipping {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 101;
  width: 100%;
  background-color: #ff377e;
  background-image: -webkit-gradient(linear, left top, right top, from(#f9236f), to(#f92346));
  background-image: -webkit-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: -o-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: linear-gradient(to right, #f9236f 0%, #f92346 100%);
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

.shipping_closed {
  -webkit-transform: translateY(-100%);
      -ms-transform: translateY(-100%);
          transform: translateY(-100%);
}

.shipping_d-none {
  display: none;
}

.shipping::after {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.4;
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url(../img/bg-shipping.jpg);
  pointer-events: none;
}

.shipping__body {
  padding: 22px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.shipping__text {
  color: #ffffff;
  font-size: 2rem;
  font-weight: 700;
}

.shipping__close {
  background-color: #fff;
  border-radius: 50%;
  padding: 9px 12px;
  font-weight: 800;
  cursor: pointer;
}

.header {
  position: absolute;
  top: 78px;
  left: 0;
  z-index: 101;
  width: 100%;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
  background-color: #ffffffb4;
}

.header_top {
  top: 0;
}

.header__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
}

.header__top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #000;
}

.header__greeting {
  margin-right: 85px;
  font-weight: 500;
  -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.header__email {
  font-weight: 700;
}

.header__main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.header__logo {
  margin-right: auto;
  font-weight: 800;
  font-size: 2.6rem;
  -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.header__nav {
  margin-right: 15px;
}

.header__search {
  padding: 19px 10px;
}

.header__cart {
  padding: 19px 10px;
}

.header__icon {
  width: 20px;
  height: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-transition: 0.3s ease;
  -o-transition: 0.3s ease;
  transition: 0.3s ease;
}

.header__toggle-sidebar {
  display: none;
}

.header-nav__list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 100%;
}

.header-nav__item {
  -webkit-animation-duration: 1;
          animation-duration: 1;
}

.header-nav__item:nth-child(1) {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}

.header-nav__item:nth-child(2) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.header-nav__item:nth-child(3) {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.header-nav__item:nth-child(4) {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

.header-nav__item:nth-child(5) {
  -webkit-animation-delay: 0.5s;
          animation-delay: 0.5s;
}

.header-nav__item:nth-child(6) {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}

.header-nav__item:not(:last-child) {
  margin-right: 15px;
}

.header-nav__link {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 20px 5px;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 700;
}

@media (min-width: 1200px) {
  .shipping__close {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .shipping__close:hover {
    background-color: #ff6098;
    color: #ffffff;
  }
  .header__logo {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .header__logo:hover {
    color: #f92346;
  }
  .header__email {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .header__email:hover {
    color: #f92346;
  }
  .header-nav__link {
    position: relative;
    z-index: 1;
  }
  .header-nav__item {
    position: relative;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .header-nav__item::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #f9236f;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .header-nav__item:hover {
    color: #fff;
  }
  .header-nav__item:hover::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .header-search, .header-cart {
    position: relative;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .header-search::before, .header-cart::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #f9236f;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .header-search__icon, .header-cart__icon {
    position: relative;
  }
  .header-search:hover::before, .header-cart:hover::before {
    top: -1px;
    left: 0;
    width: 100%;
    height: 102%;
  }
  .header-search:hover .header__icon, .header-cart:hover .header__icon {
    fill: #fff;
  }
}

@media (max-width: 1199px) {
  .header__top {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
  }
}

@media (max-width: 850px) {
  .header__toggle-sidebar {
    display: block;
  }
  .header-nav {
    position: absolute;
    top: 117px;
    left: 0;
    width: 100%;
    background-color: #ffffffe7;
    border-top: 1px solid #3f3e3e;
    -webkit-transform: translateX(-100%);
        -ms-transform: translateX(-100%);
            transform: translateX(-100%);
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .header-nav_active {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
  }
  .header-nav__list {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
}

@media (max-width: 767px) {
  .header__top {
    font-size: 1.4rem;
  }
  .header__greeting {
    margin-right: 10px;
  }
}

@media (max-width: 480px) {
  .header__top {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    padding: 5px 0;
  }
  .header-nav {
    padding: 10px 20px;
    top: 105px;
  }
  .header-nav__link {
    padding: 0;
  }
}

.hero {
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #bae9ff;
}

.hero::after {
  position: absolute;
  top: calc(100vw - (100vw - 17.5%));
  right: 0;
  content: '';
  height: 82.5%;
  width: 57%;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
}

.hero__body {
  position: relative;
  z-index: 100;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 455px 0 260px;
}

.hero__text {
  max-width: 600px;
  margin-left: 66px;
}

.hero__title {
  font-weight: 800;
  letter-spacing: -0.95rem;
  line-height: 8.7rem;
  font-size: 12.1rem;
  text-transform: uppercase;
  text-align: center;
  color: #222222;
  -webkit-animation-name: flipInX;
          animation-name: flipInX;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
}

.hero__title-accent {
  color: #f9236f;
  letter-spacing: -0.95rem;
}

.hero__year {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
  margin-top: -4px;
  margin-bottom: 15px;
  color: #222222;
  font-size: 5rem;
  letter-spacing: 9.3rem;
  padding-left: 5px;
  font-weight: 800;
}

.hero__description {
  margin-bottom: 50px;
  color: #494949;
  line-height: 24px;
  text-align: center;
}

.hero__button {
  margin: 0 auto;
}

@media (max-width: 1400px) {
  .hero::after {
    height: 78.5%;
    top: calc(100vw - (100vw - 21.5%));
    background-position: right bottom;
  }
  .hero__body {
    padding: 350px 0 150px;
  }
}

@media (max-width: 1199px) {
  .hero__body {
    padding: 250px 0 150px;
  }
  .hero__title {
    font-size: 9rem;
    line-height: 7rem;
  }
  .hero__year {
    padding-left: 50px;
    font-size: 4rem;
    letter-spacing: 7.3rem;
  }
}

@media (max-width: 991px) {
  .hero::after {
    width: 50%;
    background-size: cover;
    background-position: left bottom;
  }
  .hero__body {
    padding: 200px 0 150px;
  }
  .hero__text {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    max-width: 450px;
    margin-left: 0;
  }
  .hero__title {
    font-size: 8rem;
    line-height: 6.7rem;
    letter-spacing: -0.5rem;
  }
  .hero__title-accent {
    letter-spacing: -0.5rem;
  }
  .hero__year {
    padding-left: 60;
    font-size: 3rem;
    letter-spacing: 5.3rem;
  }
}

@media (max-width: 767px) {
  .hero__body {
    padding: 150px 0 150px;
  }
  .hero__text {
    max-width: 450px;
    margin-left: 0;
  }
  .hero__title {
    font-size: 6rem;
    line-height: 4.5rem;
    letter-spacing: -0.5rem;
  }
  .hero__title-accent {
    letter-spacing: -0.5rem;
  }
  .hero__year {
    margin-top: 5px;
    padding-left: 60;
    font-size: 3rem;
    letter-spacing: 4.3rem;
  }
  .hero__description {
    margin-bottom: 20px;
  }
}

@media (max-width: 575px) {
  .hero__text {
    max-width: 320px;
  }
  .hero__title {
    font-size: 4.5rem;
    line-height: 3.5rem;
  }
  .hero__year {
    padding: 0;
    letter-spacing: 10px;
    font-size: 2rem;
    max-width: 150px;
  }
  .hero__description {
    font-size: 1.4rem;
  }
}

@media (max-width: 480px) {
  .hero::after {
    display: none;
  }
  .hero__text {
    width: 100%;
    max-width: none;
  }
}

.featured__title {
  margin-bottom: 7px;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 2.6rem;
  text-align: center;
}

.featured__subtitle {
  margin-bottom: 20px;
  text-align: center;
}

.featured__slider {
  padding: 0 10px;
}

.featured-slider {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.featured-slider__slide {
  margin: 0 20px;
}

.featured-slide {
  display: -webkit-box !important;
  display: -ms-flexbox !important;
  display: flex !important;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
          box-shadow: 0px 0px 20px 1px rgba(0, 0, 0, 0.1);
  -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.featured-slide:nth-child(2) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.featured-slide:nth-child(3) {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

.featured-slide:nth-child(4) {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s;
}

.featured-slide__image-wrap {
  max-width: 250px;
  margin-bottom: 16px;
}

.featured-slide__link {
  display: block;
}

.featured-slide__image {
  max-width: 100%;
  height: auto;
}

.featured-slide__title {
  margin-bottom: 2px;
  font-size: 1.8rem;
  font-weight: 700;
}

.featured-slide__brand {
  margin-bottom: 15px;
}

.featured-slide__ratings {
  margin-bottom: 2px;
}

.slick-loading .slick-list {
  background: #fff url("../img/featured-slider/ajax-loader.gif") center center no-repeat;
}

.slick-dots {
  display: none !important;
}

.slider-arrows {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  max-width: 60px;
  margin: 0 auto;
  margin-top: 50px;
}

.slider-arrows__arrow {
  padding: 5px 0;
  border: 1px solid transparent;
  border-radius: 50%;
  background-color: #f92357;
  cursor: pointer;
  -webkit-transition: 0.5s;
  -o-transition: 0.5s;
  transition: 0.5s;
}

.slider-arrows__arrow.slick-disabled {
  background-color: #cacaca;
}

.slider-arrows__prev {
  padding-right: 10px;
  padding-left: 5px;
}

.slider-arrows__prev span {
  display: block;
  margin-left: -4px;
  border: 6px solid;
  border-color: transparent #fff transparent transparent;
}

.slider-arrows__next {
  padding-left: 10px;
  padding-right: 5px;
}

.slider-arrows__next span {
  display: block;
  margin-right: -4px;
  border: 6px solid;
  border-color: transparent #fff transparent transparent;
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}

@media (min-width: 1200px) {
  .featured-slide__image {
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .featured-slide__image-wrap {
    position: relative;
    overflow: hidden;
  }
  .featured-slide__image-wrap::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    pointer-events: none;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .featured-slide__image-wrap:hover::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f9236e2c;
  }
  .featured-slide__image-wrap:hover .featured-slide__image {
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1);
  }
  .featured-slide__title {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .featured-slide__title:hover {
    color: #f92346;
  }
  .slider-arrows__arrow:not(.slick-disabled) {
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  .slider-arrows__arrow:not(.slick-disabled) span {
    -webkit-transition: 0.3s;
    -o-transition: 0.3s;
    transition: 0.3s;
  }
  .slider-arrows__arrow:not(.slick-disabled):hover {
    background-color: #fff;
    border: 1px solid #f92357;
  }
  .slider-arrows__arrow:not(.slick-disabled):hover span {
    border-right-color: #f92357;
  }
}

@media (max-width: 480px) {
  .featured__title {
    font-size: 2.2rem;
  }
}

.news {
  position: relative;
  z-index: 100;
  margin-top: -60px;
  background-size: cover;
  background-repeat: no-repeat;
}

.news__body {
  padding: 130px 0 185px;
}

.news__title {
  margin-bottom: 11px;
  font-size: 2.6rem;
  font-weight: 800;
  text-align: center;
}

.news__subtitle {
  margin-bottom: 45px;
  text-align: center;
}

.news__items {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  margin: 0 -20px;
}

.news__item {
  -ms-flex-preferred-size: calc(33.333% - 40px);
      flex-basis: calc(33.333% - 40px);
  margin: 0 20px;
}

.news-item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: #fff;
  -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.news-item:nth-child(2) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.news-item:nth-child(3) {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

.news-item__image-wrap {
  width: 100%;
  overflow: hidden;
}

.news-item__image-wrap .news-item__link {
  width: 100%;
}

.news-item__image {
  width: 100%;
  height: 235px;
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center center;
     object-position: center center;
}

.news-item__link {
  display: inline-block;
}

.news-item__text {
  padding: 34px 40px 25px 30px;
}

.news-item__title {
  margin-bottom: 2px;
  font-weight: 800;
  color: #515151;
  font-size: 1.8rem;
}

.news-item__subtitle {
  margin-bottom: 15px;
  color: #a8a8a8;
  font-size: 1.4rem;
}

.news-item__description {
  margin-bottom: 25px;
  font-size: 1.4rem;
  color: #494949;
  line-height: 22px;
}

.news-item__footer {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-top: auto;
}

.news-item__button {
  font-size: 1.3rem;
  padding: 8px 13px;
}

.news-item__actions {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.news-item__icon-wrap:first-child {
  position: relative;
  margin-right: 25px;
}

.news-item__icon-wrap:first-child::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 100%;
  top: 0;
  right: -12.5px;
  background-color: #b9b9b9;
  pointer-events: none;
}

.news-item__icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 15px;
  height: 15px;
  fill: #f92349;
}

@media (min-width: 1200px) {
  .news-item__image {
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .news-item__image-wrap {
    position: relative;
    overflow: hidden;
  }
  .news-item__image-wrap::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    pointer-events: none;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .news-item__image-wrap:hover::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f9236e2c;
  }
  .news-item__image-wrap:hover .news-item__image {
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1);
  }
  .news-item__title {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .news-item__title:hover {
    color: #f92346;
  }
  .news-item__icon {
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .news-item__icon-wrap {
    position: relative;
    z-index: 1;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
    padding: 5px;
    padding-bottom: 4px;
  }
  .news-item__icon-wrap::before {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    background-color: #f9236f;
    -webkit-transition: 0.4s ease;
    -o-transition: 0.4s ease;
    transition: 0.4s ease;
  }
  .news-item__icon-wrap:hover::before {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .news-item__icon-wrap:hover .news-item__icon {
    position: relative;
    fill: #fff;
  }
}

@media (max-width: 991px) {
  .news-item__description {
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    -o-text-overflow: ellipsis;
       text-overflow: ellipsis;
    overflow: hidden;
    -ms-flex-direction: column;
        flex-direction: column;
  }
}

@media (max-width: 850px) and (min-width: 767px) {
  .news-item__description {
    margin-bottom: 10px;
  }
  .news-item__footer {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .news-item__button {
    -ms-flex-preferred-size: 90%;
        flex-basis: 90%;
    margin-top: 15px;
    -webkit-box-ordinal-group: 2;
        -ms-flex-order: 1;
            order: 1;
  }
  .news-item__icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 767px) {
  .news__body {
    padding-bottom: 130px;
  }
  .news__item {
    -ms-flex-preferred-size: calc(50% - 40px);
        flex-basis: calc(50% - 40px);
    margin-bottom: 30px;
  }
  .news-item__icon {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 575px) {
  .news__body {
    padding-bottom: 130px;
  }
  .news__items {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .news__item {
    -ms-flex-preferred-size: calc(90% - 40px);
        flex-basis: calc(90% - 40px);
  }
  .news-item__image-wrap {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .news-item__text {
    padding: 30px 20px;
  }
  .news-item__icon {
    width: 25px;
    height: 25px;
  }
}

@media (max-width: 480px) {
  .news__title {
    font-size: 2.2rem;
  }
  .news__item {
    -ms-flex-preferred-size: calc(100% - 40px);
        flex-basis: calc(100% - 40px);
  }
}

@media (max-width: 360px) {
  .news__body {
    padding-bottom: 100px;
  }
}

.sale {
  position: relative;
  z-index: 100;
  margin-top: -60px;
}

.sale__body {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  padding: 50px 30px;
  background-color: #fff;
}

.sale__body::after {
  position: absolute;
  bottom: 5px;
  left: 2.74%;
  content: '';
  display: block;
  height: 1px;
  background-color: #c2c2c2;
  width: 94.9%;
}

.sale__brands {
  padding-top: 10px;
  -ms-flex-preferred-size: 32.2%;
      flex-basis: 32.2%;
}

.sale__brand {
  margin-bottom: 17px;
  padding-bottom: 17px;
  border-bottom: 1px solid #c2c2c2;
}

.sale__brand:last-child {
  margin-bottom: 0;
  border-bottom: none;
  padding-bottom: 0;
}

.sale__brands-title {
  margin-bottom: 43px;
  font-weight: 800;
  font-size: 2.6rem;
  text-align: center;
}

.sale__banner {
  -ms-flex-preferred-size: 310px;
      flex-basis: 310px;
  margin: 0 40px;
  padding: 25px 25px;
}

.sale__search {
  padding: 70px 0 55px;
}

.sale-brand {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
}

.sale-brand__image-wrap {
  margin-right: 30px;
  width: 91px;
}

.sale-brand__image {
  width: 100%;
  height: 95px;
  -o-object-fit: cover;
     object-fit: cover;
}

.sale-brand__link {
  display: inline-block;
}

.sale-brand__title {
  margin-bottom: 2px;
  font-weight: 700;
  font-size: 1.8rem;
}

.sale-brand__brand-name {
  margin-bottom: 8px;
  color: #939393;
  font-size: 1.7rem;
}

.sale-brand__ratings {
  margin-bottom: 10px;
}

.price-wrap__current {
  color: #f92349;
}

.banner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  background-color: #f9234a;
  background-image: url(../img/sale-brands/bg-banner.png);
  background-size: cover;
  background-repeat: no-repeat;
  -webkit-animation-name: zoomIn;
          animation-name: zoomIn;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.banner__title-wrap {
  padding: 55px 25px;
  border: 5px solid #fff;
  font-family: BebasNeue;
  color: #ffffff;
}

.banner__title {
  margin-bottom: 15px;
  font-size: 6.8rem;
  line-height: 5.5rem;
  text-align: center;
}

.banner__title::after {
  margin-top: 5px;
  content: '';
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fff;
}

.banner__title-accent {
  font-size: 12.8rem;
  line-height: 9.5rem;
  text-align: center;
}

.search {
  background-color: #fff;
}

.search__title {
  margin-bottom: 10px;
  text-align: center;
  font-size: 2.6rem;
  font-weight: 800;
}

.search__subtitle {
  text-align: center;
  margin-bottom: 37px;
}

.search__form {
  max-width: 655px;
  margin: 0 auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.search__input {
  -webkit-box-flex: 1;
      -ms-flex: 1 1 auto;
          flex: 1 1 auto;
  padding: 5px 10px;
  margin-right: 8px;
  border: 1px solid #a1a1a1;
  padding: 10px 20px;
}

.search__input:focus {
  border-color: #f9236f;
}

.search__submit {
  padding: 12px 23px;
  color: #ffffff;
  font-weight: 700;
  font-size: 1.3rem;
  background-image: -webkit-gradient(linear, left top, right top, from(#f9236f), to(#f92346));
  background-image: -webkit-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: -o-linear-gradient(left, #f9236f 0%, #f92346 100%);
  background-image: linear-gradient(to right, #f9236f 0%, #f92346 100%);
}

.partners__image {
  max-width: 100%;
}

.sale__brands_left .sale-brand {
  -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.sale__brands_left .sale-brand:nth-of-type(2) {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}

.sale__brands_left .sale-brand:nth-of-type(3) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.sale__brands_left .sale-brand:nth-of-type(4) {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

.sale__brands_right .sale-brand {
  -webkit-animation-name: fadeInRight;
          animation-name: fadeInRight;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.sale__brands_right .sale-brand:nth-of-type(2) {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s;
}

.sale__brands_right .sale-brand:nth-of-type(3) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.sale__brands_right .sale-brand:nth-of-type(4) {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}

@media (min-width: 1200px) {
  .sale-brand__image {
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .sale-brand__image-wrap {
    position: relative;
    overflow: hidden;
  }
  .sale-brand__image-wrap::after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    left: 50%;
    top: 50%;
    pointer-events: none;
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .sale-brand__image-wrap:hover::after {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f9236e2c;
  }
  .sale-brand__image-wrap:hover .sale-brand__image {
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1);
  }
  .sale-brand__title {
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .sale-brand__title:hover {
    color: #f92346;
  }
}

@media (max-width: 1199px) {
  .sale__brands_left .sale-brand, .sale__brands_right .sale-brand {
    -webkit-animation-name: backInUp;
            animation-name: backInUp;
  }
}

@media (max-width: 991px) {
  .sale__body {
    padding-left: 10px;
    padding-right: 10px;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .sale__banner {
    margin: 0 10px 0;
  }
  .banner__title-wrap {
    padding: 30px 15px;
  }
  .banner__title {
    margin-bottom: 15px;
    font-size: 5.8rem;
    line-height: 5.5rem;
  }
  .banner__title-accent {
    font-size: 9.8rem;
    line-height: 7.5rem;
  }
}

@media (max-width: 890px) {
  .sale__body {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }
  .sale__body::after {
    display: none;
  }
  .sale__brands {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    padding: 0;
    -webkit-box-flex: 1;
        -ms-flex-positive: 1;
            flex-grow: 1;
    margin: 0 -10px;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .sale__brand {
    margin: 0 10px 10px;
  }
  .sale__brand:last-child {
    margin-bottom: 10px;
    padding-bottom: 17px;
    border-bottom: 1px solid #c2c2c2;
  }
  .sale__brands-title {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin-bottom: 20px;
  }
  .sale__banner {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin: 40px 0;
    padding: 10px;
    margin-left: 0;
  }
  .sale-brand__image-wrap {
    margin-right: 20px;
  }
  .sale-brand__price-wrap {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .banner__title-wrap {
    padding: 10px;
  }
  .banner__title-accent:nth-of-type(1) {
    word-spacing: 999px;
  }
}

@media (max-width: 836px) {
  .sale__brands {
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
  }
}

@media (max-width: 767px) {
  .sale {
    margin-bottom: 30px;
  }
  .banner__title-accent:nth-of-type(1) {
    word-spacing: 999px;
  }
  .search {
    padding-left: 10px;
    padding-right: 10px;
  }
  .partners {
    display: none;
  }
}

@media (max-width: 575px) {
  .sale__search {
    padding: 30px 10px;
  }
}

@media (max-width: 480px) {
  .sale__brands-title {
    font-size: 2.2rem;
  }
  .banner__title {
    word-spacing: 999px;
  }
  .search__title {
    font-size: 2.2rem;
  }
  .search__form {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .search__input {
    margin-bottom: 20px;
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }
}

@media (max-width: 575px) {
  .sale__brands {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr;
        grid-template-columns: 1fr 1fr;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
  }
  .sale__brands-title {
    -ms-grid-column: 1;
    -ms-grid-column-span: 2;
    grid-column: 1/3;
  }
  .sale-brand {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .sale-brand__image-wrap {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .sale-brand__image-wrap .sale-brand__link {
    width: 100%;
  }
  .sale-brand__image {
    height: 200px;
    -o-object-fit: contain;
       object-fit: contain;
  }
}

@media (max-width: 380px) {
  .sale__brands_left .sale-brand, .sale__brands_right .sale-brand {
    -webkit-animation-delay: 0.1s !important;
            animation-delay: 0.1s !important;
  }
  .sale__brands {
    -ms-grid-columns: 1fr;
        grid-template-columns: 1fr;
  }
  .sale__brands-title {
    -ms-grid-column: 1;
    -ms-grid-column-span: 1;
    grid-column: 1/2;
  }
  .sale__brand {
    padding-bottom: 10px;
    margin-bottom: 30px;
  }
}

.footer {
  background-size: cover;
  background-repeat: no-repeat;
  background-color: #f9235c;
  color: #ffffff;
}

.footer__body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
      -ms-flex-align: start;
          align-items: flex-start;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 80px 0 60px;
}

.footer__rights {
  text-align: center;
  padding-bottom: 20px;
}

.contacts__title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 800;
}

.contacts__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 5px 0;
  margin-bottom: 5px;
}

.contacts__icon {
  margin-right: 10px;
  fill: #ffffff;
  width: 20px;
  height: 20px;
}

.contacts__text {
  position: relative;
}

.socials__title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 800;
}

.socials__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  max-width: 275px;
}

.socials__item {
  -ms-flex-preferred-size: 42%;
      flex-basis: 42%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: 5px 0;
  margin-bottom: 5px;
}

.socials__icon {
  margin-right: 10px;
  width: 20px;
  height: 20px;
  fill: #ffffff;
}

.payment__title {
  font-size: 2rem;
  margin-bottom: 20px;
  font-weight: 800;
}

.payment__inner {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.payment__item {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin-right: 15px;
}

.payment__item:last-child {
  margin-right: 0;
}

.payment__icon {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 50px;
  height: 50px;
}

@media (min-width: 1200px) {
  .footer-hover {
    position: relative;
    border: 1px solid transparent;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    overflow: hidden;
  }
  .footer-hover::before {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    -webkit-transform: translateX(101%);
        -ms-transform: translateX(101%);
            transform: translateX(101%);
    background-color: #fff;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
  }
  .footer-hover:hover {
    color: #f92346;
    border-color: #f92346;
  }
  .footer-hover:hover::before {
    -webkit-transform: translateX(0);
        -ms-transform: translateX(0);
            transform: translateX(0);
  }
  .footer-hover:hover .socials__icon, .footer-hover:hover .contacts__icon {
    position: relative;
    -webkit-transition: 0.3s ease;
    -o-transition: 0.3s ease;
    transition: 0.3s ease;
    fill: #f92346;
  }
  .footer-hover span {
    position: relative;
  }
}

@media (max-width: 1199px) {
  .footer__body {
    margin: 0 -20px;
  }
  .footer__contacts, .footer__socials, .footer__payment {
    margin: 0 20px;
  }
  .payment__title {
    text-align: center;
  }
  .payment__inner {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
}

@media (max-width: 991px) {
  .footer__body {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    -webkit-box-pack: space-evenly;
        -ms-flex-pack: space-evenly;
            justify-content: space-evenly;
  }
  .footer__payment {
    margin-top: 30px;
  }
  .socials__inner {
    max-width: 250px;
  }
}

@media (max-width: 767px) {
  .footer__contacts, .footer__socials {
    -ms-flex-preferred-size: calc(50% - 40px);
        flex-basis: calc(50% - 40px);
  }
  .socials__title {
    max-width: 250px;
    margin-left: auto;
  }
  .socials__inner {
    margin-left: auto;
  }
  .contacts__title, .socials__title, .payment__title {
    font-size: 1.8rem;
  }
}

@media (max-width: 575px) {
  .footer__body {
    padding: 50px 0 30px;
  }
  .footer__contacts {
    margin-bottom: 30px;
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }
  .contacts {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    text-align: center;
  }
  .socials {
    -ms-flex-item-align: stretch;
        -ms-grid-row-align: stretch;
        align-self: stretch;
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
  }
  .socials__title {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .socials__inner {
    margin: 0 auto;
  }
  .socials__title {
    text-align: center;
  }
}

@media (max-width: 380px) {
  .contacts {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
  }
  .contacts__item {
    -webkit-box-align: start;
        -ms-flex-align: start;
            align-items: flex-start;
    text-align: left;
  }
}

.main__body {
  position: relative;
  z-index: 101;
  margin-top: -55px;
  padding-bottom: 40px;
  background-color: #fff;
}

.main__details {
  padding: 0 15px;
  margin-bottom: 45px;
}

.main__genders {
  padding: 0 30px;
  margin-bottom: 105px;
}

.main-details {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.main-details__detail {
  -ms-flex-preferred-size: 33.333%;
      flex-basis: 33.333%;
  position: relative;
  top: -65px;
}

.main-detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-animation-name: zoomInUp;
          animation-name: zoomInUp;
  -webkit-animation-duration: 2s;
          animation-duration: 2s;
}

.main-detail:nth-child(2) {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s;
}

.main-detail:nth-child(3) {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s;
}

.main-detail__icon-wrap {
  padding: 40px;
  border-radius: 50%;
  background-color: #fff;
}

.main-detail__icon {
  width: 40px;
  height: 40px;
}

.main-detail__title {
  margin-top: -17px;
  margin-bottom: 8px;
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
}

.main-detail__description {
  text-align: center;
}

.genders {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.genders__gender {
  padding: 45px 45px 35px 45px;
  -ms-flex-preferred-size: 48.3%;
      flex-basis: 48.3%;
}

.genders__female {
  background-image: url(../img/genders/female.jpg);
  background-repeat: no-repeat;
  background-position: right top;
  -webkit-animation-name: fadeInLeft;
          animation-name: fadeInLeft;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.genders__male {
  background-image: url(../img/genders/male.jpg);
  background-repeat: no-repeat;
  background-position: right top;
  -webkit-animation-name: fadeInRight;
          animation-name: fadeInRight;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
}

.gender {
  background-color: #d7eff9;
}

.gender__title {
  margin-bottom: 13px;
  font-weight: 800;
  letter-spacing: -0.35rem;
  line-height: 4rem;
  font-size: 4.8rem;
  color: #222222;
}

.gender__title-accent {
  color: #f9236f;
  letter-spacing: -0.35rem;
}

.gender__description {
  margin-bottom: 25px;
  line-height: 2.2rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  -o-text-overflow: ellipsis;
     text-overflow: ellipsis;
  overflow: hidden;
  -ms-flex-direction: column;
      flex-direction: column;
  max-width: 230px;
}

@media (max-width: 1199px) {
  .main-detail {
    -webkit-animation-name: fadeInUp;
            animation-name: fadeInUp;
    -webkit-animation-duration: 1s;
            animation-duration: 1s;
  }
  .main-detail:nth-child(2) {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s;
  }
  .main-detail:nth-child(3) {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s;
  }
  .main-detail__title {
    font-size: 2.2rem;
  }
  .genders__female {
    -webkit-animation-name: backInUp;
            animation-name: backInUp;
  }
  .genders__male {
    -webkit-animation-name: backInUp;
            animation-name: backInUp;
  }
  .gender__description {
    color: #fff;
    background-color: #0000000a;
  }
}

@media (max-width: 991px) {
  .main__genders {
    padding: 0 15px;
  }
  .main-details {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .main-details__detail {
    top: -45px;
  }
  .main-detail__icon-wrap {
    padding: 30px;
  }
  .genders {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
}

@media (max-width: 890px) {
  .main__details {
    margin-bottom: 30px;
  }
  .main-details__detail {
    padding: 0 10px;
  }
  .main-detail__title {
    word-spacing: 999px;
  }
}

@media (max-width: 767px) {
  .main__genders {
    margin-bottom: 40px;
  }
  .main-detail__title {
    font-size: 1.8rem;
  }
  .genders__gender {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin-bottom: 40px;
  }
  .gender__description {
    color: #000000;
    background-color: transparent;
  }
}

@media (max-width: 575px) {
  .main-details__detail {
    top: -35px;
    padding: 0;
  }
  .main-detail__icon-wrap {
    padding: 20px;
  }
  .main-detail__icon {
    width: 30px;
    height: 30px;
  }
  .main-detail__description {
    font-size: 1.4rem;
  }
  .gender__description {
    color: #fff;
    background-color: #00000018;
  }
}

@media (max-width: 480px) {
  .main-details {
    -webkit-box-pack: center;
        -ms-flex-pack: center;
            justify-content: center;
  }
  .main-details__detail {
    -ms-flex-preferred-size: 50%;
        flex-basis: 50%;
    padding: 0 10px;
  }
  .main-detail__description {
    font-size: 1.4rem;
  }
  .genders__gender {
    padding: 20px;
  }
  .genders__female, .genders__male {
    background-position: right -70px top;
  }
  .gender__title {
    font-size: 3.5rem;
    line-height: 2.9rem;
  }
  .gender__button {
    padding: 5px 10px;
  }
}

@media (max-width: 380px) {
  .main-details__detail {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    margin-bottom: 15px;
  }
  .main-detail__title {
    word-spacing: normal;
  }
}

//в конце должно стоять 2 переноса строки, чтобы последний медиа-запрос нашелся регуляркой
`;

let arr = [];

//
//(?<=@media\s(.+?\))\s{\n).+?\}(?=\s}\s+[@\w\/\.])

str.replace(/(?<=@media \((max-width: (360|380|480|575|767|991|1199)px)\) {\n).+?(?=}\n\n)/gis, (match, group1, group2) => {
    let obj = {};
    Object.defineProperty(obj, group1, {
        // в group1 лежит медиа-условие, вот такое max-width: число_px
        value: match,
        writable: true,
        enumerable: true,
        configurable: true,
    });

    arr.push(obj);
});

//тут будут лежать все медиа запросы именно этой ширины, но еще не сгруппированные, вот так:
//"@media (max-width: 480px) { ...... }"
//"@media (max-width: 480px) { ...... }"
let resultMax360 = [];
let resultMax380 = [];
let resultMax480 = [];
let resultMax575 = [];
let resultMax767 = [];
let resultMax991 = [];
let resultMax1199 = [];

//заполняем предыдущие массивы
arr.forEach((obj) => {
    if (Object.keys(obj)[0] === 'max-width: 480px') resultMax480.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 360px') resultMax360.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 380px') resultMax380.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 575px') resultMax575.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 767px') resultMax767.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 991px') resultMax991.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
    else if (Object.keys(obj)[0] === 'max-width: 1199px') resultMax1199.push(`@media ${Object.keys(obj)} {${Object.values(obj)}}`);
});
// console.log(arr);

//в эти массивы будут складываться css-правила, подходящего медиа-запроса
let grouped360 = ['@media (max-width: 360px){\n'];
let grouped380 = ['@media (max-width: 380px){\n'];
let grouped480 = ['@media (max-width: 480px){\n'];
let grouped575 = ['@media (max-width: 575px){\n'];
let grouped767 = ['@media (max-width: 767px){\n'];
let grouped991 = ['@media (max-width: 991px){\n'];
let grouped1199 = ['@media (max-width: 1199px){\n'];

//формируем строку сгруппированного медиа-запроса
const groupMedia = (ungrouped, futureGrouped) => {
    ungrouped.forEach((str) => {
        if (futureGrouped[0].length === 28) {
            futureGrouped.push(str.slice(28, -1), '\n'); //если ширина экрана уже четырех значная, то нужно сместиться на 1 символ
        } else {
            futureGrouped.push(str.slice(27, -1), '\n');
        }
    });
    futureGrouped.push('}');
    futureGrouped = futureGrouped.join('');
    return futureGrouped;
};

grouped360 = groupMedia(resultMax360, grouped360);
grouped380 = groupMedia(resultMax380, grouped380);
grouped480 = groupMedia(resultMax480, grouped480);
grouped575 = groupMedia(resultMax575, grouped575);
grouped767 = groupMedia(resultMax767, grouped767);
grouped991 = groupMedia(resultMax991, grouped991);
grouped1199 = groupMedia(resultMax1199, grouped1199);

//скаладываем все в общую строку
let full =
    grouped360 + '\n' + grouped380 + '\n' + grouped480 + '\n' + grouped575 + '\n' + grouped767 + '\n' + grouped991 + '\n' + grouped1199;
// console.log(full);

let str1 = `
@media (min-width: 1200px) {
  .featured-slide__image {
    -webkit-transition: 0.5s ease;
    -o-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .slider-arrows__arrow:not(.slick-disabled):hover span {
    border-right-color: #f92357;
  }
}

@media (max-width: 480px) {
  .featured__title {
    font-size: 2.2rem;
  }
}

.news {
  position: relative;
  z-index: 100;
  margin-top: -60px;
  background-size: cover;
  background-repeat: no-repeat;
}
`;

// str = str.replace(/@media.+?}(?=\n\n)/gis, '');
//
// str = str.replace(/@media \(.+?: (360|380|480|575|767|991|1199)px\) {.+?}(?=\n\n)/gis, '');

str = str.replace(/@media \(max-width: (360|380|480|575|767|991|1199)px\) {.+?}(?=\n\n)/gis, '');
str = str + full;
console.log(str);
