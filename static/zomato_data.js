

const fiz = [
  {
    "name": "Hinoki Japanese Pantry",
    "rate": 4.9,
    "reviews": 793,
    "label": "Japanese",
    "suburb": "Fitzroy, Melbourne",
    "website": "https://www.zomato.com/melbourne/hinoki-japanese-pantry-fitzroy",
    "img": "https://b.zmtcdn.com/data/reviews_photos/f92/b8ca6b20530a5a3d1694e272e7db4f92_1475980919.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "279 Smith Street, Fitzroy, Melbourne"
  },
  {
    "name": "Cutler & Co",
    "rate": 4.7,
    "reviews": "2,075",
    "label": "Modern Australian",
    "suburb": "Fitzroy, Melbourne",
    "website": "https://www.zomato.com/melbourne/cutler-co-fitzroy",
    "img": "https://b.zmtcdn.com/data/pictures/chains/7/16573067/b8dc8d945fa5d129f838f8dc0fe83734.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "55-57 Gertrude Street, Fitzroy, Melbourne"
  },
  {
    "name": "Faraday's Cage",
    "rate": 4.7,
    "reviews": "1,000",
    "label": "Bakery",
    "suburb": "Fitzroy, Melbourne",
    "website": "https://www.zomato.com/melbourne/faradays-cage-1-fitzroy",
    "img": "https://b.zmtcdn.com/data/pictures/chains/4/17989264/a05bed7afc7e6d7d8e0a7324df36deb0.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "325-329 Gore Street, Fitzroy, Melbourne"
  },
  {
    "name": "Yong Green Food",
    "rate": 4.6,
    "reviews": "1,795",
    "label": "Asian",
    "suburb": "Fitzroy, Melbourne",
    "website": "https://www.zomato.com/melbourne/yong-green-food-fitzroy",
    "img": "https://b.zmtcdn.com/data/reviews_photos/bed/92ee154bb38a2c89a0d1bcfe76c1ebed_1594708359.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "421 Brunswick Street, Fitzroy, Melbourne"
  }
]

const cbd =[
  {
    "name": "Patricia Coffee Brewers",
    "rate": 4.9,
    "reviews": "1,176",
    "label": "Coffee and Tea",
    "suburb": "CBD, Melbourne",
    "website": "https://www.zomato.com/melbourne/patricia-coffee-brewers-1-cbd",
    "img": "https://b.zmtcdn.com/data/reviews_photos/f99/5a3fada248fe2f1556496ea1ded7df99_1491389622.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "493-495 Little Bourke Street, CBD, Melbourne"
  },
  {
    "name": "Le Petit Gateau",
    "rate": 4.9,
    "reviews": "1,666",
    "label": "French",
    "suburb": "CBD, Melbourne",
    "website": "https://www.zomato.com/melbourne/le-petit-gateau-1-cbd",
    "img": "https://b.zmtcdn.com/data/reviews_photos/cb1/708625df3670811b255866daf841ecb1_1505293757.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "458 Little Collins Street, CBD, Melbourne"
  },
  {
    "name": "La Belle Miette",
    "rate": 4.8,
    "reviews": "2,632",
    "label": "Desserts",
    "suburb": "CBD, Melbourne",
    "website": "https://www.zomato.com/melbourne/la-belle-miette-2-cbd",
    "img": "https://b.zmtcdn.com/data/pictures/chains/9/16576959/7496abaf51dd14aabc035fd15dcfb39d.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "30 Hardware Lane, CBD, Melbourne"
  },
  {
    "name": "Tokui Sushi",
    "rate": 4.8,
    "reviews": 546,
    "label": "Sushi",
    "suburb": "CBD, Melbourne",
    "website": "https://www.zomato.com/melbourne/tokui-sushi-1-cbd",
    "img": "https://b.zmtcdn.com/data/pictures/4/16578384/96b8a9bacb3e7fab608ec1cdf334d867_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "260 Lonsdale Street, CBD, Melbourne"
  }
]


const southyarra=[
  {
    "name": "Wagyu Ya",
    "rate": 4.7,
    "reviews": "1,141",
    "label": "Japanese",
    "suburb": "South Yarra, Melbourne",
    "website": "https://www.zomato.com/melbourne/wagyu-ya-south-yarra",
    "img": "https://b.zmtcdn.com/data/reviews_photos/8e8/6c43b97328815903a7a54a8b2d17f8e8_1531274862.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "156 Toorak Road, South Yarra, Melbourne"
  },
  {
    "name": "Chez Olivier - Le Bistro",
    "rate": 4.6,
    "reviews": 755,
    "label": "French",
    "suburb": "South Yarra, Melbourne",
    "website": "https://www.zomato.com/melbourne/chez-olivier-le-bistro-south-yarra",
    "img": "https://b.zmtcdn.com/data/pictures/5/16571105/a34f7c80bae8bf9e35d99e64ccca04d2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "268 Toorak Road, South Yarra, Melbourne"
  },
  {
    "name": "LuxBite",
    "rate": 4.5,
    "reviews": "2,101",
    "label": "Desserts",
    "suburb": "South Yarra, Melbourne",
    "website": "https://www.zomato.com/melbourne/luxbite-south-yarra",
    "img": "https://b.zmtcdn.com/data/reviews_photos/056/4b00ac82dd2cfe7e9290b913e636d056_1548247492.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "38 Toorak Road, South Yarra, Melbourne"
  },
  {
    "name": "Dainty Sichuan",
    "rate": 4.5,
    "reviews": "1,562",
    "label": "Chinese",
    "suburb": "South Yarra, Melbourne",
    "website": "https://www.zomato.com/melbourne/dainty-sichuan-south-yarra",
    "img": "https://b.zmtcdn.com/data/pictures/chains/7/16571207/afaf1d3d7154ae2dc143a83325071d09_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "176 Toorak Road, South Yarra, Melbourne"
  }
]

const richmond =[
  {
    "name": "Minamishima",
    "rate": 4.9,
    "reviews": 765,
    "label": "Japanese",
    "suburb": "Richmond, Melbourne",
    "website": "https://www.zomato.com/melbourne/minamishima-richmond",
    "img": "https://b.zmtcdn.com/data/pictures/4/16586014/c82210e93d7413c95926ad9c37d676ff.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "4 Lord Street, Richmond, Melbourne, VIC"
  },
  {
    "name": "Bahari The Hellenic Palate",
    "rate": 4.8,
    "reviews": 765,
    "label": "Greek",
    "suburb": "Richmond, Melbourne",
    "website": "https://www.zomato.com/melbourne/bahari-the-hellenic-palate-richmond",
    "img": "https://b.zmtcdn.com/data/pictures/8/17868098/56c12d850cf7321cf3984eddacbba099.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "179 Swan Street, Richmond, Melbourne, VIC"
  },
  {
    "name": "Serotonin Eatery",
    "rate": 4.6,
    "reviews": "1,659",
    "label": "Cafe Food",
    "suburb": "Richmond, Melbourne",
    "website": "https://www.zomato.com/serotonin-eatery",
    "img": "https://b.zmtcdn.com/data/pictures/chains/2/16713362/c370007b6c268fad19fae2ddf7097a8b.png?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "52 Madden Grove, Burnley, Richmond, Melbourne"
  },
  {
    "name": "Noir",
    "rate": 4.5,
    "reviews": 536,
    "label": "French",
    "suburb": "Richmond, Melbourne",
    "website": "https://www.zomato.com/melbourne/noir-richmond",
    "img": "https://b.zmtcdn.com/data/pictures/chains/6/16577206/bd90e410b178c05d4aae7e6b71fbcab7.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "175 Swan Street, Richmond, Melbourne, VIC"
  }
]

const kilda=[
  {
    "name": "Miss Jackson",
    "rate": 4.6,
    "reviews": 863,
    "label": "Coffee and Tea",
    "suburb": "St Kilda, Melbourne",
    "website": "https://www.zomato.com/melbourne/miss-jackson-st-kilda",
    "img": "https://b.zmtcdn.com/data/reviews_photos/d20/abf88fe15de1d0352d69c985dcd19d20.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "Shop 2, 19 Grey Street, St Kilda, Melbourne, VIC"
  },
  {
    "name": "The Galleon",
    "rate": 4.6,
    "reviews": 748,
    "label": "Modern Australian",
    "suburb": "St Kilda, Melbourne",
    "website": "https://www.zomato.com/melbourne/the-galleon-st-kilda",
    "img": "https://b.zmtcdn.com/data/reviews_photos/42b/9bb6adb271d4bbb073f798090fc1d42b.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "9 Carlisle Street, St Kilda, Melbourne, VIC"
  },
  {
    "name": "Donovans",
    "rate": 4.6,
    "reviews": "1,180",
    "label": "Modern Australian",
    "suburb": "St Kilda, Melbourne",
    "website": "https://www.zomato.com/melbourne/donovans-st-kilda",
    "img": "https://b.zmtcdn.com/data/pictures/4/16571254/47d3f98c483f54ffddcb5a90434e293e.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "40 Jacka Boulevard, St Kilda, Melbourne, VIC"
  },
  {
    "name": "Cicciolina",
    "rate": 4.6,
    "reviews": "1,366",
    "label": "Italian",
    "suburb": "St Kilda, Melbourne",
    "website": "https://www.zomato.com/melbourne/cicciolina-st-kilda",
    "img": "https://b.zmtcdn.com/data/pictures/2/16571132/97b2debec2dcfa6e2d1a74878a6dc73a.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
    "address": "130 Acland Street, St Kilda, Melbourne, VIC"
  }
]






function load_data(data_name, id_name){
for(var i=0, l=4; i<l; i++){
  var div = document.createElement("div")

  div.innerHTML=

`

<div class="col">
<div class="card card-cover  overflow-hidden text-white bg-dark rounded-5 shadow-lg" style="background-image: url(${data_name[i].img});">
  <div class="d-flex flex-column  p-5 pb-3 text-shadow-1">
    <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">${data_name[i].name}</h2>
    <ul class="d-flex list-unstyled mt-auto">
      <li class="me-auto">
        <span class="badge bg-success">${data_name[i].rate}</span>
      </li>
      <li class="d-flex align-items-center me-3">
        <svg class="bi me-2" width="1em" height="1em"><use xlink:href="#geo-fill"></use></svg>
        <p>${data_name[i].label}</p>
      </li>
      <a target="_blank" href="${data_name[i].website}" class="stretched-link"></a>
    </ul>
  </div>
</div>
</div>
`
document.getElementById(id_name).appendChild(div)
}

}


load_data(fiz,"Fitzroy")
load_data(cbd,"cbd")
load_data(southyarra,"syarra")
load_data(kilda,"St Kilda")
load_data(richmond,"Richmond")










