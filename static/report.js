

Highcharts.chart('bubble', {
    chart: {
        type: 'packedbubble',
        height: '100%'
    },
    title: {
        text: ''
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value} restaurants'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '400%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 0
                },
                style: {
                    color: 'black',
                    textOutline: 'none',
                    fontWeight: 'bold'
                }
            }
        }
    },
    series: [{
        name: 'Europe',
        data: [
        {
            name: "Italian",
            value: 16
        },
        {
            name: "Pizza",
            value: 6
        },
        {
            name: "French",
            value: 10
        },],
        color:'#ffc107',
    }, 
  {
        name: 'Asia',
        data: [{
            name: "Thai",
            value: 9
        },
        {
            name: "Japanese",
            value: 25
        },
        {
            name: "Asian",
            value: 8
        },
        {
            name: "Korean",
            value: 6
        },
        {
            name: "Chinese",
            value: 6
        }],
        color:'#92A8CD',
    },
    {
        name: 'Cafe Food',
        data: [{
            name: "Cafe Food",
            value: 8
        },
        {
            name: "Desserts",
            value: 8
        },
        {
            name: "Coffee and Tea",
            value: 35
        },
        {
            name: "Bakery",
            value: 11
        }],
        color:'#DB843D',
    },
    {
        name: 'Middle Eastern',
        data: [{
            name: "Middle Eastern",
            value: 12
        }],
        color:'#A47D7C',
    },
    {
        name: 'Modern cuisine',
        data: [{
            name: "Modern Australian",
            value: 9
        }],
        color:'#B5CA92',
    }]
});


// Create the chart
Highcharts.chart('bar', {
    colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
    '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],

    chart: {
        type: 'column'
    },
    title: {
        text: 'TOP5 Greatest Neighbourhoods To Eat In Melbourne'
    },

    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total restaurants in the suburb'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:f} restaurants</b><br/>'
    },

    series: [
        {
            name: "TOP5 Suburbs",
            colorByPoint: true,
            data: [
                {
                    name: "CBD",
                    y: 77,
                    color: 'rgb(241,92,128)',
                },
                {
                    name: "Fizory",
                    y: 16,
                    color:'rgb(228, 211, 84)',
                },
                {
                    name: "Richmond",
                    y: 10,
                    color:'rgb(128,133,233)',
                },
                {
                    name: "St Kilda",
                    y: 9,
                    color:'rgb(247, 163, 92)',
                },
                {
                    name: "South Yarra",
                    y: 6,
                    color:'rgb(144, 237, 125)',
                }
            ]
        }
    ]
});



// Add the nodes option through an event call. We want to start with the parent
// item and apply separate colors to each child element, then the same color to
// grandchildren.
Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};

        if (
            this instanceof Highcharts.seriesTypes.networkgraph &&
            e.options.id === 'lang-tree'
        ) {
            e.options.data.forEach(function (link) {

                if (link[0] === 'Proto Indo-European') {
                    nodes['Proto Indo-European'] = {
                        id: 'Proto Indo-European',
                        marker: {
                            radius: 20
                        }
                    };
                    nodes[link[1]] = {
                        id: link[1],
                        marker: {
                            radius: 10
                        },
                        color: colors[i++]
                    };
                } else if (nodes[link[0]] && nodes[link[0]].color) {
                    nodes[link[1]] = {
                        id: link[1],
                        color: nodes[link[0]].color
                    };
                }
            });

            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    }
);

/*network*/
Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function(e) {
      var colors = Highcharts.getOptions().colors,
        i = 0,
        nodes = {};
  
      if (
        this instanceof Highcharts.seriesTypes.networkgraph &&
        e.options.id === 'lang-tree'
      ) {
        e.options.data.forEach(function(link) {
  
          if (link[0] === 'CBD') {
            nodes['CBD'] = {
              id: 'CBD',
              marker: {
                radius: 20
              },
              color:colors[5]
            };
          } 
          else if(link[0]==='Fitzory'){
            nodes['Fitzory'] = {
                id: 'Fitzory',
                marker: {
                  radius: 20
                },
                color:colors[6]
              };
          }

          else if(link[0]==='South Yarra'){
            nodes['South Yarra'] = {
                id: 'South Yarra',
                marker: {
                  radius: 20
                },
                color:colors[2]
              };
          }

          else if(link[0]==='St Kilda'){
            nodes['St Kilda'] = {
                id: 'St Kilda',
                marker: {
                  radius: 20
                },
                color:colors[3]
              };
          }

          else if(link[0]==='Richmond'){
            nodes['Richmond'] = {
                id: 'Richmond',
                marker: {
                  radius: 20
                },
                color:colors[4]
              };
          }
          
          else if (nodes[link[0]] && nodes[link[0]].color) {
            nodes[link[1]] = {
              id: link[1],
              color: nodes[link[0]].color
            };
          }
        });
  
        e.options.nodes = Object.keys(nodes).map(function(id) {
          return nodes[id];
        });
      }
    }
  );

Highcharts.chart('network', {
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'Top5 suburbs restaurants network'
    },
    subtitle: {
        text: 'based on Zomato best restaurant in Melbourne information'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },
        id: 'lang-tree',
        data: [
            ['CBD', 'Coffee and Tea'],
            ['CBD', 'Asian'],
            ['CBD', 'Italian'],
            ['CBD', 'Japanese'],
            ['CBD', 'Coffee and Tea'],
            ['CBD', 'Middle Eastern'],
            ['Fitzory', 'Asian'],
            ['Fitzory', 'Bakery'],
            ['Fitzory', 'Coffee and Tea'],
            ['Fitzory', 'Modern Australian'],
            ['Richmond', 'Asian'],
            ['Richmond', 'Coffee and Tea'],
            ['Richmond', 'Japanese'],
            ['Richmond', 'French'],
            ['St Kilda', 'Bakery'],
            ['St Kilda', 'Coffee and Tea'],
            ['St Kilda', 'Italian'],
            ['St Kilda', 'Modern Australian'],
            ['South Yarra', 'Japanese'],
            ['South Yarra', 'French'],
            ['South Yarra', 'Japanese'],
            ['South Yarra', 'Pizza']

        ]
    }]
});



