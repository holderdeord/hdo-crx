function HdoExtension() {
  this.containerElement           = document.body;
  this.statusElement              = document.getElementById('status');
  this.copySelectionAsHtmlElement = document.getElementById('copySelectionAsHtml');
  this.openAllIssuesElement       = document.getElementById('openAllIssues');
};

HdoExtension.prototype.init = function() {
  var hdo = this;

  hdo.copySelectionAsHtmlElement.addEventListener('click', function() {
    hdo.copySelectionAsHtml();
  });

  hdo.openAllIssuesElement.addEventListener('click', function() {
    hdo.openAllIssues();
  })

  chrome.tabs.getSelected(null,function(tab) {
    var match,
        url = tab.url;

    if (match = url.match(/Referater\/.+\/\d{4}-\d{4}\/(\d{6})\/?$/)) {
      hdo.openAllIssuesElement.style.display = 'block';
    }
  });

};

HdoExtension.prototype.copySelectionAsHtml = function() {
  var hdo = this;

  chrome.extension.getBackgroundPage().copySelectionAsHtml(function() {
    hdo.setStatus('OK!')
    setTimeout(function() { window.close(); }, 1000)
  });
};

HdoExtension.prototype.openAllIssues = function() {
  var hdo = this;
  chrome.extension.getBackgroundPage().openAllIssues(function() {
    window.close();
  })
};

HdoExtension.prototype.setStatus = function(str) {
  this.statusElement.innerText = str;
};

document.addEventListener('DOMContentLoaded', function () {
  hdo = new HdoExtension();
  hdo.init();
});




