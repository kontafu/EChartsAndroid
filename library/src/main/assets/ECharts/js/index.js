'use strict';

let width = window.innerWidth;
let height = window.innerHeight;

window.onload = function () {
    let jsonStr = JSON.stringify(dataSets);
    console.log(jsonStr);

    let main = document.getElementById('main');
    main.style.height = `${height}px`;

    let mChart = echarts.init(main);

    mChart.on('click', function (params) {
        console.dir(params);
    });

    window.onresize = function () {
        mChart.resize();
    };

    mChart.showLoading({
        text: '正在加载',
        color: '#0f0',
        textColor: '#333',
        maskColor: 'rgba(0,0,0,.1)',
        zlevel: 0,
    });

    let options = {
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
        legend: {
            orient: 'horizontal',
            left: '10%',
            y: 'bottom',
            itemGap: 24,
            padding: [0, 0, 12, 0],
            textStyle: {
                fontSize: 10
            },
            data: {
                name: '',
                textStyle: {
                    fontSize: 8,
                    fontWeight: 700,
                    color: '#333',
                },
                icon: 'square'
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
                color: '#00D09D'
            }
        }, {
            type: 'value',
            axisLabel: {
                fontSize: 6,
                color: '#FF00FF'
            }
        }],
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
            yAxisIndex: 1,
            emphasis: {
                itemStyle: {
                    color: '#00D09D80'
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
            yAxisIndex: 2,
            emphasis: {
                itemStyle: {
                    color: '#FF00FF80'
                }
            },
            barGap: '10%',
            barMinWidth: '10%',
            barMaxWidth: '30%',
            barCategoryGap: '20%',
        }]
    };

    if (options && typeof options === 'object') {
        mChart.setOption(options, true);
    }

    setTimeout(function () {
        options = {
            color: dataSets.color,
            legend: {
                data: dataSets.legend
            },
            xAxis: [{
                data: dataSets.xLabels,
            }],
            series: dataSets.yLabels
        };

        mChart.setOption(options);
        mChart.hideLoading();
    }, 1000);
};

let dataSets = {
    color: ['#FF5E00', '#00D09D', '#FF00FF'],
    legend: [{name: '影响用户数'}, {name: '用户数'}, {name: '影响环比'}],
    xLabels: ["其他", "江苏", "广东", "山东", "河南", "浙江", "河北", "湖南", "山西", "陕西", "云南", "四川", "重庆", "北京", "天津"],
    yLabels: [{
        name: '影响用户数',
        data: [0, 14358, 1143, 4606, 3754, 25063, 14374, 11743, 46060, 37507, 58765, 46060, 37507, 2505, 14358]
    }, {
        name: '用户数',
        data: [1, 14374, 11743, 46060, 37507, 2505, 14358, 1143, 4606, 3754, 9214, 25063, 14374, 11743, 46060]
    }, {
        name: '影响环比',
        data: [2, 14358, 1143, 4606, 3754, 9214, 25063, 14374, 11743, 46060, 25063, 14374, 11743, 46060, 37507]
    }]
};