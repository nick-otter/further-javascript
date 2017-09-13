
printElement = function() {
  var element = document.getElementById('app');
  console.log(element);
};

changeElement = function() {
  console.log(document.getElementById('app'));
  document.getElementById('app').innerHTML = "Howdy";
};
