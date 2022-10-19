import fetch from 'node-fetch'

async function fetch_demo(){
	fetch('https://www.google.com.au')
	.then((response) => response.json())
	.then((data) => console.log(data));;
}
fetch_demo();