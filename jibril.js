const studentGrade = parseInt(prompt("What is your Students Grade")) 
if ((studentGrade >=0) && (studentGrade <50)) {
   console.log ("You have failed and your grade is a F")
} else if ((studentGrade >=50) && (studentGrade <70)) {
    console.log ("You have a average grade and your grade is a C")
} else if ((studentGrade >=70) && (studentGrade <90)) {
    console.log ("You have a above average grade and your grade is a B")
} else if ((studentGrade >=90) && (studentGrade <101)) {
    console.log ("you have a excellent grade and your grade is a A")
}
 else {
    console.log ("Invalid Score");
};