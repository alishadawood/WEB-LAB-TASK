function countVowels(str) {
    let vowels = "aeiouAEIOU";   
    let count = 0;

    for (let char of str) {     
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;   
}
console.log("Vowels in 'Hello World':", countVowels("Hello World"));
console.log("Vowels in 'JavaScript':", countVowels("JavaScript"));

