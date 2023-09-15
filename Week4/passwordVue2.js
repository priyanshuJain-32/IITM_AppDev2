Vue.component('password-check', {
    template: 
    `<div>
    <h3> A cool password checker </h3>
        Enter password: <input type="text" v-model="password" @keyup="oneUpperCase(); oneLowerCase(); oneNumber(); oneSpecialChar();"/>
        <br>
        <label :style = "{ 'color': oneUpper ? 'green' : 'red' }"> 1 Upper Case </label>
        <br>
        <label :style = "{ 'color': oneLower ? 'green' : 'red' }"> 1 Lower Case </label>
        <br>
        <label :style = "{ 'color': oneNum ? 'green' : 'red' }"> 1 Number </label>
        <br>
        <label :style = "{ 'color': oneSpecial ? 'green' : 'red' }"> 1 Special Character </label>
        <br>
        <label :style = "{ 'color': password.length >= 8 ? 'green' : 'red' }"> Atleast 8 Character </label>
        <br>
        <br>
        <h2 v-if="oneUpper && oneLower && oneNum && oneSpecial && password.length >=8"> Yes you got them all </h2>
    </div>`,
    data: function() {
        return {
            password: "",
            oneUpper: false,
            oneLower: false,
            oneNum : false,
            oneSpecial: false
        }
    },
    methods: {
        oneUpperCase() {
            if (/[A-Z]/.test(this.password)) {
                this.oneUpper = true;
            } else {
                this.oneUpper = false;
            }
        },
        oneLowerCase() {
            if (/[a-z]/.test(this.password)) {
                this.oneLower = true;
            } else {
                this.oneLower = false;
            }
        },
        oneNumber() {
            if (/\d/.test(this.password)) {
                this.oneNum = true;
            } else {
                this.oneNum = false;
            }
        },
        oneSpecialChar() {
            if (/[\~\`\!\@\#\$\%\^\&\*\(\)\_\-\+\=\{\}\[\]\|\\\/\:\;\"\'\<\>\,\.\?]/.test(this.password)) {
                this.oneSpecial = true;
            } else {
                this.oneSpecial = false;
            }
        }
    }
})
const app = new Vue({
	el: "#app"
})