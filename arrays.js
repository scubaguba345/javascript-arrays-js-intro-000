var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
var candyString = "Yes"
function addElementToBeginningOfArray(chocolateBars, candyString){
  return [candyString, ...chocolateBars];
}
