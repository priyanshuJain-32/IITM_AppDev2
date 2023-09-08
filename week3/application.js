var app = new Vue({
  el: '#app',
  data: {
    message: "Hello World",
    vistor_name: null,
    names: [],
    buttonStyle:"btn btn-primary",
    countReplies: 0
  },
  methods: {
    sayHi: function (name) {
      this.message = " hi ";
      this.names.push(this.vistor_name);
      this.vistor_name = "";
      if (this.buttonStyle =="btn btn-primary") {
        this.buttonStyle = "btn btn-success";  
      } else {
        this.buttonStyle = "btn btn-primary"
      }
      this.countReplies += 1;
    }
  },
  computed : {
      count: function(){
          return this.names.length;
      }
  }    
})
