export const getMaxObjectInArray = function(arr, key) {
    return arr.reduce((max, current) => {
        return current[key] > max[key] ? current : max;
      }, arr[0]);
        
}
