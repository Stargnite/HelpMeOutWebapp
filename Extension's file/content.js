console.log("I have been injected successfully");

let recorder = null;
let recordedChunks = [];

function sendToApi() {}

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);
  recorder.start();
  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    if (event.data.size > 0) {
      recordedChunks.push(event.data);
    }

    console.log(recordedChunks);

    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);

    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "screen_recording.webm";

    document.body.appendChild(a);
    a.click();

    chrome.runtime.sendMessage({
      action: "open_new_tab",
      url: `https://helpmeout-hng.vercel.app/ready-video`,
    });
  };
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("Requesting recording");

    navigator.mediaDevices
      .getDisplayMedia({
        video: {
          width: 99999999,
          height: 99999999,
        },
        audio: true,
      })
      .then((stream) => {
        init();
        console.log("Stream is available");
        onAccessApproved(stream);
      });
  }
});

// console.log(recordedChunks);

// chrome.runtime.sendMessage({
//   action: "open_new_tab",
//   url: `https://helpmeout-hng.vercel.app/ready-video`,
// });

// recorder.ondataavailable = function (event) {
//   let recordedBlob = event.data;
//   let url = URL.createObjectURL(recordedBlob);

//   let a = document.createElement("a");
//   a.style.display = "none";
//   a.href = url;
//   a.download = "screen_recording.webm";

//   document.body.appendChild(a);
//   a.click();

//   document.removeChild(a);

//   // URL.revokeObjectURL(url)
// };

// REDIRECT LINK
// https://helpmeout-hng.vercel.app/ready-video

// init();

const init = function () {
  const panel = document.createElement("div");
  const time = document.createElement("div");
  const pause = document.createElement("button");
  const stop = document.createElement("button");
  const camera = document.createElement("button");
  const microphone = document.createElement("button");
  const del = document.createElement("button");

  panel.className = "panel";
  time.innerText = "00:00:12";
  time.className = "time";

  // Create the pause button with an image
  const pauseImage = document.createElement("img");
  pauseImage.src =
    "https://w7.pngwing.com/pngs/101/918/png-transparent-pause-icon-brand-pattern-pause-button-angle-rectangle-black-thumbnail.png";
  pause.appendChild(pauseImage);

  // Create the stop button with an image
  const stopImage = document.createElement("img");
  stopImage.src =
    "https://w7.pngwing.com/pngs/1002/193/png-transparent-media-player-music-music-player-stop-music-media-player-outline-basic-icon.png";
  stop.appendChild(stopImage);

  // Create the camera button with an image
  const cameraImage = document.createElement("img");
  cameraImage.src =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Video_camera_icon.svg/512px-Video_camera_icon.svg.png?20190825131647";
  camera.appendChild(cameraImage);

  const microphoneImage = document.createElement("img");
  microphoneImage.src =
    "https://cdn-icons-png.flaticon.com/512/1082/1082810.png";
  microphone.appendChild(microphoneImage);

  const deleteImage = document.createElement("img");
  deleteImage.src =
    "https://static-00.iconduck.com/assets.00/trash-icon-922x1024-mh0gurb8.png";
  del.appendChild(deleteImage);
  del.className = "del-btn";

  // Add event listeners to buttons (you can replace the alert with your desired actions)
  pause.addEventListener("click", function () {
    alert("Pause button clicked");
  });

  stop.addEventListener("click", function () {
    alert("Stop button clicked");
  });

  camera.addEventListener("click", function () {
    alert("Camera button clicked");
  });

  // Append buttons to the panel
  panel.appendChild(time);
  panel.appendChild(pause);
  panel.appendChild(stop);
  panel.appendChild(camera);
  panel.appendChild(microphone);
  panel.appendChild(del);

  // Append the panel to the body
  // const host = document.querySelector(".panel");
  // const root = panel.attachShadow({ mode: "open" });
  // document.body.appendChild(root);
  // const div = document.createElement("div");

  document.body.appendChild(panel);
};
