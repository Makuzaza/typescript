import axios from "axios";

const form = document.querySelector('form')!;

const GOOGLE_API_KEY = 'AIzaSyAuyPWb0vgdZ3j5PZ6ptox5pFoEUMoYMao';

type GoogleGeoCodingResponse = {
    results: {geometry: {location: {lat: number, lng: number}}}[];
    status: 'OK' | 'ZERO_RESULTS';
};

// declare let google: any;

function searchAddressHandler(event: Event) {
  event.preventDefault();
    const addressInput = document.getElementById('address') as HTMLInputElement;
    const enteredAddress = addressInput.value;
    // send to Google's API

    axios.get<GoogleGeoCodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${GOOGLE_API_KEY}`).then(response => {
        // console.log(response);
        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
            center: coordinates,
            zoom: 8,});

new google.maps.Marker({
            position: coordinates,
            map: map,
});

        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch location!');
        }
    }).catch(err => {
        console.log(err);
        alert(err.message);
    })
}

form.addEventListener('submit', searchAddressHandler);
