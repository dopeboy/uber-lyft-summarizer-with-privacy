$(document).ready(function() {
    window.addEventListener("message", receiveMessage, false);
    function receiveMessage(event) {
        var origin = event.origin || event.originalEvent.origin; // For Chrome, the origin property is in the event.originalEvent object.
        if (origin !== "http://localhost:1337")
        return;

        // Lyft
        if (event.data.scope == "rides.read") {
            window.location = "/visualize.html?lyft_token=" + event.data.access_token;
        }  
    }
});
