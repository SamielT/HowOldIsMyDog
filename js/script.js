function fn1() {
	var dogAge = document.getElementById("age").value;
	if (dogAge => 1) {
		var dogAgeToHuman = (16 * (Math.LN2 * dogAge)) + 31;
		alert("Human age is: " + dogAgeToHuman);
	} else {
		return;
	}
}