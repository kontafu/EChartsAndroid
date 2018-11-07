package com.android.echarts.utils

import com.alibaba.fastjson.JSON
import com.android.echarts.dataset.DataSets
import com.android.echarts.dataset.LocalDataSets

internal fun convert(dataSets: DataSets): String {
    val xLabels = dataSets.xAxis
    val yAxis = dataSets.yAxis

    val color = mutableListOf<String>()
    val legend = mutableListOf<String>()
    val yLabels = mutableListOf<LocalDataSets.YAxis>()

    yAxis.forEach {
        color.add(it.color)
        legend.add(it.name)
        yLabels.add(LocalDataSets.YAxis(it.name, it.yLabels))
    }
    val localDataSets = LocalDataSets(color, legend, xLabels, yLabels)
    return JSON.toJSONString(localDataSets)
}