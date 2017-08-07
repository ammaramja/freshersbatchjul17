var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = (function () {
    function Account(acc_id, acc_name, balance) {
        this.acc_id = acc_id;
        this.acc_name = acc_name;
        this.balance = balance;
    }
    Account.prototype.getTotal = function () {
        return this.balance;
    };
    return Account;
}());
var Savings = (function (_super) {
    __extends(Savings, _super);
    function Savings(acc_id, acc_name, balance, int) {
        var _this = _super.call(this, acc_id, acc_name, balance) || this;
        _this.int = int;
        return _this;
    }
    Savings.prototype.getTotal = function () {
        return _super.prototype.getTotal.call(this) + this.int;
    };
    return Savings;
}(Account));
var Current = (function (_super) {
    __extends(Current, _super);
    function Current(acc_id, acc_name, balance, cash_credit) {
        var _this = _super.call(this, acc_id, acc_name, balance) || this;
        _this.cash_credit = cash_credit;
        return _this;
    }
    Current.prototype.getTotal = function () {
        return _super.prototype.getTotal.call(this) + this.cash_credit;
    };
    return Current;
}(Account));
var savings1 = new Savings(1, "Ammar", 10000, 0);
var savings2 = new Savings(2, "ASK", 100, 0);
var savings3 = new Savings(3, "Azoo", 1000, 0);
var savings4 = new Savings(4, "basit", 400, 0);
var current1 = new Current(10, "AmmarAmja", 10000000, 100);
var current2 = new Current(12, "ASKAmja", 100, 4500);
var current3 = new Current(13, "ArwaAmja", 100000000, 140);
var current4 = new Current(14, "basit", 1000, 10000);
var acc_array = [];
acc_array.push(savings1);
acc_array.push(savings2);
acc_array.push(savings3);
acc_array.push(savings4);
acc_array.push(current1);
acc_array.push(current2);
acc_array.push(current3);
acc_array.push(current4);
function getTotalCashinBank() {
    var bigTotal = 0;
    acc_array.forEach(function (f) {
        bigTotal += f.getTotal();
    });
    console.log(bigTotal);
}
getTotalCashinBank();
