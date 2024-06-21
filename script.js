$(document).ready(function() {
   $('#bmi-popup').on('hide.bs.modal', function() {
       document.getElementById("bmi-result").innerHTML = "";
   });
});

function bmiCalculator() {
   try {
       var weight = parseFloat(prompt("What is your weight in KG?"));
       var height = parseFloat(prompt("What is your height in CM?"));

       if (isNaN(weight) || isNaN(height)) {
           alert("Please enter valid numbers for your weight and height.");
           return;
       }

       var bmi = weight / (height * height / 10000); // convert CM to meters
       bmi = Math.round(bmi);

       if (bmi < 18.5) {
           document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi + " . So you are underweight.";
       } else if (bmi >= 18.5 && bmi < 24.9) {
           document.getElementById("bmi-result").innerHTML = "Your BMI is " + bmi + " . So you have a normal weight.";
       } else if (bmi >= 24.9) {
           document.getElementById("bmi-result").innerHTML = "<span style='color: red'>Your BMI is " + bmi + " . So you are overweight.</span>";
       }
   } catch (error) {
       document.getElementById("bmi-result").innerHTML = "An error occurred: " + error.message;
   }

   $('#bmi-popup').modal('show');
}

document.getElementById("calculate-bmi").addEventListener("click", bmiCalculator);