document.addEventListener("DOMContentLoaded", () => {
	const startVideoBtn = document.querySelector("#startRecording");
	startVideoBtn.addEventListener("click", () => {
	  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.sendMessage(
		  tabs[0].id,
		  { action: "request_recording" },
		  (response) => {
			if (!chrome.runtime.lastError) {
			//   const recordedChunks = chrome.extension.getBackgroundPage().recordedChunks;
				console.log('About to start recording')
			  // Display the preview video in the popup
			  console.log('data is getting to the output')
			} else {
			  console.error(chrome.runtime.lastError, "Error on line 18");
			}
		  }
		);
	  });
	});
  });