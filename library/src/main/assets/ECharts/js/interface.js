/**
 * 提供给Native调用的方法
 * webView.loadUrl("javascript:invokeJs(\"obj\")")
 */
function invokeJs(params) {
    alert(params);
    let dataSetsFromNative = JSON.parse(decodeURIComponent(params));

    let yAxisArr = [];
    dataSetsFromNative.colors.forEach(function (item) {
        yAxisArr.push({type: "value", axisLabel: {fontSize: 6, color: item}})
    });

    let legendArr = [];
    dataSetsFromNative.legends.forEach(function (item) {
        legendArr.push({
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 14,
            textStyle: {
                fontSize: 8,
                fontWeight: 700,
                color: '#333',
            },
            name: item
        });
    });

    let seriesArr = [];
    dataSetsFromNative.yAxis.forEach(function (item, index) {
        seriesArr.push({
            name: dataSetsFromNative.legends[index],
            data: item.yLabels,
            type: "bar",
            yAxisIndex: index,
            smooth: true,
            barGap: '10%',
            barMinWidth: '10%',
            barMaxWidth: '30%',
            barCategoryGap: '20%',
            emphasis: {itemStyle: dataSetsFromNative.colors[index] + "80"}
        });
    });

    options = {
        tooltip: {
            trigger: 'axis',
            textStyle: {
                fontSize: 10
            },
            axisPointer: {
                type: 'shadow',
                shadowStyle: {
                    color: 'rgba(255,255,255,0.5)'
                }
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
            containLabel: true
        },
        color: dataSetsFromNative.colors,
        xAxis: [{
            type: 'category',
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                fontSize: 8
            },
            data: dataSetsFromNative.xLabels
        }],
        yAxis: yAxisArr,
        legend: {
            type: 'scroll',
            orient: 'horizontal',
            left: '5%',
            y: 'bottom',
            itemGap: 24,
            padding: [0, 0, 12, 0],
            textStyle: {
                fontSize: 10
            },
            data: legendArr
        },
        series: seriesArr
    };

    // alert(`source: ${JSON.stringify(dataSetsFromNative)}`);
    // alert(`options: ${JSON.stringify(options)}`);

    mChart.setOption(options);
    mChart.hideLoading();
}

/**
 * 点击 web 柱状图触发
 * @param params 返回给 native 的数据
 */
setOnClickListener = (params) => {
    if (null === params) {
        return
    }
    try {
        let content = JSON.stringify(params);
        JsInterface.invokeNative(encodeURIComponent(content));
    } catch (e) {
        /* 将出错日志以 alert 方式弹出，native 端重写 onJsAlert 即可获取 */
        alert(e);
    }
};