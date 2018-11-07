package com.android.echarts.sample;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.android.echarts.EChartBarView;
import com.android.echarts.dataset.Clay;
import com.android.echarts.dataset.DataSets;
import com.android.echarts.interfaces.OnChartItemClickListener;

import org.jetbrains.annotations.NotNull;

import java.util.ArrayList;
import java.util.List;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    private EChartBarView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        webView = findViewById(R.id.web_view);
        webView.setOnChartItemClickListener(new OnChartItemClickListener() {
            @Override
            public void onItemClick(@NotNull Clay params) {
                Log.d("TAG", "onItemClick: " + params);
            }
        });
    }

    public void onClick(View v) {
        List<String> xAxis = new ArrayList<>();
        xAxis.add("A");
        xAxis.add("B");
        xAxis.add("C");
        xAxis.add("D");
        xAxis.add("E");

        List<DataSets.YAxis> yAxis = new ArrayList<>();

        /*===============================*/
        List<Double> yLabels1 = new ArrayList<>();
        yLabels1.add(10d);
        yLabels1.add(20d);
        yLabels1.add(30d);
        yLabels1.add(40d);
        yLabels1.add(50d);

        DataSets.YAxis yAxis1 = new DataSets.YAxis("异常数", "#FFFF00", yLabels1);
        yAxis.add(yAxis1);
        /*===============================*/
        List<Double> yLabels2 = new ArrayList<>();
        yLabels2.add(50d);
        yLabels2.add(40d);
        yLabels2.add(30d);
        yLabels2.add(20d);
        yLabels2.add(10d);

        DataSets.YAxis yAxis2 = new DataSets.YAxis("影响人数", "#00FFFF", yLabels2);
        yAxis.add(yAxis2);
        /*===============================*/

        DataSets dataSets = new DataSets(xAxis, yAxis);

        webView.setData(dataSets);
    }
}
