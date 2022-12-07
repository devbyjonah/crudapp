const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
	fetch('/quotes', {
		method:'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			title:'my json note',
			content:'this note was sent via JSON'
		})
	})
})