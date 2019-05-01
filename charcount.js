function countLetters (string){
   var stringChars = {};
   // count['a']=1;
   // console.log(count)

   var letters = string.split('');
   //console.log( letters);
   for (let i = 0; i < letters.length; i++) {
       //if ('key' in myObj)
       if (letters[i] !== ' '){
         if (letters[i] in stringChars){
           stringChars[letters[i]] += 1;
         }else{
           stringChars[letters[i]] = 1;
         }
       }

   }
   console.log(stringChars)
   //for (var i = 0; i < letters.length; i++) {
   //     var letter = letters[i];
   //     console.log(i, letter);
   }

countLetters("lighthouse in the house");