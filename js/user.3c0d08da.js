(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"00d8":function(t,e){(function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,e){return t<<e|t>>>32-e},rotr:function(t,e){return t<<32-e|t>>>e},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var e=0;e<t.length;e++)t[e]=r.endian(t[e]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],r=0,n=0;r<t.length;r++,n+=8)e[n>>>5]|=t[r]<<24-n%32;return e},wordsToBytes:function(t){for(var e=[],r=0;r<32*t.length;r+=8)e.push(t[r>>>5]>>>24-r%32&255);return e},bytesToHex:function(t){for(var e=[],r=0;r<t.length;r++)e.push((t[r]>>>4).toString(16)),e.push((15&t[r]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],r=0;r<t.length;r+=2)e.push(parseInt(t.substr(r,2),16));return e},bytesToBase64:function(t){for(var r=[],n=0;n<t.length;n+=3)for(var a=t[n]<<16|t[n+1]<<8|t[n+2],i=0;i<4;i++)8*n+6*i<=8*t.length?r.push(e.charAt(a>>>6*(3-i)&63)):r.push("=");return r.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var r=[],n=0,a=0;n<t.length;a=++n%4)0!=a&&r.push((e.indexOf(t.charAt(n-1))&Math.pow(2,-2*a+8)-1)<<2*a|e.indexOf(t.charAt(n))>>>6-2*a);return r}};t.exports=r})()},"044b":function(t,e){function r(t){return!!t.constructor&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"===typeof t.readFloatLE&&"function"===typeof t.slice&&r(t.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},6821:function(t,e,r){(function(){var e=r("00d8"),n=r("9a634").utf8,a=r("044b"),i=r("9a634").bin,o=function(t,r){t.constructor==String?t=r&&"binary"===r.encoding?i.stringToBytes(t):n.stringToBytes(t):a(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||t.constructor===Uint8Array||(t=t.toString());for(var s=e.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,p=-1732584194,f=271733878,d=0;d<s.length;d++)s[d]=16711935&(s[d]<<8|s[d]>>>24)|4278255360&(s[d]<<24|s[d]>>>8);s[c>>>5]|=128<<c%32,s[14+(c+64>>>9<<4)]=c;var g=o._ff,m=o._gg,h=o._hh,v=o._ii;for(d=0;d<s.length;d+=16){var b=l,y=u,T=p,C=f;l=g(l,u,p,f,s[d+0],7,-680876936),f=g(f,l,u,p,s[d+1],12,-389564586),p=g(p,f,l,u,s[d+2],17,606105819),u=g(u,p,f,l,s[d+3],22,-1044525330),l=g(l,u,p,f,s[d+4],7,-176418897),f=g(f,l,u,p,s[d+5],12,1200080426),p=g(p,f,l,u,s[d+6],17,-1473231341),u=g(u,p,f,l,s[d+7],22,-45705983),l=g(l,u,p,f,s[d+8],7,1770035416),f=g(f,l,u,p,s[d+9],12,-1958414417),p=g(p,f,l,u,s[d+10],17,-42063),u=g(u,p,f,l,s[d+11],22,-1990404162),l=g(l,u,p,f,s[d+12],7,1804603682),f=g(f,l,u,p,s[d+13],12,-40341101),p=g(p,f,l,u,s[d+14],17,-1502002290),u=g(u,p,f,l,s[d+15],22,1236535329),l=m(l,u,p,f,s[d+1],5,-165796510),f=m(f,l,u,p,s[d+6],9,-1069501632),p=m(p,f,l,u,s[d+11],14,643717713),u=m(u,p,f,l,s[d+0],20,-373897302),l=m(l,u,p,f,s[d+5],5,-701558691),f=m(f,l,u,p,s[d+10],9,38016083),p=m(p,f,l,u,s[d+15],14,-660478335),u=m(u,p,f,l,s[d+4],20,-405537848),l=m(l,u,p,f,s[d+9],5,568446438),f=m(f,l,u,p,s[d+14],9,-1019803690),p=m(p,f,l,u,s[d+3],14,-187363961),u=m(u,p,f,l,s[d+8],20,1163531501),l=m(l,u,p,f,s[d+13],5,-1444681467),f=m(f,l,u,p,s[d+2],9,-51403784),p=m(p,f,l,u,s[d+7],14,1735328473),u=m(u,p,f,l,s[d+12],20,-1926607734),l=h(l,u,p,f,s[d+5],4,-378558),f=h(f,l,u,p,s[d+8],11,-2022574463),p=h(p,f,l,u,s[d+11],16,1839030562),u=h(u,p,f,l,s[d+14],23,-35309556),l=h(l,u,p,f,s[d+1],4,-1530992060),f=h(f,l,u,p,s[d+4],11,1272893353),p=h(p,f,l,u,s[d+7],16,-155497632),u=h(u,p,f,l,s[d+10],23,-1094730640),l=h(l,u,p,f,s[d+13],4,681279174),f=h(f,l,u,p,s[d+0],11,-358537222),p=h(p,f,l,u,s[d+3],16,-722521979),u=h(u,p,f,l,s[d+6],23,76029189),l=h(l,u,p,f,s[d+9],4,-640364487),f=h(f,l,u,p,s[d+12],11,-421815835),p=h(p,f,l,u,s[d+15],16,530742520),u=h(u,p,f,l,s[d+2],23,-995338651),l=v(l,u,p,f,s[d+0],6,-198630844),f=v(f,l,u,p,s[d+7],10,1126891415),p=v(p,f,l,u,s[d+14],15,-1416354905),u=v(u,p,f,l,s[d+5],21,-57434055),l=v(l,u,p,f,s[d+12],6,1700485571),f=v(f,l,u,p,s[d+3],10,-1894986606),p=v(p,f,l,u,s[d+10],15,-1051523),u=v(u,p,f,l,s[d+1],21,-2054922799),l=v(l,u,p,f,s[d+8],6,1873313359),f=v(f,l,u,p,s[d+15],10,-30611744),p=v(p,f,l,u,s[d+6],15,-1560198380),u=v(u,p,f,l,s[d+13],21,1309151649),l=v(l,u,p,f,s[d+4],6,-145523070),f=v(f,l,u,p,s[d+11],10,-1120210379),p=v(p,f,l,u,s[d+2],15,718787259),u=v(u,p,f,l,s[d+9],21,-343485551),l=l+b>>>0,u=u+y>>>0,p=p+T>>>0,f=f+C>>>0}return e.endian([l,u,p,f])};o._ff=function(t,e,r,n,a,i,o){var s=t+(e&r|~e&n)+(a>>>0)+o;return(s<<i|s>>>32-i)+e},o._gg=function(t,e,r,n,a,i,o){var s=t+(e&n|r&~n)+(a>>>0)+o;return(s<<i|s>>>32-i)+e},o._hh=function(t,e,r,n,a,i,o){var s=t+(e^r^n)+(a>>>0)+o;return(s<<i|s>>>32-i)+e},o._ii=function(t,e,r,n,a,i,o){var s=t+(r^(e|~n))+(a>>>0)+o;return(s<<i|s>>>32-i)+e},o._blocksize=16,o._digestsize=16,t.exports=function(t,r){if(void 0===t||null===t)throw new Error("Illegal argument "+t);var n=e.wordsToBytes(o(t,r));return r&&r.asBytes?n:r&&r.asString?i.bytesToString(n):e.bytesToHex(n)}})()},7884:function(t,e,r){},"9a634":function(t,e){var r={utf8:{stringToBytes:function(t){return r.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(r.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r));return e},bytesToString:function(t){for(var e=[],r=0;r<t.length;r++)e.push(String.fromCharCode(t[r]));return e.join("")}}};t.exports=r},a749:function(t,e,r){"use strict";var n=r("7884"),a=r.n(n);a.a},ac2a:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("a-form",{ref:"formLogin",staticClass:"user-layout-login",attrs:{id:"formLogin",form:t.form},on:{submit:t.handleSubmit}},[r("a-tabs",{attrs:{activeKey:t.customActiveKey,tabBarStyle:{textAlign:"center",borderBottom:"unset"}},on:{change:t.handleTabClick}},[r("a-tab-pane",{key:"tab1",attrs:{tab:"账号密码登录"}},[t.isLoginError?r("a-alert",{staticStyle:{"margin-bottom":"24px"},attrs:{type:"error",showIcon:"",message:"账户或密码错误"}}):t._e(),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["username",{rules:[{required:!0,message:"请输入帐户名或邮箱地址"},{validator:t.handleUsernameOrEmail}],validateTrigger:"change"}],expression:"[\n              'username',\n              { rules: [{ required: true, message: '请输入帐户名或邮箱地址' }, { validator: handleUsernameOrEmail }], validateTrigger: 'change' },\n            ]"}],attrs:{size:"large",type:"text",placeholder:"账户: admin or super"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"user"},slot:"prefix"})],1)],1),r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["password",{rules:[{required:!0,message:"请输入密码"}],validateTrigger:"blur"}],expression:"['password', { rules: [{ required: true, message: '请输入密码' }], validateTrigger: 'blur' }]"}],attrs:{size:"large",type:"password",autocomplete:"false",placeholder:"密码: 和账户名一致"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"lock"},slot:"prefix"})],1)],1)],1),r("a-tab-pane",{key:"tab2",attrs:{disabled:"",tab:"手机号登录"}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["mobile",{rules:[{required:!0,pattern:/^1[34578]\d{9}$/,message:"请输入正确的手机号"}],validateTrigger:"change"}],expression:"[\n              'mobile',\n              { rules: [{ required: true, pattern: /^1[34578]\\d{9}$/, message: '请输入正确的手机号' }], validateTrigger: 'change' },\n            ]"}],attrs:{size:"large",type:"text",placeholder:"手机号"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mobile"},slot:"prefix"})],1)],1),r("a-row",{attrs:{gutter:16}},[r("a-col",{staticClass:"gutter-row",attrs:{span:16}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["captcha",{rules:[{required:!0,message:"请输入验证码"}],validateTrigger:"blur"}],expression:"['captcha', { rules: [{ required: true, message: '请输入验证码' }], validateTrigger: 'blur' }]"}],attrs:{size:"large",type:"text",placeholder:"验证码"}},[r("a-icon",{style:{color:"rgba(0,0,0,.25)"},attrs:{slot:"prefix",type:"mail"},slot:"prefix"})],1)],1)],1),r("a-col",{staticClass:"gutter-row",attrs:{span:8}},[r("a-button",{staticClass:"getCaptcha",attrs:{tabindex:"-1",disabled:t.state.smsSendBtn},domProps:{textContent:t._s(t.state.smsSendBtn?t.state.time+" s":"获取验证码")},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.getCaptcha(e)}}})],1)],1)],1)],1),r("a-form-item",[r("a-checkbox",{attrs:{checked:t.rememberMe}},[t._v("自动登录")]),r("a",{staticClass:"forge-password",staticStyle:{float:"right"}},[t._v("忘记密码")])],1),r("a-form-item",{staticStyle:{"margin-top":"24px"}},[r("a-button",{staticClass:"login-button",attrs:{size:"large",type:"primary",htmlType:"submit",loading:t.state.loginBtn,disabled:t.state.loginBtn}},[t._v("确定")])],1)],1),t.requiredTwoStepCaptcha?r("two-step-captcha",{attrs:{visible:t.stepCaptchaVisible},on:{success:t.stepCaptchaSuccess,cancel:t.stepCaptchaCancel}}):t._e()],1)},a=[],i=(r("d3b7"),r("5530")),o=r("6821"),s=r.n(o),c=function(){var t=this,e=this,r=e.$createElement,n=e._self._c||r;return n("a-modal",{attrs:{centered:"",maskClosable:!1},on:{cancel:e.handleCancel},model:{value:e.visible,callback:function(t){e.visible=t},expression:"visible"}},[n("div",{style:{textAlign:"center"},attrs:{slot:"title"},slot:"title"},[e._v("两步验证")]),n("template",{slot:"footer"},[n("div",{style:{textAlign:"center"}},[n("a-button",{key:"back",on:{click:e.handleCancel}},[e._v("返回")]),n("a-button",{key:"submit",attrs:{type:"primary",loading:e.stepLoading},on:{click:e.handleStepOk}},[e._v(" 继续 ")])],1)]),n("a-spin",{attrs:{spinning:e.stepLoading}},[n("a-form",{attrs:{layout:"vertical","auto-form-create":function(e){t.form=e}}},[n("div",{staticClass:"step-form-wrapper"},[e.stepLoading?n("p",{staticStyle:{"text-align":"center"}},[e._v("正在验证.."),n("br"),e._v("请稍后")]):n("p",{staticStyle:{"text-align":"center"}},[e._v("请在手机中打开 Google Authenticator 或两步验证 APP"),n("br"),e._v("输入 6 位动态码")]),n("a-form-item",{style:{textAlign:"center"},attrs:{hasFeedback:"",fieldDecoratorId:"stepCode",fieldDecoratorOptions:{rules:[{required:!0,message:"请输入 6 位动态码!",pattern:/^\d{6}$/,len:6}]}}},[n("a-input",{style:{textAlign:"center"},attrs:{placeholder:"000000"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleStepOk(t)}}})],1),n("p",{staticStyle:{"text-align":"center"}},[n("a",{on:{click:e.onForgeStepCode}},[e._v("遗失手机?")])])],1)])],1)],2)},l=[],u={props:{visible:{type:Boolean,default:!1}},data:function(){return{stepLoading:!1,form:null}},methods:{handleStepOk:function(){var t=this,e=this;this.stepLoading=!0,this.form.validateFields((function(r,n){r?(t.stepLoading=!1,t.$emit("error",{err:r})):setTimeout((function(){e.stepLoading=!1,e.$emit("success",{values:n})}),2e3)}))},handleCancel:function(){this.visible=!1,this.$emit("cancel")},onForgeStepCode:function(){}}},p=u,f=(r("b3c4"),r("2877")),d=Object(f["a"])(p,c,l,!1,null,"2a0afbac",null),g=d.exports,m=r("5880"),h=r("ca00"),v=r("c24f"),b={name:"userLogin",components:{TwoStepCaptcha:g},data:function(){return{rememberMe:!0,customActiveKey:"tab1",loginBtn:!1,loginType:0,isLoginError:!1,requiredTwoStepCaptcha:!1,stepCaptchaVisible:!1,form:this.$form.createForm(this),state:{time:60,loginBtn:!1,loginType:0,smsSendBtn:!1}}},created:function(){var t=this;Object(v["a"])({}).then((function(e){t.requiredTwoStepCaptcha=e.result.stepCode})).catch((function(){t.requiredTwoStepCaptcha=!1}))},methods:Object(i["a"])(Object(i["a"])({},Object(m["mapActions"])(["Login","Logout"])),{},{handleUsernameOrEmail:function(t,e,r){var n=this.state,a=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;a.test(e)?n.loginType=0:n.loginType=1,r()},handleTabClick:function(t){this.customActiveKey=t},handleSubmit:function(t){var e=this;t.preventDefault();var r=this.form.validateFields,n=this.state,a=this.customActiveKey,o=this.Login;n.loginBtn=!0;var c="tab1"===a?["username","password"]:["mobile","captcha"];r(c,{force:!0},(function(t,r){if(t)setTimeout((function(){n.loginBtn=!1}),600);else{var a=Object(i["a"])({},r);delete a.username,a[n.loginType?"username":"email"]=r.username,a.password=s()(r.password),o(a).then((function(t){return e.loginSuccess(t)})).catch((function(t){return e.requestFailed(t)})).finally((function(){n.loginBtn=!1}))}}))},getCaptcha:function(t){var e=this;t.preventDefault();var r=this.form.validateFields,n=this.state;r(["mobile"],{force:!0},(function(t,r){if(!t){n.smsSendBtn=!0;var a=window.setInterval((function(){n.time--<=0&&(n.time=60,n.smsSendBtn=!1,window.clearInterval(a))}),1e3),i=e.$message.loading("验证码发送中..",0);Object(v["d"])({mobile:r.mobile}).then((function(t){setTimeout(i,2500),e.$notification["success"]({message:"提示",description:"验证码获取成功，您的验证码为："+t.result.captcha,duration:8})})).catch((function(t){setTimeout(i,1),clearInterval(a),n.time=60,n.smsSendBtn=!1,e.requestFailed(t)}))}}))},stepCaptchaSuccess:function(){this.loginSuccess()},stepCaptchaCancel:function(){var t=this;this.Logout().then((function(){t.loginBtn=!1,t.stepCaptchaVisible=!1}))},loginSuccess:function(t){var e=this;this.$router.push({path:"/"}),setTimeout((function(){e.$notification.success({message:"欢迎",description:"".concat(Object(h["b"])(),"，欢迎回来")})}),1e3),this.isLoginError=!1},requestFailed:function(t){this.isLoginError=!0,this.$notification["error"]({message:"错误",description:((t.response||{}).data||{}).message||"请求出现错误，请稍后再试",duration:4})}})},y=b,T=(r("a749"),Object(f["a"])(y,n,a,!1,null,"c4d3a204",null));e["default"]=T.exports},b3c4:function(t,e,r){"use strict";var n=r("e572"),a=r.n(n);a.a},e572:function(t,e,r){}}]);