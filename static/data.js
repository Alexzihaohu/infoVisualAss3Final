const data = [{
        "name": "Royal Botanic Gardens Victoria",
        "label": "Gardens",
        "suburb": "",
        "address": "Birdwood Ave, Melbourne, Victoria 3004 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/ee/06/9a/the-rose-collection-in.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256846-Reviews-Royal_Botanic_Gardens_Victoria-Melbourne_Victoria.html"
    },
    {
        "name": "City Circle Tram",
        "label": "Trams",
        "suburb": "Central Business District",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/db/d8/a3/perfecto.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d522372-Reviews-City_Circle_Tram-Melbourne_Victoria.html"
    },
    {
        "name": "Melbourne Zoo",
        "label": "Zoos • Gardens",
        "suburb": "Parkville",
        "address": "Elliott Avenue Parkville, Melbourne, Victoria 3052 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/44/26/ff/a-shot-i-took-at-the.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256557-Reviews-Melbourne_Zoo-Melbourne_Victoria.html"
    },
    {
        "name": "Chapel Street",
        "label": "Points of Interest & Landmarks",
        "suburb": "",
        "address": "",
        "rate": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/ab/9f/a3/welcome-to-the-chapel.jpg?w=1000&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d2513194-Reviews-Chapel_Street-Melbourne_Victoria.html"
    }, {
        "name": "Southbank Theatre",
        "label": "Theatres",
        "suburb": "Southbank",
        "address": "140 Southbank Bvd, Melbourne, Victoria 3006 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/af/2e/c5/melbourne-theatre-company.jpg?w=800&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d2069952-Reviews-Southbank_Theatre-Melbourne_Victoria.html"
    }, {
        "name": "South Melbourne Market",
        "label": "Flea & Street Markets • Shopping Malls",
        "suburb": "South Melbourne",
        "address": "322 - 326 Coventry St, Melbourne, Victoria 3205 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/83/9a/e1/south-melbourne-market.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d2301500-Reviews-South_Melbourne_Market-Melbourne_Victoria.html"
    }, {
        "name": "Docklands Stadium",
        "label": "Arenas & Stadiums",
        "suburb": "Docklands",
        "address": "740 Bourke Street, Melbourne, Victoria 3008 Australia",
        "rate": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/37/97/42/telstra-stadium.jpg?w=600&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d1048151-Reviews-Docklands_Stadium-Melbourne_Victoria.html"
    }, {
        "name": "State Library Victoria",
        "label": "Libraries",
        "suburb": "Central Business District",
        "address": "328 Swanston St, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/23/c6/c4/state-library-victoria.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d1574223-Reviews-State_Library_Victoria-Melbourne_Victoria.html"
    }, {
        "name": "Melbourne Museum",
        "label": "Speciality Museums",
        "suburb": "Lygon Street",
        "address": "11 Nicholson Pl Carlton, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/68/59/91/20181116-170513-largejpg.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256845-Reviews-Melbourne_Museum-Melbourne_Victoria.html"
    }, {
        "name": "Fitzroy Gardens",
        "label": "Points of Interest & Landmarks • Parks • Gardens",
        "suburb": "",
        "address": "230-298 Wellington Parade East Melbourne, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/7f/af/8b/photo0jpg.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d258021-Reviews-Fitzroy_Gardens-Melbourne_Victoria.html"
    }, {
        "name": "Port Phillip Ferries",
        "label": "Ferries",
        "suburb": "Docklands",
        "address": "Victoria Harbour: 131 Harbour Esplanade Docklands, Melbourne, Victoria 3008 Australia",
        "rate": 5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/9f/71/19/port-phillip-ferries.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d12059688-Reviews-Port_Phillip_Ferries-Melbourne_Victoria.html"
    }, {
        "name": "Yarra River",
        "label": "Bodies of Water",
        "suburb": "Southbank",
        "address": "Southbank Promenade, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/c1/3e/e6/yarra-river.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d286442-Reviews-Yarra_River-Melbourne_Victoria.html"
    }, {
        "name": "Melbourne Cricket Ground (MCG)",
        "label": "Speciality Museums • Arenas & Stadiums",
        "suburb": "",
        "address": "Brunton Ave Yarra Park, Jolimont, Melbourne, Victoria 8002 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/e3/03/99/2019-preliminary-final.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256584-Reviews-Melbourne_Cricket_Ground_MCG-Melbourne_Victoria.html"
    }, {
        "name": "Melbourne Central",
        "label": "Neighbourhoods • Shopping Malls",
        "suburb": "",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7e/7d/8f/fantastic-skylight-at.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d522417-Reviews-Melbourne_Central-Melbourne_Victoria.html"
    }, {
        "name": "Melbourne Star Observation Wheel",
        "label": "Points of Interest & Landmarks • Observation Decks & Towers",
        "suburb": "Docklands",
        "address": "101 Waterfront Way, Melbourne, Victoria 3008 Australia",
        "rate": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/26/2f/da/melbourne-star-starring.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d5960757-Reviews-Melbourne_Star_Observation_Wheel-Melbourne_Victoria.html"
    }, {
        "name": "Immigration Museum",
        "label": "History Museums",
        "suburb": "Central Business District",
        "address": "400 Flinders St, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/94/19/c0/immigration-museum.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d257176-Reviews-Immigration_Museum-Melbourne_Victoria.html"
    }, {
        "name": "Hosier Lane",
        "label": "Points of Interest & Landmarks",
        "suburb": "Central Business District",
        "address": "",
        "rate": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/08/c4/d9/caption.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d1024357-Reviews-Hosier_Lane-Melbourne_Victoria.html"
    }, {
        "name": "Arts Centre Melbourne",
        "label": "Theatres",
        "suburb": "Southbank",
        "address": "100 St Kilda Rd, Melbourne, Victoria 3004 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/0e/75/82/caption.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d257322-Reviews-Arts_Centre_Melbourne-Melbourne_Victoria.html"
    }, {
        "name": "St Paul's Cathedral",
        "label": "Historic Sites • Religious Sites • Churches & Cathedrals",
        "suburb": "Central Business District",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/daodao/photo-o/16/b5/09/85/caption.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256579-Reviews-St_Paul_s_Cathedral-Melbourne_Victoria.html"
    }, {
        "name": "National Gallery of Victoria",
        "label": "Art Museums",
        "suburb": "Southbank",
        "address": "180 St Kilda Rd, Melbourne, Victoria 8006 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/c7/03/b0/photo0jpg.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256558-Reviews-National_Gallery_of_Victoria-Melbourne_Victoria.html"
    }, {
        "name": "Royal Exhibition Building",
        "label": "Points of Interest & Landmarks • Architectural Buildings • Gardens",
        "suburb": "Lygon Street",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/50/3c/85/royal-exhibition-building.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d501819-Reviews-Royal_Exhibition_Building-Melbourne_Victoria.html"
    }, {
        "name": "Eureka Skydeck",
        "label": "Observation Decks & Towers",
        "suburb": "Southbank",
        "address": "7 Riverside Qy Southbank, Melbourne, Victoria 3006 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/05/3b/3a/0d/88.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d654640-Reviews-Eureka_Skydeck-Melbourne_Victoria.html"
    }, {
        "name": "Carlton Gardens",
        "label": "Gardens",
        "suburb": "Lygon Street",
        "address": "1-111 Carlton St, Melbourne, Victoria 3053 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/42/35/3c/carlton-gardens.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d9595192-Reviews-Carlton_Gardens-Melbourne_Victoria.html"
    }, {
        "name": "Dandenong Ranges National Park",
        "label": "National Parks",
        "suburb": "",
        "address": "Mount Dandenong Tourist Rd Treemont, Melbourne, Victoria 3787 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/ae/6f/05/walking-in-dandenong.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d300270-Reviews-Dandenong_Ranges_National_Park-Melbourne_Victoria.html"
    }, {
        "name": "AAMI Park",
        "label": "Sports Complexes",
        "suburb": "",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/01/e3/56/dd/aami-park.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d2086137-Reviews-AAMI_Park-Melbourne_Victoria.html"
    }, {
        "name": "Old Melbourne Gaol",
        "label": "Historic Sites",
        "suburb": "Central Business District",
        "address": "377 Russell St, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/1e/3e/e0/exterior-shot-showing.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256568-Reviews-Old_Melbourne_Gaol-Melbourne_Victoria.html"
    }, {
        "name": "Shrine of Remembrance",
        "label": "Monuments & Statues",
        "suburb": "",
        "address": "St. Kilda Road, Melbourne, Victoria 3004 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/e4/ac/27/view-shrine-of-remembrance.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d522360-Reviews-Shrine_of_Remembrance-Melbourne_Victoria.html"
    }, {
        "name": "Queen Victoria Market",
        "label": "Farmers Markets",
        "suburb": "Central Business District",
        "address": "Victoria Street Corner of Elizabeth Street, Melbourne, Victoria 3000 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/72/6e/20/discover-the-variety.jpg?w=1100&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d256569-Reviews-Queen_Victoria_Market-Melbourne_Victoria.html"
    }, {
        "name": "Hellenic Museum",
        "label": "Art Museums • History Museums",
        "suburb": "Central Business District",
        "address": "280 William Street, Melbourne, Victoria 3000 Australia",
        "rate": 4,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1e/bb/d4/7b/gods-myths-mortals-is.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d4027747-Reviews-Hellenic_Museum-Melbourne_Victoria.html"
    }, {
        "name": "SkyHigh Mount Dandenong",
        "label": "Lookouts",
        "suburb": "",
        "address": "26 Observatory Road, Melbourne, Victoria 52F12 Australia",
        "rate": 3.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-s/03/35/9d/56/skyhigh-mount-dandenong.jpg?w=600&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d3546071-Reviews-SkyHigh_Mount_Dandenong-Melbourne_Victoria.html"
    }, {
        "name": "Melbourne Cup Carnival",
        "label": "Cultural Events",
        "suburb": "",
        "address": "Flemington Racecourse 448 Epsom Road, Flemington, Melbourne, Victoria 3031 Australia",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/19/dd/9b/bc/the-melbourne-cup-carnival.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d8820297-Reviews-Melbourne_Cup_Carnival-Melbourne_Victoria.html"
    }, {
        "name": "Port Melbourne Beach",
        "label": "Beaches",
        "suburb": "",
        "address": "",
        "rate": 4.5,
        "image": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/c1/47/3a/port-melbourne-beach.jpg?w=1200&h=-1&s=1",
        "website": "https://en.tripadvisor.com.hk/Attraction_Review-g255100-d14902963-Reviews-Port_Melbourne_Beach-Melbourne_Victoria.html"
    }
]

for (var i = 0, l = data.length; i < l; i++) {
    var div = document.createElement("div")

    div.innerHTML =


        `<div class="card mb-3 shadow p-3 mb-5 rounded">
<img class="card-img-top" src="${data[i].image}" alt="Card image cap" >
<div class="card-body">
  <h4 class="card-title" style="margin-top: 10px; margin-bottom: 12px"><b>${data[i].name}</b> </h4>
  <p class="card-text"> <span class="badge bg-success" style="font-size:1em">${data[i].rate}</span> <span style="font-style: italic">${data[i].label}</span></p>
  <p class="card-text" style="font-size: large; margin-top:10px">${data[i].suburb}</p>

  <a href="${data[i].website}" class="stretched-link btn btn-primary" style="margin-top:20px; background-color:#004BC3; border-color:#004BC3">View More</a>
</div>
</div>`
    document.getElementById("content").appendChild(div)
}