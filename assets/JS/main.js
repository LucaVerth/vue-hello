// Hello VueJs

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    image: 'assets/img/img01.jpg',
    color: ''
  },

  methods: {
    changeColor(userColor){
      this.color = userColor;
    },
    resetColor(){
      this.color = '';
    }
  }

})