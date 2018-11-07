package com.android.echarts.sample;

import android.os.Bundle;
import android.util.Log;
import android.view.View;

import com.android.echarts.EChartBarView;
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
            public void onItemClick(@NotNull String params) {
                Log.d("TAG", params);
            }
        });
    }

    public void onClick(View v) {
        List<String> xAxis = new ArrayList<>();
        xAxis.add("A");
        xAxis.add("B");
        xAxis.add("C");
        xAxis.add("D");

        List<Double> yLabels = new ArrayList<>();
        yLabels.add(20d);
        yLabels.add(30d);
        yLabels.add(40d);
        yLabels.add(50d);

        List<DataSets.YAxis> yAxis = new ArrayList<>();

        DataSets.YAxis yAxis1 = new DataSets.YAxis("异常数", "#FF0000", yLabels);
        yAxis.add(yAxis1);

        DataSets.YAxis yAxis2 = new DataSets.YAxis("影响人数", "#00FF00", yLabels);
        yAxis.add(yAxis2);

        DataSets dataSets = new DataSets(xAxis, yAxis);

        webView.setData(dataSets);
    }
}
