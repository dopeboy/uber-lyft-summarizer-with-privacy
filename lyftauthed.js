$(document).ready(function() {
    //credit: http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    if (getParameterByName('code')) {
        $.ajax({
            type: "POST",
            url: "https://api.lyft.com/oauth/token",
            dataType: 'json',
            async: false,
            beforeSend: function (xhr) {
                xhr.setRequestHeader ("Authorization", "Basic " + btoa("5QUea4VEMOhM" + ":" + "Ldq_mTD3lzVugInU_X1E5yQdP33pgyOE"));
            },
            data: {
                grant_type: "authorization_code",
                code: getParameterByName('code')
            },
            success: function (data) {
                window.parent.postMessage(data, "http://localhost:1337");
            }
        });
    }
});
