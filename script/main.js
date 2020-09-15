var app = new Vue({
  el: "#id1",
  data: {
    color: "",
    count: 0,
    link: "http://www.google.com",
    facebook_link: "<a href=http://facebook.com/harshit.kishor4>Facebook</a>",
    x: 0,
    y: 0,
    step: 0,
  },
  methods: {
    clickHandle: function (step) {
      this.step = parseInt(step);
      return this.step > 0 ? (this.count += this.step) : this.count++;
    },
    resetHandle: function () {
      return (this.count = 0), (this.color = ""), (this.step = 0);
    },
    tooltipHandler: function (event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },
  },
});
