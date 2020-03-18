function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    verify(profile.getEmail(), profile.getName());
}
function verify(email, name){
    var regExp = new RegExp("[a-z0-9\.-_]*@iiitl\.ac.in$", "i");
    match = email.match(regExp);
    if(match) sendEmail(email);
    else alert("not in this domain");
}

function sendEmail(email){
    alert("hai");
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            body.html == this.responseText;
        }
    };
    alert("hsi");
    xmlHttp.open("GET", "localhost:8000?email="+email);
    xmlHttp.send();
}