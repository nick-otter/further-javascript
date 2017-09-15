(function(exports) {

  function NoteListView(notelist) {
    this.noteList = notelist;
  };

  NoteListView.prototype.getListHTML = function() {
    var q = this.noteList.getList();
    return "<li><div>" + q + "</div></li>";
  };

  exports.NoteListView = NoteListView;
})(this);
