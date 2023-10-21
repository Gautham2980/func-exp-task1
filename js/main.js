var a=prompt("enter a length");
var b=prompt("enter a height");
document.write("Length ="+a+" "+"height="+b+" ")


let rectangle=function(a,b){
    let area=a*b;
    return area;
}

let res=rectangle(a,b);
document.write("Area of rectangle is:"+res);