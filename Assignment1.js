'use strict';

let Rational = {
  init: function (num, den) {
    this.num = num;
    this.den = den;
  },
  setNum: function(num) {
    this.num = num;
  },
  getNum: function() {
    return this.num;
  },
  setDen: function(den) {
    this.num = den;
  },
  getDen: function() {
    return this.den;
  },
   invert(){
    let x = this.getNum();
    let y = this.getDen();
    let c = y + '/' + x;
    return c;
  },

  toFloat: function(){
    let x = this.getNum() / this.getDen();
    return x;
  },

      var gcd function() {
      var b = this.getDen();
      var a = this.getNum();
      if (b == 0) {
          return a;
      } else {
          return gcd(b, a % b);
      }
  },

  toString: function() {
    let s = this.getNum() + '/' + this.getDen();
    if(this.num === '') {
     s = this.setNum(0);
     s = this.getNum() + '/' + this.getDen();

    }
    if(this.num < 0) {
      s = '-' + this.getNum() + '/' + this.getDen();
    }

    return s;
  }
};
