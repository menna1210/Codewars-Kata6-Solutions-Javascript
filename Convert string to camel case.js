function convertStr(str){
    const arrOfStr = str.split(/[-_]/);
    const result = arrOfStr.map((word,index)=>{
        if(index===0){
            return word;
        }else{
            return word[0].toUpperCase() + word.slice(1);
        }
    }) 
     return result.join("");
}
console.log(convertStr("The_Stealth-Warrior"));