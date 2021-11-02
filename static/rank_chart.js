const get_top_hotels = (data, features, languages, sort_order, sort_factor) => {
  const filtered_data = data
    .filter((hotel) => {
      // clear all null values
      return (hotel["features"] !== null) & (hotel[sort_factor] !== null);
    }).filter((hotel) => {
      return languages.every((language) => {
        if (language === "English") return true
        else if (hotel["language"] === null) return false
        else return hotel["language"].includes(language)
      });
    })
    .filter((hotel) => {
      // find all hotel includes required features
      return features.every((feature) => hotel["features"].includes(feature));
    });

  //sort by sor_order and sort_factor (normally price or rate)
  filtered_data.sort((hotel_1, hotel_2) => {
    if (sort_order === "asc")
      return hotel_1[sort_factor] - hotel_2[sort_factor];
    else if (sort_order === "dsc")
      return hotel_2[sort_factor] - hotel_1[sort_factor];
    else throw 'Enter right sort_order, "asc" or "dsc"';
  });

  return filtered_data.slice(0, 8);
};


const change_sort_factor = () => {
  // toggle sort_factor
  if (sort_factor === "price") {
    sort_factor = "rate";
    document.getElementById("factor").innerHTML = "By rate";
  }
  else if (sort_factor === "rate") {
    sort_factor = "price"
    document.getElementById("factor").innerHTML = "By price";
  }
  refresh_hotel_data()
  update_rank_chart(rank_chart, default_hotel_data)
}

const change_sort_order = () => {
  // toggle sort_order
  if (sort_order === "asc") {
    sort_order = "dsc";
    document.getElementById("order").innerHTML = "By descending";
  }
  else if (sort_order === "dsc") {
    sort_order = "asc"
    document.getElementById("order").innerHTML = "By ascending";
  }
  refresh_hotel_data()
  update_rank_chart(rank_chart, default_hotel_data)
}

const update_rank_chart = (chart, new_data) => {
  chart.data.labels = new_data.map((hotel) => hotel["name"]);
  chart.options.plugins.title.text = `Top hotels sort by ${sort_factor}`
  chart.data.datasets[0].metadata = new_data;
  chart.data.datasets[0].label = sort_factor;
  chart.data.datasets[0].data = new_data.map((movie) => movie[sort_factor]);
  chart.update();
};

const refresh_hotel_data = () => {
  default_hotel_data = get_top_hotels(
    hotel_data,
    filter_features,
    filter_languages,
    sort_order,
    sort_factor
  );
};

var sort_factor = "price";
var sort_order = "asc";
const filter_features = [];
const filter_languages = [];
var default_hotel_data = get_top_hotels(
  hotel_data,
  filter_features,
  filter_languages,
  sort_order,
  sort_factor
);
const data_top_hotel = {
  labels: default_hotel_data.map((hotel) => hotel["name"]),
  datasets: [
    {
      axis: "y",
      label: sort_factor,
      metadata: default_hotel_data,
      data: default_hotel_data.map((movie) => movie[sort_factor]),
      fill: false,
      backgroundColor: [
        "#74add1",
      ],
    },
  ],
};

const config_rank = {
  type: "bar",
  data: data_top_hotel,
  options: {
    maintainAspectRatio: false,
    indexAxis: "y",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Top hotels sort by ${sort_factor}`,
        font: { size: 20 },
      },
      tooltip: {
        callbacks: {
          beforeTitle: (context) => {
            update_radar_chart(radar_chart, context[0]["dataset"]["metadata"][context[0]["dataIndex"]])
            update_address(context[0]["dataset"]["metadata"][context[0]["dataIndex"]])
          }
        },
      },
    },
  },
};

var ctx_rank = document.getElementById("rank_chart");
var rank_chart = new Chart(ctx_rank, config_rank);
