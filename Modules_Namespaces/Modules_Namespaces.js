var MathUtils;
(function (MathUtils) {
    function add(a, b) {
        return a + b;
    }
    MathUtils.add = add;
})(MathUtils || (MathUtils = {}));
console.log(MathUtils.add(2, 3));
