const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;
const searchTemperature = () => {
	const city = document.getElementById("city-name").value;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
	console.log(url);
	// data loaded here
	fetch(url)
		.then((res) => res.json())
		.then((data) => displayTemp(data));
};

// inner text e data dekhabe
const setInnerText = (id, text) => {
	document.getElementById(id).innerText = text;
};

const displayTemp = (temparature) => {
	// setinnerText function call
	setInnerText("city", temparature.name);
	setInnerText("temp", temparature.main.temp);
	setInnerText("condition", temparature.weather[0].main);
};
