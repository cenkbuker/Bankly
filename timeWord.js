"use strict";
let output=''
const count = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty one", "twenty two", "twenty three", "twenty four", "twenty five", "twenty six", "twenty seven", "twenty eight", "twenty nine", "thirty"]
const decimals= [,,"twenty","thirty","forty","fifty"]
function timeword(str){
    if(+str[0]===1 && +str[1]===2 && +str[3]===0 && +str[4]==0) return 'noon'
    if(+str[0]===0 && +str[1]===0 && +str[3]===0 && +str[4]==0) return 'midnight'
    if(+str[0]===0){
        output += count[+str[1]]
        minuteCheck(str)
    }
    if(+str[0]===1){
        output += count[+str[1]+10]
        minuteCheck(str)
    }if(+str[0]===2){
        output += count[+str[1]+20]
        minuteCheck(str)
    }

    if((str[0]>0 && str[1]>1)||(str[0]>1)){
        output +=' pm'
    }else{
        output+=' am' 
    }
    return output
}

function minuteCheck(str){
    if(+str[3]===0){
        if(+str[4]===0){
           return output += ' oclock'
        }
        output +=' oh '+count[+str[4]]
        
    }
    if(+str[3]===1){
        output += ' '+count[+str[4]+10]
    }if(+str[3]>1){
        output+= ' '+decimals[+str[3]]
        if(+str[4]!==0){
            output+= ' '+count[+str[4]]
        }
    }
    return output
}
module.exports = timeword