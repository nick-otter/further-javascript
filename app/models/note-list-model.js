(function(exports) {

  function NoteList() {
    this.note = new Note();
    this.list = [];
  };

  NoteList.prototype.storeNotes = function() {
    this.list.push(this.note.getText);
  };

  NoteList.prototype.createNote = function(text) {
    this.note = new Note(text);
  };

  NoteList.prototype.getList = function() {
    return this.list;
  };

  exports.NoteList = NoteList;
})(this);
