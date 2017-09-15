(function(exports) {
  function testsNoteList() {
    var assert = new Assert();
    var noteList = new NoteList();

  function testCreatesNote() {
    noteList.createNote("Hello World!");
    var pass = (noteList.note.text) === "Hello World!";
    assert.isTrue(pass);
    testOutputter('testCreatesNote', pass);
  };

  function testReturnsAllNotes() {
    noteList.createNote("Hello World!");
    noteList.storeNotes();
    var pass = (noteList.getList()) == noteList.list;
    assert.isTrue(pass);
    testOutputter('testReturnsAllNotes', pass);
  };

  testCreatesNote();
  testReturnsAllNotes();
  }
 testsNoteList();
})(this);
