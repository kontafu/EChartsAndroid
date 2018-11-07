package com.android.echarts

import android.annotation.SuppressLint
import android.content.Context
import android.util.AttributeSet
import android.webkit.JavascriptInterface
import android.webkit.WebSettings
import android.webkit.WebView
import com.android.echarts.client.LocalWebChromeClient
import com.android.echarts.client.LocalWebViewClient
import com.android.echarts.dataset.DataSets
import com.android.echarts.interfaces.JsInterface
import com.android.echarts.interfaces.OnChartItemClickListener
import com.android.echarts.utils.convert

@SuppressLint("SetJavaScriptEnabled", "AddJavascriptInterface")
class EChartBarView @JvmOverloads constructor(
        context: Context, attrs: AttributeSet? = null, defStyleAttr: Int = 0
) : WebView(context, attrs, defStyleAttr) {

    private val mJsInterface = object : JsInterface() {
        @JavascriptInterface
        override fun invokeNative(params: String) {
            onChartItemClickListener?.onItemClick(params)
        }
    }

    var onChartItemClickListener: OnChartItemClickListener? = null

    init {
        with(settings) {
            setSupportZoom(false)
            useWideViewPort = true
            loadWithOverviewMode = true
            defaultTextEncodingName = "utf-8"
            loadsImagesAutomatically = true
            setSupportMultipleWindows(false)
            requestFocusFromTouch()
            allowFileAccess = true
            javaScriptEnabled = true
            javaScriptCanOpenWindowsAutomatically = false
            layoutAlgorithm = WebSettings.LayoutAlgorithm.SINGLE_COLUMN
            cacheMode = WebSettings.LOAD_CACHE_ELSE_NETWORK
        }

        webChromeClient = LocalWebChromeClient()
        webViewClient = LocalWebViewClient()

        addJavascriptInterface(mJsInterface, "JsInterface")
    }

    override fun onAttachedToWindow() {
        super.onAttachedToWindow()
        loadUrl("file:///android_asset/ECharts/index.html")
    }

    override fun onDetachedFromWindow() {
        loadUrl(null)
        clearHistory()
        destroy()
        super.onDetachedFromWindow()
    }

    fun setData(dataSets: DataSets) {
        mJsInterface.invokeJs(this, convert(dataSets))
    }

}