function HdoExtension() {
  this.statusElement = document.getElementById('status');
};

HdoExtension.prototype.init = function() {
  var hdo = this;

  document.getElementById('copySelectionAsHtml').addEventListener('click', function() {
    hdo.copySelectionAsHtml();
  });
};

HdoExtension.prototype.copySelectionAsHtml = function() {
  var hdo = this;

  chrome.extension.getBackgroundPage().copySelectionAsHtml(function() {
    hdo.setStatus('OK!')
    setTimeout(function() { window.close(); }, 1000)
  });
};

HdoExtension.prototype.setStatus = function(str) {
  this.statusElement.innerText = str;
};

document.addEventListener('DOMContentLoaded', function () {
  hdo = new HdoExtension();
  hdo.init();
});




