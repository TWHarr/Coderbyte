/*Using the JavaScript language, have the function LetterChanges(str) take the str 
parameter being passed and modify it using the following algorithm. Replace every 
letter in the string with the letter following it in the alphabet (ie. c becomes d, z 
becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and f
inally return this modified string.*/

function LetterChanges(str){
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    alteredStr = ""
    for (i = 0; i < str.length; i++){
        if (alphabet.indexOf(str.charAt(i))!= -1){
            toChange = alphabet.indexOf(str.charAt(i));
            changed = alphabet.charAt(toChange + 1);
        } else{
            changed = str.charAt(i);
        }
        if (changed === alphabet.charAt(0) || changed === alphabet.charAt(4) || changed === alphabet.charAt(8) || changed === alphabet.charAt(14) || changed === alphabet.charAt(20)){
            alteredStr += changed.toUpperCase();
        } else{
            alteredStr += changed;
        } 
    }
    return alteredStr
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
LetterChanges(readline());     