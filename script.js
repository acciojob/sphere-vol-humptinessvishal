function volume_sphere() {
    //Write your code here
	const form = document.getElementById("MyForm");
	const volume = document.getElementById("volume");
	const radius =parseFloat(form["radius"].value);
	if (isNaN(radius) || radius < 0) {
        volume.value = "NaN";
    }
	else {
        const calculate = (4/3) * Math.PI * Math.pow(radius, 3);
        volume.value = calculate.toFixed(4);
    }
	return false;
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
