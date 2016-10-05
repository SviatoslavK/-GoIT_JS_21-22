
var app = {
    involution: function involution(a, b) {
        var result = 1;
        for(var i = 0; i < b; i++) {
                result *= a;
        }
        return result;
    }
};
module.exports = app;
