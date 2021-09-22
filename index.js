const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => 
{
  // debugger
  // tutorials = ['what does the this keyword mean?', 
  // 'What is the Constructor OO pattern?', 
  // 'implementing Blockchain Web API', 
  // 'The Test Driven Development Workflow', 
  // 'What is NaN and how Can we Check for it', 
  // 'What is the difference between stopPropagation and preventDefault?', 
  // 'Immutable State and Pure Functions', 
  // 'what is the difference between == and ===?', 
  // 'what is the difference between event capturing and bubbling?', 
  // 'what is JSONP?'] 
  const instructions = []; 

  tutorials.forEach
  (msg =>
    {

      //debugger
      // msg = [1.what does the this keyword mean?]...[6.]'
      let a = msg.split(" ") /* a=['what', 'does', 'the', 'this', 'keyword', 'mean?'] */
      
      // debugger
      // a.map(word => console.log(word))     
      /*
      what
      does 
      the 
      this
      keyword 
      mean?
      */
     let b = a.map
      (
        /*word => {debugger}, word = "what" */ 
        word => word.replace( word[0], word[0].toUpperCase() )
      ) 

      // debugger
      // b = ['What', 'Does', 'The', 'This', 'Keyword', 'Mean?']

      let c = b.join(' ')
      // debugger
      // c = 'What Does The This Keyword Mean?'

      instructions.push(c)
      // debugger

      // msg.split(" ").map(word => word.replace(word[0], word[0].toUpperCase())).join(' ');
      /*'What Does The This Keyword Mean?'*/
    }
  ); 

  return instructions

    // instructions.push(sentence)
    // return instructions
}







// const titleCased = () => 
// {

//       return tutorials.map(msg => 
//       {
//         return msg.split(" ") //= ['what', 'does', 'the', 'this', 'keyword', 'mean?']
//         .map(word /*word = 'what'*/ => 
//           {
//             return word.charAt(0).toUpperCase() + word.slice(1)
//             // word.replace(word[0], word[0].toUpperCase())
//             // debugger
//           }).join(" ");
//           debugger
//       }) 

// }
