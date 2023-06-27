const yards = require('yargs')
const { addNote, printNotes, removeNotes } = require('./node-controller')

yards.command({
  command: 'add',
  describe: 'Add new note to list',
  builder: {
    title: {
      type: 'string',
      describe: 'Note title',
      demandOption: true,
    },
  },
  handler({ title }) {
    addNote(title)
  },
})

yards.command({
  command: 'list',
  describe: 'Print all notes',
  async handler() {
    printNotes()
  },
})
yards.command({
  command: 'remove',
  describe: 'Remove note by id',
  async handler({ id }) {
    removeNotes(id)
  },
})

yards.parse()
