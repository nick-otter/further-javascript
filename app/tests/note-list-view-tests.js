(function(exports) {
  function noteListViewTests() {
    var assert = new Assert();
    var noteListView = new NoteListView();

  function testReturnsHTMLList() {
    noteListView.noteList.createNote("Hello World!");
    noteListView.noteList.storeNotes();
    assert.isEqual(noteListView.getListHTML(), "<li><div>Hello World!</div></li>");
    };

  testReturnsHTMLList();
  }
 noteListViewTests();
})(this);
