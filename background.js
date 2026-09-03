chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
  if (request.type === "getLocalizedMessage" && request.key) {
    sendResponse({ message: chrome.i18n.getMessage(request.key) });
  }
});
