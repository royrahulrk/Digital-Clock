function numberFormat(n) {
  
  return n > 9 ? "" + n : "0" + n;
}

function timer() {
  let hour = document.getElementById("hr");
  let minute = document.getElementById("min");
  let second = document.getElementById("sec");
  let date = new Date();
  let hr = date.getHours();
  hour.innerText = `${numberFormat(hr % 12 || 12)}`;
  let min = date.getMinutes();
  minute.innerText = `${numberFormat(min)}`;
  let sec = date.getSeconds();
  second.innerText = `${numberFormat(sec)}`;

  let am = document.getElementById("am");

  if (hr >= 12 && min >= 00 && sec >= 01) {
    am.innerText = "PM";
  } else {
    am.innerText = "AM";
  }
  setMessage(numberFormat(hr % 12 || 12), am.innerText);
}

setInterval(function () {
  timer();
}, 1000);

let wakeUpTimeTable = document.getElementById("wake-up-time-table");
let lunchTimeTable = document.getElementById("lunch-time-table");
let napTimeTable = document.getElementById("nap-time-table");
let nightTimeTable = document.getElementById("night-time-table");
let setBtn = document.getElementById("alarm");
let timeTableArray = [];

setBtn.addEventListener("click", function () {
  timeTable(timeTableArray);
});


function timeTable(timeEventArray) {
  let array = document.getElementById("time-show").getElementsByTagName("p");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < timeEventArray.length; j++) {
      if (
        array[i].getElementsByTagName("span")[0].innerText ===
        timeEventArray[j].timeText
      ) {
        array[i].getElementsByTagName("span")[1].innerText =
          timeEventArray[j].timeEvent;
      }
    }
  }

  let date = new Date();
  let hour = date.getHours();
  let timeUnit = hour >= 12 ? "PM" : "AM";
  let heading = document.getElementById("heading");
  let Image = document.getElementById("Img").getElementsByTagName("img");

  for (let i = 0; i < timeEventArray.length; i++) {
    console.log(
      timeEventArray[i].timeEvent.split(" ")[0].includes(hour % 12 || 12)
    );
    console.log(timeEventArray[i].timeEvent.split(" ")[1].includes(timeUnit));
    if (
      timeEventArray[i].timeEvent.split(" ")[0].includes(hour % 12 || 12) &&
      timeEventArray[i].timeEvent.split(" ")[1].includes(timeUnit)
    ) {
      if (timeEventArray[i].timeText === "Wake Up Time :") {
        heading.innerText = "GOOD MORNING!! WAKE UP !!";
        Image[0].src = "morning.jpg";
      } else if (timeEventArray[i].timeText === "Lunch Time :") {
        heading.innerText = "GOOD AFTERNOON !!";
        Image[0].src = "Component31.png";
      } else if (timeEventArray[i].timeText === "Nap Time :") {
        heading.innerText = "GOOD EVENING !!";
        Image[0].src = "eve.jpg";
      } else if (timeEventArray[i].timeText === "Night Time :") {
        heading.innerText = "GOOD NIGHT !!";
        Image[0].src = "sleep.jpg";
      } else {
        heading.innerText = "TAKE CARE OF YOUR HEALTH!!!";
        Image[0].src = "default.jpg";
      }
    }
  }
}




wakeUpTimeTable.addEventListener("change", function (event) {
  let obj = {
    timeText: document
      .getElementById("time-show")
      .getElementsByTagName("p")[0]
      .getElementsByTagName("span")[0].innerText,
    timeEvent: event.target.selectedOptions[0].innerText,
  };

  timeTableArray.push(obj);
});




lunchTimeTable.addEventListener("change", function (event) {
  let obj = {
    timeText: document
      .getElementById("time-show")
      .getElementsByTagName("p")[1]
      .getElementsByTagName("span")[0].innerText,
    timeEvent: event.target.selectedOptions[0].innerText,
  };

  timeTableArray.push(obj);
});




napTimeTable.addEventListener("change", function (event) {
  let obj = {
    timeText: document
      .getElementById("time-show")
      .getElementsByTagName("p")[2]
      .getElementsByTagName("span")[0].innerText,
    timeEvent: event.target.selectedOptions[0].innerText,
  };

  timeTableArray.push(obj);
});




nightTimeTable.addEventListener("change", function (event) {
  let obj = {
    timeText: document
      .getElementById("time-show")
      .getElementsByTagName("p")[3]
      .getElementsByTagName("span")[0].innerText,
    timeEvent: event.target.selectedOptions[0].innerText,
  };

  timeTableArray.push(obj);
});





function setMessage(hour, timeUnit) {
  let grabmessage = document.getElementById("grab");

  if ((hour >= 10 || hour < 12) && timeUnit === "AM") {
    grabmessage.innerText = "GRAB SOME HEALTHY BREAKFAST";
  } else if ((hour >= 12 || hour < 04) && timeUnit === "PM") {
    grabmessage.innerText = `LET'S HAVE SOME LUNCH !!`;
  } else if ((hour >= 04 || hour < 08) && timeUnit === "PM") {
    grabmessage.innerText = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
  } else {
    grabmessage.innerText = "CLOSE YOUR EYES AND GO TO SLEEP";
  }
}
