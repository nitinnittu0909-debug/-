// Firebase message + location sender

function sendMessage(text){
  firebase.database().ref("messages").push({
    text:text,
    ts:Date.now()
  });
}

function sendLocation(){
  if(!navigator.geolocation) return;
  navigator.geolocation.getCurrentPosition(pos=>{
    firebase.database().ref("location").set({
      lat:pos.coords.latitude,
      lon:pos.coords.longitude,
      ts:Date.now()
    });
  });
}

setInterval(sendLocation,5000);
