(function(exports) {

  function NoteController(notelist) {
    this.noteList = notelist;
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.printElement = function() {
    var element = document.getElementById('app');
    console.log(element);
  };

  NoteController.prototype.changeElement = function() {
    console.log(document.getElementById('app'));
    var getList = this.noteListView.getListHTML();
    console.log(getList);
    document.getElementById('app').innerHTML = getList;
  };

  exports.NoteController = NoteController;
})(this);
