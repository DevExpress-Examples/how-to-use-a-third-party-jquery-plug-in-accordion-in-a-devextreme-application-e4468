window.DxSample = window.DxSample || {};

$(function () {
    DxSample.app = new DevExpress.framework.html.HtmlApplication({
        ns: DxSample,
        viewPortNode: document.getElementById("viewPort"),
        defaultLayout: DxSample.config.defaultLayout,
        navigation: DxSample.config.navigation
    });
    DxSample.app.router.register(":view/:id", { view: "Index", id: undefined });
    DxSample.app.navigate();

});
