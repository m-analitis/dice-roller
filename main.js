const url = "https://dice-roller-nodejs-f7ayd2a0b0f6eng4.centralus-01.azurewebsites.net/"

function load() {
	wakeup()
	roll()
}

// Pings the Node.js server to make sure it is running
async function wakeup() {
	const fetchString = url + "/api/ping"
	const response = await fetch(fetchString)
	const responseText = await response.text()
	console.log(responseText)
}

// Requests dice rolls from the Node.js server
async function roll() {
	let unchecked = getUnchecked()
	let num = unchecked.length
	const fetchString = url + "/roll?num="+num
	const response = await fetch(fetchString)
	const rollList = await response.json()
	for (let i = 0; i < num; i++) {
		document.getElementById(`result${unchecked[i]}`).setAttribute("value",rollList[i])
	}
}

// Gets the IDs of all dice to reroll
function getUnchecked() {
	let unchecked = []
    for (let i = 1; i <= 5; i++) {
        if (!document.getElementById(`keep${i}`).checked) {
            unchecked.push(i)
        }
    }
	return unchecked
}