const { User } = require("../models");

module.exports = class Controller {
  static async register(req, res) {
    console.log("Anggap aja disini bisa register lah ya");
  }

  static async login() {
    console.log("Anggap aja disini berhasil login");
  }

  static checkUser(req, res) {
    console.log("asdadsasdasdasd");
  }
};
