// Code your solution in this file
function findMatching(collection, name){
  
  return collection.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
  
  
}