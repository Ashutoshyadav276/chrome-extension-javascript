chrome.action.onClicked.addListener((tab) => {
    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      function: copyContent
    }, () => {
      chrome.action.setPopup({tabId: tab.id, popup: 'popup.html'});
    });
  });
  
  function copyContent() {
    let content = document.querySelector('body').textContent;
    chrome.storage.local.set({content: content});
  }
  