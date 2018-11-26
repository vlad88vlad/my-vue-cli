<template>

    <button class="custom-button ripple-btn" ref="button" id="button" :style="styling" @click="$emit('click')"
            :type="type">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'custom-button',
        props: {
            styling: {
                type: Object,
                default: () => {
                    return {}
                }
            },
            text: {
                type: String,
                default: 'button'
            },

            type: {
                type: String,
                default: 'button'
            },
            background: {
                type: String,
            },
            color: {
                type: String,
            }

        },
        mounted() {

            this.$refs.button.onmousedown = (e) => {
                console.log(e);
                let rippleDiv = document.createElement("div");
                let X = e.offsetX
                let Y = e.offsetY
                rippleDiv.classList.add('ripple');
                document.styleSheets[0].addRule('.ripple:after', `top: ${Y}px;left: ${X}px;`);

                this.$refs.button.appendChild(rippleDiv);
                setTimeout(function () {
                    rippleDiv.parentElement.removeChild(rippleDiv);
                }, 900);
            };
            document.documentElement.style.setProperty('--background', this.background);
            document.documentElement.style.setProperty('--color', this.color);

        }
    }
</script>

<style>
    :root {
        --alpha: .6;
        --primary: 68, 138, 255;
        --success: 74, 174, 78;
        --warning: 248, 213, 144;
        --danger: 255, 47, 47;
        --disabled: 128, 128, 128;
    }

    .custom-button {

        outline: none;
        border: none;
        min-height: 35px;
        min-width: 100px;
        width: 150px;
        height: 45px;
        cursor: pointer;
        border-radius: 3px;
        font-size: 1.3rem;

    }

    /********** primary **********/
    .custom-button[primary] {
        background: rgb(var(--primary));
        color: #fff
    }

    .custom-button[primary][hover]:hover {
        background: #fff;
        color: rgb(var(--primary));
        border: 2px solid rgb(var(--primary));

    }

    .custom-button[primary][hover]:hover .ripple:after {
        background: rgb(var(--primary));
    }

    .custom-button[primary][outline] {
        color: rgb(var(--primary));
        background: transparent;
    }

    .custom-button[primary][outline]:hover {
        color: #fff;
        background: rgba(var(--primary), var(--alpha));
    }

    /********** success **********/
    .custom-button[success] {
        background: rgb(var(--success));
        color: #fff;

    }

    .custom-button[success][hover]:hover {
        background: #fff;
        color: rgb(var(--success));
        border: 2px solid rgb(var(--success));

    }

    .custom-button[success][hover]:hover .ripple:after {
        background: rgb(var(--success));
    }

    .custom-button[success][outline] {
        color: rgb(var(--success));
        background: transparent;
    }

    .custom-button[success][outline]:hover {
        color: #fff;
        background: rgba(var(--success), var(--alpha));
    }

    /********** warning **********/
    .custom-button[warning] {
        background: rgb(var(--warning));
        color: #fff;

    }

    .custom-button[warning][hover]:hover {
        background: #fff;
        color: rgb(var(--warning));
        border: 2px solid rgb(var(--warning));

    }

    .custom-button[warning][hover]:hover .ripple:after {
        background: rgb(var(--warning));
    }

    .custom-button[warning][outline] {
        color: rgb(var(--warning));
        background: transparent;
    }

    .custom-button[warning][outline]:hover {
        color: #fff;
        background: rgba(var(--warning), var(--alpha));
    }

    /********** danger **********/

    .custom-button[danger] {
        background: rgb(var(--danger));
        color: #fff;

    }

    .custom-button[danger][hover]:hover {
        background: #fff;
        color: rgb(var(--danger));
        border: 2px solid rgb(var(--danger));

    }

    .custom-button[danger][hover]:hover .ripple:after {
        background: rgb(var(--danger));
    }

    .custom-button[danger][outline] {
        color: rgb(var(--danger));
        background: transparent;
    }

    .custom-button[danger][outline]:hover {
        color: #fff;
        background: rgba(var(--danger), var(--alpha));
    }
    /********** disabled **********/

    .custom-button[disabled] {
        background: rgb(var(--disabled));
        color: #fff;

    }

    .custom-button[disabled][hover]:hover {
        background: #fff;
        color: rgb(var(--disabled));
        border: 2px solid rgb(var(--disabled));

    }

    .custom-button[disabled][hover]:hover .ripple:after {
        background: rgb(var(--disabled));
    }

    .custom-button[disabled][outline] {
        color: rgb(var(--disabled));
        background: transparent;
    }

    .custom-button[disabled][outline]:hover {
        color: #fff;
        background: rgba(var(--disabled), var(--alpha));
    }



    .custom-button[outline] {
        border: none !important;
    }

    .ripple-btn {
        position: relative;
        overflow: hidden;
        transition: 0.2s;
        transform-origin: center center;
    }

    .ripple-btn:not[outline] {
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

    }

    .ripple {
        position: relative;

    }

    .ripple:after {
        position: absolute;
        content: '';
        background: #fff;
        border-radius: 50%;
        width: 5px;
        height: 5px;
        animation: rippleEffect .99s;
        opacity: 0;
        z-index: 10;
    }

    @keyframes rippleEffect {
        0% {
            transform: scale(1);
            opacity: 0.4;
        }
        100% {
            transform: scale(100);
            opacity: 0;
        }
    }


</style>
