//let alarm = process.argv("please enter an alarm value to set the alarm in (i.e.) 3 seconds");

let temp = process.argv.slice(2);
let result = [];

//change to numeric values
for(let t of temp){
  if (t < 0){ //negative number - skip
    continue;
  }
  if (isNaN(t)) { //if input is not a number - skip
    continue;
  }
  result.push(parseInt(t));

}

let finalArray = result.sort((a,b)=>a-b)
//console.log(finalArray);
//No numbers are provided
// if (process.argv.slice(2).length === 0){
//   return "No numbers are provided";
// }
// //An input is not a number
// if (process.argv.slice(2) !== Number){
//   return "An input is not a number:";
// }
// if (process.argv.slice(2) < 0){
//   return "An input is a negative number";
// }  

for (let time of result){

  setTimeout(() => {console.log("test")}, (parseInt(time)*1000));
}


