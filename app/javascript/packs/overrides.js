// Object.defineProperty(String.prototype, 'capitalize', {
//     value: function() {
//         return this.charAt(0).toUpperCase() + this.slice(1);
//     },
//     enumerable: false
// });

String.prototype.toTileCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};