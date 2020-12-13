
function gcd_two_numbers(x,y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
	return x;
}

/*
Improper Fraction Calculation
Random and Sort to order a<b<c<d
fractionMax(b/c), fractionMin(a/d)
Addition Question = b/c + a/d => answer (bd+ac)/cd => simplication 
Subtraction Question = b/c - a/d => answer (bd-ac)/cd => simplication
Multiplication  Question = b/c x a/d => answer ba/cd => simplication
Division Question = a/d / b/c => answer ac/bc =>simplication
Numerator and denominator
*/

//Fraction Arithmetic
//Fraction Division - Level 2
function calcDivFractionLv2() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
//		x[i] = Math.floor(Math.random()*9+1);
		x[i] = Math.floor(Math.random()*49+20);
	}
	var abcd = x.sort();
	var questionFraction = "(" + abcd[0].toString() + "/" + abcd[3].toString()+") / ("+abcd[1].toString()+"/"+abcd[2].toString()+")"; // a 0 b 1 c 2 d 3 
	var numTemp = abcd[0]*abcd[2];
    var denTemp = abcd[1]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Division - Level 2";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcDivFraction5Lv2()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcDivFractionLv2();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}

//Fraction Division - Level 1
function calcDivFractionLv1() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
		x[i] = Math.floor(Math.random()*9+1);
	}
	var abcd = x.sort();
	var questionFraction = "(" + abcd[0].toString() + "/" + abcd[3].toString()+") / ("+abcd[1].toString()+"/"+abcd[2].toString()+")"; // a 0 b 1 c 2 d 3 
	var numTemp = abcd[0]*abcd[2];
    var denTemp = abcd[1]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Division - Level 1";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcDivFraction5Lv1()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcDivFractionLv1();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}


//Fraction Multiplication - Level 1
function calcMultiFractionLv1() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
		x[i] = Math.floor(Math.random()*9+1);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" x "+abcd[0].toString()+"/"+abcd[3].toString(); // a 0 b 1 c 2 d 3 
	var numTemp = abcd[0]*abcd[1];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Multiplication - Level 1";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcMultiFraction5Lv1()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcMultiFractionLv1();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}

//Fraction Multiplication - Level 2
function calcMultiFractionLv2() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
//		x[i] = Math.floor(Math.random()*9+1);
		x[i] = Math.floor(Math.random()*49+20);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" x "+abcd[0].toString()+"/"+abcd[3].toString(); // a 0 b 1 c 2 d 3 
	var numTemp = abcd[0]*abcd[1];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Multiplication - Level 2";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcMultiFraction5Lv2()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcMultiFractionLv2();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}


//Fraction Subtraction - Level 1
function calcSubFractionLv1() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
		x[i] = Math.floor(Math.random()*9+1);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" - "+abcd[0].toString()+"/"+abcd[3].toString(); // a 0 b 1 c 2 d 3 
	var numTemp = abcd[1]*abcd[3]-abcd[0]*abcd[2];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Subtraction - Level 1";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcSubFraction5Lv1()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcSubFractionLv1();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}

//Fraction Subtraction - Level 2
function calcSubFractionLv2() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
//		x[i] = Math.floor(Math.random()*9+1);
		x[i] = Math.floor(Math.random()*49+20);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" - "+abcd[0].toString()+"/"+abcd[3].toString(); // a 0 b 1 c 2 d 3 
	var numTemp = abcd[1]*abcd[3]-abcd[0]*abcd[2];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
	var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Subtraction - Level 2";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcSubFraction5Lv2()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcSubFractionLv2();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}


//Fraction Addition - Level 1
function calcAddFractionLv1() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
		x[i] = Math.floor(Math.random()*9+1);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" + "+abcd[0].toString()+"/"+abcd[3].toString(); 
	var numTemp = abcd[1]*abcd[3]+abcd[0]*abcd[2];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
    var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Addition - Level 1";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		

    
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcAddFraction5Lv1()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcAddFractionLv1();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}

//Fraction Addition - Level 2
function calcAddFractionLv2() {
	var x = new Array(); 
	for (i = 0; i < 4; i++) {
		x[i] = Math.floor(Math.random()*49+20);
	}
	var abcd = x.sort();
	var questionFraction = abcd[1].toString()+"/"+abcd[2].toString()+" + "+abcd[0].toString()+"/"+abcd[3].toString(); 
	var numTemp = abcd[1]*abcd[3]+abcd[0]*abcd[2];
    var denTemp = abcd[2]*abcd[3];
	var gcd = gcd_two_numbers(numTemp,denTemp);
    var numSimp = numTemp/gcd;
    var denSimp = denTemp/gcd;
	var myNumerator = prompt("Given that "+questionFraction+" = a/b, what is the value of a?");
	var myDenominator = prompt("Given that "+questionFraction+" = a/b, what is the value of b?");
    var ExAndLv = "Addition - Level 2";
	document.getElementById("ExAndLv").innerHTML = ExAndLv;		
    
	if(myNumerator == numSimp && myDenominator == denSimp){
		var lastResult = questionFraction+ " = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is correct.";
	}else{
		var lastResult = questionFraction +" = " + myNumerator.toString() +"/" +myDenominator.toString()+ " is wrong, the correct answer is "+numSimp.toString()+"/"+ denSimp.toString();
	}
	return lastResult;
}

function calcAddFraction5Lv2()
{
	var x = new Array();
	for (var i = 0; i < 5; i++) {
		x[i] = calcAddFractionLv2();
	}
	document.getElementById("Q1").innerHTML = x[0];
	document.getElementById("Q2").innerHTML = x[1];
	document.getElementById("Q3").innerHTML = x[2];
	document.getElementById("Q4").innerHTML = x[3];
	document.getElementById("Q5").innerHTML = x[4];				
}


