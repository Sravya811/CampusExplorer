import { getEvents } from "./api.js";
import { displayEvents } from "./ui.js";

const btn = document.getElementById("loadBtn");
const status = document.getElementById("status");
const eventsDiv = document.getElementById("events");

btn.addEventListener("click", async () => {

status.innerText = "Loading events...";

const events = await getEvents();

status.innerText = "Events Loaded ✅";

displayEvents(events, eventsDiv);

});
