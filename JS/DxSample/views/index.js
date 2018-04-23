DxSample.Index = function (params) {
    return {
        viewShown: function (e) {
            if (this.accordion) {
                // update widget options if necessary
            } else {
                this.accordion = $("#accordion").accordion({
                    active: false,
                    collapsible: true
                });
            }
        } 
    };
};