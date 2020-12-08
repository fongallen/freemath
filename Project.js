//Level 1 Ex.
            function makeQuestionLv1()
            {
			 //Addition 
				var num1plus = Math.floor(Math.random() * 11);
			    var num2plus = Math.floor(Math.random() * 11);
			    var ansplus = num1plus + num2plus;
				var newQuestionplus = num1plus.toString() + " + " + num2plus.toString() + " = ?"; 

			//Subtraction
			    var num1mius = Math.floor(Math.random() * 11);
			    var num2mius = Math.floor(Math.random() * 11);
			    var numMaxmius = Math.max(num1mius,num2mius);
				var numMinmius = Math.min(num1mius,num2mius);
				var ansmius = numMaxmius - numMinmius;
				var newQuestionmius = numMaxmius.toString() + " - " + numMinmius.toString() + " = ?"; 

			//Multiplication
			    var num1Multi = Math.floor(Math.random() * 11);
			    var num2Multi = Math.floor(Math.random() * 11);
			    var ansMulti = num1Multi*num2Multi;
				var newQuestionMulti = num1Multi.toString() + " x " + num2Multi.toString() + " = ?"; 

			
			//Division
			    var num1Div = Math.floor(Math.random() * 10+1);
			    var ansDiv	= Math.floor(Math.random() * 7+4);
			    var num2Div = num1Div*ansDiv;
				var newQuestionDiv = num2Div.toString() + " / " + num1Div.toString() + " = ?";


				var Question = [
				num1plus, num2plus, ansplus, newQuestionplus,
				numMaxmius, numMinmius, ansmius, newQuestionmius,
				num1Multi, num2Multi, ansMulti, newQuestionMulti,
				num1Div, num2Div, ansDiv, newQuestionDiv];
				return Question;
            }
			
			function calcAddLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[3]);
				var myResult = Question[0] + " + " + Question[1] + " = " + myAns; 

			if(myAns == Question[2]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[2];				
			}
			}
			
			function calcSubLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[7]);
				var myResult = Question[4] + " - " + Question[5] + " = " + myAns; 

			if(myAns == Question[6]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[6];				
			}
			}

			function calcMultiLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[11]);
				var myResult = Question[8] + " x " + Question[9] + " = " + myAns; 

			if(myAns == Question[10]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[10];				
			}
			}


			
			function calcDivLv1()
            {
			    var Question = makeQuestionLv1();
				var myAns = prompt(Question[15]);
				var myResult = Question[13] + " / " + Question[12] + " = " + myAns; 

			if(myAns == Question[14]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[14];				
			}
			}


//Level 2 Ex.
            function makeQuestionLv2()
            {
			 //Addition 
				var num1plus = Math.floor(Math.random() * 51);
			    var num2plus = Math.floor(Math.random() * 51);
			    var ansplus = num1plus + num2plus;
				var newQuestionplus = num1plus.toString() + " + " + num2plus.toString() + " = ?"; 

			//Subtraction
			    var num1mius = Math.floor(Math.random() * 101);
			    var num2mius = Math.floor(Math.random() * 60);
			    var numMaxmius = Math.max(num1mius,num2mius);
				var numMinmius = Math.min(num1mius,num2mius);
				var ansmius = numMaxmius - numMinmius;
				var newQuestionmius = numMaxmius.toString() + " - " + numMinmius.toString() + " = ?"; 

			//Multiplication
			    var num1Multi = Math.floor(Math.random() * 21+5);
			    var num2Multi = Math.floor(Math.random() * 11);
			    var ansMulti = num1Multi*num2Multi;
				var newQuestionMulti = num1Multi.toString() + " x " + num2Multi.toString() + " = ?"; 

			
			//Division
			    var num1Div = Math.floor(Math.random() * 10+1);
			    var ansDiv	= Math.floor(Math.random() * 20+7);
			    var num2Div = num1Div*ansDiv;
				var newQuestionDiv = num2Div.toString() + " / " + num1Div.toString() + " = ?";


				var Question = [
				num1plus, num2plus, ansplus, newQuestionplus,
				numMaxmius, numMinmius, ansmius, newQuestionmius,
				num1Multi, num2Multi, ansMulti, newQuestionMulti,
				num1Div, num2Div, ansDiv, newQuestionDiv];
				return Question;
            }
			
			function calcAddLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[3]);
				var myResult = Question[0] + " + " + Question[1] + " = " + myAns; 

			if(myAns == Question[2]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[2];				
			}
			}
			
			function calcSubLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[7]);
				var myResult = Question[4] + " - " + Question[5] + " = " + myAns; 

			if(myAns == Question[6]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[6];				
			}
			}

			function calcMultiLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[11]);
				var myResult = Question[8] + " x " + Question[9] + " = " + myAns; 

			if(myAns == Question[10]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[10];				
			}
			}


			
			function calcDivLv2()
            {
			    var Question = makeQuestionLv2();
				var myAns = prompt(Question[15]);
				var myResult = Question[13] + " / " + Question[12] + " = " + myAns; 

			if(myAns == Question[14]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[14];				
			}
			}

//Level 3 Ex.
            function makeQuestionLv3()
            {
			 //Addition 
				var num1plus = Math.floor(Math.random() * 51+100);
			    var num2plus = Math.floor(Math.random() * 51+150);
			    var ansplus = num1plus + num2plus;
				var newQuestionplus = num1plus.toString() + " + " + num2plus.toString() + " = ?"; 

			//Subtraction
			    var num1mius = Math.floor(Math.random() * 101+300);
			    var num2mius = Math.floor(Math.random() * 60+200);
			    var numMaxmius = Math.max(num1mius,num2mius);
				var numMinmius = Math.min(num1mius,num2mius);
				var ansmius = numMaxmius - numMinmius;
				var newQuestionmius = numMaxmius.toString() + " - " + numMinmius.toString() + " = ?"; 

			//Multiplication
			    var num1Multi = Math.floor(Math.random() * 31+5);
			    var num2Multi = Math.floor(Math.random() * 31+5);
			    var ansMulti = num1Multi*num2Multi;
				var newQuestionMulti = num1Multi.toString() + " x " + num2Multi.toString() + " = ?"; 

			
			//Division
			    var num1Div = Math.floor(Math.random() * 20+7);
			    var ansDiv	= Math.floor(Math.random() * 20+7);
			    var num2Div = num1Div*ansDiv;
				var newQuestionDiv = num2Div.toString() + " / " + num1Div.toString() + " = ?";


				var Question = [
				num1plus, num2plus, ansplus, newQuestionplus,
				numMaxmius, numMinmius, ansmius, newQuestionmius,
				num1Multi, num2Multi, ansMulti, newQuestionMulti,
				num1Div, num2Div, ansDiv, newQuestionDiv];
				return Question;
            }
			
			function calcAddLv3()
            {
			    var Question = makeQuestionLv3();
				var myAns = prompt(Question[3]);
				var myResult = Question[0] + " + " + Question[1] + " = " + myAns; 

			if(myAns == Question[2]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[2];				
			}
			}
			
			function calcSubLv3()
            {
			    var Question = makeQuestionLv3();
				var myAns = prompt(Question[7]);
				var myResult = Question[4] + " - " + Question[5] + " = " + myAns; 

			if(myAns == Question[6]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[6];				
			}
			}

			function calcMultiLv3()
            {
			    var Question = makeQuestionLv3();
				var myAns = prompt(Question[11]);
				var myResult = Question[8] + " x " + Question[9] + " = " + myAns; 

			if(myAns == Question[10]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[10];				
			}
			}


			
			function calcDivLv3()
            {
			    var Question = makeQuestionLv3();
				var myAns = prompt(Question[15]);
				var myResult = Question[13] + " / " + Question[12] + " = " + myAns; 

			if(myAns == Question[14]){
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "correct";		
			}else{
				document.getElementById("demo1").innerHTML = myResult;		
				document.getElementById("demo2").innerHTML = "wrong, the correct answer is: "+Question[14];				
			}
			}
