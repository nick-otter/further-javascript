(function(exports) {
  function noteModelTests() {
    var assert = new Assert();
    var note = new Note("Hello World!");

  function testNoteHasText() {
    assert.isTrue(note.text === "Hello World!");
  };

  function testNoteReturnsText() {
    assert.isEqual(note.getText(), "Hello World!")
  };

  testNoteHasText();
  testNoteReturnsText();
  }
 noteModelTests();
})(this);
