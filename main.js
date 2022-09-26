let latitude,longitude,destination

$(document).ready(function(){
    alert("Please allow the device to know your location")
	initGeoLocation()
})

$(function () {
    $("#navigate-button").click(function () {
        window.location.href = `arWeather.html?source=${latitude};${longitude}&destination=${destination.lat};${destination.lng}`
    })
})

function initGeoLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(success)
    }
    else {
        alert("Sorry, your browser does not support geolocation service!!")
    }
}

function success(position){
    longitude = position.coords.longitude
    latitude = position.coords.latitude
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA'
    var map = new mapboxgl.Map({
        container:'map',
        style:'mapbox://styles/mapbox/streets-v11',
        center:[longitude,latitude],
        zoom:4
    })

    map.addControl(
        new mapboxgl.GeolocateControl({
            positionOptions:{
                enableHighAccuracy:true
            },
            trackUserLocation:true
        })
    )
    
    map.addControl(
        new MapboxDirections({
            accessToken:mapboxgl.accessToken
        }),
        'top-left'
    );

    map.on('click',function(e){
        destination = e.lngLat;
    })

    map.addControl(
        new MapboxGeocoder({
            accessToken:mapboxgl.accessToken,
            mapboxgl :mapboxgl
        }).on('result',function(e){
            destination = e.result.center
        })
    )
}

var img1 = document.querySelector("#amberFort")
var marker1 = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133,26.98547])
.addTo(map)

var img2 = document.querySelector("#charminar")
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([78.474533,17.361431])
.addTo(map)

var img3 = document.querySelector("#gateway")
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([72.8347,18.9220])
.addTo(map)

var img4 = document.querySelector("#indiaGate")
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([77.2295,28.6129])
.addTo(map)

var img5 = document.querySelector("#taj-mahal")
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([78.0421,27.1751])
.addTo(map)

var img6 = document.querySelector("#victoria")
var marker6 = new mapboxgl.Marker({
    element: img6
})
.setLngLat([88.3426,22.5448])
.addTo(map)

var img7 = document.querySelector("#mysore-palace")
var marker7 = new mapboxgl.Marker({
    element: img7
})
.setLngLat([76.6552,12.3052])
.addTo(map)