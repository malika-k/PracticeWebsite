"use strict";
var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 1000);
    }
};
// arrow func will not create this scope
// normal func would change scope of this
employee.greet();
