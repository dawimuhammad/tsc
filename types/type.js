var myname;
var greetings;
greetings = 'hello';
myname = 'haddawi';
console.log(greetings + ' ' + myname);
//  ---------    enum    ---------
var enumers;
(function (enumers) {
    enumers[enumers["green"] = 2] = "green";
    enumers[enumers["red"] = 10] = "red";
    enumers[enumers["blue"] = 4] = "blue";
})(enumers || (enumers = {}));
var a = enumers.green;
var b = enumers.red;
var c = enumers.blue;
console.log('enumers a : ', a);
console.log('enumers b : ', b);
console.log('enumers c : ', c);
//  ---------   void    ----------
// function returns
function warningMessage() {
    var errorWarn = 'A warning message has been displayed!';
    // return 1
    return errorWarn;
}
console.log(warningMessage());
//      ---     break point     ---
console.log('\n');
