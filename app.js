var timerInterval;
    var stopwatchInterval;
    var timerRunning = false;
    var stopwatchRunning = false;

    function startTimer() {
      if (!timerRunning) {
        var timerInput = document.getElementById("timerInput").value;
        var timerDisplay = document.getElementById("timerDisplay");
        var time = parseInt(timerInput, 10);

        if (isNaN(time) || time <= 0) {
          alert("Please enter a valid time (in seconds).");
          return;
        }

        timerRunning = true;

        timerInterval = setInterval(function() {
          if (time <= 0) {
            stopTimer();
            alert("Timer finished!");
            return;
          }

          time--;
          timerDisplay.innerHTML = time;
        }, 1000);
      }
    }

    function stopTimer() {
      clearInterval(timerInterval);
      timerRunning = false;
    }

    function resetTimer() {
      stopTimer();
      document.getElementById("timerInput").value = "";
      document.getElementById("timerDisplay").innerHTML = "0";
    }

    function startStopwatch() {
      if (!stopwatchRunning) {
        var stopwatchDisplay = document.getElementById("stopwatchDisplay");
        var hours = 0;
        var minutes = 0;
        var seconds = 0;

        stopwatchRunning = true;

        stopwatchInterval = setInterval(function() {
          seconds++;
          if (seconds >= 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }

          stopwatchDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
        }, 1000);
      }
    }

    function stopStopwatch() {
      clearInterval(stopwatchInterval);
      stopwatchRunning = false;
    }

    function resetStopwatch() {
      stopStopwatch();
      document.getElementById("stopwatchDisplay").innerHTML = "0:0:0";
    }