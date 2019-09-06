let myname : string;
let greetings : String;

greetings = 'hello';
myname = 'haddawi';

console.log(greetings + ' ' + myname);

//  ---------    enum    ---------

enum enumers { green = 2, red = 10, blue = 4 }

let a : enumers = enumers.green;
let b : enumers = enumers.red;
let c : enumers = enumers.blue;

console.log('enumers a : ', a);
console.log('enumers b : ', b);
console.log('enumers c : ', c);

//  ---------   tuple    ----------
// tuple variable in typescript is strictly managed the length and data type of array elements

let agantech : [string];

agantech = ['husein']

let agantechs : [string, string, number]

agantechs = ['dani', 'dawi', 1]

//  ---------   void    ----------

// function returns

function warningMessage() : string {
    let errorWarn : string = 'A warning message has been displayed!';

    // return 1
    return errorWarn
}

function warningMessageWithVoid() {
    console.log('Just a void function')
}

console.log(warningMessage());


//      ---     break point     ---

console.log('\n')