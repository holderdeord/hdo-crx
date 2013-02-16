var snippets = {
  getSelectionAsHtml: 'var div = document.createElement("div"); div.appendChild(document.getSelection().getRangeAt(0).cloneContents()); div.innerHTML'
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