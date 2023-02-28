chrome.storage.local.get('content', (result) => {
    const content = document.getElementById('content');
    content.textContent = result.content;
    const copyBtn = document.getElementById('copy-btn');
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(result.content);
      copyBtn.textContent = "Copied!";
      setTimeout(() => {
        copyBtn.textContent = "Copy";
      }, 1000);
    });
  });
  