/**
 * 提供给Native调用的方法
 * webView.loadUrl("javascript:invokeJs(\"obj\")")
 */
function invokeJs(params) {
    let dataSetsFromNative = JSON.parse(decodeURIComponent(params));
    options = {
        color: dataSetsFromNative.colors,
        legend: {
            data: dataSetsFromNative.legends
        },
        xAxis: [{
            data: dataSetsFromNative.xLabels,
        }],
        series: dataSetsFromNative.yAxis
    };

    alert(JSON.stringify(dataSetsFromNative));
    alert(JSON.stringify(options));

    mChart.setOption(options);
}

/**
 * 点击 web 柱状图触发
 * @param params 返回给 native 的数据
 */
setOnClickListener = (params) => {
    try {
        JsInterface.invokeNative(params);
    } catch (e) {
        alert(e);
    }
};