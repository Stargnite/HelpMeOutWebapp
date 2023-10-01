chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /^http/.test(tab.url)) {
    // foreground control
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./content.js", "./content.css"],
      })
      .then(() => {
        console.log("INJECTED THE FOREGROUND SCRIPT.");
      })
      .catch((err) => console.log(err));
  }

  if (changeInfo.status === "complete") {
    chrome.scripting
      .executeScript({
        target: { tabId },
        files: ["./content.js"],
      })
      .then(() => {
        console.log("Injected the content script");
      })
      .catch((err) => {
        console.error(err, "Error in background");
      });
  }
});

function sendBase64ArrayToAPI(base64String) {
  console.log("sending to api");
}

function blobsToBase64(blobs, callback) {
  const base64Strings = [];
  let blobsRemaining = blobs.length;

  blobs.forEach((blob, index) => {
    const reader = new FileReader();
    reader.onload = function () {
      const base64String = reader.result.split(",")[1];
      base64Strings[index] = base64String;
      blobsRemaining--;

      if (blobsRemaining === 0) {
        // All blobs have been converted to base64, now call the callback
        callback(base64Strings);
      }
    };
    reader.readAsDataURL(blob);
  });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "recording_stopped") {
    console.log("Recording has stopped");
    const recordedChunks = message.data;

    blobsToBase64(recordedChunks, function (base64Strings) {
      console.log("base64 strings", base64Strings);
      sendBase64ArrayToAPI(base64Strings);
    });
  } else if (message.action === "open_new_tab") {
    const url = message.url;
    chrome.tabs.create("https://helpmeout-hng.vercel.app/ready-video");
  }
});
