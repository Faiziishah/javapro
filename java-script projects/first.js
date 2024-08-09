

  //  const student = { fullname: "rahul kumar",
  //      age : 24, capga : 8.2,
 //       ispass : true,
 //   };

  //  student["age"] = student["age"]+2
 // const 
 //arethmatic opretor
 ////var a = 5;  //6
 ////var b = 5; 
 ////var c =a++;  // 6
 ////var d= ++c  //5

////document.write ('a+b='+ a+b );
////document.write ("a*b =",a*b)
////document.write("a-b=", a-b)
////document.write(c*a-b)
////document.write("a/b=",a/b)
////document.write(a%b)
//////document.write(a**b)
//uniery oprator 
//////document.write('c = ',c) 
//////document.write('d = ',d)
//////document.write('a = ',a)
//var b = 7 ;
//var n =
//"8" ;
//document.write("b==n",b!==n);
//document.write ("not strict", b==n)
//document.write ("gratert", n<b)

// var b = 7 ;
// var n =
// 8 ;
// var f = 10 ;
// var cond1 = n>f;
// var cond2= b>n;
// document.write(cond1 && cond2);
// document.write( cond1||cond2)

// var click = document.getElementById('click')
// var fetchAge = document.getElementById('age')
// //var age=0;  //17

// click.addEventListener('click',()=>{
//   // console.log(parseInt(fetchAge.value))
//    age=parseInt(fetchAge.value);  //17
//    if 
//   (age>18) {
//     document.write("you are able to qualified"+"/n")
// }
// else if (age<18)
// {
//   document.write("sorry you can't qualified"+"/n")

// }
// else if (age==18)
//   {
//     document.write("ready for qualified"+"/n")
  
//   }
//  else{
//   document.write("sorry not processing"+"br/")
// }

// }

// )

// var user_input = document.getElementById('tex_box_value_user');
// var click_button = document.getElementById("button_click");
// var result=document.getElementById('result')
// var old= document.getElementById("old")

//  click_button.addEventListener("click", ()=> { 
//  let age = user_input.value;
//    if 
//   (age>18) {
//     old.textContent= "your age is: "+ age
//     result.textContent='you are qualified'
  
// }
// else if (age<18)
// {
//    old.textContent= "your age is :"+ age
//   result.textContent="sorry you can't qualified"

// }
// else if (age==18)
//   {
//      old.textContent= "your age is :"+ age
//   result.textContent=" you are ready for qualifing"

  
//   }
//  else{
//    old.textContent= "your age is :"+ age
//   result.textContent=" match not found"

// }
//  })
// age>18?console.log('greater'):console.log('smaller')

//  }


// var user_input = document.getElementById('tex_box_value_user');
// var click_button = document.getElementById("button_click")
// var old= document.getElementById("old")
// var add = document.getElementById("new");

// click_button.addEventListener("click",()=>
//   age = user_input.value > 18 ?
// add.textContent="sucssfull": 
// add.textContent="not sucessfull"
// )

//let result = JSON.parse(localStorage.getItem('result')) || [];

//result.push(ageInput);

//localStorage.setItem('result', JSON.stringify(result));


          //  loops
          // for(let digits=4; digits<=11;digits++){
          //   document.write(" very funy")
          // }
          // document.write("nomore fuuny")
          // let sum = 2;
          // for(let i = 1 ; i<=7;i++){
          //   sum =sum +i; 
          // }
          // document.write("sum",sum);
      //  let image=document.getElementById("image")
      //     let user_input=document.getElementById("tex_box_value_user");
      //     let click_button=document.getElementById("button_click")
      //     let doc =document.getElementById("old");

      //     click_button.addEventListener("click",() =>{
      //     //  let text = user_input.value;
      //     //  image.src=text
      //     window.location.href=user_input.value
      //     })
// var obj={
//   naam:'',
//   class:'',
//   age:''
// }

//  obj.naam=prompt('enter your name')
//  obj.class=prompt('enter your class')
//  obj.age=prompt('enter your age')

//  for(i in obj){
//   document.write('key '+i + 'value'+obj[i] + '<br/>')
//  }

// let user_input = prompt("enter your data")
// for (let data in user_input){
//   document.write("your data is==",data)
// }
// for(let num = 0 ; num<=100; num++){

//   if (num!==0 && num%2==0) {
//   document.write(num/2,"even==",num , '<br/>') //1,2,4/2,6/3
 
// }}
// let ATM_pin = 786;
// let user_input = prompt("enter your pin for transaction") 
// while (parseInt(user_input) !== ATM_pin) {
//  user_input= prompt("incorect pin .please try again");  
  
// }
// document.write("your transaction is sucess fully");
// let ATM_pin = 786;
// var check=false;
// while (check!==true) {
//   let user_input = prompt("enter your pin for transaction")
//   if(ATM_pin==user_input){
//     check=true
//   }
//   else{
//     user_input= alert("incorect pin .please try again");
//   }
// }
// document.write("your transaction is sucess fully");
// var player1=1;
// var player2=1;
// var playerImg1=document.getElementById('player_one')
// var playerImg2=document.getElementById('player_two')

// let start_button = document.getElementById("gamestart")
// let winner=document.getElementById('winner')

//   start_button=addEventListener( "click",()=>{
//     player1=Math.round(Math.random()*6)
//     player1=player1>0?player1:1
//     player2=Math.round(Math.random()*6)
//     player2=player2>0?player1:1
//     playerImg1.src=`./images/dice-${player1}.png`
//     playerImg2.src=`./images/dice-${player2}.png`

//     console.log('player 1',player1)
//     console.log('player 2',player2)
//     if(player1<player2){
//       winner.textContent='player 2 wins'
//     }
//     else if(player2<player1){
//       winner.textContent='player 1 wins'
//     }
//     else{
//       winner.textContent='level'
//     }
    
    
    

//   }
// )

var player1=1;
var player2=1;
var playerImg1=document.getElementById('player_one')
var playerImg2=document.getElementById('player_two')
let winner=document.getElementById('winner')

let start_button_p1 = document.getElementById("gamestart_p1");
let start_button_p2 = document.getElementById("gamestart_p2")

var ans1=false;
var ans2=false;

    start_button_p1.addEventListener( "click",()=>{ 

      ans1=true;
      player1=Math.round(Math.random()*6)
      player1=player1>0?player1:1
        playerImg1.src=`./images/dice-${player1}.png`

     if(ans1==true && ans2==true){
      if(player1<player2){
        winner.textContent='player 2 wins'
      }

      else if(player2<player1){
 

             winner.textContent='player 1 wins'
          }
            
          else{
            winner.textContent='level'
      
        }
     }
     ans1=false
      
    })

    start_button_p2.addEventListener( "click",()=>{
      ans2=true
      player2=Math.round(Math.random()*6)
      player2=player2>0?player2:1
    
      playerImg2.src=`./images/dice-${player2}.png`    
    
       if(ans1==true && ans2==true){
        if(player1<player2)
    
          winner.textContent='player 2 wins'  
      
       else if(player2<player1){
         winner.textContent='player 1 wins'
       }
       else{
        winner.textContent='level'
      
      
      }
      ans2=false
       }
})    
    
      







    // console.log('player 1',player1)
    // console.log('player 2',player2)


     
 
    

