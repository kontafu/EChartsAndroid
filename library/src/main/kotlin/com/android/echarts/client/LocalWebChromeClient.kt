package com.android.echarts.client

import android.util.Log
import android.webkit.JsResult
import android.webkit.WebChromeClient
import android.webkit.WebView

class LocalWebChromeClient : WebChromeClient() {
    override fun onJsAlert(view: WebView?, url: String?, message: String?, result: JsResult?): Boolean {
        Log.d("TAG", message)
        result?.cancel()
        return true
    }
}