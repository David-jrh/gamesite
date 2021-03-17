new Vue({
  el: "#app3",
  data: {
    errors: [],
    name: null,
    mail: null,
    phone: null,
    content: null,
  },
  methods: {
    checkForm: function (event) {
      this.errors = [];

      if (!this.name) {
        this.errors.push("Userame required.");
      }
      if (!this.mail) {
        this.errors.push("mail required.");
      } else if (!this.validmail(this.mail)) {
        this.errors.push("Valid mail required.");
      }
      if (!this.phone) {
        this.errors.push("phone number required.");
      }
      if (!this.content) {
        this.errors.push("content required.");
      }

      if (!this.errors.length) {
        return true;
      }

      event.preventDefault();
    },
    validEmail: function (mail) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(mail);
    },
  },
});
