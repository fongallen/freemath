


//Generate Random With Specific Decimals. 
			function genRanDec1(){
				var ranDec1 = Math.round(Math.random() * 101)/10;
				return ranDec1;
			}

			function genRanDec2(){
				var ranDec2 = Math.round(Math.random() * 1001)/100;
				return ranDec2;
			}

//Level 1 Ex.
            function makeQuestionLv1()
            {
			 //Addition 
				var num1plus = genRanDec1();
			    var num2plus = genRanDec1();
			    var ansplus = Math.round((num1plus + num2plus)*10)/10;
				var newQuestionplus = num1plus.toString() + " + " + num2plus.toString() + " = ?"; 

			//Subtraction
			    var num1mius = genRanDec1();
			    var num2mius = genRanDec1();
			    var numMaxmius = Math.max(num1mius,num2mius);
				var numMinmius = Math.min(num1mius,num2mius);
			    var ansmius = Math.round((numMaxmius - numMinmius)*10)/10;
				var newQuestionmius = numMaxmius.toString() + " - " + numMinmius.toString() + " = ?"; 
			
			//Multiplication
			    var num1Multi = genRanDec1();
			    var num2Multi = genRanDec1();
			    var ansMulti = Math.round((num1Multi*num2Multi)*100)/100;
				var newQuestionMulti = num1Multi.toString() + " x " + num2Multi.toString() + " = ?"; 

			//Division
			    var num1Div = genRanDec1();
			    var ansDiv	= genRanDec1();
			    var num2Div = Math.round((num1Div*ansDiv)*100)/100;
				var newQuestionDiv = num2Div.toString() + " / " + num1Div.toString() + " = ?";

	
				var Question = [
				num1plus, num2plus, ansplus, newQuestionplus,
				numMaxmius, numMinmius, ansmius, newQuestionmius,
				num1Multi, num2Multi, ansMulti, newQuestionMulti,
				num1Div, num2Div, ansDiv, newQuestionDiv
				];

				return Question;
            }
			
			function calcAddLv1()
            {
				var Question = makeQuestionLv1();
				var myAns = prompt(Question[3]);
				var myResult = Question[0] + " + " + Question[1] + " = " + myAns; 
			    var ExAndLv = "Addition - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[2]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[2]+".";
			}
				return lastResult;
			}
			
			function calcAdd5Lv1()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcAddLv1();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}
			
			function calcSubLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[7]);
				var myResult = Question[4] + " - " + Question[5] + " = " + myAns; 
			    var ExAndLv = "Subtraction - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[6]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[6]+".";
			}
				return lastResult;
			}

			function calcSub5Lv1()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcSubLv1();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

			function calcMultiLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[11]);
				var myResult = Question[8] + " x " + Question[9] + " = " + myAns; 
			    var ExAndLv = "Multiplication - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[10]){
				var lastResult = myResult + " is correct.";
//				document.getElementById("demo1").innerHTML = myResult;		
//				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[10]+".";
//				document.getElementById("demo1").innerHTML = myResult;		
//				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[10];				
			}
				return lastResult;
			}

			function calcMulti5Lv1()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcMultiLv1();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

			function calcDivLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[15]);
				var myResult = Question[13] + " / " + Question[12] + " = " + myAns; 
			    var ExAndLv = "Division - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[14]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[14]+".";
			}
				return lastResult;
			}

			function calcDiv5Lv1()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcDivLv1();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}


//Level 2 Ex.
            function makeQuestionLv2()
            {
			 //Addition 
				var num1plus = genRanDec2();
			    var num2plus = genRanDec2();
			    var ansplus = Math.round((num1plus + num2plus)*100)/100;
				var newQuestionplus = num1plus.toString() + " + " + num2plus.toString() + " = ?"; 

			//Subtraction
			    var num1mius = genRanDec2();
			    var num2mius = genRanDec2();
			    var numMaxmius = Math.max(num1mius,num2mius);
				var numMinmius = Math.min(num1mius,num2mius);
			    var ansmius = Math.round((numMaxmius - numMinmius)*100)/100;
				var newQuestionmius = numMaxmius.toString() + " - " + numMinmius.toString() + " = ?"; 
			
			//Multiplication
			    var num1Multi = genRanDec2();
			    var num2Multi = genRanDec1();
			    var ansMulti = Math.round((num1Multi*num2Multi)*1000)/1000;
				var newQuestionMulti = num1Multi.toString() + " x " + num2Multi.toString() + " = ?"; 

			//Division
			    var num1Div = genRanDec2();
			    var ansDiv	= genRanDec1();
			    var num2Div = Math.round((num1Div*ansDiv)*1000)/1000;
				var newQuestionDiv = num2Div.toString() + " / " + num1Div.toString() + " = ?";

	
				var Question = [
				num1plus, num2plus, ansplus, newQuestionplus,
				numMaxmius, numMinmius, ansmius, newQuestionmius,
				num1Multi, num2Multi, ansMulti, newQuestionMulti,
				num1Div, num2Div, ansDiv, newQuestionDiv
				];

				return Question;
            }
			
			function calcAddLv2()
            {
				var Question = makeQuestionLv2();
				var myAns = prompt(Question[3]);
				var myResult = Question[0] + " + " + Question[1] + " = " + myAns; 
			    var ExAndLv = "Addition - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[2]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[2]+".";
			}
				return lastResult;
			}
			
			function calcAdd5Lv2()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcAddLv2();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}
			
			function calcSubLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[7]);
				var myResult = Question[4] + " - " + Question[5] + " = " + myAns; 
			    var ExAndLv = "Subtraction - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[6]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[6]+".";
			}
				return lastResult;
			}

			function calcSub5Lv2()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcSubLv2();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

			function calcMultiLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[11]);
				var myResult = Question[8] + " x " + Question[9] + " = " + myAns; 
			    var ExAndLv = "Multiplication - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[10]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[10]+".";
			}
				return lastResult;
			}

			function calcMulti5Lv2()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcMultiLv2();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

			function calcDivLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[15]);
				var myResult = Question[13] + " / " + Question[12] + " = " + myAns; 
			    var ExAndLv = "Division - Level 1";
				document.getElementById("ExAndLv").innerHTML = ExAndLv;		

			if(myAns == Question[14]){
				var lastResult = myResult + " is correct.";
			}else{
				var lastResult = myResult + " is wrong, the correct answer is "+Question[14]+".";
			}
				return lastResult;
			}

			function calcDiv5Lv2()
			{
				var x = new Array();
				for (var i = 0; i < 5; i++) {
					x[i] = calcDivLv2();
				}
				document.getElementById("Q1").innerHTML = x[0];
				document.getElementById("Q2").innerHTML = x[1];
				document.getElementById("Q3").innerHTML = x[2];
				document.getElementById("Q4").innerHTML = x[3];
				document.getElementById("Q5").innerHTML = x[4];				
			}

