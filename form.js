/*--------------------
      DATATYPES

var no=10;
var string="laksjhmi";
var array=[10,"ad",230];
alert();
console.log(array);
---------------------*/

/*--------------------
       ARRAYS

var array=[1,2,3,4,6,"kal","jm"];
array.push(10);
array.pop();
console.log(array.reverse());
---------------------*/

/*---------------------
		LOOPS

for(var i=6;i>0;i--)
{
	console.log(i+3);
}

var i1=0;
while(i1<6)
{
	console.log(i1+3);
	i1++;
}
---------------------*/

/*---------------------
		OBJECTS

var school={
	name:"new prince",
	location:"adambakkam",
	no:76475,
	address:{
		street:"vvvcolony",
		no:87
	}
}
console.log(school.address);
---------------------*/

/*---------------------
	OBJECT CONSTRUCTORS

//TYPE 1
var flower=new Object();
flower.name="rosse";
flower.color="red";
flower.no=5;

flower.name1="lily";
flower.color1="white";
flower.no1=3;
console.log(flower.name+" "+flower.color);

//TYPE 2
function flower(name,color,no)
{
	this.name=name;
	this.color=color;
	this.no=no;
}
var rose = new flower("rose","red",5)
var lily = new flower("lily","white",3)

console.log(lily.color);
---------------------*/





//FORM FUNCTIONALITIES
const myform = document.querySelector('.form1');
const msg = document.querySelector('.msg');
const fname = document.querySelector('.fname');
const lname = document.querySelector('.lname');
const gmail = document.querySelector('.gmail');
const no = document.querySelector('.no');
const ul = document.querySelector('.list');

myform.addEventListener('submit',onsubmit);
function onsubmit(e)
{
	e.preventDefault();

	if(fname.value==''|| lname.value=='' || gmail.value==''||no.value=='')
	{
		msg.classList.add('error');
		msg.innerHTML='please fill all the fields';
		setTimeout(()=>msg.remove(),2000);
	}
	else
	{
		const li=document.createElement ('li');
		li.appendChild(document.createTextNode(fname.value+""+lname.value+"  gmail:"+gmail.value+"  mobile no:"+no.value));
		ul.appendChild(li);
	}


}


