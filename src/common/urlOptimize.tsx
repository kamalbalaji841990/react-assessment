
const checkUrlString = (str = '') => {
    var newString = str.replace(/[^A-Z0-9]+/ig, "-"); 
    return newString;  
}

export default checkUrlString;
