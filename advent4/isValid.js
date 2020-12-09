function isValid(strArr) {
    if(strArr.length===16) {
        return true;
    }else if(strArr.length===14 && !strArr.includes("cid")){
         return true;
    }else{
        return false;
    }
}

module.exports = isValid;