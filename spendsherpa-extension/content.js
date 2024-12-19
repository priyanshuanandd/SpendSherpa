// content.js - Runs on the active tab and can get the title of the page
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getPageTitle') {
        sendResponse({ title: document.title });
    }
});
