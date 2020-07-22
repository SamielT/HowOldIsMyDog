function fn1() {
	var dogAge = document.getElementById("age").value;
	if (dogAge => 1) {
		var dogAgeToHuman = (16 * (Math.log(dogAge))) + 31;
		document.getElementById("result").innerHTML = dogAgeToHuman;
	} else {
		return;
	}
}
