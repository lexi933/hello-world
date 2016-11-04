
console.clear;
console.log("Add 'em up.");
var sum = 0;
for(cnt=1; cnt < 10; cnt++) {
    sum = sum + 1;
    console.log(sum);
    if(sum < 5) {
        console.log("LESS than 5.");
    } else {
        console.log("MORE or equal 5");      
    }
} // endfor
console.log("The sum is: " + sum + " Alex.");
