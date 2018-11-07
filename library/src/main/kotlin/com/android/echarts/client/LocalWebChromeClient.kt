package com.android.echarts.client

import android.util.Log
import android.webkit.JsResult
import android.webkit.WebChromeClient
import android.webkit.WebView

class LocalWebChromeClient : WebChromeClient() {

    /* 该方法用来抓取网页弹出的错误日志 */
    override fun onJsAlert(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
        Log.e("TAG", message)
        result?.cancel()
        return true
    }
}