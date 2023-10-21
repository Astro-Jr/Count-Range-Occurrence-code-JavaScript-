// <-- The function

function CountRangeOccurance(list, start, end){
// <-- Check if the list is empty
    if(list.length === 0 && list.length === null){
      return `The ${list} is empty`;
    }
  
  // <-- Variables
    let count = 0;

  // <-- Main proccess

  for(let i = 1; i < list.length; i++){
      
      if(list[i] >= start && list[i] <= end){
          count++;
      }
      
  }

    // <-- return the count
    return count;
    
};
