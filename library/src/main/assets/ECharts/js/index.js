'use strict';

let width = window.innerWidth;
let height = window.innerHeight;

var options = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    dataZoom: [{
        type: 'inside',
        show: true,
        preventDefaultMouseMove: false,
        zoomOnMouseWheel: false,
        zoomLock: false
    }],
    grid: {
        top: '5%',
        right: '2%',
        bottom: '32',
        left: '2%',
        containLabel: true,
        tooltip: {
            textStyle: {
                fontSize: 12
            },
            trigger: 'axis',
        }
    },
    xAxis: [{
        type: 'category',
        data: [],
        axisTick: {
            alignWithLabel: true
        },
        axisLabel: {
            fontSize: 8
        }
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
            fontSize: 6,
            color: '#FF5E00'
        }
    }, {
        type: 'value',
        axisLabel: {
            fontSize: 6,
            color: '#FF5E00'
        }
    }],
    legend: {
        orient: 'horizontal',
        left: '5%',
        y: 'bottom',
        itemGap: 24,
        padding: [0, 0, 12, 0],
        textStyle: {
            fontSize: 10
        },
        data: [{
            name: '影响用户数',
            icon: 'none',
            textStyle: {
                fontSize: 8,
                fontWeight: 700,
                color: '#333',
            }
        }]
    },
    series: [{
        name: '',
        type: 'bar',
        data: [],
        yAxisIndex: 0,
        smooth: true,
        emphasis: {
            itemStyle: {
                color: '#FF5E0080'
            }
        },
        barGap: '10%',
        barMinWidth: '10%',
        barMaxWidth: '30%',
        barCategoryGap: '20%',
    }, {
        name: '',
        type: 'bar',
        data: [],
        yAxisIndex: 0,
        smooth: true,
        emphasis: {
            itemStyle: {
                color: '#FF5E0080'
            }
        },
        barGap: '10%',
        barMinWidth: '10%',
        barMaxWidth: '30%',
        barCategoryGap: '20%',
    }]
};
var mChart = null;

window.onload = function () {
    let main = document.getElementById('main');
    main.style.height = `${height}px`;

    mChart = echarts.init(main);

    mChart.on('click', function (params) {
        setOnClickListener(params['name'] + '===' + params['data']);
    });

    window.onresize = function () {
        mChart.resize();
    };

    // mChart.showLoading({
    //     text: '正在加载',
    //     color: '#0f0',
    //     textColor: '#333',
    //     maskColor: 'rgba(64,64,64,.1)',
    //     zlevel: 0,
    // });

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