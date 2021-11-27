//Generate Random Prime Number with two distractors. 
function ranPrimeNum() {
	var ranPrimeNumOrder = Math.floor(Math.random()*25);
	var ranNonPrimeNumOrder1 = Math.floor(Math.random()*26);
	var ranNonPrimeNumOrder2 = Math.floor(Math.random()*26);
	if(ranNonPrimeNumOrder2 == ranNonPrimeNumOrder1){}
	var primeNum = [2, 3, 5, 7, 11,
					13,17,19,23,29,
					31,37,41,43,47,
					53,59,61,67,71,
					73,79,83,89,97];

	var nonPrimeNum = [1, 9, 15, 21,25,27,33,35,39,
					  45, 49,51, 55,57,63,65,69,75,
					  77, 81,85, 87,91,93,95,99];

    var displayPrimeNum = primeNum[ranPrimeNumOrder];
    var displayNonPrimeNum1 = nonPrimeNum[ranNonPrimeNumOrder1];
    if(ranNonPrimeNumOrder2 == ranNonPrimeNumOrder1){ displayNonPrimeNum2 = 100;
	}else{	var displayNonPrimeNum2 = nonPrimeNum[ranNonPrimeNumOrder2];}

	var result = [displayPrimeNum,displayNonPrimeNum1,displayNonPrimeNum2];
	return result;
}

			function calcPrimeNum()
            {
				var Question = ranPrimeNum();
				var primeNum = Question[0];
				var myAns = prompt("Which one is a prime number? "+Question.sort());
			    var ExAndLv = "Prime Number Exercise";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == primeNum){
				var lastResult = "Correct! "+primeNum +" is the prime number. ("+Question.sort()+")";
			}else{
				var lastResult = "Wrong, only "+primeNum +" is the prime number. ("+Question.sort()+")";
			}
				return lastResult;
			}

			function calc5PrimeNum()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcPrimeNum();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}


//Exercise of HCF and LCM 
//HCF(GCD) generator with two random numbers.
function ranPrimeNum_hcf() {
	var ranPrimeNumOrder = Math.floor(Math.random()*25);
	var primeNum = [2, 3, 5, 7, 11,
					13,17,19,23,29,
					31,37,41,43,47,
					53,59,61,67,71,
					73,79,83,89,97];
    var result = primeNum[ranPrimeNumOrder];
	return result;
}

function gcd_generator(x, y) {
	primeNum = ranPrimeNum_hcf();
    x = Math.floor(Math.random()*5+5)*primeNum; 
	y = Math.floor(Math.random()*6+1)*primeNum;
	z = gcd_two_numbers(x,y)
	var questionHCF = [x, y, z];
	return questionHCF; 
}

			function calcGCD()
            {
            var questionHCF = gcd_generator();
			var ansGCD = questionHCF[2];
		    var ExAndLv = "HCF(GCD) Exercise";
			document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			var myAns = prompt("What is the HCF of these two numbers? "+questionHCF[0]+", "+questionHCF[1]);
            if (myAns == ansGCD) {
            var lastResult = "Correct! "+ questionHCF[2] +" is the HCF of "+questionHCF[0]+" and "+questionHCF[1];
            }else{
            var lastResult = "Wrong," +questionHCF[2] +" is the HCF of "+questionHCF[0]+" and "+questionHCF[1];
            }
			return lastResult;
			}

			function calc5GCD()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcGCD();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

//LCM generator with two random numbers.
function lcm_generator() {
	x = Math.floor(Math.random()*21+4); 
	y = Math.floor(Math.random()*59+1);
	num1 = x;
	num2 = y;
	lcm = lcm_two_numbers(x,y);
	questionLCM = [num1,num2,lcm];
	return questionLCM;
}

function lcm_two_numbers() {
	gcd = gcd_two_numbers(x, y);
    x = x/gcd;
    y = y/gcd;
    lcm = x*y*gcd;
return lcm;
}

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

			function calcLCM()
            {
            var questionLCM = lcm_generator();
//				document.getElementById("Q1").innerHTML = questionLCM[]/*			
			var ansLCM = questionLCM[2];
		    var ExAndLv = "LCM Exercise";
			document.getElementById("ExAndLv").innerHTML = ExAndLv;		
			var myAns = prompt("What is the LCM of these two numbers? "+questionLCM[0]+", "+questionLCM[1]);
            if (myAns == ansLCM) {
            var lastResult = "Correct! "+ questionLCM[2] +" is the LCM of "+questionLCM[0]+" and "+questionLCM[1];
            }else{
            var lastResult = "Wrong, " +questionLCM[2] +" is the LCM of "+questionLCM[0]+" and "+questionLCM[1];
            }
			return lastResult;
			}

			function calc5LCM()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcLCM();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

