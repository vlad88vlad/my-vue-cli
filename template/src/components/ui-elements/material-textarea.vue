<template>
    <div class="input-control">
        <!--currentLength-->
        <textarea :id="_uid" :type="currentType" :value="value" ref="textarea"
                  @change="change"
                  @input="input"
                  :maxlength="maxLength"
                  v-model="currentValue"
                  :class="[value?'active':'',isValid?'':'no-validate']" :disabled="disabled"
                  class="material-input"></textarea>
        <label class="material-label" :class="value?'active':''" :for="_uid">{{label}}</label>
        <span class="bar"></span>
        <span class="size">{{currentValue.length}}/{{maxLength}}</span>
        <div class="input-error">
            <div>{{validMsg}}</div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'material-textarea',
        inheritAttrs: false,

        props: {
            maxLength: {
                type: Number,
                default: 500
            },
            value: {
                default: ''
            },
            disabled: {
                type: Boolean,
                default: false
            },
            type: {
                type: String,
                default: 'text'
            },
            label: {
                type: String,
                default: ''
            },
            validMsg: {
                type: String,
                default: null
            },
            isValid: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                currentValue: '',
                currentType: this.type,
            }
        },
        methods: {
            showHidePassword() {
                if (this.type === 'password') {
                    this.currentType = this.currentType !== 'password' ? 'password' : 'text'
                }
            },
            calcSize() {
                if (this.$refs.textarea.clientHeight < 150) {
                    this.$refs.textarea.style.height = `${this.$refs.textarea.scrollHeight}px`
                }
            },
            input(event) {
                this.calcSize()
                if (!this.$attrs.hasOwnProperty('lazy')) {
                    this.$emit('input', event.target.value)
                }
            },
            change(event) {
                if (this.$attrs.hasOwnProperty('lazy')) {
                    this.$emit('input', event.target.value)
                }

            }
        },
        computed: {},
        beforeDestroy() {
        },
        mounted() {
            this.calcSize()


        },

        watch: {}
    }
</script>

<style scoped>
    /*========== material textarea ==========*/
    textarea {
        resize: vertical;
        width: 100%;
        min-height: 25px;
        height: 25px;
        max-height: 300px;
    }

    .input-control {
        position: relative;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
    }

    .show-hide-password {
        position: absolute;
        top: 0;
        right: 0;

    }

    i {
        -webkit-user-select: none; /* Chrome all / Safari all */
        -moz-user-select: none; /* Firefox all */
        -ms-user-select: none; /* IE 10+ */
        user-select: none; /* Likely future */
    }

    .material-input {
        background: inherit;
        z-index: 10;
        width: 100%;
        font-size: 13px;
        display: inline-block;
        border: none;
        padding-bottom: 5px;
        margin-right: 5px;
        border-bottom: 1px solid #757575;
    }

    .material-input:focus {
        outline: none;
    }

    .material-label {
        margin: 0;
        top: 0;
        font-size: 16px;
        transition: 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);
        z-index: 10;

        position: absolute
    }

    .material-input:focus ~ .material-label, .active ~ .material-label {
        -webkit-transform: translateY(-18px) translateX(-5px) scale(1);
        transform: translateY(-18px) translateX(-4px) scale(1);
        font-size: 14px;
        /*left:4px;*/
        margin-left: 4px;
        color: var(--primary-color, #1e81f0);
    }

    .size {
        color: #000;
        position: absolute;
        right: 5px;
    }

    .material-input:focus ~ .size {
        color: var(--primary-color, #1e81f0);
        position: absolute;
        right: 5px;
    }

    .no-validate ~ .size {
        color: #ff5733 !important;
    }

    .bar {
        z-index: 10;
        top: -5px;
        position: relative;
        display: block;

    }

    .bar:before, .bar:after {
        content: '';
        height: 1px;
        width: 0;
        bottom: 0;
        position: absolute;
        background: var(--primary-color, #1e81f0);
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
    }

    .bar:before {
        left: 50%;
    }

    .bar:after {
        right: 50%
    }

    /* active state */
    .material-input:focus ~ .bar:before, .material-input:focus ~ .bar:after {
        width: 50%;
    }

    .input-error {
        position: relative;
        transform: scaleY(1) translateY(-10px);
        z-index: -10;
        height: 15px;
        opacity: 0;
        top: -4px;
        color: #ff5733;
        transition: 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);

    }

    .material-input.no-validate {
        color: #ff0300;
        border-bottom: 1px solid #ff0300 !important;

    }

    .no-validate ~ .bar:before, .no-validate ~ .bar:after {
        background: #ff5733;

    }

    .no-validate ~ .material-label {
        color: #ff5733
    }

    .no-validate ~ .input-error {
        transform: scaleY(1) translateY(0);

        transition: 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);
        z-index: 10;
        opacity: 1;
        height: auto;
        animation-name: bounce;
        animation-duration: .5s;

    }

    .no-validate + .material-label {
        color: #ff5733 !important;

    }

    .no-validate + .material-label > div {
        animation-duration: .5s;
        animation-name: bounce;
    }

    @keyframes bounce {
        0% {
            transform: translateX(0px);
            timing-function: ease-in;
        }
        37% {
            transform: translateX(5px);
            timing-function: ease-out;
        }
        55% {
            transform: translateX(-5px);
            timing-function: ease-in;
        }
        73% {
            transform: translateX(4px);
            timing-function: ease-out;
        }
        82% {
            transform: translateX(-4px);
            timing-function: ease-in;
        }
        91% {
            transform: translateX(2px);
            timing-function: ease-out;
        }
        96% {
            transform: translateX(-2px);
            timing-function: ease-in;
        }
        100% {
            transform: translateX(0px);
            timing-function: ease-in;
        }
    }
</style>
