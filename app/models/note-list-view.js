(function(exports) {

  function NoteListView(listObject) {
    this.noteList = new NoteList();
  };

  NoteListView.prototype.getListHTML = function() {
    var q = this.noteList.getList();
    return "<li><div>" + q + "</div></li>";
  };

  exports.NoteListView = NoteListView;
})(this);
