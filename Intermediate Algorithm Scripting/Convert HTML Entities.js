/* Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities. */

function convertHTML(str) {
    // &colon;&rpar;

    // Regular expression used to detect non html characters
    var myRegex = /[&<>\"']/;
    var myArray = [];

    // Store character HTML mappings in obj
    var obj = {
        "&": "&​amp;",
        "<": "&​lt;",
        ">": "&​gt;",
        "'": "&​apos;",
        "\"": "&quot;"
    }

    //Convert str to array of characters
   var arrStr = str.split("");

   // Loop through str to find any non HTML characters and replace
    arrStr.forEach(function(letter,index) {
        if (!myRegex.test(letter))
            myArray.push(letter);
          else {
            myArray.push(obj[letter]);
        }
    });

    // Convert array back to string
    var convertStr = myArray.join("");



    return convertStr;
  }


console.log(convertHTML("Dolce & Gabbana")); // should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")); // should return Sixty &​gt; twelve.
console.log(convertHTML('Stuff in "quotation marks"')); // should return Stuff in &​quot;quotation marks&​quot;.
console.log(convertHTML("Schindler's List")); // should return Schindler&​apos;s List.
console.log(convertHTML("<>")); // should return &​lt;&​gt;.
console.log(convertHTML("abc")); // should return abc.