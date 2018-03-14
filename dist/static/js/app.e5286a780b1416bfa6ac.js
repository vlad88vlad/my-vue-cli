webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_stations__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_stations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_stations__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_users__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_change_password__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_change_password___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_change_password__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notifications__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_cookies__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_cookies__);
var _this = this;











__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
    // mode: 'history',

    routes: [{
        path: '/',
        name: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_stations___default.a,
        beforeEnter: (to, from, next) => {

            if (!__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === 'null' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === '') {
                next('login');
            } else {
                next();
            }
        }
    }, {
        path: '/stations',
        name: 'stations',
        component: __WEBPACK_IMPORTED_MODULE_2__components_stations___default.a,
        beforeEnter: (to, from, next) => {
            if (!__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === 'null' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === '') {
                next('login');
            } else {
                next();
            }
        }

    }, {
        path: '/users',
        name: 'users',
        component: __WEBPACK_IMPORTED_MODULE_3__components_users___default.a,

        beforeEnter: (to, from, next) => {
            console.log(__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("admin"));
            if (!__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === 'null' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === '' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("admin") != 'admin') {
                next('login');
            } else {
                next();
            }
        }

    }, {
        path: '/notifications',
        name: 'notifications',
        component: __WEBPACK_IMPORTED_MODULE_6__components_notifications___default.a,

        beforeEnter: (to, from, next) => {
            console.log(__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("admin"));
            if (!__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === 'null' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") === '' || __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("admin") != 'admin') {
                next('login?notifications=true');
            } else {
                console.log(_this);
                next();
            }
        }

    }, {
        path: '/login',
        name: 'login',
        component: __WEBPACK_IMPORTED_MODULE_4__components_login___default.a,
        beforeEnter: (to, from, next) => {

            if (__WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") && __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") !== null && __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") !== 'null' && __WEBPACK_IMPORTED_MODULE_7_vue_cookies___default.a.get("token") !== '') {
                next('/');
            } else {
                next();
            }
        } },

    // }, {
    //     path: '/password/:token',
    //     name: 'change_password',
    //     component: Change_password,
    //     // beforeEnter: (to, from, next) => {
    //     //     if (VueCookies.get("token") && VueCookies.get("token") !== null &&  VueCookies.get("token") !== 'null' && VueCookies.get("token") !== '') {
    //     //     next('/');
    //     //   }else {
    //     //     next()
    //     //   }
    //     // }
    //
    // },
    { path: '/password/change', component: __WEBPACK_IMPORTED_MODULE_5__components_change_password___default.a, props: route => ({ query: route.query.token }) }, {
        path: '*',
        redirect: "/"
    }]
}));

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(43)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(18),
  /* template */
  __webpack_require__(74),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5cb747e9",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(72),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-47ab88aa",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(42)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(73),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-548a698d",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(45)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(17),
  /* template */
  __webpack_require__(76),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_vue__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popup_stations_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_popup_stations_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_popup_stations_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popup_users_vue__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_popup_users_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_popup_users_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popup_delete_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_popup_delete_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_popup_delete_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popup_clients_vue__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_popup_clients_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_popup_clients_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notifications_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_notifications_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_notifications_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_settings_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_settings_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_logs_vue__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_logs_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_logs_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_help_vue__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_help_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_help_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//













/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        PopupClients: __WEBPACK_IMPORTED_MODULE_5__components_popup_clients_vue___default.a,
        HeaderMain: __WEBPACK_IMPORTED_MODULE_1__components_header_vue___default.a, PopupStations: __WEBPACK_IMPORTED_MODULE_2__components_popup_stations_vue___default.a, PopupUsers: __WEBPACK_IMPORTED_MODULE_3__components_popup_users_vue___default.a, PopupDelete: __WEBPACK_IMPORTED_MODULE_4__components_popup_delete_vue___default.a, Notifications: __WEBPACK_IMPORTED_MODULE_6__components_notifications_vue___default.a, Logs: __WEBPACK_IMPORTED_MODULE_8__components_logs_vue___default.a, Settings: __WEBPACK_IMPORTED_MODULE_7__components_settings_vue___default.a, Help: __WEBPACK_IMPORTED_MODULE_9__components_help_vue___default.a
    },

    name: 'app',
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    data() {
        return {
            title: 'Tetra',

            //                base_url: 'http://damm.wireless.no:80/',
            base_url:  true ? '' : 'http://damm.wireless.no:80/',
            admin: false,
            interval: false,
            modalStations: false,
            reloadClients: false,
            nav_bar: false,
            modalUsers: false,
            modalDelete: false,
            modalClients: false,
            modalSettings: false,
            modalLogs: false,
            modalHelp: false,
            modalNotifications: false,
            showNotifications: false,
            success: false,
            error: false,
            words: {},
            words_delete: {},
            event: '',
            logs_id: null,
            currentUser: {},
            currentStation: {}

        };
    },
    mounted() {

        setTimeout(() => {
            this.$refs.topProgress.done();
        }, 2000);
    },
    methods: {
        closeModals() {
            this.modalUsers = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalSettings = false;
            this.modalLogs = false;

            this.modalStations = false;
        },

        UNAUTHORIZED(status) {
            if (status == 401) {
                this.log_out();
            }
        },
        log_out() {
            console.log('logout');
            this.$cookies.set("token", '');
            this.modalNotifications = false;
            this.modalSettings = false;

            this.$cookies.remove("token");
            this.$cookies.remove("admin");

            this.nav_bar = false;
            this.admin = false;
            this.error = false;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/login');
        },
        CreateStations() {
            this.modalUsers = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalSettings = false;
            this.modalLogs = false;

            this.modalStations = true;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/stations');

            this.words = {
                'captions': 'Add node',
                create_btn: true,
                updata_btn: false
            };
        },
        CreateUsers() {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalLogs = false;
            this.modalSettings = false;

            this.modalUsers = true;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/users');

            this.words = {
                'captions': 'Add user',
                create: true,
                updata: false

            };
        },
        openLogs(id) {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalLogs = true;
            this.modalSettings = false;
            this.logs_id = id;
            this.modalUsers = false;
        }, openHelp() {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalLogs = false;
            this.modalSettings = false;
            this.modalUsers = false;
            this.modalHelp = true;
        },
        openSettings() {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalClients = false;
            this.modalNotifications = false;
            this.modalLogs = false;
            this.modalSettings = true;

            this.modalUsers = false;
        },
        openNotifications() {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalLogs = false;
            this.modalNotifications = true;
            this.modalSettings = false;

            this.modalUsers = false;
            this.modalClients = false;
            //                router.push('/users');

            this.words = {
                'captions': 'Create network',
                create: true,
                updata: false

            };
        },
        CreateClients() {
            this.modalStations = false;
            this.modalDelete = false;
            this.modalLogs = false;
            this.modalNotifications = false;
            this.modalSettings = false;

            this.modalUsers = false;
            this.modalClients = true;
            //                router.push('/users');

            this.words = {
                'captions': 'Create network',
                create: true,
                updata: false

            };
        }

    },
    created() {
        this.nav_bar = !!this.$cookies.get('token');
        this.admin = !!this.$cookies.get('admin');
    }

});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pointerScroll__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixins_pointerScroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mixins_pointerScroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_typeAheadPointer__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixins_typeAheadPointer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mixins_typeAheadPointer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ajax__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mixins_ajax___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mixins_ajax__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
    mixins: [__WEBPACK_IMPORTED_MODULE_0__mixins_pointerScroll___default.a, __WEBPACK_IMPORTED_MODULE_1__mixins_typeAheadPointer___default.a, __WEBPACK_IMPORTED_MODULE_2__mixins_ajax___default.a],

    props: {
        option: {
            index: ''
        },
        /**
         * Contains the currently selected value. Very similar to a
         * `value` attribute on an <input>. You can listen for changes
         * using 'change' event using v-on
         * @type {Object||String||null}
         */
        value: {
            default: null
        },

        /**
         * An array of strings or objects to be used as dropdown choices.
         * If you are using an array of objects, vue-select will look for
         * a `label` key (ex. [{label: 'This is Foo', value: 'foo'}]). A
         * custom label key can be set with the `label` prop.
         * @type {Array}
         */
        options: {
            type: Array,
            default() {
                return [];
            }
        },

        /**
         * Disable the entire component.
         * @type {Boolean}
         */
        disabled: {
            type: Boolean,
            default: false
        },

        /**
         * Sets the max-height property on the dropdown list.
         * @deprecated
         * @type {String}
         */
        maxHeight: {
            type: String,
            default: '400px'
        },

        /**
         * Enable/disable filtering the options.
         * @type {Boolean}
         */
        searchable: {
            type: Boolean,
            default: true
        },

        /**
         * Equivalent to the `multiple` attribute on a `<select>` input.
         * @type {Boolean}
         */
        multiple: {
            type: Boolean,
            default: false
        },

        /**
         * Equivalent to the `placeholder` attribute on an `<input>`.
         * @type {String}
         */
        placeholder: {
            type: String,
            default: ''
        },

        /**
         * Sets a Vue transition property on the `.dropdown-menu`. vue-select
         * does not include CSS for transitions, you'll need to add them yourself.
         * @type {String}
         */
        transition: {
            type: String,
            default: 'fade'
        },

        /**
         * Enables/disables clearing the search text when an option is selected.
         * @type {Boolean}
         */
        clearSearchOnSelect: {
            type: Boolean,
            default: true
        },

        /**
         * Close a dropdown when an option is chosen. Set to false to keep the dropdown
         * open (useful when combined with multi-select, for example)
         * @type {Boolean}
         */
        closeOnSelect: {
            type: Boolean,
            default: true
        },

        /**
         * Tells vue-select what key to use when generating option
         * labels when each `option` is an object.
         * @type {String}
         */
        id: {
            type: String,
            default: 'id'
        },
        label: {
            type: String,
            default: 'label'
        },
        label2: {
            type: String,
            default: 'label2'
        },

        /**
         * Callback to generate the label text. If {option}
         * is an object, returns option[this.label] by default.
         * @type {Function}
         * @param  {Object || String} option
         * @return {String}
         */

        getOptionLabel: {
            type: Function,
            default(option) {
                if (typeof option === 'object') {
                    if (this.label && option[this.label]) {
                        return option[this.label];
                    }
                }
                return option;
            }
        },
        getOptionLabel2: {
            type: Function,
            default(option) {
                if (typeof option === 'object') {
                    if (this.label2 && option[this.label2]) {
                        return option[this.label2];
                    }
                }
                return option;
            }
        },

        /**
         * An optional callback function that is called each time the selected
         * value(s) change. When integrating with Vuex, use this callback to trigger
         * an action, rather than using :value.sync to retreive the selected value.
         * @type {Function}
         * @param {Object || String} val
         */
        onChange: {
            type: Function,
            default: function (val) {
                this.$emit('input', val);
            }
        },

        /**
         * Enable/disable creating options from searchInput.
         * @type {Boolean}
         */
        taggable: {
            type: Boolean,
            default: false
        },

        /**
         * Set the tabindex for the input field.
         * @type {Number}
         */
        tabindex: {
            type: Number,
            default: null
        },

        /**
         * When true, newly created tags will be added to
         * the options list.
         * @type {Boolean}
         */
        pushTags: {
            type: Boolean,
            default: false
        },

        /**
         * When true, existing options will be filtered
         * by the search text. Should not be used in conjunction
         * with taggable.
         * @type {Boolean}
         */
        filterable: {
            type: Boolean,
            default: true
        },

        /**
         * User defined function for adding Options
         * @type {Function}
         */
        createOption: {
            type: Function,
            default(newOption) {
                if (typeof this.mutableOptions[0] === 'object') {
                    newOption = { [this.id]: newOption };
                }
                this.$emit('option:created', newOption);
                return newOption;
            }
        },
        //      createOption: {
        //        type: Function,
        //        default(newOption) {
        //          if (typeof this.mutableOptions[0] === 'object') {
        //            newOption = {[this.label]: newOption}
        //          }
        //          this.$emit('option:created', newOption)
        //          return newOption
        //        }
        //      },

        /**
         * When false, updating the options will not reset the select value
         * @type {Boolean}
         */
        resetOnOptionsChange: {
            type: Boolean,
            default: false
        },

        /**
         * Disable the dropdown entirely.
         * @type {Boolean}
         */
        noDrop: {
            type: Boolean,
            default: false
        },

        /**
         * Sets the id of the input element.
         * @type {String}
         * @default {null}
         */
        inputId: {
            type: String
        },

        /**
         * Sets RTL support. Accepts 'ltr', 'rtl', 'auto'.
         * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/dir
         * @type {String}
         * @default 'auto'
         */
        dir: {
            type: String,
            default: 'auto'
        }
    },

    data() {
        return {
            search: '',
            open: false,
            mutableValue: null,
            mutableOptions: []
        };
    },

    watch: {
        /**
         * When the value prop changes, update
         * the internal mutableValue.
         * @param  {mixed} val
         * @return {void}
         */
        value(val) {
            this.mutableValue = val;
        },

        /**
         * Maybe run the onChange callback.
         * @param  {string|object} val
         * @param  {string|object} old
         * @return {void}
         */
        mutableValue(val, old) {
            if (this.multiple) {
                this.onChange ? this.onChange(val) : null;
            } else {
                this.onChange && val !== old ? this.onChange(val) : null;
            }
        },

        /**
         * When options change, update
         * the internal mutableOptions.
         * @param  {array} val
         * @return {void}
         */
        options(val) {
            this.mutableOptions = val;
        },

        /**
         * Maybe reset the mutableValue
         * when mutableOptions change.
         * @return {[type]} [description]
         */
        mutableOptions() {
            if (!this.taggable && this.resetOnOptionsChange) {
                this.mutableValue = this.multiple ? [] : null;
            }
        },

        /**
         * Always reset the mutableValue when
         * the multiple prop changes.
         * @param  {Boolean} val
         * @return {void}
         */
        multiple(val) {
            this.mutableValue = val ? [] : null;
        }
    },

    /**
     * Clone props into mutable values,
     * attach any event listeners.
     */
    created() {
        this.mutableValue = this.value;
        this.mutableOptions = this.options.slice(0);
        this.mutableLoading = this.loading;

        this.$on('option:created', this.maybePushTag);
    },

    methods: {

        /**
         * Select a given option.
         * @param  {Object|String} option
         * @return {void}
         */
        select(option) {
            if (this.isOptionSelected(option)) {
                this.deselect(option);
            } else {
                if (this.taggable && !this.optionExists(option)) {
                    option = this.createOption(option);
                }

                if (this.multiple && !this.mutableValue) {
                    this.mutableValue = [option];
                } else if (this.multiple) {
                    this.mutableValue.push(option);
                } else {
                    this.mutableValue = option;
                }
            }

            this.onAfterSelect(option);
        },

        /**
         * De-select a given option.
         * @param  {Object|String} option
         * @return {void}
         */
        deselect(option) {
            if (this.multiple) {
                let ref = -1;
                this.mutableValue.forEach(val => {
                    if (val === option || typeof val === 'object' && val[this.label] === option[this.label]) {
                        ref = val;
                    }
                });
                var index = this.mutableValue.indexOf(ref);
                if (this.mutableValue.length > 1) {
                    this.mutableValue.splice(index, 1);
                } else {
                    this.mutableValue = null;
                }
            } else {
                this.mutableValue = null;
            }
        },

        /**
         * Clears the currently selected value(s)
         * @return {void}
         */
        clearSelection() {
            this.mutableValue = this.multiple ? [] : null;
        },

        /**
         * Called from this.select after each selection.
         * @param  {Object|String} option
         * @return {void}
         */
        onAfterSelect(option) {
            if (this.closeOnSelect) {
                this.open = !this.open;
                this.$refs.search.blur();
            }

            if (this.clearSearchOnSelect) {
                this.search = '';
            }
        },

        /**
         * Toggle the visibility of the dropdown menu.
         * @param  {Event} e
         * @return {void}
         */
        toggleDropdown(e) {
            if (e.target === this.$refs.openIndicator || e.target === this.$refs.search || e.target === this.$refs.toggle || e.target === this.$el) {
                if (this.open) {
                    this.$refs.search.blur(); // dropdown will close on blur
                } else {
                    if (!this.disabled) {
                        this.open = true;
                        this.$refs.search.focus();
                    }
                }
            }
        },

        /**
         * Check if the given option is currently selected.
         * @param  {Object|String}  option
         * @return {Boolean}        True when selected | False otherwise
         */

        isOptionSelected(option) {
            if (this.multiple && this.mutableValue) {
                let selected = false;
                this.mutableValue.forEach(opt => {
                    if (typeof opt === 'object' && opt[this.id] === option[this.id]) {
                        selected = true;
                    } else if (typeof opt === 'object' && opt[this.id] === option) {
                        selected = true;
                    } else if (opt === option) {
                        selected = true;
                    }
                });
                return selected;
            }

            return this.mutableValue === option;
        },

        //      isOptionSelected(option) {
        //        if (this.multiple && this.mutableValue) {
        //          let selected = false
        //          this.mutableValue.forEach(opt => {
        //            if (typeof opt === 'object' && opt[this.label] === option[this.label]) {
        //              selected = true
        //            } else if (typeof opt === 'object' && opt[this.label] === option) {
        //              selected = true
        //            }
        //            else if (opt === option) {
        //              selected = true
        //            }
        //          })
        //          return selected
        //        }
        //
        //        return this.mutableValue === option
        //      },

        /**
         * If there is any text in the search input, remove it.
         * Otherwise, blur the search input to close the dropdown.
         * @return {void}
         */
        onEscape() {
            if (!this.search.length) {
                this.$refs.search.blur();
            } else {
                this.search = '';
            }
        },

        /**
         * Close the dropdown on blur.
         * @emits  {search:blur}
         * @return {void}
         */
        onSearchBlur() {
            if (this.clearSearchOnBlur) {
                this.search = '';
            }
            this.open = false;
            this.$emit('search:blur');
        },

        /**
         * Open the dropdown on focus.
         * @emits  {search:focus}
         * @return {void}
         */
        onSearchFocus() {
            this.open = true;
            this.$emit('search:focus');
        },

        /**
         * Delete the value on Delete keypress when there is no
         * text in the search input, & there's tags to delete
         * @return {this.value}
         */
        maybeDeleteValue() {
            if (!this.$refs.search.value.length && this.mutableValue) {
                return this.multiple ? this.mutableValue.pop() : this.mutableValue = null;
            }
        },

        /**
         * Determine if an option exists
         * within this.mutableOptions array.
         *
         * @param  {Object || String} option
         * @return {boolean}
         */

        optionExists(option) {
            let exists = false;

            this.mutableOptions.forEach(opt => {
                if (typeof opt === 'object' && opt[this.id] === option) {
                    exists = true;
                } else if (opt === option) {
                    exists = true;
                }
            });

            return exists;
        },
        //      optionExists(option) {
        //        let exists = false
        //
        //        this.mutableOptions.forEach(opt => {
        //          if (typeof opt === 'object' && opt[this.label] === option) {
        //            exists = true
        //          } else if (opt === option) {
        //            exists = true
        //          }
        //        })
        //
        //        return exists
        //      },

        /**
         * If push-tags is true, push the
         * given option to mutableOptions.
         *
         * @param  {Object || String} option
         * @return {void}
         */
        maybePushTag(option) {
            if (this.pushTags) {
                this.mutableOptions.push(option);
            }
        }
    },

    computed: {

        /**
         * Classes to be output on .dropdown
         * @return {Object}
         */
        dropdownClasses() {
            return {
                open: this.dropdownOpen,
                single: !this.multiple,
                searching: this.searching,
                searchable: this.searchable,
                unsearchable: !this.searchable,
                loading: this.mutableLoading,
                rtl: this.dir === 'rtl',
                disabled: this.disabled
            };
        },

        /**
         * If search text should clear on blur
         * @return {Boolean} True when single and clearSearchOnSelect
         */
        clearSearchOnBlur() {
            return this.clearSearchOnSelect && !this.multiple;
        },

        /**
         * Return the current state of the
         * search input
         * @return {Boolean} True if non empty value
         */
        searching() {
            return !!this.search;
        },

        /**
         * Return the current state of the
         * dropdown menu.
         * @return {Boolean} True if open
         */
        dropdownOpen() {
            return this.noDrop ? false : this.open && !this.mutableLoading;
        },

        /**
         * Return the placeholder string if it's set
         * & there is no value selected.
         * @return {String} Placeholder text
         */
        searchPlaceholder() {
            if (this.isValueEmpty && this.placeholder) {
                return this.placeholder;
            }
        },

        /**
         * The currently displayed options, filtered
         * by the search elements value. If tagging
         * true, the search text will be prepended
         * if it doesn't already exist.
         *
         * @return {array}
         */
        filteredOptions() {
            let options = this.mutableOptions.filter(option => {
                if (typeof option === 'object' && option.hasOwnProperty(this.label2)) {
                    return option[this.label2].toLowerCase().indexOf(this.search.toLowerCase()) > -1;
                } else if (typeof option === 'object' && !option.hasOwnProperty(this.label2)) {
                    return console.warn(`[vue-select warn]: Label key "option.${this.label2}" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels`);
                }
                return option.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
            });
            if (this.taggable && this.search.length && !this.optionExists(this.search)) {
                options.unshift(this.search);
            }
            return options;
        },
        //            filteredOptions() {
        //                let options = this.mutableOptions.filter((option) => {
        //                    console.log(option.name)
        //                    console.log(this.label)
        //                    if (option.name) {
        //                        if (typeof option === 'object' && option.hasOwnProperty(this.label) && typeof option === 'object' && option.hasOwnProperty(this.label2)) {
        //                            return (option[this.label].toLowerCase().indexOf(this.search.toLowerCase()) > -1 || option[this.label2].toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        //                        } else if (typeof option === 'object' && !option.hasOwnProperty(this.label) && !option.hasOwnProperty(this.label2)) {
        //                            return console.warn(`[vue-select warn]: id key "option.${this.label}" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels`)
        //                        }
        //
        //                        return option.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        //                    }
        //                    else{
        //                        if (typeof option === 'object'  && option.hasOwnProperty(this.label2)) {
        //                            return ( option[this.label2].toLowerCase().indexOf(this.search.toLowerCase()) > -1)
        //                        } else if (typeof option === 'object'  && !option.hasOwnProperty(this.label2)) {
        //                            return console.warn(`[vue-select warn]: id key "option.${this.label}" does not exist in options object.\nhttp://sagalbot.github.io/vue-select/#ex-labels`)
        //                        }
        //
        //                        return option.toLowerCase().indexOf(this.search.toLowerCase()) < -1
        //                    }
        //                })
        //                if (this.taggable && this.search.length && !this.optionExists(this.search)) {
        //                    options.unshift(this.search)
        //                }
        //                return options
        //
        //            },

        /**
         * Check if there aren't any options selected.
         * @return {Boolean}
         */
        isValueEmpty() {
            if (this.mutableValue) {
                if (typeof this.mutableValue === 'object') {
                    return !Object.keys(this.mutableValue).length;
                }
                return !this.mutableValue.length;
            }

            return true;
        },

        /**
         * Return the current value in array format.
         * @return {Array}
         */
        valueAsArray() {
            if (this.multiple) {
                return this.mutableValue;
            } else if (this.mutableValue) {
                return [this.mutableValue];
            }

            return [];
        },

        /**
         * Determines if the clear button should be displayed.
         * @return {Boolean}
         */
        showClearButton() {
            return !this.multiple && !this.open && this.mutableValue != null;
        }
    }

});

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'Change-password',
    data() {
        return {
            validate_confirm_password: false,
            required_field: false,
            required_pass: false,
            no_validate_tokint: false,
            password_form: {},
            token: '',
            login: '',
            error_login: '',
            password: '',
            confirm_password: '',
            activeClass: ''
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        Change_password() {
            if (this.password === '') {
                this.required_pass = true;
                return;
            }
            if (this.confirm_password === '') {
                this.validate_confirm_password = true;
                return;
            }
            this.$parent.$refs.topProgress.start();
            this.password_form.password = this.password;
            this.password_form.confirm_password = this.confirm_password;
            this.$http.put(this.$parent.base_url + 'change_password', this.password_form, { headers: { 'Authorization': 'Bearer ' + this.token } }).then(function (response) {
                this.$parent.log_out();
                this.nav_bar = false;
                this.admin = false;
                this.error = false;
                this.$cookies.set("token", '');
                this.$cookies.set("admin", '');
                __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/login');

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error);
                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }
    }, watch: {

        confirm_password: function () {
            this.error_login = '';

            if (this.confirm_password) {
                this.validate_confirm_password = false;
                if (this.confirm_password != this.password) {
                    this.validate_confirm_password = true;
                }
            } else {
                this.validate_confirm_password = false;
            }
        }, password: function () {
            this.error_login = '';

            if (this.password) {
                if (this.confirm_password) {
                    this.validate_confirm_password = false;
                    if (this.confirm_password != this.password) {
                        this.validate_confirm_password = true;
                    }
                } else {

                    this.validate_confirm_password = false;
                }
                this.required_pass = false;
            } else {
                this.required_pass = true;
            }
        }
    }, created() {
        this.$parent.interval = false;
        if (this.$route.query.token == undefined) {

            this.token = this.$cookies.get("token");
            if (!this.$cookies.get("token")) {
                __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/login');
            }
        } else {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'check_token', { headers: { 'Authorization': 'Bearer ' + this.$route.query.token } }).then(function (response) {
                if (response.body.result) {
                    this.$cookies.set("token", '');
                    this.$cookies.remove("token");
                    this.$cookies.remove("admin");
                    this.$parent.nav_bar = false;
                    this.$parent.admin = false;
                    this.$parent.error = false;
                    this.token = this.$route.query.token;
                }
                this.no_validate_tokint = !response.body.result;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.no_validate_tokint = true;
                this.$parent.$refs.topProgress.fail();
            });
        }
        this.$parent.title = 'Change password';
    }

});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'main-fonts',

    data() {
        return {
            fonts: '3d_rotation e84d ' + 'ac_unit eb3b ' + 'access_alarm e190 ' + 'access_alarms e191 ' + 'access_time e192 ' + 'accessibility e84e ' + 'accessible e914 ' + 'account_balance e84f ' + 'account_balance_wallet e850 ' + 'account_box e851 ' + 'account_circle e853 ' + 'adb e60e ' + 'add e145 ' + 'add_a_photo e439 ' + 'add_alarm e193 ' + 'add_alert e003 ' + 'add_box e146 ' + 'add_circle e147 ' + 'add_circle_outline e148 ' + 'add_location e567 ' + 'add_shopping_cart e854 ' + 'add_to_photos e39d ' + 'add_to_queue e05c ' + 'adjust e39e ' + 'airline_seat_flat e630 ' + 'airline_seat_flat_angled e631 ' + 'airline_seat_individual_suite e632 ' + 'airline_seat_legroom_extra e633 ' + 'airline_seat_legroom_normal e634 ' + 'airline_seat_legroom_reduced e635 ' + 'airline_seat_recline_extra e636 ' + 'airline_seat_recline_normal e637 ' + 'airplanemode_active e195 ' + 'airplanemode_inactive e194 ' + 'airplay e055 ' + 'airport_shuttle eb3c ' + 'alarm e855 ' + 'alarm_add e856 ' + 'alarm_off e857 ' + 'alarm_on e858 ' + 'album e019 ' + 'all_inclusive eb3d ' + 'all_out e90b ' + 'android e859 ' + 'announcement e85a ' + 'apps e5c3 ' + 'archive e149 ' + 'arrow_back e5c4 ' + 'arrow_downward e5db ' + 'arrow_drop_down e5c5 ' + 'arrow_drop_down_circle e5c6 ' + 'arrow_drop_up e5c7 ' + 'arrow_forward e5c8 ' + 'arrow_upward e5d8 ' + 'art_track e060 ' + 'aspect_ratio e85b ' + 'assessment e85c ' + 'assignment e85d ' + 'assignment_ind e85e ' + 'assignment_late e85f ' + 'assignment_return e860 ' + 'assignment_returned e861 ' + 'assignment_turned_in e862 ' + 'assistant e39f ' + 'assistant_photo e3a0 ' + 'attach_file e226 ' + 'attach_money e227 ' + 'attachment e2bc ' + 'audiotrack e3a1 ' + 'autorenew e863 ' + 'av_timer e01b ' + 'backspace e14a ' + 'backup e864 ' + 'battery_alert e19c ' + 'battery_charging_full e1a3 ' + 'battery_full e1a4 ' + 'battery_std e1a5 ' + 'battery_unknown e1a6 ' + 'beach_access eb3e ' + 'beenhere e52d ' + 'block e14b ' + 'bluetooth e1a7 ' + 'bluetooth_audio e60f ' + 'bluetooth_connected e1a8 ' + 'bluetooth_disabled e1a9 ' + 'bluetooth_searching e1aa ' + 'blur_circular e3a2 ' + 'blur_linear e3a3 ' + 'blur_off e3a4 ' + 'blur_on e3a5 ' + 'book e865 ' + 'bookmark e866 ' + 'bookmark_border e867 ' + 'border_all e228 ' + 'border_bottom e229 ' + 'border_clear e22a ' + 'border_color e22b ' + 'border_horizontal e22c ' + 'border_inner e22d ' + 'border_left e22e ' + 'border_outer e22f ' + 'border_right e230 ' + 'border_style e231 ' + 'border_top e232 ' + 'border_vertical e233 ' + 'branding_watermark e06b ' + 'brightness_1 e3a6 ' + 'brightness_2 e3a7 ' + 'brightness_3 e3a8 ' + 'brightness_4 e3a9 ' + 'brightness_5 e3aa ' + 'brightness_6 e3ab ' + 'brightness_7 e3ac ' + 'brightness_auto e1ab ' + 'brightness_high e1ac ' + 'brightness_low e1ad ' + 'brightness_medium e1ae ' + 'broken_image e3ad ' + 'brush e3ae ' + 'bubble_chart e6dd ' + 'bug_report e868 ' + 'build e869 ' + 'burst_mode e43c ' + 'business e0af ' + 'business_center eb3f ' + 'cached e86a ' + 'cake e7e9 ' + 'call e0b0 ' + 'call_end e0b1 ' + 'call_made e0b2 ' + 'call_merge e0b3 ' + 'call_missed e0b4 ' + 'call_missed_outgoing e0e4 ' + 'call_received e0b5 ' + 'call_split e0b6 ' + 'call_to_action e06c ' + 'camera e3af ' + 'camera_alt e3b0 ' + 'camera_enhance e8fc ' + 'camera_front e3b1 ' + 'camera_rear e3b2 ' + 'camera_roll e3b3 ' + 'cancel e5c9 ' + 'card_giftcard e8f6 ' + 'card_membership e8f7 ' + 'card_travel e8f8 ' + 'casino eb40 ' + 'cast e307 ' + 'cast_connected e308 ' + 'center_focus_strong e3b4 ' + 'center_focus_weak e3b5 ' + 'change_history e86b ' + 'chat e0b7 ' + 'chat_bubble e0ca ' + 'chat_bubble_outline e0cb ' + 'check e5ca ' + 'check_box e834 ' + 'check_box_outline_blank e835 ' + 'check_circle e86c ' + 'chevron_left e5cb ' + 'chevron_right e5cc ' + 'child_care eb41 ' + 'child_friendly eb42 ' + 'chrome_reader_mode e86d ' + 'class e86e ' + 'clear e14c ' + 'clear_all e0b8 ' + 'close e5cd ' + 'closed_caption e01c ' + 'cloud e2bd ' + 'cloud_circle e2be ' + 'cloud_done e2bf ' + 'cloud_download e2c0 ' + 'cloud_off e2c1 ' + 'cloud_queue e2c2 ' + 'cloud_upload e2c3 ' + 'code e86f ' + 'collections e3b6 ' + 'collections_bookmark e431 ' + 'color_lens e3b7 ' + 'colorize e3b8 ' + 'comment e0b9 ' + 'compare e3b9 ' + 'compare_arrows e915 ' + 'computer e30a ' + 'confirmation_number e638 ' + 'contact_mail e0d0 ' + 'contact_phone e0cf ' + 'contacts e0ba ' + 'content_copy e14d ' + 'content_cut e14e ' + 'content_paste e14f ' + 'control_point e3ba ' + 'control_point_duplicate e3bb ' + 'copyright e90c ' + 'create e150 ' + 'create_new_folder e2cc ' + 'credit_card e870 ' + 'crop e3be ' + 'crop_16_9 e3bc ' + 'crop_3_2 e3bd ' + 'crop_5_4 e3bf ' + 'crop_7_5 e3c0 ' + 'crop_din e3c1 ' + 'crop_free e3c2 ' + 'crop_landscape e3c3 ' + 'crop_original e3c4 ' + 'crop_portrait e3c5 ' + 'crop_rotate e437 ' + 'crop_square e3c6 ' + 'dashboard e871 ' + 'data_usage e1af ' + 'date_range e916 ' + 'dehaze e3c7 ' + 'delete e872 ' + 'delete_forever e92b ' + 'delete_sweep e16c ' + 'description e873 ' + 'desktop_mac e30b ' + 'desktop_windows e30c ' + 'details e3c8 ' + 'developer_board e30d ' + 'developer_mode e1b0 ' + 'device_hub e335 ' + 'devices e1b1 ' + 'devices_other e337 ' + 'dialer_sip e0bb ' + 'dialpad e0bc ' + 'directions e52e ' + 'directions_bike e52f ' + 'directions_boat e532 ' + 'directions_bus e530 ' + 'directions_car e531 ' + 'directions_railway e534 ' + 'directions_run e566 ' + 'directions_subway e533 ' + 'directions_transit e535 ' + 'directions_walk e536 ' + 'disc_full e610 ' + 'dns e875 ' + 'do_not_disturb e612 ' + 'do_not_disturb_alt e611 ' + 'do_not_disturb_off e643 ' + 'do_not_disturb_on e644 ' + 'dock e30e ' + 'domain e7ee ' + 'done e876 ' + 'done_all e877 ' + 'donut_large e917 ' + 'donut_small e918 ' + 'drafts e151 ' + 'drag_handle e25d ' + 'drive_eta e613 ' + 'dvr e1b2 ' + 'edit e3c9 ' + 'edit_location e568 ' + 'eject e8fb ' + 'email e0be ' + 'enhanced_encryption e63f ' + 'equalizer e01d ' + 'error e000 ' + 'error_outline e001 ' + 'euro_symbol e926 ' + 'ev_station e56d ' + 'event e878 ' + 'event_available e614 ' + 'event_busy e615 ' + 'event_note e616 ' + 'event_seat e903 ' + 'exit_to_app e879 ' + 'expand_less e5ce ' + 'expand_more e5cf ' + 'explicit e01e ' + 'explore e87a ' + 'exposure e3ca ' + 'exposure_neg_1 e3cb ' + 'exposure_neg_2 e3cc ' + 'exposure_plus_1 e3cd ' + 'exposure_plus_2 e3ce ' + 'exposure_zero e3cf ' + 'extension e87b ' + 'face e87c ' + 'fast_forward e01f ' + 'fast_rewind e020 ' + 'favorite e87d ' + 'favorite_border e87e ' + 'featured_play_list e06d ' + 'featured_video e06e ' + 'feedback e87f ' + 'fiber_dvr e05d ' + 'fiber_manual_record e061 ' + 'fiber_new e05e ' + 'fiber_pin e06a ' + 'fiber_smart_record e062 ' + 'file_download e2c4 ' + 'file_upload e2c6 ' + 'filter e3d3 ' + 'filter_1 e3d0 ' + 'filter_2 e3d1 ' + 'filter_3 e3d2 ' + 'filter_4 e3d4 ' + 'filter_5 e3d5 ' + 'filter_6 e3d6 ' + 'filter_7 e3d7 ' + 'filter_8 e3d8 ' + 'filter_9 e3d9 ' + 'filter_9_plus e3da ' + 'filter_b_and_w e3db ' + 'filter_center_focus e3dc ' + 'filter_drama e3dd ' + 'filter_frames e3de ' + 'filter_hdr e3df ' + 'filter_list e152 ' + 'filter_none e3e0 ' + 'filter_tilt_shift e3e2 ' + 'filter_vintage e3e3 ' + 'find_in_page e880 ' + 'find_replace e881 ' + 'fingerprint e90d ' + 'first_page e5dc ' + 'fitness_center eb43 ' + 'flag e153 ' + 'flare e3e4 ' + 'flash_auto e3e5 ' + 'flash_off e3e6 ' + 'flash_on e3e7 ' + 'flight e539 ' + 'flight_land e904 ' + 'flight_takeoff e905 ' + 'flip e3e8 ' + 'flip_to_back e882 ' + 'flip_to_front e883 ' + 'folder e2c7 ' + 'folder_open e2c8 ' + 'folder_shared e2c9 ' + 'folder_special e617 ' + 'font_download e167 ' + 'format_align_center e234 ' + 'format_align_justify e235 ' + 'format_align_left e236 ' + 'format_align_right e237 ' + 'format_bold e238 ' + 'format_clear e239 ' + 'format_color_fill e23a ' + 'format_color_reset e23b ' + 'format_color_text e23c ' + 'format_indent_decrease e23d ' + 'format_indent_increase e23e ' + 'format_italic e23f ' + 'format_line_spacing e240 ' + 'format_list_bulleted e241 ' + 'format_list_numbered e242 ' + 'format_paint e243 ' + 'format_quote e244 ' + 'format_shapes e25e ' + 'format_size e245 ' + 'format_strikethrough e246 ' + 'format_textdirection_l_to_r e247 ' + 'format_textdirection_r_to_l e248 ' + 'format_underlined e249 ' + 'forum e0bf ' + 'forward e154 ' + 'forward_10 e056 ' + 'forward_30 e057 ' + 'forward_5 e058 ' + 'free_breakfast eb44 ' + 'fullscreen e5d0 ' + 'fullscreen_exit e5d1 ' + 'functions e24a ' + 'g_translate e927 ' + 'gamepad e30f ' + 'games e021 ' + 'gavel e90e ' + 'gesture e155 ' + 'get_app e884 ' + 'gif e908 ' + 'golf_course eb45 ' + 'gps_fixed e1b3 ' + 'gps_not_fixed e1b4 ' + 'gps_off e1b5 ' + 'grade e885 ' + 'gradient e3e9 ' + 'grain e3ea ' + 'graphic_eq e1b8 ' + 'grid_off e3eb ' + 'grid_on e3ec ' + 'group e7ef ' + 'group_add e7f0 ' + 'group_work e886 ' + 'hd e052 ' + 'hdr_off e3ed ' + 'hdr_on e3ee ' + 'hdr_strong e3f1 ' + 'hdr_weak e3f2 ' + 'headset e310 ' + 'headset_mic e311 ' + 'healing e3f3 ' + 'hearing e023 ' + 'help e887 ' + 'help_outline e8fd ' + 'high_quality e024 ' + 'highlight e25f ' + 'highlight_off e888 ' + 'history e889 ' + 'home e88a ' + 'hot_tub eb46 ' + 'hotel e53a ' + 'hourglass_empty e88b ' + 'hourglass_full e88c ' + 'http e902 ' + 'https e88d ' + 'image e3f4 ' + 'image_aspect_ratio e3f5 ' + 'import_contacts e0e0 ' + 'import_export e0c3 ' + 'important_devices e912 ' + 'inbox e156 ' + 'indeterminate_check_box e909 ' + 'info e88e ' + 'info_outline e88f ' + 'input e890 ' + 'insert_chart e24b ' + 'insert_comment e24c ' + 'insert_drive_file e24d ' + 'insert_emoticon e24e ' + 'insert_invitation e24f ' + 'insert_link e250 ' + 'insert_photo e251 ' + 'invert_colors e891 ' + 'invert_colors_off e0c4 ' + 'iso e3f6 ' + 'keyboard e312 ' + 'keyboard_arrow_down e313 ' + 'keyboard_arrow_left e314 ' + 'keyboard_arrow_right e315 ' + 'keyboard_arrow_up e316 ' + 'keyboard_backspace e317 ' + 'keyboard_capslock e318 ' + 'keyboard_hide e31a ' + 'keyboard_return e31b ' + 'keyboard_tab e31c ' + 'keyboard_voice e31d ' + 'kitchen eb47 ' + 'label e892 ' + 'label_outline e893 ' + 'landscape e3f7 ' + 'language e894 ' + 'laptop e31e ' + 'laptop_chromebook e31f ' + 'laptop_mac e320 ' + 'laptop_windows e321 ' + 'last_page e5dd ' + 'launch e895 ' + 'layers e53b ' + 'layers_clear e53c ' + 'leak_add e3f8 ' + 'leak_remove e3f9 ' + 'lens e3fa ' + 'library_add e02e ' + 'library_books e02f ' + 'library_music e030 ' + 'lightbulb_outline e90f ' + 'line_style e919 ' + 'line_weight e91a ' + 'linear_scale e260 ' + 'link e157 ' + 'linked_camera e438 ' + 'list e896 ' + 'live_help e0c6 ' + 'live_tv e639 ' + 'local_activity e53f ' + 'local_airport e53d ' + 'local_atm e53e ' + 'local_bar e540 ' + 'local_cafe e541 ' + 'local_car_wash e542 ' + 'local_convenience_store e543 ' + 'local_dining e556 ' + 'local_drink e544 ' + 'local_florist e545 ' + 'local_gas_station e546 ' + 'local_grocery_store e547 ' + 'local_hospital e548 ' + 'local_hotel e549 ' + 'local_laundry_service e54a ' + 'local_library e54b ' + 'local_mall e54c ' + 'local_movies e54d ' + 'local_offer e54e ' + 'local_parking e54f ' + 'local_pharmacy e550 ' + 'local_phone e551 ' + 'local_pizza e552 ' + 'local_play e553 ' + 'local_post_office e554 ' + 'local_printshop e555 ' + 'local_see e557 ' + 'local_shipping e558 ' + 'local_taxi e559 ' + 'location_city e7f1 ' + 'location_disabled e1b6 ' + 'location_off e0c7 ' + 'location_on e0c8 ' + 'location_searching e1b7 ' + 'lock e897 ' + 'lock_open e898 ' + 'lock_outline e899 ' + 'looks e3fc ' + 'looks_3 e3fb ' + 'looks_4 e3fd ' + 'looks_5 e3fe ' + 'looks_6 e3ff ' + 'looks_one e400 ' + 'looks_two e401 ' + 'loop e028 ' + 'loupe e402 ' + 'low_priority e16d ' + 'loyalty e89a ' + 'mail e158 ' + 'mail_outline e0e1 ' + 'map e55b ' + 'markunread e159 ' + 'markunread_mailbox e89b ' + 'memory e322 ' + 'menu e5d2 ' + 'merge_type e252 ' + 'message e0c9 ' + 'mic e029 ' + 'mic_none e02a ' + 'mic_off e02b ' + 'mms e618 ' + 'mode_comment e253 ' + 'mode_edit e254 ' + 'monetization_on e263 ' + 'money_off e25c ' + 'monochrome_photos e403 ' + 'mood e7f2 ' + 'mood_bad e7f3 ' + 'more e619 ' + 'more_horiz e5d3 ' + 'more_vert e5d4 ' + 'motorcycle e91b ' + 'mouse e323 ' + 'move_to_inbox e168 ' + 'movie e02c ' + 'movie_creation e404 ' + 'movie_filter e43a ' + 'multiline_chart e6df ' + 'music_note e405 ' + 'music_video e063 ' + 'my_location e55c ' + 'nature e406 ' + 'nature_people e407 ' + 'navigate_before e408 ' + 'navigate_next e409 ' + 'navigation e55d ' + 'near_me e569 ' + 'network_cell e1b9 ' + 'network_check e640 ' + 'network_locked e61a ' + 'network_wifi e1ba ' + 'new_releases e031 ' + 'next_week e16a ' + 'nfc e1bb ' + 'no_encryption e641 ' + 'no_sim e0cc ' + 'not_interested e033 ' + 'note e06f ' + 'note_add e89c ' + 'notifications e7f4 ' + 'notifications_active e7f7 ' + 'notifications_none e7f5 ' + 'notifications_off e7f6 ' + 'notifications_paused e7f8 ' + 'offline_pin e90a ' + 'ondemand_video e63a ' + 'opacity e91c ' + 'open_in_browser e89d ' + 'open_in_new e89e ' + 'open_with e89f ' + 'pages e7f9 ' + 'pageview e8a0 ' + 'palette e40a ' + 'pan_tool e925 ' + 'panorama e40b ' + 'panorama_fish_eye e40c ' + 'panorama_horizontal e40d ' + 'panorama_vertical e40e ' + 'panorama_wide_angle e40f ' + 'party_mode e7fa ' + 'pause e034 ' + 'pause_circle_filled e035 ' + 'pause_circle_outline e036 ' + 'payment e8a1 ' + 'people e7fb ' + 'people_outline e7fc ' + 'perm_camera_mic e8a2 ' + 'perm_contact_calendar e8a3 ' + 'perm_data_setting e8a4 ' + 'perm_device_information e8a5 ' + 'perm_identity e8a6 ' + 'perm_media e8a7 ' + 'perm_phone_msg e8a8 ' + 'perm_scan_wifi e8a9 ' + 'person e7fd ' + 'person_add e7fe ' + 'person_outline e7ff ' + 'person_pin e55a ' + 'person_pin_circle e56a ' + 'personal_video e63b ' + 'pets e91d ' + 'phone e0cd ' + 'phone_android e324 ' + 'phone_bluetooth_speaker e61b ' + 'phone_forwarded e61c ' + 'phone_in_talk e61d ' + 'phone_iphone e325 ' + 'phone_locked e61e ' + 'phone_missed e61f ' + 'phone_paused e620 ' + 'phonelink e326 ' + 'phonelink_erase e0db ' + 'phonelink_lock e0dc ' + 'phonelink_off e327 ' + 'phonelink_ring e0dd ' + 'phonelink_setup e0de ' + 'photo e410 ' + 'photo_album e411 ' + 'photo_camera e412 ' + 'photo_filter e43b ' + 'photo_library e413 ' + 'photo_size_select_actual e432 ' + 'photo_size_select_large e433 ' + 'photo_size_select_small e434 ' + 'picture_as_pdf e415 ' + 'picture_in_picture e8aa ' + 'picture_in_picture_alt e911 ' + 'pie_chart e6c4 ' + 'pie_chart_outlined e6c5 ' + 'pin_drop e55e ' + 'place e55f ' + 'play_arrow e037 ' + 'play_circle_filled e038 ' + 'play_circle_outline e039 ' + 'play_for_work e906 ' + 'playlist_add e03b ' + 'playlist_add_check e065 ' + 'playlist_play e05f ' + 'plus_one e800 ' + 'poll e801 ' + 'polymer e8ab ' + 'pool eb48 ' + 'portable_wifi_off e0ce ' + 'portrait e416 ' + 'power e63c ' + 'power_input e336 ' + 'power_settings_new e8ac ' + 'pregnant_woman e91e ' + 'present_to_all e0df ' + 'print e8ad ' + 'priority_high e645 ' + 'public e80b ' + 'publish e255 ' + 'query_builder e8ae ' + 'question_answer e8af ' + 'queue e03c ' + 'queue_music e03d ' + 'queue_play_next e066 ' + 'radio e03e ' + 'radio_button_checked e837 ' + 'radio_button_unchecked e836 ' + 'rate_review e560 ' + 'receipt e8b0 ' + 'recent_actors e03f ' + 'record_voice_over e91f ' + 'redeem e8b1 ' + 'redo e15a ' + 'refresh e5d5 ' + 'remove e15b ' + 'remove_circle e15c ' + 'remove_circle_outline e15d ' + 'remove_from_queue e067 ' + 'remove_red_eye e417 ' + 'remove_shopping_cart e928 ' + 'reorder e8fe ' + 'repeat e040 ' + 'repeat_one e041 ' + 'replay e042 ' + 'replay_10 e059 ' + 'replay_30 e05a ' + 'replay_5 e05b ' + 'reply e15e ' + 'reply_all e15f ' + 'report e160 ' + 'report_problem e8b2 ' + 'restaurant e56c ' + 'restaurant_menu e561 ' + 'restore e8b3 ' + 'restore_page e929 ' + 'ring_volume e0d1 ' + 'room e8b4 ' + 'room_service eb49 ' + 'rotate_90_degrees_ccw e418 ' + 'rotate_left e419 ' + 'rotate_right e41a ' + 'rounded_corner e920 ' + 'router e328 ' + 'rowing e921 ' + 'rss_feed e0e5 ' + 'rv_hookup e642 ' + 'satellite e562 ' + 'save e161 ' + 'scanner e329 ' + 'schedule e8b5 ' + 'school e80c ' + 'screen_lock_landscape e1be ' + 'screen_lock_portrait e1bf ' + 'screen_lock_rotation e1c0 ' + 'screen_rotation e1c1 ' + 'screen_share e0e2 ' + 'sd_card e623 ' + 'sd_storage e1c2 ' + 'search e8b6 ' + 'security e32a ' + 'select_all e162 ' + 'send e163 ' + 'sentiment_dissatisfied e811 ' + 'sentiment_neutral e812 ' + 'sentiment_satisfied e813 ' + 'sentiment_very_dissatisfied e814 ' + 'sentiment_very_satisfied e815 ' + 'settings e8b8 ' + 'settings_applications e8b9 ' + 'settings_backup_restore e8ba ' + 'settings_bluetooth e8bb ' + 'settings_brightness e8bd ' + 'settings_cell e8bc ' + 'settings_ethernet e8be ' + 'settings_input_antenna e8bf ' + 'settings_input_component e8c0 ' + 'settings_input_composite e8c1 ' + 'settings_input_hdmi e8c2 ' + 'settings_input_svideo e8c3 ' + 'settings_overscan e8c4 ' + 'settings_phone e8c5 ' + 'settings_power e8c6 ' + 'settings_remote e8c7 ' + 'settings_system_daydream e1c3 ' + 'settings_voice e8c8 ' + 'share e80d ' + 'shop e8c9 ' + 'shop_two e8ca ' + 'shopping_basket e8cb ' + 'shopping_cart e8cc ' + 'short_text e261 ' + 'show_chart e6e1 ' + 'shuffle e043 ' + 'signal_cellular_4_bar e1c8 ' + 'signal_cellular_connected_no_internet_4_bar e1cd ' + 'signal_cellular_no_sim e1ce ' + 'signal_cellular_null e1cf ' + 'signal_cellular_off e1d0 ' + 'signal_wifi_4_bar e1d8 ' + 'signal_wifi_4_bar_lock e1d9 ' + 'signal_wifi_off e1da ' + 'sim_card e32b ' + 'sim_card_alert e624 ' + 'skip_next e044 ' + 'skip_previous e045 ' + 'slideshow e41b ' + 'slow_motion_video e068 ' + 'smartphone e32c ' + 'smoke_free eb4a ' + 'smoking_rooms eb4b ' + 'sms e625 ' + 'sms_failed e626 ' + 'snooze e046 ' + 'sort e164 ' + 'sort_by_alpha e053 ' + 'spa eb4c ' + 'space_bar e256 ' + 'speaker e32d ' + 'speaker_group e32e ' + 'speaker_notes e8cd ' + 'speaker_notes_off e92a ' + 'speaker_phone e0d2 ' + 'spellcheck e8ce ' + 'star e838 ' + 'star_border e83a ' + 'star_half e839 ' + 'stars e8d0 ' + 'stay_current_landscape e0d3 ' + 'stay_current_portrait e0d4 ' + 'stay_primary_landscape e0d5 ' + 'stay_primary_portrait e0d6 ' + 'stop e047 ' + 'stop_screen_share e0e3 ' + 'storage e1db ' + 'store e8d1 ' + 'store_mall_directory e563 ' + 'straighten e41c ' + 'streetview e56e ' + 'strikethrough_s e257 ' + 'style e41d ' + 'subdirectory_arrow_left e5d9 ' + 'subdirectory_arrow_right e5da ' + 'subject e8d2 ' + 'subscriptions e064 ' + 'subtitles e048 ' + 'subway e56f ' + 'supervisor_account e8d3 ' + 'surround_sound e049 ' + 'swap_calls e0d7 ' + 'swap_horiz e8d4 ' + 'swap_vert e8d5 ' + 'swap_vertical_circle e8d6 ' + 'switch_camera e41e ' + 'switch_video e41f ' + 'sync e627 ' + 'sync_disabled e628 ' + 'sync_problem e629 ' + 'system_update e62a ' + 'system_update_alt e8d7 ' + 'tab e8d8 ' + 'tab_unselected e8d9 ' + 'tablet e32f ' + 'tablet_android e330 ' + 'tablet_mac e331 ' + 'tag_faces e420 ' + 'tap_and_play e62b ' + 'terrain e564 ' + 'text_fields e262 ' + 'text_format e165 ' + 'textsms e0d8 ' + 'texture e421 ' + 'theaters e8da ' + 'thumb_down e8db ' + 'thumb_up e8dc ' + 'thumbs_up_down e8dd ' + 'time_to_leave e62c ' + 'timelapse e422 ' + 'timeline e922 ' + 'timer e425 ' + 'timer_10 e423 ' + 'timer_3 e424 ' + 'timer_off e426 ' + 'title e264 ' + 'toc e8de ' + 'today e8df ' + 'toll e8e0 ' + 'tonality e427 ' + 'touch_app e913 ' + 'toys e332 ' + 'track_changes e8e1 ' + 'traffic e565 ' + 'train e570 ' + 'tram e571 ' + 'transfer_within_a_station e572 ' + 'transform e428 ' + 'translate e8e2 ' + 'trending_down e8e3 ' + 'trending_flat e8e4 ' + 'trending_up e8e5 ' + 'tune e429 ' + 'turned_in e8e6 ' + 'turned_in_not e8e7 ' + 'tv e333 ' + 'unarchive e169 ' + 'undo e166 ' + 'unfold_less e5d6 ' + 'unfold_more e5d7 ' + 'update e923 ' + 'usb e1e0 ' + 'verified_user e8e8 ' + 'vertical_align_bottom e258 ' + 'vertical_align_center e259 ' + 'vertical_align_top e25a ' + 'vibration e62d ' + 'video_call e070 ' + 'video_label e071 ' + 'video_library e04a ' + 'videocam e04b ' + 'videocam_off e04c ' + 'videogame_asset e338 ' + 'view_agenda e8e9 ' + 'view_array e8ea ' + 'view_carousel e8eb ' + 'view_column e8ec ' + 'view_comfy e42a ' + 'view_compact e42b ' + 'view_day e8ed ' + 'view_headline e8ee ' + 'view_list e8ef ' + 'view_module e8f0 ' + 'view_quilt e8f1 ' + 'view_stream e8f2 ' + 'view_week e8f3 ' + 'vignette e435 ' + 'visibility e8f4 ' + 'visibility_off e8f5 ' + 'voice_chat e62e ' + 'voicemail e0d9 ' + 'volume_down e04d ' + 'volume_mute e04e ' + 'volume_off e04f ' + 'volume_up e050 ' + 'vpn_key e0da ' + 'vpn_lock e62f ' + 'wallpaper e1bc ' + 'warning e002 ' + 'watch e334 ' + 'watch_later e924 ' + 'wb_auto e42c ' + 'wb_cloudy e42d ' + 'wb_incandescent e42e ' + 'wb_iridescent e436 ' + 'wb_sunny e430 ' + 'wc e63d ' + 'web e051 ' + 'web_asset e069 ' + 'weekend e16b ' + 'whatshot e80e ' + 'widgets e1bd ' + 'wifi e63e ' + 'wifi_lock e1e1 ' + 'wifi_tethering e1e2 ' + 'work e8f9 ' + 'wrap_text e25b ' + 'youtube_searched_for e8fa ' + 'zoom_in e8ff ' + 'zoom_out e900 ' + 'zoom_out_map e56b ' + '© 2018 GitHub, Inc. ' + 'Terms ' + 'Privacy ' + 'Security ' + 'Status ' + 'Help ' + 'Contact GitHub ' + 'API ' + 'Training ' + 'Shop ' + 'Blog ' + 'About'
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {},
    created() {

        this.fonts = this.fonts.split(" ");
    }

});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({

    name: 'header-main',

    data() {
        return {
            status: 'green',
            clearInterval: '',
            progress: 2,
            progressInterval: null,
            done: false,
            transition: true
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        getStatus() {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'status', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.status = response.body.result.status;
                if (this.status === -1) {
                    this.status = 'grey';
                } else if (this.status === 0) {
                    this.status = 'green';
                } else if (this.status === 1) {
                    this.status = 'yellow';
                } else if (this.status === 2) {
                    this.status = 'purple';
                } else if (this.status === 3) {
                    this.status = 'red';
                } else {
                    this.status = 'grey';
                }
                clearInterval(this.clearInterval);

                this.clearInterval = window.setTimeout(() => {
                    this.getStatus();
                }, 1000 * 30);
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        }
    }, created() {
        if (!!this.$parent.admin) {
            this.getStatus();
        }
        this.getStatus();
    }

});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'help',
    data() {
        return {};
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        closeDialog() {
            this.$parent.modalHelp = false;
        }

    }, created() {}

});

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'Login',
    data() {
        return {
            validate_login: true,
            required_field: false,
            required_pass: false,
            login_form: {},
            login: '',
            error_login: '',
            password: '',
            activeClass: ''
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        Log_in() {
            if (this.login === '') {
                this.validate_login = false;
                this.required_field = true;
                return;
            }
            if (this.password === '') {
                this.required_pass = true;
                return;
            }
            this.$parent.$refs.topProgress.start();
            this.login_form.login = this.login;
            this.login_form.password = this.password;
            this.$http.post(this.$parent.base_url + 'login', this.login_form).then(function (response) {
                this.error_login = '';
                this.$cookies.set("token", response.data.token);
                this.$cookies.set("admin", response.data.admin ? "admin" : '');
                this.$parent.nav_bar = true;
                this.$parent.admin = response.data.admin ? "admin" : '';
                __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/stations');
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                this.error_login = error.body.message;
                console.log("error");
                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }
    }, watch: {

        login: function () {
            this.error_login = '';

            if (this.login) {
                this.required_field = false;
                let re = new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$');
                this.validate_login = !!this.login.match(re);
            } else {
                this.required_field = true;

                this.validate_login = false;
            }
        }, password: function () {
            this.error_login = '';

            if (this.password) {
                this.required_pass = false;
            } else {
                this.required_pass = true;

                //                    this.validate_login = false
            }
        }

    },

    created() {
        this.$parent.interval = false;
        if (this.$route.query.notifications) {
            this.$parent.showNotifications = true;
        }
        this.$parent.title = 'Login';
    }

});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'logs',
    data() {
        return {
            validate_confirm_password: false,
            required_field: false,
            required_pass: false,
            no_validate_tokint: false,
            isAdmin: false,
            password_form: {},
            logs: {},
            token: '',
            login: '',
            error_login: '',
            password: '',
            confirm_password: '',
            activeClass: ''
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        closeDialog() {
            this.$parent.modalLogs = false;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/');
        },
        doneNotifacation() {},
        getLogs() {
            this.$parent.$refs.topProgress.start();

            this.$http.get(this.$parent.base_url + 'station/logs/' + this.$parent.logs_id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.logs = response.body.result;
                this.$parent.$refs.topProgress.done();
                this.$parent.logs_id = null;
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.logs_id = null;

                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        }
    }, created() {
        this.getLogs();
        if (this.$route.query.token == undefined) {

            this.token = this.$cookies.get("token");
            if (!this.$cookies.get("token")) {
                __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/login');
            }
        } else {
            this.$parent.$refs.topProgress.start();

            this.$http.get(this.$parent.base_url + 'check_token', { headers: { 'Authorization': 'Bearer ' + this.$route.query.token } }).then(function (response) {
                if (response.body.result) {
                    this.$cookies.set("token", '');

                    this.$cookies.remove("token");
                    this.$cookies.remove("admin");

                    this.$parent.nav_bar = false;
                    this.$parent.admin = false;
                    this.$parent.error = false;
                    this.token = this.$route.query.token;
                }
                this.no_validate_tokint = !response.body.result;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.no_validate_tokint = true;
                this.$parent.$refs.topProgress.fail();
            });
        }
    }

});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'notifications',
    data() {
        return {
            validate_confirm_password: false,
            required_field: false,
            required_pass: false,
            no_validate_tokint: false,
            isAdmin: false,
            password_form: {},
            notifications: {},
            data_cust: {},
            sendNotifications: {},
            token: '',
            login: '',
            error_login: '',
            password: '',
            confirm_password: '',
            activeClass: ''
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        closeDialog() {
            this.$parent.modalNotifications = false;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/');
        },
        getNotifacation() {
            this.$parent.$refs.topProgress.start();

            this.$http.get(this.$parent.base_url + 'notification', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.$refs.topProgress.done();
                this.notifications = response.body.result;
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        },
        doneNotifacation() {
            this.$http.put(this.$parent.base_url + 'notification', this.notifications, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.$refs.topProgress.done();
                this.$parent.modalNotifications = false;
                self.$parent.success = true;
            }, function (error) {
                console.log("error");
                this.$parent.modalNotifications = false;
                self.$parent.error = true;

                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }
    },
    watch: {},
    mounted() {},
    created() {
        this.getNotifacation();
    }

});

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: { vSelect: __WEBPACK_IMPORTED_MODULE_0__Select_vue___default.a },
    name: 'popup-clients',

    data() {
        return {
            done: true,
            items: [],
            users: [],
            stations: [],
            initialValue: '',
            checkbox: true,
            validate: true,
            class_for_time: false,
            required_field: false,
            autocompleteValue: '',
            words: this.$parent.words,
            selected: [],
            selected_obj_users: [],
            selected_id_stations: [],
            selected_stations: [],
            add_selected_id_users: [],
            selected_id_users: [],
            delete_id: [],
            test: "",
            nameClient: '',
            update_time: 0,
            activeClass: '',
            clientObj: {}

        };
    },
    methods: {
        getUsers() {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'users', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.users = response.body;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        },
        getStations() {
            this.$parent.$refs.topProgress.start();

            this.$http.get(this.$parent.base_url + 'stations/other', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.stations = response.body.result;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        },

        closeDialog() {
            this.$parent.modalClients = false;
        },

        createClient() {
            if (this.nameClient === '') {
                this.required_field = true;
                return;
            }
            for (let i in this.selected_stations) {
                this.selected_id_stations.push(this.selected_stations[i].id);
            }
            for (let i in this.selected_obj_users) {
                this.selected_id_users.push(this.selected_obj_users[i].user_id);
            }
            this.clientObj.stations_id = this.selected_id_stations;
            this.clientObj.users_id = this.selected_id_users;
            this.clientObj.name = this.nameClient;
            this.done = false;
            this.$http.post(this.$parent.base_url + 'client', this.clientObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.event = 'create_station';
                this.$parent.currentStation = response.body.result;
                this.$parent.modalClients = false;
                this.$parent.success = true;
                this.$parent.$refs.topProgress.done();
                this.done = true;

                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                this.done = true;

                this.$parent.error = true;
                this.$parent.modalStations = false;
                this.$parent.$refs.topProgress.fail();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        },
        getClient_byId(id) {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'client/' + id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.nameClient = response.body.name;
                this.selected_obj_users = response.body.users;
                this.selected_stations = response.body.stations;
                this.$parent.$refs.topProgress.done();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        },
        updateClient() {
            this.$parent.reloadClients = true;
            if (this.nameClient === '') {
                this.required_field = true;
                return;
            }
            for (let i in this.selected_stations) {
                this.selected_id_stations.push(this.selected_stations[i].id);
            }
            for (let i in this.selected_obj_users) {
                this.selected_id_users.push(this.selected_obj_users[i].user_id);
            }
            this.clientObj.stations_id = this.selected_id_stations;
            this.clientObj.users_id = this.selected_id_users;
            this.clientObj.name = this.nameClient;
            this.$parent.$refs.topProgress.start();

            this.$http.put(this.$parent.base_url + 'client/' + this.words.obj.id, this.clientObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.event = 'create_station';
                this.$parent.currentStation = response.body.result;
                this.$parent.modalClients = false;
                this.$parent.success = true;
                this.$parent.$refs.topProgress.done();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                this.$parent.error = true;
                this.$parent.modalStations = false;
                this.$parent.$refs.topProgress.fail();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        }
    },
    mounted() {
        if (this.words.updata) {
            this.getClient_byId(this.words.obj.id);
        }
        this.getUsers();
        this.getStations();
    },
    created() {},
    watch: {

        nameClient: function () {
            this.required_field = !this.nameClient;
        }
    }

});

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: { vSelect: __WEBPACK_IMPORTED_MODULE_0__Select_vue___default.a },
    name: 'popup-delete',

    data() {
        return {
            item: { id: 9, name: 'Lion', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' },
            items: [],
            initialValue: 'My initial value',
            checkbox: true,
            autocompleteValue: '',
            words: this.$parent.words_delete,
            selected: [],
            selected_obj: [],
            selected_id: []

        };
    },
    methods: {

        closeDialog() {
            this.$parent.modalDelete = false;
        },
        deleteStation() {
            this.$parent.$refs.topProgress.start();
            this.$parent.words_delete = {};
            let self = this;
            this.$http.delete(this.$parent.base_url + 'station/' + this.words.obj.id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.$refs.topProgress.done();
                this.$parent.success = true;
                this.$parent.event = 'delete';
            }, function (error) {
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
            });
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
            this.$parent.modalDelete = false;
        }, deleteUser() {
            this.$parent.$refs.topProgress.start();
            this.$parent.words_delete = {};
            this.$parent.success = true;
            let self = this;
            this.$http.delete(this.$parent.base_url + 'user/' + this.words.obj.id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.success = true;
                this.$parent.event = 'delete_user';
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                console.log(error);
            });
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
            this.$parent.modalDelete = false;
        },
        deleteClient() {
            this.$parent.$refs.topProgress.start();
            this.$parent.words_delete = {};
            this.$parent.success = true;
            let self = this;
            this.$http.delete(this.$parent.base_url + 'client/' + this.words.obj.id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.success = true;
                this.$parent.event = 'delete_client';
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                console.log(error);
            });
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
            this.$parent.modalDelete = false;
        }

    },
    created() {},
    computed: {}

});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: { vSelect: __WEBPACK_IMPORTED_MODULE_0__Select_vue___default.a },
    name: 'popup-stations',

    data() {
        return {
            done: true,

            item: {},
            items: [],
            users: [],
            initialValue: 'My initial value',
            checkbox: true,
            validate: true,
            class_for_time: false,
            required_field: false,
            autocompleteValue: '',
            words: this.$parent.words,
            selected: ['1'],
            selected_obj: [],
            add_selected_id: [],
            selected_id: [],
            delete_id: [],
            test: "",
            selected_client: null,
            ip_address: '',
            update_time: 0,
            activeClass: '',
            clients: [],
            stationObj: {}

        };
    },
    methods: {
        getUsers() {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'users', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.users = response.body.result;

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        }, getClients() {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'clients', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.clients = response.body;

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        },

        closeDialog() {
            this.$parent.modalStations = false;
        },

        createStation() {
            if (this.ip_address === '') {
                this.validate = false;
                this.required_field = true;
                return;
            }
            this.stationObj.update_time = parseInt(this.update_time, 10);
            if (this.selected_client) {
                this.stationObj.client_id = this.selected_client.id;
                this.stationObj.client = this.selected_client;
            } else {
                this.stationObj.client_id = null;
                this.stationObj.client = null;
            }
            this.stationObj.ip_address = this.ip_address;
            this.done = false;
            this.$http.post(this.$parent.base_url + 'station', this.stationObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.done = true;

                this.$parent.event = 'create_station';
                this.$parent.currentStation = response.body.result;
                this.$parent.modalStations = false;
                this.$parent.success = true;
                this.$parent.$refs.topProgress.done();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                this.done = true;

                this.$parent.error = true;
                this.$parent.modalStations = false;
                this.$parent.$refs.topProgress.fail();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        },
        getStation_byId(id) {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'station/' + id, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.stationObj = response.body.result;
                this.ip_address = response.body.result.ip_address;
                this.selected_client = response.body.result.client;
                this.update_time = response.body.result.update_time;
                this.$parent.$refs.topProgress.done();
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        },
        updateStation() {
            for (let i in this.selected_obj) {
                this.selected_id.push(this.selected_obj[i].user_id);
            }
            for (let i = 0; i < this.selected_id.length; i++) {
                if (this.selected.indexOf(this.selected_id[i]) === -1) {

                    this.add_selected_id.push(this.selected_id[i]);
                }
            }
            for (let i = 0; i < this.selected.length; i++) {
                if (this.selected_id.indexOf(this.selected[i]) === -1) {
                    this.delete_id.push(this.selected[i]);
                }
            }
            this.stationObj.update_time = parseInt(this.update_time, 10);
            if (this.selected_client) {
                this.stationObj.client_id = this.selected_client.id;
                this.stationObj.client = this.selected_client;
            } else {
                this.stationObj.client_id = null;
                this.stationObj.client = null;
            }
            this.stationObj.user_id_add = this.selected_id;
            this.stationObj.user_id_delete = this.delete_id;
            this.stationObj.ip_address = this.ip_address;
            this.stationObj.update_time = parseInt(this.update_time, 10);
            this.$parent.$refs.topProgress.start();
            this.$http.put(this.$parent.base_url + 'station/' + this.words.obj.id, this.stationObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.$parent.event = 'update_stations';

                this.stationObj = response.body.result;
                this.$parent.$refs.topProgress.done();
                this.$parent.modalStations = false;
                this.$parent.success = true;
            }, function (error) {
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
            self = this;

            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }

    },
    mounted() {
        this.getClients();

        if (this.words.updata_btn && this.users) {

            this.getStation_byId(this.words.obj.id);
        }
    },
    beforeCreate() {},
    created() {
        if (this.users) {
            this.getUsers();
        }
    },
    watch: {
        update_time: function () {

            this.class_for_time = this.update_time == 1;
            let number = parseInt(this.update_time, 10);
            if (isNaN(number) || this.update_time < 0) {
                this.class_for_time = true;
                return;
            }
            this.class_for_time = false;
        },
        ip_address: function () {
            if (this.ip_address) {
                this.required_field = false;

                //                \b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b
                let re = new RegExp('^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$');
                this.validate = !!this.ip_address.match(re);
            } else {
                this.validate = false;
                this.required_field = true;
            }
        }
    }

});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Select_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Select_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: { vSelect: __WEBPACK_IMPORTED_MODULE_0__Select_vue___default.a },

    name: 'popup-users',

    data() {
        return {
            done: true,
            initialValue: 'My initial value',
            checkbox: true,
            login: '',
            phone: '',
            activeClass: '',
            isAdmin: false,
            validate_phone: true,
            validate_login: true,
            required_field: false,
            error_message: '',
            clients: [],
            userObj: {},
            userObjOld: {},
            clients_id: [],
            selected_clients: [],
            autocompleteValue: '',
            words: this.$parent.words

        };
    },
    methods: {

        getClients() {
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'clients', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.clients = response.body;

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        },
        closeDialog(ref) {
            if (this.words.update) {
                this.$parent.event = 'update_user';
            }
            this.$parent.modalUsers = false;
        },
        createUser() {

            if (this.login === '') {
                this.validate_login = false;
                this.required_field = true;
                return;
            }
            this.$parent.$refs.topProgress.start();

            if (this.isAdmin) {
                this.userObj.role = 'admin';
            } else {
                this.userObj.role = 'user';
            }
            for (let i in this.selected_clients) {
                this.clients_id.push(this.selected_clients[i].id);
            }
            this.userObj.clients_id = this.clients_id;
            this.userObj.login = this.login;
            this.userObj.phone = this.phone;
            this.done = false;
            this.$http.post(this.$parent.base_url + 'user', this.userObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.done = true;

                this.$parent.event = 'create_user';
                this.$parent.currentUser = response.body.result;
                this.$parent.modalUsers = false;
                this.$parent.success = true;
                this.$parent.$refs.topProgress.done();
                this.error_message = '';
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            }, function (error) {
                this.done = true;

                console.log(error);
                this.$parent.error = true;
                this.validate_login = false;
                //                        this.$parent.modalUsers = false
                this.$parent.$refs.topProgress.fail();
                this.error_message = error.body.message;
                self = this;
                setTimeout(function () {
                    self.$parent.success = false;
                    self.$parent.error = false;
                }, 1000);
            });
        },
        updateUser() {
            if (this.login === '') {
                this.validate_login = false;
                this.required_field = true;
                return;
            }
            this.$parent.$refs.topProgress.start();

            if (this.isAdmin) {
                this.userObj.role = 'admin';
            } else {
                this.userObj.role = 'user';
            }
            for (let i in this.selected_clients) {
                this.clients_id.push(this.selected_clients[i].id);
            }
            this.userObj.clients_id = this.clients_id;
            this.userObj.login = this.login;
            this.userObj.phone = this.phone;
            let temp = JSON.parse(JSON.stringify(this.words.obj));
            this.done = false;

            this.$http.put(this.$parent.base_url + 'user/' + this.words.id, this.userObj, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.done = true;

                this.$parent.event = 'update_user';

                this.$parent.currentUser = response.body.result;
                this.$parent.modalUsers = false;
                this.$parent.success = true;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                this.done = true;

                this.$parent.error = true;
                this.validate_login = false;
                //                        this.$parent.modalUsers = false
                this.$parent.$refs.topProgress.fail();
                this.error_message = error.body.message;
                //                        this.$parent.event = 'error_update_user';
                this.$parent.words.obj = this.userObjOld;
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }

    },
    mounted() {
        this.getClients();
    },
    created() {
        if (this.words.update) {
            this.userObj = this.words.obj;
            this.login = this.words.obj.login;
            this.phone = this.words.obj.phone;
            if (this.words.obj.clients) {
                this.selected_clients = this.words.obj.clients;
            } else {
                this.selected_clients = [];
            }
            this.userObjOld = JSON.parse(JSON.stringify(this.words.obj));
            this.isAdmin = this.words.obj.role === 'admin';
        }
    },
    watch: {

        isAdmin: function () {
            if (this.isAdmin) {
                this.selected_clients = [];
            }
        },
        login: function () {
            this.error_message = '';
            if (this.login) {
                this.required_field = false;
                let re = new RegExp('^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$');
                this.validate_login = !!this.login.match(re);
            } else {
                this.required_field = true;

                this.validate_login = false;
            }
        }, phone: function () {
            if (this.phone) {
                let re2 = new RegExp('^[\+][0-9]{9,15}$', 'g');
                this.validate_phone = !!this.phone.match(re2);
            } else {
                this.validate_phone = true;
            }
        }
    }

});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {},
    name: 'settings',
    data() {
        return {
            validate_confirm_password: false,
            required_field: false,
            required_pass: false,
            no_validate_tokint: false,
            isAdmin: false,

            first_alarm_timer: null,
            second_alarm_timer: null,
            third_alarm_timer: null,
            zero_alarm_timer: null,

            class_for_first_alarm_timer: '',
            class_for_second_alarm_timer: '',
            class_for_third_alarm_timer: '',
            class_for_zero_alarm_timer: '',

            settings: {},
            activeClass: ''
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        closeDialog() {
            this.$parent.modalSettings = false;
            __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */].push('/');
        },

        putSettings() {
            if (this.first_alarm_timer === '') {
                this.class_for_first_alarm_timer = true;
                return;
            }
            if (this.second_alarm_timer === '') {
                this.class_for_second_alarm_timer = true;
                return;
            }
            if (this.third_alarm_timer === '') {
                this.class_for_third_alarm_timer = true;
                return;
            }
            if (this.zero_alarm_timer === '') {
                this.class_for_zero_alarm_timer = true;
                return;
            }
            //
            this.$parent.$refs.topProgress.start();

            this.settings.first_alarm_timer = this.first_alarm_timer * 60;
            this.settings.second_alarm_timer = this.second_alarm_timer * 60;
            this.settings.third_alarm_timer = this.third_alarm_timer * 60;
            this.settings.zero_alarm_timer = this.zero_alarm_timer * 60;
            this.$http.put(this.$parent.base_url + 'settings', this.settings, { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error);
                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        },
        getSettings() {

            this.$http.get(this.$parent.base_url + 'settings', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.first_alarm_timer = response.body.result.first_alarm_timer / 60;
                this.second_alarm_timer = response.body.result.second_alarm_timer / 60;
                this.third_alarm_timer = response.body.result.third_alarm_timer / 60;
                this.zero_alarm_timer = response.body.result.zero_alarm_timer / 60;

                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error);
                this.$parent.$refs.topProgress.fail();
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        }
    }, watch: {
        first_alarm_timer: function () {

            this.class_for_first_alarm_timer = this.first_alarm_timer == 1;
            let number = parseInt(this.first_alarm_timer, 10);
            if (isNaN(number) || this.first_alarm_timer < 1 || this.first_alarm_timer > 1440) {
                this.class_for_first_alarm_timer = true;
                return;
            }
            this.class_for_first_alarm_timer = false;
        },
        second_alarm_timer: function () {

            this.class_for_second_alarm_timer = this.second_alarm_timer == 1;
            let number = parseInt(this.second_alarm_timer, 10);
            if (isNaN(number) || this.second_alarm_timer < 1 || this.second_alarm_timer > 1440) {
                this.class_for_second_alarm_timer = true;
                return;
            }
            this.class_for_second_alarm_timer = false;
        },
        third_alarm_timer: function () {

            this.class_for_third_alarm_timer = this.third_alarm_timer == 1;
            let number = parseInt(this.third_alarm_timer, 10);
            if (isNaN(number) || this.third_alarm_timer < 1 || this.third_alarm_timer > 1440) {
                this.class_for_third_alarm_timer = true;
                return;
            }
            this.class_for_third_alarm_timer = false;
        },
        zero_alarm_timer: function () {

            this.class_for_zero_alarm_timer = this.zero_alarm_timer == 1;
            let number = parseInt(this.zero_alarm_timer, 10);
            if (isNaN(number) || this.zero_alarm_timer < 1 || this.zero_alarm_timer > 1440) {
                this.class_for_zero_alarm_timer = true;
                return;
            }
            this.class_for_zero_alarm_timer = false;
        }

    }, created() {
        this.getSettings();
    }

});

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_stations_vue__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popup_stations_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__popup_stations_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    components: {
        PopupStations: __WEBPACK_IMPORTED_MODULE_0__popup_stations_vue___default.a
    },
    name: 'stations',
    data() {
        return {
            stations: [],
            clients: [],
            step: 0,
            progress: 0,
            progressInterval: null,
            done: false,
            transition: true,
            activeClass: '',
            opens_index: [],
            opens_index_padding: [],
            current_index: null,
            success: this.$parent.success,
            empty: false,
            showAll: true,
            preReload: true,
            start: false

        };
    },
    router: __WEBPACK_IMPORTED_MODULE_1__router__["a" /* default */],
    methods: {
        startProgressLine() {
            if (this.$parent.interval) {
                clearInterval(this.clearInterval);
                this.clearInterval = window.setTimeout(() => {
                    if (this.$refs.topProgress_table) {
                        this.$refs.topProgress_table.start();

                        this.step += 1;
                        this.$refs.topProgress_table.increase(1);
                        this.$refs.topProgress_table.pause();
                    }
                    if (this.step == 95) {
                        this.$refs.topProgress_table.done();
                        this.getClients();
                        this.step = 0;
                        this.start = false;
                    }
                    this.startProgressLine();
                }, 300);
            }
        },

        allStationsHideShow() {
            if (this.showAll) {
                for (let i in this.clients) {
                    this.clients[i]['more'] = true;
                    this.opens_index.push(+i);
                }
            } else {
                for (let i in this.clients) {
                    this.clients[i]['more'] = false;
                    this.opens_index = [];
                }
            }
            this.showAll = !this.showAll;
        },
        addProperty(index) {

            this.clients[index]['more'] = !this.clients[index]['more'];
            if (this.clients[index]['more']) {
                this.opens_index.push(index);
            } else {
                this.opens_index.splice(this.opens_index.indexOf(index), 1);
            }
        },

        ParseColor(index, value) {

            if (value === 'hardware_type') {
                if (this.stations[index][value] === 0) {
                    this.stations[index][value] = 'PC';
                } else if (this.stations[index][value] === 1) {
                    this.stations[index][value] = 'BSC421';
                } else if (this.stations[index][value] === 2) {
                    this.stations[index][value] = 'BSC412';
                }
            } else {
                if (this.stations[index][value] === 0) {
                    this.stations[index][value] = 'green';
                } else if (this.stations[index][value] === 1) {
                    this.stations[index][value] = 'yellow';
                } else if (this.stations[index][value] === 2) {
                    this.stations[index][value] = 'red';
                } else if (this.stations[index][value] === 3) {
                    this.stations[index][value] = 'purple';
                } else {
                    let content = value + '_content';
                    this.stations[index][value] = '';
                    this.stations[index][content] = '—';
                }
            }
        },
        getClients() {
            this.$parent.interval = true;
            this.$parent.$refs.topProgress.start();
            this.$http.get(this.$parent.base_url + 'client/stations', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.clients = response.body.clients;
                for (let index in this.opens_index) {
                    if (this.clients[this.opens_index[index]]) {
                        this.clients[this.opens_index[index]]['more'] = true;
                    }
                }
                this.empty = !this.clients.length;
                this.$parent.$refs.topProgress.done();
                this.start = true;
                this.startProgressLine();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
            self = this;
            setTimeout(function () {
                self.$parent.success = false;
                self.$parent.error = false;
            }, 1000);
        },

        EditStations(id) {
            this.$parent.modalUsers = false;
            this.$parent.modalStations = true;
            this.$parent.words = {
                'captions': 'Edit node',
                create_btn: false,
                updata_btn: true,
                obj: {
                    id: id
                }
            };
        },

        EditClients(id) {
            this.$parent.modalUsers = false;
            this.$parent.modalStations = false;
            this.$parent.modalClients = true;
            this.$parent.words = {
                'captions': 'Edit  network',
                create: false,
                updata: true,
                obj: {
                    id: id
                }
            };
        },

        DeleteStations(index, id) {
            this.current_index = index;

            this.$parent.words_delete = {
                'captions': 'node',
                station: true,
                user: false,
                client: false,
                obj: {
                    current_index: index,
                    id: id
                }

            };
            this.$parent.modalDelete = true;
        },

        DeleteClients(index, id) {
            this.current_index = index;

            this.$parent.words_delete = {
                'captions': 'network',
                station: false,
                user: false,
                client: true,
                obj: {
                    current_index: index,
                    id: id
                }

            };
            this.$parent.modalDelete = true;
        }
    },
    mounted() {

        this.getClients();
    },
    computed: {

        interval() {
            return this.$parent.interval;
        },
        reload() {
            return this.$parent.reloadClients;
        },
        event() {
            return this.$parent.event;
        },
        filteredStations() {
            return this.stations;
        },
        interval() {
            return this.$parent.interval;
        }

    },
    watch: {
        interval: function () {},
        reload: function () {
            if (this.reload) {
                this.getClients();
                this.$parent.reloadClients = false;
            }
        },
        event: function () {
            if (this.event === 'delete') {
                this.getClients();
                this.$parent.event = '';
            }
            if (this.event === 'delete_client') {
                this.getClients();
                this.$parent.event = '';
            }
            if (this.event === 'create_client') {
                this.getClients();

                this.$parent.event = '';
            }
            if (this.event === 'update_stations') {
                this.getClients();

                this.$parent.event = '';
            }
            if (this.event === 'create_station') {
                this.getClients();
                this.$parent.currentStation = {};
                this.$parent.event = '';
            }
        }
    },
    created() {
        this.$parent.interval = true;
        if (this.$parent.showNotifications) {
            this.$parent.modalNotifications = true;
            this.$parent.showNotifications = false;
        }
        this.$parent.title = 'Tetra networks';
    }

});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_vue__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fonts_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__fonts_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({

    //        components: {MainFonts},
    name: 'users',

    data() {
        return {
            users: [],
            current_index: null
        };
    },
    router: __WEBPACK_IMPORTED_MODULE_0__router__["a" /* default */],
    methods: {
        getUsers() {
            this.$parent.$refs.topProgress.start();

            this.$http.get(this.$parent.base_url + 'users', { headers: { 'Authorization': 'Bearer ' + this.$cookies.get("token") } }).then(function (response) {
                this.users = response.body;
                this.$parent.$refs.topProgress.done();
            }, function (error) {
                console.log(error.status);
                this.$parent.error = true;
                this.$parent.$refs.topProgress.fail();
                this.$parent.UNAUTHORIZED(error.status);
            });
        },

        EditUser(id, index) {
            this.$parent.modalStations = false;

            this.$parent.modalUsers = true;
            this.current_index = index;

            this.$parent.words = {
                'captions': 'Edit user',
                update: true,
                create: false,
                obj: this.users[index],
                id: id

            };
        },
        DeleteUsers(id, index) {
            this.current_index = index;

            this.$parent.words_delete = {
                'captions': 'users',
                station: false,
                user: true,
                obj: {
                    current_index: index,
                    id: id
                }

            };
            this.$parent.modalDelete = true;
        }

    },
    created() {

        this.$parent.interval = false;

        this.$parent.title = 'Tetra users';
        this.getUsers();
    },
    computed: {
        event() {
            return this.$parent.event;
        }

    },
    watch: {
        event: function () {

            if (this.event === 'delete_user') {
                if (this.current_index !== null) {
                    this.users.splice(this.current_index, 1);
                }
                this.$parent.event = '';
            }
            ;
            if (this.event === 'create_user') {
                this.getUsers();

                this.$parent.event = '';
            }
            ;
            if (this.event === 'update_user') {
                this.getUsers();
                this.$parent.event = '';
            }
        }
    }

});

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_resource__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_material___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_material__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_fonts_matirial_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_css_fonts_matirial_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_css_fonts_matirial_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_roboto_css__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__assets_css_roboto_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__assets_css_roboto_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_material_dist_vue_material_css__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_material_dist_vue_material_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_material_dist_vue_material_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_css_css__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__assets_css_css_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__assets_css_css_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_cookies__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_vue_cookies___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_vue_cookies__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_v_autocomplete__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_v_autocomplete___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_v_autocomplete__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_autocomplete_dist_v_autocomplete_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_autocomplete_dist_v_autocomplete_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_v_autocomplete_dist_v_autocomplete_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_top_progress__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_top_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vue_top_progress__);



















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_12_vue_top_progress___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_10_v_autocomplete___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_material___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_9_vue_cookies___default.a);

// Vue.config.productionTip = false;

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_resource__["a" /* default */]);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].directive('title', {
  inserted: (el, binding) => document.title = binding.value,
  update: (el, binding) => document.title = binding.value
});

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({

  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_3__router__["a" /* default */],
  data: {
    title: 'This will be the title'

  },
  template: '<App/>',
  components: {
    App: __WEBPACK_IMPORTED_MODULE_2__App___default.a
  },
  methods: {}
});

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
	props: {
		/**
   * Toggles the adding of a 'loading' class to the main
   * .v-select wrapper. Useful to control UI state when
   * results are being processed through AJAX.
   */
		loading: {
			type: Boolean,
			default: false
		},

		/**
   * Accept a callback function that will be
   * run when the search text changes.
   *
   * loading() accepts a boolean value, and can
   * be used to toggle a loading class from
   * the onSearch callback.
   *
   * @param {search}  String          Current search text
   * @param {loading} Function(bool)  Toggle loading class
   */
		onSearch: {
			type: Function,
			default: function (search, loading) {}
		}
	},

	data() {
		return {
			mutableLoading: false
		};
	},

	watch: {
		/**
   * If a callback & search text has been provided,
   * invoke the onSearch callback.
   */
		search() {
			if (this.search.length > 0) {
				this.onSearch(this.search, this.toggleLoading);
				this.$emit('search', this.search, this.toggleLoading);
			}
		},
		/**
  * Sync the loading prop with the internal
  * mutable loading value.
   * @param val
   */
		loading(val) {
			this.mutableLoading = val;
		}
	},

	methods: {
		/**
   * Toggle this.loading. Optionally pass a boolean
   * value. If no value is provided, this.loading
   * will be set to the opposite of it's current value.
   * @param toggle Boolean
   * @returns {*}
   */
		toggleLoading(toggle = null) {
			if (toggle == null) {
				return this.mutableLoading = !this.mutableLoading;
			}
			return this.mutableLoading = toggle;
		}
	}
};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// flow

module.exports = {
  watch: {
    typeAheadPointer() {
      this.maybeAdjustScroll();
    }
  },

  methods: {
    /**
     * Adjust the scroll position of the dropdown list
     * if the current pointer is outside of the
     * overflow bounds.
     * @returns {*}
     */
    maybeAdjustScroll() {
      let pixelsToPointerTop = this.pixelsToPointerTop();
      let pixelsToPointerBottom = this.pixelsToPointerBottom();

      if (pixelsToPointerTop <= this.viewport().top) {
        return this.scrollTo(pixelsToPointerTop);
      } else if (pixelsToPointerBottom >= this.viewport().bottom) {
        return this.scrollTo(this.viewport().top + this.pointerHeight());
      }
    },

    /**
     * The distance in pixels from the top of the dropdown
     * list to the top of the current pointer element.
     * @returns {number}
     */
    pixelsToPointerTop() {
      let pixelsToPointerTop = 0;
      if (this.$refs.dropdownMenu) {
        for (let i = 0; i < this.typeAheadPointer; i++) {
          pixelsToPointerTop += this.$refs.dropdownMenu.children[i].offsetHeight;
        }
      }
      return pixelsToPointerTop;
    },

    /**
     * The distance in pixels from the top of the dropdown
     * list to the bottom of the current pointer element.
     * @returns {*}
     */
    pixelsToPointerBottom() {
      return this.pixelsToPointerTop() + this.pointerHeight();
    },

    /**
     * The offsetHeight of the current pointer element.
     * @returns {number}
     */
    pointerHeight() {
      let element = this.$refs.dropdownMenu ? this.$refs.dropdownMenu.children[this.typeAheadPointer] : false;
      return element ? element.offsetHeight : 0;
    },

    /**
     * The currently viewable portion of the dropdownMenu.
     * @returns {{top: (string|*|number), bottom: *}}
     */
    viewport() {
      return {
        top: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop : 0,
        bottom: this.$refs.dropdownMenu ? this.$refs.dropdownMenu.offsetHeight + this.$refs.dropdownMenu.scrollTop : 0
      };
    },

    /**
     * Scroll the dropdownMenu to a given position.
     * @param position
     * @returns {*}
     */
    scrollTo(position) {
      return this.$refs.dropdownMenu ? this.$refs.dropdownMenu.scrollTop = position : null;
    }
  }
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  data() {
    return {
      typeAheadPointer: -1
    };
  },

  watch: {
    filteredOptions() {
      this.typeAheadPointer = 0;
    }
  },

  methods: {
    /**
     * Move the typeAheadPointer visually up the list by
     * subtracting the current index by one.
     * @return {void}
     */
    typeAheadUp() {
      if (this.typeAheadPointer > 0) {
        this.typeAheadPointer--;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },

    /**
     * Move the typeAheadPointer visually down the list by
     * adding the current index by one.
     * @return {void}
     */
    typeAheadDown() {
      if (this.typeAheadPointer < this.filteredOptions.length - 1) {
        this.typeAheadPointer++;
        if (this.maybeAdjustScroll) {
          this.maybeAdjustScroll();
        }
      }
    },

    /**
     * Select the option at the current typeAheadPointer position.
     * Optionally clear the search input on selection.
     * @return {void}
     */
    typeAheadSelect() {
      if (this.filteredOptions[this.typeAheadPointer]) {
        this.select(this.filteredOptions[this.typeAheadPointer]);
      } else if (this.taggable && this.search.length) {
        this.select(this.search);
      }

      if (this.clearSearchOnSelect) {
        this.search = "";
      }
    }
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 39 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 40 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 41 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 42 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 43 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 44 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 45 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 46 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 47 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 48 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 49 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 50 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 51 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 52 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/avatar.90234cc.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo.f1590aa.svg";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/logo2.4e80a97.svg";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(48)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(19),
  /* template */
  __webpack_require__(79),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(49)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(20),
  /* template */
  __webpack_require__(80),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-c170dc72",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(47)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(21),
  /* template */
  __webpack_require__(78),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-83102e4c",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(38)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(69),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-1c993664",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(51)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(23),
  /* template */
  __webpack_require__(82),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-d8ea6ea8",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(50)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(24),
  /* template */
  __webpack_require__(81),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-cc4f1788",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(52)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(83),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-f40b05ac",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(39)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(70),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(75),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(71),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-313963a0",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(46)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(77),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7fa2ec68",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

function injectStyle (ssrContext) {
  __webpack_require__(37)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(32),
  /* template */
  __webpack_require__(68),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-0f4cffcb",
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Email")]), _vm._v(" "), _c('md-table-head', [_vm._v("Name")]), _vm._v(" "), _c('md-table-head', [_vm._v("Clients")]), _vm._v(" "), _c('md-table-head', [_vm._v("Phone")]), _vm._v(" "), _c('md-table-head', [_vm._v("Role")]), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }) : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head', {
    attrs: {
      "md-numeric": ""
    }
  }) : _vm._e()], 1)], 1), _vm._v(" "), _c('md-table-body', _vm._l((_vm.users), function(item, index) {
    return _c('md-table-row', {
      key: index
    }, [_c('md-table-cell', [_vm._v(_vm._s(item.login))]), _vm._v(" "), _c('md-table-cell', {
      staticStyle: {
        "text-transform": "capitalize"
      }
    }, [_vm._v(_vm._s(item.name) + "\n                    "), (!item.name) ? _c('span', [_vm._v("—")]) : _vm._e()]), _vm._v(" "), _c('md-table-cell', {
      staticStyle: {
        "max-width": "250px"
      }
    }, [_vm._l((item.clients), function(it, i) {
      return _c('span', [_vm._v("\n                        " + _vm._s(it.name)), (i != item.clients.length - 1) ? _c('span', [_vm._v(", ")]) : _vm._e()])
    }), _vm._v(" "), (!item.clients[0]) ? _c('span', [_vm._v("—")]) : _vm._e()], 2), _vm._v(" "), _c('md-table-cell', [_vm._v(_vm._s(item.phone) + "\n                    "), (!item.phone) ? _c('span', [_vm._v("—")]) : _vm._e()]), _vm._v(" "), _c('md-table-cell', {
      staticStyle: {
        "text-transform": "capitalize"
      }
    }, [_vm._v(_vm._s(item.role))]), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', [_c('md-button', {
      on: {
        "click": function($event) {
          _vm.EditUser(item.user_id, index)
        }
      }
    }, [_c('md-icon', [_vm._v("edit")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', [_c('md-button', {
      on: {
        "click": function($event) {
          _vm.DeleteUsers(item.user_id, index)
        }
      }
    }, [_c('md-icon', [_vm._v("delete")])], 1)], 1) : _vm._e()], 1)
  }))], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference"
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v("Descriptions of alarms\n            ")]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Got It!")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-dialog-content"
  }, [_c('div', {
    staticClass: "alarm-info"
  }, [_c('div', {
    staticClass: " round  green help"
  }), _vm._v(" "), _c('div', {
    staticClass: "alarm-desc"
  }, [_vm._v("OK, system function is normal")])]), _vm._v(" "), _c('div', {
    staticClass: "alarm-info"
  }, [_c('div', {
    staticClass: " round  yellow help"
  }), _vm._v(" "), _c('div', {
    staticClass: "alarm-desc"
  }, [_vm._v("Warning, system function is not likely to be affected")])]), _vm._v(" "), _c('div', {
    staticClass: "alarm-info"
  }, [_c('div', {
    staticClass: " round  purple help"
  }), _vm._v(" "), _c('div', {
    staticClass: "alarm-desc"
  }, [_vm._v("Alarm, system function is partly affected")])]), _vm._v(" "), _c('div', {
    staticClass: "alarm-info"
  }, [_c('div', {
    staticClass: " round  red help"
  }), _vm._v(" "), _c('div', {
    staticClass: "alarm-desc"
  }, [_vm._v("Blocked , some components of the system are not active ")])]), _vm._v(" "), _c('div', {
    staticClass: "alarm-info"
  }, [_c('div', {
    staticClass: " round  grey help"
  }), _vm._v(" "), _c('div', {
    staticClass: "alarm-desc"
  }, [_vm._v("IP contact lost, might affect system availability (only applicable for multisite networks ) ")])])])
}]}

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference"
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v(" Do you want delete this " + _vm._s(_vm.words.captions) + "?")]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("No")]), _vm._v(" "), (_vm.words.station) ? _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.deleteStation()
      }
    }
  }, [_vm._v("Yes")]) : _vm._e(), _vm._v(" "), (_vm.words.user) ? _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.deleteUser()
      }
    }
  }, [_vm._v("Yes")]) : _vm._e(), _vm._v(" "), (_vm.words.client) ? _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.deleteClient()
      }
    }
  }, [_vm._v("Yes")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: []}

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference"
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v(" Global settings")]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }, [_c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.class_for_first_alarm_timer ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("L1 alarm timer(min)")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number",
      "required": ""
    },
    model: {
      value: (_vm.first_alarm_timer),
      callback: function($$v) {
        _vm.first_alarm_timer = $$v
      },
      expression: "first_alarm_timer"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid integer number from 1 to 1440.")])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.class_for_second_alarm_timer ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("L2 alarm timer(min)")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number",
      "required": ""
    },
    model: {
      value: (_vm.second_alarm_timer),
      callback: function($$v) {
        _vm.second_alarm_timer = $$v
      },
      expression: "second_alarm_timer"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid integer number from 1 to 1440.")])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.class_for_third_alarm_timer ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("L3 alarm timer(min)")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number",
      "required": ""
    },
    model: {
      value: (_vm.third_alarm_timer),
      callback: function($$v) {
        _vm.third_alarm_timer = $$v
      },
      expression: "third_alarm_timer"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid integer number from 1 to 1440.")])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.class_for_zero_alarm_timer ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("IP loss timer(min)")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number",
      "required": ""
    },
    model: {
      value: (_vm.zero_alarm_timer),
      callback: function($$v) {
        _vm.zero_alarm_timer = $$v
      },
      expression: "zero_alarm_timer"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid integer number from 1 to 1440.")])], 1)], 1)], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(!_vm.class_for_first_alarm_timer && !_vm.class_for_second_alarm_timer && !_vm.class_for_third_alarm_timer && !_vm.class_for_zero_alarm_timer)
    },
    on: {
      "click": function($event) {
        _vm.putSettings()
      }
    }
  }, [_vm._v("\n                    Done\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: []}

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference",
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v("Notifications")]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.notifications), function(item) {
    return _c('div', {
      staticClass: "flex-container"
    }, [_c('div', [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', [_c('span', {
      staticClass: "notification",
      on: {
        "click": function($event) {
          item.email_alarm = !item.email_alarm
        }
      }
    }, [(item.email_alarm) ? _c('md-icon', {
      staticClass: "notification-active button",
      attrs: {
        "tabindex": "1"
      }
    }, [_vm._v("mail")]) : _vm._e(), _vm._v(" "), (!item.email_alarm) ? _c('md-icon', {
      staticClass: "notification-passive button",
      attrs: {
        "tabindex": "1"
      }
    }, [_vm._v("mail_outline")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', [_c('md-input-container', [_c('md-select', {
      attrs: {
        "name": "report",
        "id": "report"
      },
      model: {
        value: (item.report),
        callback: function($$v) {
          item.report = $$v
        },
        expression: "item.report"
      }
    }, [_c('md-option', {
      attrs: {
        "value": "never"
      }
    }, [_vm._v("Never")]), _vm._v(" "), _c('md-option', {
      attrs: {
        "value": "weekly"
      }
    }, [_vm._v("Weekly")]), _vm._v(" "), _c('md-option', {
      attrs: {
        "value": "daily"
      }
    }, [_vm._v("Daily")]), _vm._v(" "), _c('md-option', {
      attrs: {
        "value": "monthly"
      }
    }, [_vm._v("Monthly")])], 1)], 1)], 1)])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), _c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.doneNotifacation()
      }
    }
  }, [_vm._v("Save")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-container"
  }, [_c('div'), _vm._v(" "), _c('div', [_vm._v("Notifications")]), _vm._v(" "), _c('div', [_vm._v("Report")])])
}]}

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference",
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v(_vm._s(_vm.words.captions))]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }, [_c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "43",
      "md-flex-medium": "43"
    }
  }, [_c('md-input-container', {
    class: [_vm.validate ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("IP address")]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.ip_address),
      callback: function($$v) {
        _vm.ip_address = $$v
      },
      expression: "ip_address"
    }
  }), _vm._v(" "), (_vm.required_field) ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Required.")]) : _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid IP address.")])], 1)], 1), _vm._v(" "), _c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "43",
      "md-flex-medium": "43"
    }
  }, [_c('md-input-container', {
    class: [!_vm.class_for_time ? _vm.activeClass : 'md-input-invalid']
  }, [_c('label', [_vm._v("Update time(sec)")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "number",
      "required": ""
    },
    model: {
      value: (_vm.update_time),
      callback: function($$v) {
        _vm.update_time = $$v
      },
      expression: "update_time"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid integer number.")])], 1)], 1)], 1), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('md-icon', {
    staticClass: "select-label-icon"
  }, [_vm._v("\n                        business\n                    ")]), _vm._v(" "), _c('span', {
    staticClass: "select-label-text"
  }, [_vm._v("Add to client")])], 1), _vm._v(" "), (_vm.clients) ? _c('div', {
    attrs: {
      "id": "select"
    }
  }, [(_vm.clients) ? _c('v-select', {
    ref: "select",
    attrs: {
      "options": _vm.clients,
      "id": 'id',
      "label2": 'name'
    },
    model: {
      value: (_vm.selected_client),
      callback: function($$v) {
        _vm.selected_client = $$v
      },
      expression: "selected_client"
    }
  }) : _vm._e()], 1) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), (_vm.words.create_btn) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate && !_vm.class_for_time && _vm.done)
    },
    on: {
      "click": function($event) {
        _vm.createStation()
      }
    }
  }, [_vm._v("Add\n                ")]) : _vm._e(), _vm._v(" "), (_vm.words.updata_btn) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate && !_vm.class_for_time)
    },
    on: {
      "click": function($event) {
        _vm.updateStation()
      }
    }
  }, [_vm._v("Edit\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: []}

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "dropdown v-select",
    class: _vm.dropdownClasses,
    attrs: {
      "dir": _vm.dir
    }
  }, [_c('div', {
    ref: "toggle",
    class: ['dropdown-toggle', 'clearfix'],
    on: {
      "mousedown": function($event) {
        $event.preventDefault();
        _vm.toggleDropdown($event)
      }
    }
  }, [_c('span', _vm._l((_vm.valueAsArray), function(option) {
    return _c('span', {
      key: option.index,
      staticClass: "selected-tag"
    }, [_vm._t("selected-option", [_vm._v("\n                    " + _vm._s(_vm.getOptionLabel2(option)) + "\n            ")], null, option), _vm._v(" "), (_vm.multiple) ? _c('button', {
      staticClass: "close",
      attrs: {
        "disabled": _vm.disabled,
        "type": "button",
        "aria-label": "Remove option"
      },
      on: {
        "click": function($event) {
          _vm.deselect(option)
        }
      }
    }, [_c('span', {
      attrs: {
        "aria-hidden": "true"
      }
    }, [_vm._v("×")])]) : _vm._e()], 2)
  })), _vm._v(" "), _c('div', [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.search),
      expression: "search"
    }],
    ref: "search",
    staticClass: "form-control",
    style: ({
      width: _vm.isValueEmpty ? '100%' : '100%'
    }),
    attrs: {
      "type": "search",
      "autocomplete": "false",
      "disabled": _vm.disabled,
      "placeholder": _vm.searchPlaceholder,
      "tabindex": _vm.tabindex,
      "readonly": !_vm.searchable,
      "id": _vm.inputId,
      "aria-label": "Search for option"
    },
    domProps: {
      "value": (_vm.search)
    },
    on: {
      "keydown": [function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "delete", [8, 46])) { return null; }
        _vm.maybeDeleteValue($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "up", 38)) { return null; }
        $event.preventDefault();
        _vm.typeAheadUp($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "down", 40)) { return null; }
        $event.preventDefault();
        _vm.typeAheadDown($event)
      }, function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        $event.preventDefault();
        _vm.typeAheadSelect($event)
      }],
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.onEscape($event)
      },
      "blur": _vm.onSearchBlur,
      "focus": _vm.onSearchFocus,
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.search = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showClearButton),
      expression: "showClearButton"
    }],
    staticClass: "clear",
    attrs: {
      "disabled": _vm.disabled,
      "type": "button",
      "title": "Clear selection"
    },
    on: {
      "click": _vm.clearSelection
    }
  }, [_c('span', {
    attrs: {
      "aria-hidden": "true"
    }
  }, [_vm._v("×")])]), _vm._v(" "), (!_vm.noDrop) ? _c('i', {
    ref: "openIndicator",
    staticClass: "open-indicator",
    attrs: {
      "role": "presentation"
    }
  }) : _vm._e(), _vm._v(" "), _vm._t("spinner", [_c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.mutableLoading),
      expression: "mutableLoading"
    }],
    staticClass: "spinner"
  }, [_vm._v("Loading...")])])], 2), _vm._v(" "), _c('transition', {
    attrs: {
      "name": _vm.transition
    }
  }, [(_vm.dropdownOpen) ? _c('ul', {
    ref: "dropdownMenu",
    staticClass: "dropdown-menu",
    style: ({
      'max-height': _vm.maxHeight
    })
  }, [_vm._l((_vm.filteredOptions), function(option, index) {
    return (option) ? _c('li', {
      key: index,
      class: {
        active: _vm.isOptionSelected(option), highlight: index === _vm.typeAheadPointer
      },
      on: {
        "mouseover": function($event) {
          _vm.typeAheadPointer = index
        }
      }
    }, [_c('a', {
      on: {
        "mousedown": function($event) {
          $event.preventDefault();
          _vm.select(option)
        }
      }
    }, [_vm._t("option", [_vm._v("\n                            " + _vm._s(_vm.getOptionLabel2(option)) + "\n                            ")], null, option)], 2)]) : _vm._e()
  }), _vm._v(" "), (!_vm.filteredOptions.length) ? _c('li', {
    staticClass: "no-options"
  }, [_vm._t("no-options", [_vm._v("Sorry, no matching options.")])], 2) : _vm._e()], 2) : _vm._e()])], 1)
},staticRenderFns: []}

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference",
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v(_vm._s(_vm.words.captions))]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }, [_c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [_vm.validate_login ? _vm.activeClass : 'md-input-invalid']
  }, [_c('md-icon', [_vm._v("mail")]), _vm._v(" "), _c('label', [_vm._v("Email")]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.login),
      callback: function($$v) {
        _vm.login = $$v
      },
      expression: "login"
    }
  }), _vm._v(" "), (_vm.error_message) ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v(_vm._s(_vm.error_message))]) : _c('div', [(_vm.required_field) ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Required.")]) : _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid email address.")])])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [_vm.validate_phone ? _vm.activeClass : 'md-input-invalid']
  }, [_c('md-icon', [_vm._v("phone")]), _vm._v(" "), _c('label', [_vm._v("Phone")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "text"
    },
    model: {
      value: (_vm.phone),
      callback: function($$v) {
        _vm.phone = $$v
      },
      expression: "phone"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid phone number.")])], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', [_c('md-icon', [_vm._v("face")]), _vm._v(" "), _c('label', [_vm._v("Name")]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.userObj.name),
      callback: function($$v) {
        _vm.userObj.name = $$v
      },
      expression: "userObj.name"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticStyle: {
      "margin-top": "14px"
    },
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('div', {
    staticClass: "custom-switch",
    class: {
      'custom-active': !_vm.isAdmin
    }
  }, [_vm._v("\n                                User\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "custom-switch"
  }, [_c('md-switch', {
    staticClass: "md-primary",
    model: {
      value: (_vm.isAdmin),
      callback: function($$v) {
        _vm.isAdmin = $$v
      },
      expression: "isAdmin"
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "custom-switch",
    class: {
      'custom-active': _vm.isAdmin
    }
  }, [_vm._v("\n                                Admin\n                            ")])])], 1)], 1), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('md-icon', {
    staticClass: "select-label-icon"
  }, [_vm._v("\n                        business\n                    ")]), _vm._v(" "), _c('span', {
    staticClass: "select-label-text",
    class: [!_vm.isAdmin ? _vm.activeClass : 'disabled-text']
  }, [_vm._v("Add to networks")])], 1), _vm._v(" "), _c('div', [_c('v-select', {
    ref: "select",
    attrs: {
      "multiple": "",
      "options": _vm.clients,
      "value": _vm.clients,
      "id": 'id',
      "label": 'name',
      "disabled": _vm.isAdmin,
      "label2": 'name'
    },
    on: {
      "update:value": function($event) {
        _vm.clients = $event
      }
    },
    model: {
      value: (_vm.selected_clients),
      callback: function($$v) {
        _vm.selected_clients = $$v
      },
      expression: "selected_clients"
    }
  })], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog('dialog2')
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), (_vm.words.create) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate_phone && _vm.validate_login && _vm.done)
    },
    on: {
      "click": function($event) {
        _vm.createUser('dialog2')
      }
    }
  }, [_vm._v("Add\n                ")]) : _vm._e(), _vm._v(" "), (_vm.words.update) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate_phone && _vm.validate_login && _vm.done)
    },
    on: {
      "click": function($event) {
        _vm.updateUser('dialog2')
      }
    }
  }, [_vm._v("Edit\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: []}

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    on: {
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.closeModals()
      }
    }
  }, [_c('vue-topprogress', {
    ref: "topProgress"
  }), _vm._v(" "), (_vm.nav_bar) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('header-main')], 1) : _vm._e(), _vm._v(" "), _c('router-view', {
    directives: [{
      name: "title",
      rawName: "v-title",
      value: (_vm.title),
      expression: "title"
    }],
    staticClass: "container"
  }), _vm._v(" "), _c('md-chip', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.success),
      expression: "success"
    }],
    staticClass: "success-confirm"
  }, [_c('md-icon', [_vm._v("check")]), _vm._v(" "), _c('span', {
    staticClass: "info-text"
  }, [_vm._v("  success ")])], 1), _vm._v(" "), _c('md-chip', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.error),
      expression: "error"
    }],
    staticClass: "error-confirm"
  }, [_c('md-icon', [_vm._v("error")]), _vm._v(" "), _c('span', {
    staticClass: "info-text"
  }, [_vm._v("  error ")])], 1), _vm._v(" "), (_vm.nav_bar && _vm.admin) ? _c('md-speed-dial', {
    staticClass: " floaty",
    attrs: {
      "md-open": "hover",
      "md-theme": "purple"
    }
  }, [_c('md-button', {
    staticClass: "md-fab",
    staticStyle: {
      "background": "#1452ff"
    },
    attrs: {
      "md-fab-trigger": ""
    },
    on: {
      "click": function($event) {
        _vm.CreateStations()
      }
    }
  }, [_c('md-icon', {
    attrs: {
      "md-icon-morph": ""
    }
  }, [_vm._v("wifi")]), _vm._v(" "), _c('md-icon', [_vm._v("add")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary md-mini md-clean floaty-list-item ",
    staticStyle: {
      "background": "rebeccapurple"
    },
    on: {
      "click": function($event) {
        _vm.CreateUsers()
      }
    }
  }, [_c('md-icon', [_vm._v("people")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-fab md-primary md-mini md-clean",
    staticStyle: {
      "background": "forestgreen"
    },
    on: {
      "click": function($event) {
        _vm.CreateClients()
      }
    }
  }, [_c('md-icon', [_vm._v("business")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.modalStations) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('popup-stations')], 1) : _vm._e(), _vm._v(" "), (_vm.modalUsers) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('popup-users')], 1) : _vm._e(), _vm._v(" "), (_vm.modalDelete) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('popup-delete')], 1) : _vm._e(), _vm._v(" "), (_vm.modalClients) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('popup-clients')], 1) : _vm._e(), _vm._v(" "), (_vm.modalNotifications) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('notifications')], 1) : _vm._e(), _vm._v(" "), (_vm.modalLogs) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('logs')], 1) : _vm._e(), _vm._v(" "), (_vm.modalSettings) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('settings')], 1) : _vm._e(), _vm._v(" "), (_vm.modalHelp) ? _c('transition', {
    attrs: {
      "name": "fade"
    }
  }, [_c('help')], 1) : _vm._e()], 1)
},staticRenderFns: []}

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticStyle: {
      "margin-top": "5%"
    }
  }, [_c('div', {
    staticStyle: {
      "height": "3px"
    }
  }, [_c('vue-topprogress', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.start),
      expression: "start"
    }],
    ref: "topProgress_table",
    staticStyle: {
      "display": "block"
    },
    attrs: {
      "id": "topProgress_table"
    }
  })], 1), _vm._v(" "), _c('md-table', [_c('md-table-header', [_c('md-table-row', [_c('md-table-head', [_vm._v("Network")]), _vm._v(" "), _c('md-table-head', [_vm._v("Node")]), _vm._v(" "), _c('md-table-head', [_vm._v("Common")]), _vm._v(" "), _c('md-table-head', [_vm._v("Subscriber")]), _vm._v(" "), _c('md-table-head', [_vm._v("Radio ")]), _vm._v(" "), _c('md-table-head', [_vm._v("VoiceGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("PcktGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("AppGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("TermGW ")]), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head') : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head') : _vm._e(), _vm._v(" "), _c('md-table-head', {
    staticStyle: {
      "padding-left": "0"
    }
  }, [_c('span', {
    staticClass: "show-all btn-show-hide",
    on: {
      "click": _vm.allStationsHideShow
    }
  }, [(_vm.showAll) ? _c('span', [_vm._v("    show all "), (_vm.showAll) ? _c('md-icon', {
    staticStyle: {
      "margin-bottom": "2px"
    }
  }, [_vm._v("visibility")]) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (!_vm.showAll) ? _c('span', [_vm._v("  hide all  "), _c('md-icon', {
    staticStyle: {
      "margin-bottom": "3px"
    }
  }, [_vm._v("visibility_off")])], 1) : _vm._e()])])], 1)], 1), _vm._v(" "), _vm._l((_vm.clients), function(item, index) {
    return _c('tbody', {
      key: index,
      staticClass: " md-table-body ",
      class: [!item.more ? _vm.activeClass : 'castom-tb-body'],
      on: {
        "dblclick": function($event) {
          _vm.addProperty(index)
        }
      }
    }, [_c('md-table-row', {
      staticClass: "cust-md-table-row"
    }, [_c('md-table-cell', [_c('span', {
      staticStyle: {
        "text-transform": "capitalize"
      }
    }, [_vm._v(_vm._s(item.client_name))])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.node_alarm
    }, [(!item.node_alarm) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.common
    }, [(!item.common) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.subscriber_alarm
    }, [(!item.subscriber_alarm) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.radio
    }, [(!item.radio) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.voice
    }, [(!item.voice) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.pckt
    }, [(!item.pckt) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: " round",
      class: item.app
    }, [(!item.app) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
      staticClass: "round",
      class: item.term
    }, [(!item.term) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', [(item.client_id) ? _c('md-button', {
      on: {
        "click": function($event) {
          _vm.EditClients(item.client_id)
        }
      }
    }, [_c('md-icon', [_vm._v("edit")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', [(item.client_id) ? _c('md-button', {
      staticStyle: {
        "padding-right": "24px"
      },
      on: {
        "click": function($event) {
          _vm.DeleteClients(index, item.client_id)
        }
      }
    }, [_c('md-icon', [_vm._v("delete")])], 1) : _vm._e()], 1) : _vm._e(), _vm._v(" "), _c('md-table-cell', {
      staticStyle: {
        "padding-right": "5px"
      }
    }, [_c('md-button', {
      staticStyle: {
        "padding": "0 10px !important",
        "width": "unset",
        "margin-right": "10px"
      },
      on: {
        "click": function($event) {
          _vm.addProperty(index)
        }
      }
    }, [_c('span', {
      staticClass: "fnt-10"
    }, [_vm._v("  NODES")]), _vm._v(" "), (!item.more) ? _c('md-icon', [_vm._v("expand_more")]) : _vm._e(), _vm._v(" "), (item.more) ? _c('md-icon', [_vm._v("expand_less")]) : _vm._e()], 1)], 1)], 1), _vm._v(" "), _c('transition', {
      attrs: {
        "name": "drop-down"
      }
    }, [(item.more) ? _c('md-table-row', {
      staticClass: "box"
    }, [_c('md-table-cell', {
      attrs: {
        "colspan": "20"
      }
    }, [_c('md-table', {
      staticClass: "sub-table",
      staticStyle: {
        "margin-bottom": "10px"
      }
    }, [_c('md-table-header', [_c('md-table-row', {
      staticClass: "sub-table-head"
    }, [_c('md-table-head', [_vm._v("Node nr.")]), _vm._v(" "), _c('md-table-head', [_vm._v("BSC nr.")]), _vm._v(" "), _c('md-table-head', [_vm._v("Description ")]), _vm._v(" "), _c('md-table-head', [_vm._v("Node")]), _vm._v(" "), _c('md-table-head', [_vm._v("Common")]), _vm._v(" "), _c('md-table-head', [_vm._v("Subscriber")]), _vm._v(" "), _c('md-table-head', [_vm._v("Radio ")]), _vm._v(" "), _c('md-table-head', [_vm._v("VoiceGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("PcktGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("AppGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("TermGW ")]), _vm._v(" "), _c('md-table-head', [_vm._v("HW type\t ")]), _vm._v(" "), _c('md-table-head', [_vm._v("Version ")]), _vm._v(" "), _c('md-table-head', [_vm._v("Active ")]), _vm._v(" "), _c('md-table-head'), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head') : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-head') : _vm._e()], 1)], 1), _vm._v(" "), _vm._l((item.stations), function(sub_item, index) {
      return _c('md-table-body', {
        key: index
      }, [_c('md-table-row', [_c('md-table-cell', [_c('div', {
        staticClass: "sub-table-rows"
      }, [_vm._v(_vm._s(sub_item.node_number) + "\n                                            "), (!sub_item.node_number) ? _c('span', [_vm._v("—")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: "sub-table-rows"
      }, [_vm._v(_vm._s(sub_item.polled_number) + "\n                                            "), (!sub_item.polled_number) ? _c('span', [_vm._v("—")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: "sub-table-rows"
      }, [_vm._v(_vm._s(sub_item.description) + "\n                                            "), (!sub_item.description) ? _c('span', [_vm._v("—")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.node_alarm
      }, [(!sub_item.node_alarm) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.common
      }, [(!sub_item.common) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.subscriber_alarm
      }, [(!sub_item.subscriber_alarm) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.radio
      }, [(!sub_item.radio) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.voice
      }, [(!sub_item.voice) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.pckt
      }, [(!sub_item.pckt) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: " round",
        class: sub_item.app
      }, [(!sub_item.app) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: "round",
        class: sub_item.term
      }, [(!sub_item.term) ? _c('span', [_vm._v(" —")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: "sub-table-rows"
      }, [_vm._v(_vm._s(sub_item.hardware_type) + "\n                                            "), (!sub_item.hardware_type) ? _c('span', [_vm._v("—")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [_c('div', {
        staticClass: "sub-table-rows"
      }, [_vm._v(_vm._s(sub_item.software_version) + "\n                                            "), (!sub_item.software_version) ? _c('span', [_vm._v("—")]) : _vm._e()])]), _vm._v(" "), _c('md-table-cell', [(sub_item.status) ? _c('div', {
        staticClass: " round green"
      }) : _vm._e(), _vm._v(" "), (!sub_item.status) ? _c('span', [_vm._v("—")]) : _vm._e()]), _vm._v(" "), _c('md-table-cell', {
        staticStyle: {
          "padding-right": "12px"
        }
      }, [_c('md-button', {
        on: {
          "click": function($event) {
            _vm.$parent.openLogs(sub_item.id)
          }
        }
      }, [_c('md-icon', [_vm._v("description")])], 1)], 1), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', [_c('md-button', {
        on: {
          "click": function($event) {
            _vm.EditStations(sub_item.id)
          }
        }
      }, [_c('md-icon', [_vm._v("edit")])], 1)], 1) : _vm._e(), _vm._v(" "), (_vm.$parent.admin) ? _c('md-table-cell', {
        staticStyle: {
          "padding-right": "24px"
        }
      }, [_c('md-button', {
        staticStyle: {
          "padding-right": "24px"
        },
        on: {
          "click": function($event) {
            _vm.DeleteStations(index, sub_item.id)
          }
        }
      }, [_c('md-icon', [_vm._v("delete")])], 1)], 1) : _vm._e()], 1)], 1)
    })], 2)], 1)], 1) : _vm._e()], 1)], 1)
  })], 2)], 1), _vm._v(" "), (_vm.empty && _vm.$parent.admin) ? _c('div', [_vm._v(" List of stations is empty, "), _c('span', {
    staticClass: "empty-list",
    on: {
      "click": function($event) {
        _vm.$parent.CreateStations()
      }
    }
  }, [_vm._v("click this and create one ")])]) : _vm._e(), _vm._v(" "), (_vm.empty && !_vm.$parent.admin) ? _c('div', [_vm._v("\n        You was not assigned to any Base Station yet. Try again later or contact administrator.\n    ")]) : _vm._e()])
},staticRenderFns: []}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('md-whiteframe', {
    staticClass: "main-toolbar",
    attrs: {
      "md-elevation": "1"
    }
  }, [_c('md-toolbar', [_c('div', {
    staticClass: "md-toolbar-container  container"
  }, [_c('div', {
    staticClass: "md-icon-button"
  }, [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/stations"
    }
  }, [_c('img', {
    staticClass: "logo-image",
    attrs: {
      "src": __webpack_require__(54)
    }
  })])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "display": "flex",
      "flex-wrap": "wrap",
      "align-items": "center"
    }
  }, [_c('div', {
    staticClass: " round status-header",
    class: _vm.status
  }), _vm._v(" "), _c('div', {
    staticClass: "md-title title"
  }, [_vm._v("\n                        OVERALL STATUS\n                    ")])]), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/"
    }
  }, [_c('md-button', {
    staticClass: "nav-item-text",
    on: {
      "click": function($event) {
        _vm.$parent.openHelp();
      }
    }
  }, [_c('span', {
    staticClass: "header-text"
  }, [_c('md-icon', [_vm._v(" help_outline")]), _vm._v(" "), _c('span', [_vm._v("  help")])], 1)])], 1), _vm._v(" "), _c('span', {
    staticStyle: {
      "flex": "1"
    }
  }), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/stations"
    }
  }, [_c('md-button', {
    staticClass: "nav-item-text"
  }, [_c('span', {
    staticClass: "header-text"
  }, [_c('md-icon', [_vm._v(" wifi")]), _vm._v(" "), _c('span', [_vm._v("  NETWORKS")])], 1)])], 1), _vm._v(" "), (_vm.$parent.admin) ? _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/users"
    }
  }, [_c('md-button', {
    staticClass: "nav-item-text"
  }, [_c('span', {
    staticClass: "header-text"
  }, [_c('md-icon', [_vm._v("people")]), _vm._v(" "), _c('span', [_vm._v(" Users")])], 1)])], 1) : _vm._e(), _vm._v(" "), _c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": ""
    }
  }, [_c('md-menu', {
    ref: "menu",
    attrs: {
      "md-offset-x": 194,
      "md-offset-y": "72"
    }
  }, [_c('md-button', {
    attrs: {
      "md-menu-trigger": ""
    }
  }, [_c('md-avatar', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(53),
      "alt": "People"
    }
  })])], 1), _vm._v(" "), _c('md-menu-content', [_c('md-menu-item', [_c('router-link', {
    staticClass: "nav-item",
    attrs: {
      "to": "/password/change"
    }
  }, [_c('md-button', {
    staticClass: "btn-menu"
  }, [_c('md-icon', [_vm._v("enhanced_encryption")]), _vm._v(" change password\n                                    ")], 1)], 1)], 1), _vm._v(" "), _c('md-menu-item', [_c('router-link', {
    staticClass: "nav-item ",
    staticStyle: {
      "color": "black"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('md-button', {
    staticClass: "btn-menu",
    on: {
      "click": function($event) {
        _vm.$parent.openNotifications();
        _vm.$refs.menu.close()
      }
    }
  }, [_c('md-icon', [_vm._v("notifications")]), _vm._v("    notifications\n                                    ")], 1)], 1)], 1), _vm._v(" "), (_vm.$parent.admin) ? _c('md-menu-item', [_c('router-link', {
    staticClass: "nav-item ",
    staticStyle: {
      "color": "black"
    },
    attrs: {
      "to": "/"
    }
  }, [_c('md-button', {
    staticClass: "btn-menu",
    on: {
      "click": function($event) {
        _vm.$parent.openSettings();
        _vm.$refs.menu.close()
      }
    }
  }, [_c('md-icon', [_vm._v("settings")]), _vm._v("  global  settings\n                                    ")], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c('md-menu-item', [_c('router-link', {
    staticClass: "nav-item",
    staticStyle: {
      "color": "black"
    },
    attrs: {
      "to": "/login"
    }
  }, [_c('md-button', {
    staticClass: "nav-item btn-menu",
    on: {
      "click": function($event) {
        _vm.$parent.log_out()
      }
    }
  }, [_c('md-icon', [_vm._v("power_settings_new")]), _vm._v(" logout\n                                    ")], 1)], 1)], 1)], 1)], 1)], 1)], 1)])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_page"
  }, [_c('div', {
    staticClass: "container"
  }, [(!_vm.no_validate_tokint) ? _c('form', {
    staticClass: "form_login",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.Change_password()
      }
    }
  }, [_c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100",
      "md-flex-large": "100",
      "md-flex-xlarge": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.required_pass ? _vm.activeClass : 'md-input-invalid'],
    attrs: {
      "md-has-password": ""
    }
  }, [_c('md-icon', [_vm._v("lock")]), _vm._v(" "), _c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("required")])], 1)], 1), _vm._v(" "), _c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100",
      "md-flex-large": "100",
      "md-flex-xlarge": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.validate_confirm_password ? _vm.activeClass : 'md-input-invalid'],
    attrs: {
      "md-has-password": ""
    }
  }, [_c('md-icon', [_vm._v("lock")]), _vm._v(" "), _c('label', [_vm._v("Confirm password")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.confirm_password),
      callback: function($$v) {
        _vm.confirm_password = $$v
      },
      expression: "confirm_password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Passwords must match")])], 1), _vm._v(" "), (_vm.error_login) ? _c('span', {
    staticClass: "md-error",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.error_login))]) : _vm._e()], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-accent",
    attrs: {
      "type": "submit",
      "disabled": _vm.validate_confirm_password && !_vm.required_pass || !_vm.token
    }
  }, [_vm._v(" send\n            ")])], 1) : _c('div', {
    staticClass: "form_login",
    staticStyle: {
      "text-align": "center",
      "border": "1px solid red",
      "border-radius": "5px"
    }
  }, [_vm._v("\n            Your token is expired, try again or contact administrator to change your credentials.\n\n        ")])])])
},staticRenderFns: []}

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.fonts), function(i) {
    return _c('div', {
      staticStyle: {
        "float": "right"
      }
    }, [_c('md-icon', [_vm._v(_vm._s(i))])], 1)
  }))
},staticRenderFns: []}

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference"
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v("Logs\n            ")]), _vm._v(" "), (!_vm.logs[0]) ? _c('div', {
    staticClass: "md-dialog-content"
  }, [_vm._v("\n                Logs are empty\n            ")]) : _c('div', {
    staticClass: "md-dialog-content"
  }, [_vm._m(0), _vm._v(" "), _vm._l((_vm.logs), function(item) {
    return _c('div', {
      staticClass: "flex-container"
    }, [_c('div', {
      staticStyle: {
        "width": "100%"
      }
    }, [_vm._v("\n                            " + _vm._s(item.time) + "\n                        ")]), _vm._v(" "), _c('div', {
      staticStyle: {
        "width": "100%"
      }
    }, [_vm._v("\n                            " + _vm._s(item.text) + "\n\n                        ")])])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Cancel")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex-container"
  }, [_c('div', {
    staticStyle: {
      "width": "100%",
      "font-weight": "500"
    }
  }, [_vm._v("Date")]), _vm._v(" "), _c('div', {
    staticStyle: {
      "width": "100%",
      "font-weight": "500"
    }
  }, [_vm._v("Log")])])
}]}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login_page"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('form', {
    staticClass: "form_login",
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.Log_in()
      }
    }
  }, [_vm._m(0), _vm._v(" "), _c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100",
      "md-flex-large": "100",
      "md-flex-xlarge": "100"
    }
  }, [_c('md-input-container', {
    class: [_vm.validate_login ? _vm.activeClass : 'md-input-invalid']
  }, [_c('md-icon', [_vm._v("mail")]), _vm._v(" "), _c('label', [_vm._v("Email")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "email"
    },
    model: {
      value: (_vm.login),
      callback: function($$v) {
        _vm.login = $$v
      },
      expression: "login"
    }
  }), _vm._v(" "), (_vm.required_field) ? _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Required.")]) : _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Please enter valid email address.")])], 1)], 1), _vm._v(" "), _c('md-layout', {
    staticClass: "pad",
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100",
      "md-flex-large": "100",
      "md-flex-xlarge": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.required_pass ? _vm.activeClass : 'md-input-invalid'],
    attrs: {
      "md-has-password": ""
    }
  }, [_c('md-icon', [_vm._v("lock")]), _vm._v(" "), _c('label', [_vm._v("Password")]), _vm._v(" "), _c('md-input', {
    attrs: {
      "type": "password"
    },
    model: {
      value: (_vm.password),
      callback: function($$v) {
        _vm.password = $$v
      },
      expression: "password"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Required.")])], 1), _vm._v(" "), (_vm.error_login) ? _c('span', {
    staticClass: "md-error",
    staticStyle: {
      "color": "red"
    }
  }, [_vm._v(_vm._s(_vm.error_login))]) : _vm._e()], 1)], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-raised md-accent",
    attrs: {
      "type": "submit",
      "disabled": !_vm.validate_login && !_vm.required_pass
    }
  }, [_vm._v("\n                sign in\n            ")])], 1)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticStyle: {
      "text-align": "center"
    }
  }, [_c('img', {
    staticClass: "logo-image",
    attrs: {
      "src": __webpack_require__(55)
    }
  })])
}]}

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "md-dialog-container md-theme-default md-active",
    attrs: {
      "tabindex": "0"
    }
  }, [_c('div', {
    staticClass: "md-dialog md-reference cust-height",
    staticStyle: {
      "height": "100%"
    }
  }, [_c('div', {
    staticClass: "md-dialog-title md-title"
  }, [_vm._v(_vm._s(_vm.words.captions))]), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-content"
  }, [_c('md-layout', {
    attrs: {
      "md-gutter": ""
    }
  }, [_c('md-layout', {
    attrs: {
      "md-flex-xsmall": "100",
      "md-flex-small": "100",
      "md-flex-medium": "100"
    }
  }, [_c('md-input-container', {
    class: [!_vm.required_field ? _vm.activeClass : 'md-input-invalid'],
    staticStyle: {
      "margin-bottom": "12px"
    }
  }, [_c('md-icon', [_vm._v("business")]), _vm._v(" "), _c('label', [_vm._v("Network name")]), _vm._v(" "), _c('md-input', {
    model: {
      value: (_vm.nameClient),
      callback: function($$v) {
        _vm.nameClient = $$v
      },
      expression: "nameClient"
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "md-error"
  }, [_vm._v("Required.")])], 1)], 1)], 1), _vm._v(" "), _c('h3', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('md-icon', {
    staticClass: "select-label-icon"
  }, [_vm._v("\n                        people\n                    ")]), _vm._v(" "), _c('span', {
    staticClass: "select-label-text"
  }, [_vm._v("Users")])], 1), _vm._v(" "), _c('div', {
    staticStyle: {
      "margin-bottom": "24px"
    }
  }, [_c('v-select', {
    ref: "select",
    attrs: {
      "multiple": "",
      "options": _vm.users,
      "value": _vm.users,
      "id": 'user_id',
      "label": 'name',
      "label2": 'login'
    },
    on: {
      "update:value": function($event) {
        _vm.users = $event
      }
    },
    model: {
      value: (_vm.selected_obj_users),
      callback: function($$v) {
        _vm.selected_obj_users = $$v
      },
      expression: "selected_obj_users"
    }
  })], 1), _vm._v(" "), (_vm.words.updata) ? _c('div', [_c('h3', {
    staticStyle: {
      "margin-bottom": "0"
    }
  }, [_c('md-icon', {
    staticClass: "select-label-icon"
  }, [_vm._v("\n                            wifi\n                        ")]), _vm._v(" "), _c('span', {
    staticClass: "select-label-text"
  }, [_vm._v("Nodes")])], 1), _vm._v(" "), (_vm.stations) ? _c('div', [_c('v-select', {
    ref: "select",
    attrs: {
      "multiple": "",
      "options": _vm.stations,
      "value": _vm.stations,
      "id": 'id',
      "label": 'software_version',
      "label2": 'ip_address'
    },
    on: {
      "update:value": function($event) {
        _vm.stations = $event
      }
    },
    model: {
      value: (_vm.selected_stations),
      callback: function($$v) {
        _vm.selected_stations = $$v
      },
      expression: "selected_stations"
    }
  })], 1) : _vm._e()]) : _vm._e()], 1), _vm._v(" "), _c('div', {
    staticClass: "md-dialog-actions"
  }, [_c('md-button', {
    staticClass: "md-primary",
    on: {
      "click": function($event) {
        _vm.closeDialog()
      }
    }
  }, [_vm._v("Cancel")]), _vm._v(" "), (_vm.words.create) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate && !_vm.class_for_time && _vm.done)
    },
    on: {
      "click": function($event) {
        _vm.createClient()
      }
    }
  }, [_vm._v("add\n                ")]) : _vm._e(), _vm._v(" "), (_vm.words.updata) ? _c('md-button', {
    staticClass: "md-primary",
    attrs: {
      "disabled": !(_vm.validate && !_vm.class_for_time)
    },
    on: {
      "click": function($event) {
        _vm.updateClient()
      }
    }
  }, [_vm._v("edit\n                ")]) : _vm._e()], 1)]), _vm._v(" "), _c('div', {
    staticClass: "md-backdrop md-dialog-backdrop md-active"
  })])])
},staticRenderFns: []}

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[33]);
//# sourceMappingURL=app.e5286a780b1416bfa6ac.js.map