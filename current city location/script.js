const button = document.getElementById("press-button")

async function getdata(lat,long){

    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=95b9cd53f6dd4001be544703230110&q=${lat},${long}&aqi=yes`);
 
    return await promise.json()
 }
 

async function gotLocation (position){

    const result = await getdata(position.coords.latitude,position.coords.longitude)
    console.log(result);

}

function failedToGet ()
{
    console.log("there was some error")
}

button.addEventListener("click" , async() =>{

    navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);

});