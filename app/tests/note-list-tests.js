(function(exports) {
  function noteListTests() {
    var assert = new Assert();
    var noteList = new NoteList();

  function testCreatesNote() {
    noteList.createNote("Hello World!");
    assert.isEqual(noteList.note.text, "Hello World!");
  };

  function testReturnsAllNotes() {
    noteList.createNote("Hello World!");
    noteList.storeNotes();
    assert.isEqual(noteList.getList, ["Hello World!"]);
  };

  testCreatesNote();
  testReturnsAllNotes();
  }
 noteListTests();
})(this);
