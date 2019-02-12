var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
var starbursts = "starbursts"

function addElementToBeginningOfArray(chocolateBars,starbursts) {
  return [b, ...chocolateBars]
}

function destructivelyAddElementToBeginningOfArray(a,b) {
  return chocolateBars.unshift(b)
}

function accessElementInArray(chocolateBars,3){
  return console.log(chocolateBars(3))
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.shift()
}

function removeElementFromBeginningOfArray(chocolateBars){
  return chocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(chocolateBars){
  return chocolateBars.pop()
}

function removeElementFromEndOfArray(chocolateBars){
  return chocolateBars.slice(0, chocolateBars.length - 1)
}
