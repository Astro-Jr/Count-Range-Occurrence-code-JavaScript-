// <-- The function

function CountRangeOccurance(list, start, end){
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
