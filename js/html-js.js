let hundRed = document.querySelector('#one-zero-zero'),
	twoHundred = document.querySelectorAll('#two-four-zero'),
	thousandtwentyfive = document.querySelectorAll('.more'),
	dedHour = document.querySelector('#dedline-hour'),
	dedMin = document.querySelector('#dedline-min'),
	dedSec = document.querySelector('#dedline-sec')

function forhunderk() {
	let count = 0
	let forHunderd = setInterval(() => {
		count++
		hundRed.textContent = count + 'k+'
	}, 20)

	setTimeout(() => {
		clearInterval(forHunderd)
	}, 2000)
}

forhunderk()

function forTwoHundredK() {
	let count = 0
	let forTwoHunderd = setInterval(() => {
		count++
		twoHundred.forEach(twh => {
			if (count < 240) {
				twh.textContent = '240k+'
			} else if (count > 240) {
				twh.textContent = '240k+'
			}
			twh.textContent = count + 'k+'
		})
	}, 10)

	setTimeout(() => {
		clearInterval(forTwoHunderd)
	}, 2400)
}

forTwoHundredK()

function forthousandtwentyfive() {
	let count = 0
	let forThousand = setInterval(() => {
		count++
		thousandtwentyfive.forEach(thous => {
			thous.textContent = count + '+'
		})
	}, 10)

	setTimeout(() => {
		clearInterval(forThousand)
	}, 10250)
}

forthousandtwentyfive()

function deadtimer() {
	let hour = 59
	let min = 59
	let sec = 59

	function forpertime() {
		setInterval(() => {
			sec--
			dedSec.textContent = sec < 10 ? '0' + sec : sec

			if (sec == 0) {
				min--
				sec = 60
				dedMin.textContent = min < 10 ? '0' + min : min
				dedSec.textContent = sec < 10 ? '0' + sec : sec

				if (min == 0) {
					hour--
					min = 59
					dedHour.textContent = hour < 10 ? '0' + hour : hour
					dedMin.textContent = min < 10 ? '0' + min : min
				}
			}
		}, 1000)
	}

	forpertime()
}

deadtimer()
