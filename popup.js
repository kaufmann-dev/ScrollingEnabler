let enableScrolling = document.getElementById("enableScrolling");

enableScrolling.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setPageOverflow,
    });
});
  
function setPageOverflow() {
    document.body.style.overflow = "auto";
}