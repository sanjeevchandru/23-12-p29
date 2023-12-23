document.write("32. to find an array containing a specific element."+"<br>");
document.write("The array [2,5,9,6]   , specific element =5"+"<br>")
function test32(arr,el){
    for(let i=0;i<arr.length;i++){
        if(arr[i]==el){
            return true;
        }
    }
    return false;
}
document.write(test32([2,5,9,6],5)+"<br><br>");