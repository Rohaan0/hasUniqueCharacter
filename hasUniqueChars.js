// Write your code below
// Given a word, return true if that word contains only unique characters. Return false otherwise.

const str1 = 'Hello world'
const str2 = 'Monday'
const str3 =  'Moonday'


function hasUniqueChars(str){
    for (i = 0; i < str.length; i++){
        for (j = i + 1; j < str.length;  j++){
            if (str[j] === str[i]){
                return false
            }
            }
        }   
        return true
    }

console.log(hasUniqueChars(str1))