/**
 * To find the number of words in a given string with multiple spaces, new lines and tabs
 */

 const countWords = (input: string) => {

    // to convert new lines to spaces 
    input = input.replace(/\n/g, ' ');
    
    // to convert tab to spaces
    input = input.replace(/\t/g, ' ');

    // to convert double spaces to single spaces until exists
    while (input.indexOf('  ') != -1) {
        input = input.replace('  ', ' ');
    }

    return input.trim().split(' ').length;
 }

 const string1: string = 'let  me   test    this     string      ';
 console.log('"' + string1 + '"');
 console.log(countWords(string1));

 const string2: string = `let
  me test       this
  string    `;
 console.log('"' + string2 + '"');
 console.log(countWords(string2));
 