
console.log("This keyword used alone refers to window object")
console.log(this);
/*----------------------------------------------*/

function test(){
    console.log("---------------------------------------------------------------------------------------------");
    console.log("This keyword inside function refers to window object")
    console.log(this);
};
test();

/*----------------------------------------------*/

const details = {
    name:"sumeet",
    lastname:"shinde",
    add:function(){
        console.log("---------------------------------------------------------------------------------------------");
        console.log("This keyword inside object refers to the owner of the object i.e: details")
        console.log(this);
    },

}
details.add();

/*---------------This in strict mode-------------------------------*/


function add(){
    "use strict";
    console.log("---------------------------------------------------------------------------------------------");
    console.log("This keyword in strict mode returns undefined")
    console.log(this);
}
add()

