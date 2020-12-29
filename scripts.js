alert("hello world");

 var name = prompt("what is yuor name ?")
     alert("Hello " + name)


 var userInput = prompt('how are you feeling today');
 
 switch (userInput) { 
     
     case 'good':
     case 'great':
     case 'fine':
         alert('Okay thats great');
         break;
     case 'not good':
         alert('Its okay :( it will get better :)');
         break;
   
     
 }
var x = 0;

var userInput = prompt("what do you think , what is my name ? ");
console.log(userInput);
if(userInput.toLowerCase() === 'ahmad'){
    alert('correct ');
    x++;

 } else {
     alert('incorrect :(');
 }
 

 var workExp = prompt("do you think that i have work experience ?"); 
    console.log(workExp);
  if(workExp === 'true'){
      alert('incorrect, no i don’t have :(');
      x++;
  } else {
      alert('unfortunately correct :(');
  }




var team = prompt("do you think (AC milan) is my favorite football team ? (yes or no)"); 
 console.log(team);
  if(team === 'yes'){
     alert('correct :)');
     x++;
 } else {
     alert('incorrect :(');
 }

 var food = prompt("do you think mansaf is my favorite food ? (yes or no)"); 
 console.log(food);
  if(food === 'yes'){
     alert('correct :)');
     x++;
 } else {
     alert('incorrect :(');
 }



 for(var j=0 ; j<4 ;j++){

    var age = prompt("what do you think , How old i am ?"); 
    console.log(age);

  if(age === '23'){
     alert('correct :)');
     x++;
     x++;
     break
 }else { }
  if(age < '23'){
    alert('is not true , i’am older , do i look youngre than 23 years old ?');
 }else { }
   
  if(age > '23'){
    alert('is not true , i’am younger , do i look older than 23 years old ?');
 }else { }
    
 }
  if(age !== '23'){
      alert("well you had 4 attempts to find out my age , iam 23 years old")
  }
   
   
    for(var i=0 ; i<6 ;i++){
        var carsArray =['volvo',"bmw","ford","mazda","mercedes"];
          console.log(carsArray);
        var carsIn = prompt("What do you think are the best cars in the world? Give me one of them");
          console.log(carsIn);
        
    for(var j=0 ;j<6;j++){
    
      if(carsIn === carsArray[j]){
         alert('Yes, it is true, it is one of the best cars in the world :)');
        var i=7;
        x++;
        x++;
        break;
    }        
}       
}  
     if(carsIn !== carsArray[j]){  
         alert("well you had 6 attempts.There are many good cars in the world, but there are some cars that have high performance, such as:(volvo,bmw,ford,mazda,mercedes) ")
     }



alert("your score of 7 is : "+ x )



















