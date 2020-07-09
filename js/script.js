function fn1() {
	var dogAge = document.getElementById("age").value;
	var dogAgeToHuman = (16 * (Math.LN2 * dogAge)) + 31;
	alert("Human age is: " + dogAgeToHuman);
}