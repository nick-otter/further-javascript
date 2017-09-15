(function(exports) {
  function testsNote() {
    var assert = new Assert();
    var note = new Note("Hello World!");

  function testNoteHasText() {
    var pass = (note.text) === "Hello World!";
    assert.isTrue(pass);
    testOutputter('testNoteHasText', pass);
  };

  function testNoteReturnsText() {
    var pass = (note.getText()) === "Hello World!";
    assert.isTrue(pass);
    testOutputter('testNoteReturnsText', pass);
  };

  testNoteHasText();
  testNoteReturnsText();
  }
 testsNote();
})(this);
