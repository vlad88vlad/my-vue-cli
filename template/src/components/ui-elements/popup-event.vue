<template>

  <div class="v-dialog__content">
    <div class="popup-event">
      <div class="success" v-if="status">

        <div class="letter-image " :class="active?'active':''" v-if="isEmail">
          <div class="animated-mail">
            <div class="back-fold"></div>
            <div class="letter">
              <div class="letter-border"></div>
              <div class="letter-title"></div>
              <div class="letter-context"></div>
              <div class="letter-stamp">
                <div class="letter-stamp-inner"></div>
              </div>
            </div>
            <div class="top-fold"></div>
            <div class="body"></div>
            <div class="left-fold"></div>
          </div>
          <div class="shadow"></div>
        </div>


        <svg v-else version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke="#fff" stroke-width="6"
                  stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"/>
          <polyline class="path check" fill="none" stroke="#fff" stroke-width="6"
                    stroke-linecap="round" stroke-miterlimit="10"
                    points="100.2,40.2 51.5,88.8 29.8,67.5 "/>
        </svg>
      </div>
      <div class="danger" v-else>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
          <circle class="path circle" fill="none" stroke="#fff" stroke-width="6"
                  stroke-miterlimit="10"
                  cx="65.1" cy="65.1" r="62.1"/>
          <line class="path line" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"
                stroke-miterlimit="10" x1="34.4" y1="37.9" x2="95.8" y2="92.3"/>
          <line class="path line" fill="none" stroke="#fff" stroke-width="6" stroke-linecap="round"
                stroke-miterlimit="10" x1="95.8" y1="38" x2="34.4" y2="92.2"/>

        </svg>
      </div>
      <p class="text">{{text}}</p>

      <div class="popup-event__actions">
        <slot></slot>

      </div>
    </div>
  </div>


</template>

<script>


    export default {

        components: {},
        name: 'login-event',
        props: {

            text: {
                type: String,
                default: ''
            },
            isEmail: {
                type: Boolean,
                default: true
            },
            status: {
                type: Boolean,
                default: false
            },

        },
        data() {
            return {
                active: false
            }
        },
        methods: {},
        created() {
            setTimeout(() => {
                this.active = true
            }, 50)
        },
        mounted() {


        },
        watch: {},
        computed: {}


    }

</script>

<style>
  .v-dialog__content {
    z-index: 500 !important;

    pointer-events: unset !important;
    width: 100% !important;
    height: 100% !important;
    background: rgba(49, 48, 49, 0.4);
    position: fixed !important;
    top: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .popup-event__actions {
    text-align: center;
    width: 100% !important;
    margin-top: 25px;
  }

  .popup-event {
    border-radius: 2px;
    width: 100%;
    min-width: 300px;
    max-width: 350px;
    background: #fff;
    padding-bottom: 15px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    margin-bottom: 100px;
  }

  .success, .danger {
    padding: 15px;
    max-height: 400px;
  }

  .success {
    background: var(--success-color);

  }

  .danger {
    background: var(--danger-color);

  }

  .text {
    text-align: center;
    margin: 20px;
    font-size: 1.25em;
  }

  .letter-image {
    position: relative;
    top: 0;
    left: 50%;
    width: 200px;
    height: 200px;
    -webkit-transform: translate(-50%, 0);
    -moz-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    cursor: pointer;
  }

  .animated-mail {
    position: absolute;
    height: 150px;
    width: 200px;
    -webkit-transition: .4s;
    -moz-transition: .4s;
    transition: .4s;
  }

  .animated-mail .body {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 100px 200px;
    border-color: transparent transparent #e95f55 transparent;
    z-index: 2;
  }

  .animated-mail .top-fold {
    position: absolute;
    top: 50px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 100px 0 100px;
    -webkit-transform-origin: 50% 0%;
    -webkit-transition: transform .4s .4s, z-index .2s .4s;
    -moz-transform-origin: 50% 0%;
    -moz-transition: transform .4s .4s, z-index .2s .4s;
    transform-origin: 50% 0%;
    transition: transform .4s .4s, z-index .2s .4s;
    border-color: #cf4a43 transparent transparent transparent;
    z-index: 2;
  }

  .animated-mail .back-fold {
    position: absolute;
    bottom: 0;
    width: 200px;
    height: 100px;
    background: #cf4a43;
    z-index: 0;
  }

  .animated-mail .left-fold {
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 0 50px 100px;
    border-color: transparent transparent transparent #e15349;
    z-index: 2;
  }

  .animated-mail .letter {
    left: 20px;
    bottom: 0px;
    position: absolute;
    width: 160px;
    height: 60px;
    background: white;
    z-index: 1;
    overflow: hidden;
    -webkit-transition: .4s .2s;
    -moz-transition: .4s .2s;
    transition: .4s .2s;
  }

  .animated-mail .letter .letter-border {
    height: 10px;
    width: 100%;
    background: repeating-linear-gradient(-45deg, #cb5a5e, #cb5a5e 8px, transparent 8px, transparent 18px);
  }

  .animated-mail .letter .letter-title {
    margin-top: 10px;
    margin-left: 5px;
    height: 10px;
    width: 40%;
    background: #cb5a5e;
  }

  .animated-mail .letter .letter-context {
    margin-top: 10px;
    margin-left: 5px;
    height: 10px;
    width: 20%;
    background: #cb5a5e;
  }

  .animated-mail .letter .letter-stamp {
    margin-top: 30px;
    margin-left: 120px;
    border-radius: 100%;
    height: 30px;
    width: 30px;
    background: #cb5a5e;
    opacity: 0.3;
  }

  .shadow {
    position: absolute;
    top: 190px;
    left: 50%;
    width: 100%;
    height: 30px;
    transition: .4s;
    transform: translateX(-50%);
    -webkit-transition: .4s;
    -webkit-transform: translateX(-50%);
    -moz-transition: .4s;
    -moz-transform: translateX(-50%);
    border-radius: 100%;
    background: radial-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));
  }

  .letter-image.active .animated-mail {
    transform: translateY(50px);
    -webkit-transform: translateY(50px);
    -moz-transform: translateY(50px);
  }

  .letter-image.active .animated-mail .top-fold {
    transition: transform .4s, z-index .2s;
    transform: rotateX(180deg);
    -webkit-transition: transform .4s, z-index .2s;
    -webkit-transform: rotateX(180deg);
    -moz-transition: transform .4s, z-index .2s;
    -moz-transform: rotateX(180deg);
    z-index: 0;
  }

  .letter-image.active .animated-mail .letter {
    height: 180px;
  }

  .letter-image.active .shadow {
    width: 250px;
  }
  .path {
    stroke-dasharray: 1000;
    stroke-dashoffset: 0;
  }

  .path.circle {
    -webkit-animation: dash 0.9s ease-in-out;
    animation: dash 0.9s ease-in-out;
  }

  .path.line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash 0.9s 0.35s ease-in-out forwards;
    animation: dash 0.9s 0.35s ease-in-out forwards;
  }

  .path.check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check 0.9s 0.35s ease-in-out forwards;
    animation: dash-check 0.9s 0.35s ease-in-out forwards;
  }
  @-webkit-keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash {
    0% {
      stroke-dashoffset: 1000;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @-webkit-keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }

  @keyframes dash-check {
    0% {
      stroke-dashoffset: -100;
    }
    100% {
      stroke-dashoffset: 900;
    }
  }
</style>
