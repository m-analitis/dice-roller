const url = "https://dice-roller-nodejs-f7ayd2a0b0f6eng4.centralus-01.azurewebsites.net/"

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

function getUnchecked() {
	let unchecked = []
    for (let i = 1; i <= 5; i++) {
        if (!document.getElementById(`keep${i}`).checked) {
            unchecked.push(i)
        }
    }
	return unchecked
}
//document.getElementById(`result${i}`).setAttribute("value",rand)