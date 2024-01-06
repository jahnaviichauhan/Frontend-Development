//tutorial 7 conditional statements
let a=prompt("hey what's your age?");
a=Number.parseInt(a);
console.log(typeof a);
if(a<0)
{
    alert("this is a invalid age");
}
else if(a<9){
    console.log("you are a ki and can't even think of driving");
}
else if(a>=9&&a<18)
{
    console.log("you can think of driving but after sometime");
}
else{
    alert("you can drive");
}
console.log("done");
