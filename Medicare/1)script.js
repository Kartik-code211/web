document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");
    const patientsLeftElem = document.getElementById("patients-left");
    const yourNoElem = document.getElementById("your-no");
    const timeLeftElem = document.getElementById("time-left");

    let patientsLeft = 32;
    let userNumber = 12;
    let remainingTime = 75 * 60; // Convert minutes to seconds

    function updateTimer() {
        if (remainingTime > 0) {
            remainingTime--;
            let hrs = Math.floor(remainingTime / 3600);
            let mins = Math.floor((remainingTime % 3600) / 60);
            let secs = remainingTime % 60;
            timeLeftElem.textContent = `${hrs}hr:${mins}min:${secs}s`;
        }
    }

    setInterval(updateTimer, 1000); // Update time every second

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("name").value;
        let address = document.getElementById("address").value;
        let gender = document.getElementById("gender").value;
        let diseases = document.getElementById("diseases").value;
        let age = document.getElementById("age").value;

        if (!name || !address || !gender || !diseases || !age) {
            alert("Please fill in all fields before submitting.");
            return;
        }

        patientsLeft--;
        userNumber--;
        remainingTime -= 300; // Reduce 5 minutes per appointment

        patientsLeftElem.textContent = patientsLeft;
        yourNoElem.textContent = userNumber;

        alert(`Appointment booked successfully!\n\nName: ${name}\nYour Queue No: ${userNumber}\nEstimated Waiting Time: ${timeLeftElem.textContent}`);

        form.reset();
    });
});
