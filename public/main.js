const update = document.querySelector('#update-button')
const del = document.querySelector('#delete-button')

update.addEventListener('click', _ => {
	fetch('/notes', {
		method:'put',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({
			title:'updated',
			content:'version 2'
		})
	})
		.then(res => {
			if (res.ok) return res.json()
		})
		.then(response => {
			console.log(response)
		})
})

del.addEventListener('click', _ => {
	fetch('/notes', {
		method: 'delete',
		headers: { 'Content-Type': 'application/json'},
		body: JSON.stringify({
			title:'updated'
		})
	})
		.then(res => {
			if (res.ok) return res.json()
		})
		.then(data => {
			window.location.reload()
		})
})