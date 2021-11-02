window.onload=function() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiemloYW8xIiwiYSI6ImNrdDMyNGlqajBlaGMzM3BndWlzOXJkOW0ifQ.jHKFHNAVve8fYHPIlrISRA';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/zihao1/cktefj4wf29gf18qr5vf0q606/draft',
        center: [144.963, -37.815],
        zoom: 14
    });
    // add search bar to the map
    const geocoder = new MapboxGeocoder({
        // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
        placeholder: 'Search places', // Placeholder text for the search bar
        bbox: [144.746457, -38.040935, 145.146457, -37.640935], // Boundary for Melbourne
        proximity: {
            longitude: 144.946457,
            latitude: -37.840935
        } // Coordinates of Melbourne
    });
    map.addControl(geocoder);

    let layers = [
        {
            "name":"Bus Route",
            "color":"rgba(57,194,234,0.3)"
        },{
            "name":"Tram Route",
            "color":"rgba(70,155,39,0.3)"
        },{
            "name":"Bus Stop",
            "color":"#39c4ea"
        },{
            "name":"Tram Stop",
            "color":"#469b27"
        },{
            "name":"Taxi Rank",
            "color":"#469b27"
        }
    ]

    map.on('load',e =>{

        // hide layer as default status
        map.setLayoutProperty("Tram Stop", 'visibility', 'visible');
        map.setLayoutProperty("Tram Route", 'visibility', 'visible');
        map.setLayoutProperty("Bus Stop", 'visibility', 'visible');
        map.setLayoutProperty("Bus Route", 'visibility', 'visible');
        map.setLayoutProperty("Taxi Rank", 'visibility', 'visible');

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
            closeButton: false,
            closeOnClick: false
        });

        // the code for adding a layer goes in here
        for (let layer of layers.slice(0,2)) {
            let legend = document.querySelector('#legend');
            let item = document.createElement('div');
            let key = document.createElement('span');
            key.classList.add('legend-key');
            key.style.backgroundColor = layer.color;
            let value = document.createElement('span');
            value.innerHTML = layer.name;
            item.appendChild(key);
            item.appendChild(value);
            legend.appendChild(item);
        }

        // add layer control button
        for (let layer of layers.slice(0,5)) {
            let link = document.getElementById(layer.name);
            link.classList.add('active');
            link.dataset.layerName = layer.name;
            link.onclick = e => {
                // console.log("nice");
                let clickedLayer = e.target.dataset.layerName;
                e.preventDefault();
                e.stopPropagation();
                let visibility = map.getLayoutProperty(clickedLayer, 'visibility');
                if (visibility !== 'none') {
                    map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                    e.target.classList.remove('active');
                } else {
                    e.target.classList.add('active');
                    map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
                }
            };
        }
    })

    map.on('click', ({point,lngLat}) => {
        console.log(point,lngLat);
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
            layers: ['Tram Route'] // replace with your layer name
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        // console.log(feature);
        const popup = new mapboxgl.Popup({offset: [0, -15]})
            .setLngLat(lngLat)
            .setHTML(
                `
        <H5>This tram route is from ${feature.properties.TRIPHDSIGN}</H5>
        <p>The first stop is ${feature.properties.FIRSTSTNAM}</p>
        <p>The last stop is ${feature.properties.LASTSPNAME}</p>
        `
            )
            .addTo(map);

    });
    map.on('click', ({point,lngLat}) => {
        console.log(point,lngLat);
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
            layers: ['Bus Route'] // replace with your layer name
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        // console.log(feature);
        const popup = new mapboxgl.Popup({offset: [0, -15]})
            .setLngLat(lngLat)
            .setHTML(
                `
        <p>The first stop is ${feature.properties.FIRSTSTNAM}</p>
        <p>The last stop is ${feature.properties.LASTSPNAME}</p>
        `
            )
            .addTo(map);

    });
    map.on('click', ({point,lngLat}) => {
        console.log(point,lngLat);
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
            layers: ['Tram Stop'] // replace with your layer name
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        // console.log(feature);
        const popup = new mapboxgl.Popup({offset: [0, -15]})
            .setLngLat(lngLat)
            .setHTML(
                `
        <H5>Tram Stop Name: ${feature.properties.STOP_NAME}</H5>
        <p>Ticket Zone: ${feature.properties.TICKETZONE}</p>
        `
            )
            .addTo(map);

    });
    map.on('click', ({point,lngLat}) => {
        console.log(point,lngLat);
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
            layers: ['Bus Stop'] // replace with your layer name
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        // console.log(feature);
        const popup = new mapboxgl.Popup({offset: [0, -15]})
            .setLngLat(lngLat)
            .setHTML(
                `
        <H5>Bus Stop Name: ${feature.properties.STOP_NAME}</H5>
        <p>Ticket Zone: ${feature.properties.TICKETZONE}</p>
        `
            )
            .addTo(map);

    });
    map.on('click', ({point,lngLat}) => {
        console.log(point,lngLat);
        // If the user clicked on one of your markers, get its information.
        const features = map.queryRenderedFeatures(point, {
            layers: ['Taxi Rank'] // replace with your layer name
        });
        if (!features.length) {
            return;
        }
        const feature = features[0];
        // console.log(feature);
        const popup = new mapboxgl.Popup({offset: [0, -15]})
            .setLngLat(lngLat)
            .setHTML(
                `
        <H5>Taxi rank location: ${feature.properties.loc_desc}<H5>
        <p>Night only: ${feature.properties.night_only}</p>
        `
            )
            .addTo(map);

    });

}