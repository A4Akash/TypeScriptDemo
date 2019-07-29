/**
 * To find the number of words in a given string with multiple spaces, new lines and tabs
 */
var countWords = function (input) {
    // to convert new lines to spaces 
    input = input.replace(/\n/g, ' ');
    // to convert tab to spaces
    input = input.replace(/\t/g, ' ');
    // to convert double spaces to single spaces until exists
    while (input.indexOf('  ') != -1) {
        input = input.replace('  ', ' ');
    }
    return input.trim().split(' ').length;
};
var string1 = 'let  me   test    this     string      ';
console.log('"' + string1 + '"');
console.log(countWords(string1));
var string2 = "let\n  me test       this\n  string    ";
console.log('"' + string2 + '"');
console.log(countWords(string2));
