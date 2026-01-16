// Concatenation Some Strings
document.getElementById("concatenation-string").onclick = () => {
    let firstName = "Abdullah";
    let lastName = "Iftikhar";
    let fullName = firstName + " " + lastName;
    document.getElementById("output").innerHTML = fullName
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let firstName = "Abdullah";<br>let lastName = "Iftikhar";<br>let fullName = firstName + " " + lastName;<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}

// "Ask Name From User"
document.getElementById("askNameFromUser").onclick = () => {
    let name = prompt("Enter your Name");
    document.getElementById("output").innerHTML = name
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let name = prompt("Enter your Name");<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}


// "Comparison Operators"
document.getElementById("comparisonOperators").onclick = () => {
    document.getElementById("output").innerHTML = '<p>== Checks only Values<br>=== Checks Values and Data types<br> > Greater than<br> < Less than<br> >= Greater than or Equal<br> < Less than or Equal<br> != Not Equal and Checks only Value<br> !== Not Equal, Checks Data types and Value<p/>'
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}


// "if else if"
document.getElementById("ifElseIf").onclick = () => {
    let num1 = 10;
    let num2 = 20;
    if (num1 >= num2) {
        alert("First Condition is True")
    } else if (num1 <= num2) {
        alert("Second Condition is True")
    }
    else {
        "Nothing Condition is True"
    }
    document.getElementById("original").innerHTML = '<p>let num1 = 10;<br> let num2 = 20;<br>if (num1 >= num2) {<br>alert("First Condition is True")<br> } else if (num1 <= num2){<br> alert("Second Condition is True")<br>} else {<br>  "Nothing Condition is True"<br>  }<p/>'
    document.getElementById("output").innerHTML = ""

}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}



// Testing Sets of Conditions
document.getElementById("testingSetsofConditions").onclick = () => {
    let age = prompt("Enter Your Age")
    let weight = prompt("Enter Your Weight")
    if (age >= 18 && weight <= 70) {
        document.getElementById("output").innerHTML = "You are a Fit man."

    } else if (age >= 18 && weight > 70) {
        document.getElementById("output").innerHTML = "You are a Fat man."
    }
    else {
        document.getElementById("output").innerHTML = "You are a Child."
    }
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let age = prompt("Enter Your Age")<br>let weight = prompt("Enter Your Weight")<br>if (age >= 18 && weight <= 70) { <br>document.getElementById("output").innerHTML = "You are a Fit man."<br> } (age >= 18 && weight > 70) { <br>document.getElementById("output").innerHTML = "You are a Fat man."<br> } else { <br>document.getElementById("output").innerHTML ="You are a Child."<br>  }<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}



// if Statements Nested
document.getElementById("ifStatementsNested").onclick = () => {
    let age = prompt("Enter Your Age")
    if (age >= 18) {

        let weight = prompt("Enter Your Weight")

        if (weight <= 70) {
            document.getElementById("output").innerHTML = "You are a Fit man."
        }
        else {
            document.getElementById("output").innerHTML = "You are a Fat man."
        }
    }
    else {
        document.getElementById("output").innerHTML = "You are a Child."
    }

    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let age = prompt("Enter Your Age")<br>if (age >= 18) { <br>let weight = prompt("Enter Your Weight")<br>if (weight <= 70) { <br>document.getElementById("output").innerHTML = "You are a Fit man."<br> } else {<br> document.getElementById("output").innerHTML = "You are a Fat man."<br> } else { <br>document.getElementById("output").innerHTML ="You are a Child."<br>  }<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}




// Login
document.getElementById("login").onclick = () => {
    let name = prompt("Enter Your Login Name")
    let pass = prompt("Enter Your Login Password")
    if ( name == "Abdullah" && pass == 123 ) {
        document.getElementById("output").innerHTML = "User Logged in"
    }
    else {
        document.getElementById("output").innerHTML = "User Name or Password is Incorrect"
    }
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let name = prompt("Enter Your Login Name")<br>let pass = prompt("Enter Your Login Password")<br>if ( name == "Abdullah" && pass == 123 ) {<br>document.getElementById("output").innerHTML = "User Logged in" <br>} else {<br>  document.getElementById("output").innerHTML = "User Name or Password is Incorrect"<br>  }<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}




// Check
document.getElementById("check").onclick = () => {
    let assignment = prompt("Assignment Checked Or Unchecked")
    if ( assignment  == "checked" ) {
        document.getElementById("output").innerHTML = "Your Assignment is Checked"
    }
    else {
        document.getElementById("output").innerHTML = "Your Assignment is UnChecked"
    }
    document.getElementById("output").style.textAlign = "center"

    document.getElementById("original").innerHTML = '<p>let assignment = prompt("Assignment Checked Or Unchecked")<br>if ( assignment  == "checked" ) {<br>document.getElementById("output").innerHTML = "Your Assignment is Checked" <br>} else {<br>document.getElementById("output").innerHTML = "Your Assignment is UnChecked"<br>  }<p/>'
}
document.getElementById("clearStatement").onclick = () => {
    document.getElementById("original").innerHTML = ""
}
document.getElementById("clearOutput").onclick = () => {
    document.getElementById("output").innerHTML = ""
}

