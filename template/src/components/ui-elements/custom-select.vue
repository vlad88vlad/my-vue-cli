<template>
    <div tabindex="1" class="custom-select" ref="customSelect">
        <input :id="_uid" type="text" ref="input" v-model="value"
               @change="change"
               @input="input"
               @keyup.delete="remove"
               :readonly="readonly"
               :class="[value?'active':'',isValid?'':'no-validate']"

               class="material-input-selected"/>
        <label class="material-label">{{label}}</label>
        <span class="bar"></span>
        <div class="input-error">{{validMsg}}</div>

        <span class="reset-button" @click="resetValue">
            <i class="material-icons" style="font-size: unset">close</i>
        </span>

        <div class="options">
            <template v-if="autoComplete.length !==0">
                <div class="option" v-for="(i,index) in autoComplete"
                     @click="setValue(item ? i[item] : i)" :key="index">
                    <span v-if="item" v-html="i[item]">
                    </span>
                    <span v-else>
                        {{i}}
                    </span>
                </div>
            </template>
            <div class="option" v-if="autoComplete.length ===0">
                not found
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'custom-select',
        props: {

            label: {
                type: String
            },
            item: {
                type: String,
                default: '',

            },
            readonly: {
                default: false,
                type: Boolean
            },
            validMsg: {
                type: String,
                default: null
            },
            isValid: {
                type: Boolean,
                default: true
            },
            options: {
                type: Array,
                default: () => {
                    return []
                }
            },


        },
        data() {
            return {
                value: '',
            }
        },
        methods: {
            remove() {
                if (this.readonly) {
                    this.$emit('input', '');
                    this.$emit('change', '');
                    this.$refs.input.value = '';
                    this.value = '';
                }
            },
            resetValue() {
                this.$emit('input', '');
                this.$emit('change', '');
                this.$refs.input.value = '';
                this.value = '';
            },
            setValue(item) {
                this.$emit('input', item)
                this.$emit('change', item)
                this.$refs.input.value = item;
                this.value = item;
                this.$refs.customSelect.blur();
            },
            input(event) {
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
        computed: {
            autoComplete() {
                if (this.item) {
                    return this.options.filter((item) => {
                        return ("" + item[this.item]).includes(this.value)

                    })
                }
                else {
                    return this.options.filter((item) => {
                        return ("" + item.includes(this.value))

                    })
                }

            }

        }
    }
</script>

<style scoped>

    .reset-button {
        user-select: none;
        position: absolute;
        right: 0;
        top: 5px;
    }

    .custom-select {
        position: relative;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 20px;
        cursor: pointer;
        outline: none;
    }

    .custom-select:focus .options, .material-input-selected:focus ~ .options {
        display: block;
    }

    .options {
        width: 100%;

        top: 25px;
        position: absolute;
        display: none;
        z-index: 1000000;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;

    }

    .option {
        height: 3em;
        background: grey;
        display: flex;
        align-items: center;
        padding-left: 8px;
    }

    .option:nth-child(odd) {
        background: #f5f5f5;
    }

    .option:nth-child(even) {
        background: #fafafa;
    }

    .option:hover {
        background: #dedede;
    }

    .material-input-selected {
        background: inherit;
        z-index: 10;
        width: 100%;
        font-size: 13px;
        display: inline-block;
        border: none;
        padding-bottom: 5px;
        border-bottom: 1px solid #757575;
    }

    .material-input-selected:focus {
        outline: none;
    }

    .material-input-selected:focus ~ .material-label, .active ~ .material-label {
        -webkit-transform: translateY(-18px) translateX(-5px) scale(1);
        transform: translateY(-18px) translateX(-4px) scale(1);
        font-size: 14px;
        /*left:4px;*/
        margin-left: 4px;
        color: var(--primary-color, #1e81f0)
    }

    .material-label {
        margin: 0;
        top: 0;
        font-size: 16px;
        transition: 0.7s cubic-bezier(0.25, 0.8, 0.5, 1);
        z-index: 10;
        position: absolute
    }

    .material-input-selected:focus ~ .material-label, .active ~ .material-label {
        -webkit-transform: translateY(-18px) translateX(-5px) scale(1);
        transform: translateY(-18px) translateX(-4px) scale(1);
        font-size: 14px;
        margin-left: 4px;
        color: var(--primary-color, #1e81f0);
    }

    .material-input-selected:focus ~ .bar:before, .material-input-selected:focus ~ .bar:after {
        width: 50%;
    }

    .bar {
        z-index: 10;

        position: relative;
        display: block;

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

    .material-input-selected.no-validate {
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
        /*width: auto;*/

    }

    .no-validate ~ .material-label {
        color: #ff5733 !important;
        animation-name: bounce;
        animation-duration: .5s;
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

    .material-input-selected:focus ~ .bar:before, .material-input-selected:focus ~ .bar:after {
        width: 50%;
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
