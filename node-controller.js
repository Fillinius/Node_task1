const fs = require('fs/promises')
const path = require('path')
// const chalk = require('chalk')

const notePath = path.join(__dirname, 'db.json')

async function addNote(title) {
  const notes = await getNotes()

  const note = {
    title,
    id: Date.now().toString(),
  }
  notes.push(note)
  await fs.writeFile(notePath, JSON.stringify(notes))
  // console.log(chalk.bgGreen('Note was added!'))
}

async function getNotes() {
  const notes = await fs.readFile(notePath, { encoding: 'utf-8' })
  return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : []
}
async function printNotes() {
  const notes = await getNotes()
  notes.forEach((note) => {
    note.id
  })
}

async function removeNotes(id) {
  const notes = await getNotes()
  const note = notes.filter((note) => note.id.toString() !== id)
  await fs.writeFile(notePath, JSON.stringify(note))
}

module.exports = {
  addNote,
  printNotes,
  removeNotes,
}
