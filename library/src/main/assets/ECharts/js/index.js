'use strict';

let width = window.innerWidth;
let height = window.innerHeight;

var options = null;
var mChart = null;

window.onload = function () {
    let main = document.getElementById('main');
    main.style.height = `${height}px`;

    mChart = echarts.init(main);

    mChart.on('click', function (params) {
        setOnClickListener({
            legendName: params['seriesName'],
            xAxisValue: params['name'],
            yAxisValue: params['value'],
            index: params['dataIndex'],
            indexInGroup: params['seriesIndex']
        })
    });

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

    window.onresize = function () {
        mChart.resize();
    };
};