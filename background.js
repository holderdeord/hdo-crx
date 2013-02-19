var snippets = {
  getSelectionAsHtml: 'var div = document.createElement("div"); div.appendChild(document.getSelection().getRangeAt(0).cloneContents()); div.innerHTML',
  fetchAllLinks:      'var res = [], nodes = document.querySelectorAll("a"); for (var i=0; i < nodes.length; i++) { res.push(nodes[i].href) }; res;'
}

function copy(text){
  var copyDiv = document.createElement('div');
  copyDiv.contentEditable = true;
  document.body.appendChild(copyDiv);

  copyDiv.innerText    = text;
  copyDiv.unselectable = "off";
  copyDiv.focus();

  document.execCommand('SelectAll');
  document.execCommand("Copy", false, null);
  document.body.removeChild(copyDiv);
}


function copySelectionAsHtml(callback) {
  chrome.tabs.executeScript(null, {code: snippets.getSelectionAsHtml}, function(result) {
    copy(result[0]);

    if(typeof callback == 'function') {
      callback(result[0])
    }
  });
}

function openAllIssues(callback) {
  chrome.tabs.executeScript(null, {code: snippets.fetchAllLinks}, function(result) {
    var opened = false;
    var hrefs = result[0];

    hrefs.forEach(function(href) {
      if (href.match(/Referater\/.+\/\d{4}-\d{4}\/(\d{6})\/\d+\/?$/)) {
        opened = true;
        chrome.tabs.create({url: href, active: false});
      }
    });

    if(typeof callback == 'function') {
      callback(opened)
    }
  })
}