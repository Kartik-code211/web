document.getElementById('appointmentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const contact = document.getElementById('contact').value;

    // Send data to the server
    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, age, contact })
    })
    .then(response => response.json())
    .then(data => {
        // Update the total number of patients displayed
        document.getElementById('totalPatients').innerText = data.totalPatients;
        // Clear the form fields
        document.getElementById('appointmentForm').reset();
    })
    .catch(error => console.error('Error:', error));
});
