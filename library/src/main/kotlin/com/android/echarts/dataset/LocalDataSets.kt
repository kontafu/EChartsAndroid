package com.android.echarts.dataset

internal data class LocalDataSets(var colors: MutableList<String>, var legends: MutableList<String>,
                                  var xLabels: MutableList<String>, var yAxis: MutableList<YAxis>) {
    internal data class YAxis(var name: String, var yLabels: MutableList<Double>)
}