function affiche(ch:string){
    for(var i=0; i<ch.length; i++){
        console.log(ch[i]);
    }
    }
  //affiche("je sui la");
  function affiche1(ch:string){
let i =0;
    while(i<ch.length){
    console.log(ch[i]);
    i++;
  }
}
// affiche1("bonjour");
function tableau(){
var arr = [1,5,20,100];
var i=0;
while(i<arr.length){
arr[i]=arr[i]*5;
i++;
}
console.log(arr);
}
//console.log(tableau());
//tableau();
function tableau2(){
  var arr = [1,5,20,100];
  var i=0;
  do{
    arr[i]=arr[i]*5;
    i++;
  }while(i<arr.length)
  console.log(arr);
}
//tableau2();
function date(j:number,m:number, a:number){
  var test:boolean;
if (j>30 ||  m>12 || a<0){test=false;
  console.log(test);
}
else{
console.log(true);
}
}
date(12,10,1200);