(function(exports) {
  function noteListViewTests() {
    var assert = new Assert();
    var noteListView = new NoteListView(new NoteList);

  function testReturnsHTMLList() {
    noteListView.noteList.createNote("Hello World!");
    noteListView.noteList.storeNotes();
    var pass = (noteListView.getListHTML()) == "<li><div>Hello World!</div></li>";
    assert.isTrue(pass);
    testOutputter('testReturnsHTMLList', pass)
    };

  testReturnsHTMLList();
  }
 noteListViewTests();
})(this);
