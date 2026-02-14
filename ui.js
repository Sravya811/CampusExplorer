export const displayEvents = (events, container) => {

container.innerHTML = "";

events.forEach(event => {

let div = document.createElement("div");
            div.className = "event";

div.innerHTML =
            `<h3>${event.title}</h3>
                 <p>Seats Available: ${event.seats}</p>
                 <button class="join">Join</button>`;

container.appendChild(div);
        });

};
