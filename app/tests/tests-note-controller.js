(function(exports) {
  function testsNoteController() {

    var assert = new Assert();
    var noteListViewDouble = { getListHTML:  [{text: "Favourite food: pesto"}, {text: "Favourite drink: seltzer"}]};
    var noteController = new NoteController(noteListViewDouble);

    function testIsAnInstance() {
      assert.isTrue(noteController);
      testOutputter('testIsAnInstance', noteController)
    };

    function testChangesElement() {
      noteController.changeElement();
      var pass = (document.getElementById('app').innerHTML) === "Favourite food: pesto";
      testOutputter('testChangesElement', noteController);
    }

  testIsAnInstance();
  testChangesElement();
  }
 testsNoteController();
})(this);
