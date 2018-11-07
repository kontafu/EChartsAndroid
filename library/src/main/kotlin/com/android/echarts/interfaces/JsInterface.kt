package com.android.echarts.interfaces

import android.os.Build
import android.webkit.JavascriptInterface
import android.webkit.WebView
import java.net.URLEncoder

abstract class JsInterface {

    @JavascriptInterface
    abstract fun invokeNative(params: String)

    fun invokeJs(webView: WebView, params: String) {
        val js = "javascript:invokeJs(\'${URLEncoder.encode(params, "utf-8")}\')"
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
            webView.evaluateJavascript(js) {

            }
        } else {
            webView.loadUrl(js)
        }
    }
}