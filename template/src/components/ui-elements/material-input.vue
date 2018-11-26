<template>
    <div class="input-control">
        <input :id="_uid" :type="currentType" :value="value" ref="input" @input="$emit('input', $event.target.value)"
               :class="[value?'active':'',isValid?'':'no-validate']" :disabled="disabled"
               class="material-input"/>
        <div class="show-hide-password" @click="showHidePassword" v-if="type==='password'">
            <i class="material-icons" v-if="currentType==='password'">visibility</i>
            <i class="material-icons" v-else>visibility_off</i>
        </div>
        <label class="material-label" :class="value?'active':''" :for="_uid">{{label}}</label>
        <span class="bar"></span>
        <div class="input-error">{{validMsg}}</div>
    </div>
</template>

<script>
    export default {
        name: 'material-input',
        computed: {},
        props: {

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
                default: '123'
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
                id: 0,
                hidden: false,
                currentType: this.type
            }
        },
        methods: {
            showHidePassword() {
                if (this.type === 'password') {
                    this.currentType = this.currentType !== 'password' ? 'password' : 'text'
                }
            }
        },
        mounted() {

        },

        watch: {

        }
    }
</script>

<style scoped>
    /*========== material input ==========*/
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
        color: #1e81f0;
    }

    .bar {
        z-index: 10;

        position: relative;
        display: block;

    }

    .bar:before, .bar:after {
        content: '';
        height: 1px;
        width: 0;
        /* bottom: 1px; */
        position: absolute;
        background: #1e81f0;
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
        /*width: auto;*/

    }

    .no-validate + .material-label {
        color: #ff5733 !important;

    }
</style>
