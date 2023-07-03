document.addEventListener('click', (event) => {
  if (event.target.dataset.type === 'remove') {
    const id = event.target.dataset.id

    remove(id).then(() => {
      event.target.closest('li').remove()
    })
  }
  if (event.target.dataset.type === 'edit') {
    const editId = event.target.dataset.id
    console.log(event.target.dataset.id)

    const updateNote = document
      // .querySelector(`[data-id='${editId}']`)
      // .textContent.trim()
      .querySelector(`#id${editId}`)
      .textContent.trim()
    const result = prompt('измените текст', updateNote)
    if (result === null) return
    else {
      document.querySelector(`#id${editId}`).textContent = result
      put({ id: editId, data: result })
    }
  }
})

async function remove(id) {
  await fetch(`/${id}`, { method: 'DELETE' })
}

async function put(id, data) {
  await fetch(`/`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ id, data }),
  })
}
