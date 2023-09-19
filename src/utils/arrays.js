export const getMaxObjectInArray = function(arr, key) {
    return arr.reduce((max, current) => {
        return current[key] > max[key] ? current : max;
      }, arr[0]);
        
}

export const getMinObjectInArray = function(arr, key) {
  return arr.reduce((min, current) => {
      return current[key] < min[key] ? current : min;
    }, arr[0]);
      
}

