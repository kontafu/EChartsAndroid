package com.android.echarts.dataset

data class DataSets(var xAxis: MutableList<String>, var yAxis: MutableList<YAxis>) {
    data class YAxis(var name: String, var color: String, var yLabels: MutableList<Double>)
}