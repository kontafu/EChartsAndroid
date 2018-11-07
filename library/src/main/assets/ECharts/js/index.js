'use strict';

let width = window.innerWidth;
let height = window.innerHeight;

// var options = {
//     tooltip: {
//         trigger: 'axis',
//         textStyle: {
//             fontSize: 10
//         },
//         axisPointer: {
//             type: 'shadow',
//             shadowStyle: {
//                 color: 'rgba(255,255,255,0.5)'
//             }
//         }
//     },
//     dataZoom: [{
//         type: 'inside',
//         show: true,
//         preventDefaultMouseMove: false,
//         zoomOnMouseWheel: false,
//         zoomLock: false
//     }],
//     grid: {
//         top: '5%',
//         right: '2%',
//         bottom: '32',
//         left: '2%',
//         containLabel: true
//     },
//     xAxis: [{
//         type: 'category',
//         axisTick: {
//             alignWithLabel: true
//         },
//         axisLabel: {
//             fontSize: 8
//         },
//         data: []
//     }],
//     yAxis: [{
//         type: 'value',
//         axisLabel: {
//             fontSize: 6,
//             // color: '#FF0000'
//         }
//     }
//         // , {
//         //     type: 'value',
//         //     axisLabel: {
//         //         fontSize: 6,
//         //         color: '#00FF00'
//         //     }
//         // }, {
//         //     type: 'value',
//         //     axisLabel: {
//         //         fontSize: 6,
//         //         color: '#0000FF'
//         //     }
//         // }
//     ],
//     legend: {
//         orient: 'horizontal',
//         left: '5%',
//         y: 'bottom',
//         itemGap: 24,
//         padding: [0, 0, 12, 0],
//         textStyle: {
//             fontSize: 10
//         },
//         data: [{
//             name: '',
//             icon: 'none',
//             textStyle: {
//                 fontSize: 8,
//                 fontWeight: 700,
//                 color: '#333',
//             }
//         }
//             // , {
//             //     name: '',
//             //     icon: 'none',
//             //     textStyle: {
//             //         fontSize: 8,
//             //         fontWeight: 700,
//             //         color: '#333',
//             //     }
//             // }, {
//             //     name: '',
//             //     icon: 'none',
//             //     textStyle: {
//             //         fontSize: 8,
//             //         fontWeight: 700,
//             //         color: '#333',
//             //     }
//             // }
//         ]
//     },
//     series: [{
//         name: '',
//         data: [],
//         type: 'bar',
//         yAxisIndex: 0,
//         smooth: true,
//         // emphasis: {
//         //     itemStyle: {
//         //         color: '#FF000080'
//         //     }
//         // },
//         barGap: '10%',
//         barMinWidth: '10%',
//         barMaxWidth: '30%',
//         barCategoryGap: '20%',
//     }
//         // , {
//         //     // name: '',
//         //     type: 'bar',
//         //     // data: [],
//         //     yAxisIndex: 1,
//         //     smooth: true,
//         //     // emphasis: {
//         //     //     itemStyle: {
//         //     //         color: '#00FF0080'
//         //     //     }
//         //     // },
//         //     barGap: '10%',
//         //     barMinWidth: '10%',
//         //     barMaxWidth: '30%',
//         //     barCategoryGap: '20%',
//         // }, {
//         //     // name: '',
//         //     type: 'bar',
//         //     // data: [],
//         //     yAxisIndex: 2,
//         //     smooth: true,
//         //     // emphasis: {
//         //     //     itemStyle: {
//         //     //         color: '#0000FF80'
//         //     //     }
//         //     // },
//         //     barGap: '10%',
//         //     barMinWidth: '10%',
//         //     barMaxWidth: '30%',
//         //     barCategoryGap: '20%',
//         // }
//     ]
// };

var options = {};
var mChart = null;

window.onload = function () {
    console.log(JSON.stringify(options));

    let main = document.getElementById('main');
    main.style.height = `${height}px`;

    mChart = echarts.init(main);

    mChart.on('click', function (params) {
        setOnClickListener(params['name'] + '===' + params['data']);
    });

    window.onresize = function () {
        mChart.resize();
    };

    mChart.showLoading({
        text: '正在加载',
        color: '#0f0',
        textColor: '#333',
        maskColor: 'rgba(64,64,64,.1)',
        zlevel: 0,
    });

    if (window.options && typeof window.options === 'object') {
        mChart.setOption(window.options, true);
    }

    // setTimeout(function () {
    //     options = {
    //         color: dataSets.color,
    //         legend: {
    //             data: dataSets.legend
    //         },
    //         xAxis: [{
    //             data: dataSets.xLabels,
    //         }],
    //         series: dataSets.yLabels
    //     };
    //
    //     mChart.setOption(options);
    //     // mChart.hideLoading();
    // }, 1000);
};