//applikation Vue
new Vue({
  //#app = form id
  el: "#app",
  data: {
    errors: [],
    username: null,
    email: null,
    password: null,
  },
  methods: {
    checkForm: function (event) {
      //erros array
      this.errors = [];
      // - username i form push string i array errors
      if (!this.username) {
        this.errors.push("Userame required.");
      }
      if (!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)) {
        this.errors.push("Valid email required.");
      }
      if (!this.password) {
        this.errors.push("password required.");
      }
      // - errors -> return true = submit
      if (!this.errors.length) {
        return true;
      }

      event.preventDefault();
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
  },
});
