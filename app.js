// app.js
function createEvent() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const event = { name, date, location, description };

    let events = JSON.parse(localStorage.getItem('events')) || [];
    events.push(event);

    localStorage.setItem('events', JSON.stringify(events));
    window.location.href = 'index.html';
}

function updateEvent() {
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    const event = { name, date, location, description };

    let events = JSON.parse(localStorage.getItem('events')) || [];
    const index = events.findIndex(e => e.name === name);

    if (index !== -1) {
        events[index] = event;
        localStorage.setItem('events', JSON.stringify(events));
        window.location.href = 'index.html';
    }
}

function loadEvents() {
    const eventList = document.getElementById('eventList');
    let events = JSON.parse(localStorage.getItem('events')) || [];

    eventList.innerHTML = '';

    events.forEach(event => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <strong>${event.name}</strong>
            <p>${event.date}</p>
            <p>${event.location}</p>
            <p>${event.description}</p>
            <a href="update.html">Update</a>
        `;
        eventList.appendChild(listItem);
    });
}

loadEvents();
