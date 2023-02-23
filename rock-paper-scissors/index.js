
let person =1;
let computer = 1;
let pscore = document.querySelector(".p-score") ;
let cscore = document.querySelector(".c-score");
let buttons = document.querySelectorAll(".btns-box button");
let showIcon    = document.querySelector(".show i");
let show_computer    = document.querySelector(".show-c i");
let randomclass = ["fa-solid fa-hand-back-fist","fa-solid fa-hand","fas fa-hand-scissors"] ;

// console.log(buttons);
let txt = document.querySelector("#txt");

let  btn = () => {
              buttons.forEach(btns => {
                            

                            btns.addEventListener("click",(e)=>{
                                          let clickedbtn = e.target.className;
                                          // console.log(clickedbtn);
                                          showIcon.className = clickedbtn
                                          let num = Math.floor(Math.random()*(randomclass.length));
                            show_computer.className = randomclass[num];

                            if( showIcon.className === show_computer.className){
                                          console.log("hi");
                                          txt.innerHTML = "It's a Tie ! ";
                                          txt.style.color="orange";
                            }
                            else if(showIcon.className === randomclass[0] && show_computer.className === randomclass[1]){
                                          txt.innerHTML = "you lose";
                                          txt.style.color="red";
                                          cscore.innerHTML = computer++; 
                            }
                            else if(showIcon.className === randomclass[0] && show_computer.className === randomclass[2]){
                                          txt.innerHTML = "you win!";
                                          txt.style.color="greenyellow";
                                          pscore.innerHTML = person++; 
                            }
                            else if(showIcon.className === randomclass[1] && show_computer.className === randomclass[2]){
                                          txt.innerHTML = "you lose!";
                                          txt.style.color="red";
                                          cscore.innerHTML = person++; 
                            }
                            else if(showIcon.className === randomclass[1] && show_computer.className === randomclass[0]){
                                          txt.innerHTML = "you win!";
                                          txt.style.color="greenyellow";
                                          pscore.innerHTML = person++; 
                            }
                            else if(showIcon.className === randomclass[2] && show_computer.className === randomclass[0]){
                                          txt.innerHTML = "you lose!";
                                          txt.style.color="red";
                                          cscore.innerHTML = person++; 
                            }
                            else if(showIcon.className === randomclass[2] && show_computer.className === randomclass[1]){
                                          txt.innerHTML = "you win!";
                                          txt.style.color="greenyellow";
                                          pscore.innerHTML = person++; 
                            }
                            if(pscore.innerHTML>=10){
                                          console.log("hello");
                                          txt.innerHTML ="user win! this match";
                                          
                            }
                            else if(pscore.innerHTML>=10){
                                          console.log("hello");
                                          txt.innerHTML ="computer win! this match";
                            }

                            })              
              });
             
}

btn();


