var text = 'Architectural Buildings,Architectural Buildings,Architectural Buildings,Architectural Buildings,Arenas & Stadiums,Arenas & Stadiums,Arenas & Stadiums,Art Museums,Art Museums,Art Museums,Ballets,Beaches,Bodies of Water,Bridges,Cooking Classes,Cultural Events,Cultural Events,Department Stores,Exhibitions,Factory Outlets,Farmers Markets,Farms,Ferries,Forests,Gardens,Gardens,Gardens,Historic Sites,Historic Sites,Historic Sites,Historic Sites,History Museums,Horse Tracks,Horse Tracks,Libraries,Lookouts,Monuments & Statues,Neighbourhoods,Observation Decks & Towers,Observation Decks & Towers,Parks,Parks,Parks,Parks,Parks,Parks,Parks,Parks,Parks,Piers,Playgrounds,Public Transportation Systems,Public Transportation Systems,Shopping Malls,Shopping Malls,Shopping Malls,Shopping Malls,Shopping Malls,Speciality & Gift Shops,Speciality & Gift Shops,Speciality Museums,Speciality Museums,Sporting Events,Sports Complexes,Theatres,Theatres,Theatres,Trams,Universities & Schools,Wineries & Vineyards,Zoos';
var lines = text.split(/[,]+/g),
    data = Highcharts.reduce(lines, function(arr, word) {
        var obj = Highcharts.find(arr, function(obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('1_chart', {
    accessibility: {
        screenReaderSection: {
            beforeChartFormat: '<h5>{chartTitle}</h5>' +
                '<div>{chartSubtitle}</div>' +
                '<div>{chartLongdesc}</div>' +
                '<div>{viewTableButton}</div>'
        }
    },
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Attractions in Melbourne',
        style: {
            "fontSize": "28px",
            "fontWeight": "bold",
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:17px"><b>{point.key}</span><table><br>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
    },
});


Highcharts.chart('2_chart', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Rating of Attractions in Different Suburbs',
        style: {
            "fontSize": "28px",
            "fontWeight": "bold",
        },
    },
    xAxis: {
        categories: [
            'CBD',
            'Docklands',
            'Southbank',
            'Lygon Street',
            'Parkville',
            'South Melbourne',
            'Port Melbourne'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'The number of attractions'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:17px"><b>{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y} Attractions</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        borderColor: '#f768a1',

    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
    },
    series: [{
        name: '5',
        data: [0, 1, 0, 0, 0, 0],
        color: '#ae017e'

    }, {
        name: '4.5',
        data: [13, 1, 7, 3, 3, 1, 0],
        color: '#f768a1'

    }, {
        name: '4',
        data: [8, 5, 0, 2, 0, 1, 1],
        color: '#fbb4b9'

    }, {
        name: '3.5',
        data: [1, 0, 0, 0, 0, 0],
        color: '#FFD281'

    }, {
        type: 'spline',
        name: 'Total',
        data: [22, 7, 7, 5, 3, 2, 1],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }

    }]
});

// Create the chart
Highcharts.chart('3_chart', {
    colors: ['#4572A7', '#AA4643', '#89A54E', '#80699B', '#3D96AE',
        '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'
    ],

    chart: {
        type: 'column'
    },
    title: {
        text: 'The Number of Attractions in Different Suburbs'
    },
    subtitle: {},
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
            text: 'The number of attractions'
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
        headerFormat: '<span style="font-size:20px">{point.name}</span><table>',
        pointFormat: '<span style="color:black; font-size:17px">{point.name}</span><br> <span style="color:{point.color}"><b>{point.y:f} Attractions</b></span>'
    },

    series: [{
        name: "Suburbs",
        colorByPoint: true,
        data: [{
                name: "CBD",
                y: 22,
                color: 'rgb(241,92,128)',
            },
            {
                name: "Docklands",
                y: 7,
                color: 'rgb(241,92,128)',
            },
            {
                name: "Southbank",
                y: 7,
                color: 'rgb(241,92,128)',
            },
            {
                name: "Lygon Street",
                y: 5,
                color: 'rgb(241,92,128)',
            }, {
                name: "Parkvile",
                y: 3,
                color: 'rgb(241,92,128)',
            }, {
                name: "South Melbourne",
                y: 2,
                color: 'rgb(241,92,128)',
            },
            {
                name: "Port Melbourne",
                y: 1,
                color: 'rgb(241,92,128)',
            }
        ]
    }]
});