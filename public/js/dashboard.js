const loaders = $queryAll(".loader"),
    ldonut = $query(".donut-loader"),
    lchart = $query(".chart-loader"),
    visual = $query("neo-datavisualizer");

loaders.forEach((loader, i) => {
    setTimeout(() => {
        loader.remove();
    }, 250 + (200 * i));
});

COLS.popular = () => [{
    name: "product",
    text: $trans("Product"),
    bodyRender: (row) => $capitalize(row.product),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    name: "orders",
    text: $trans("Orders"),
    headStyle: { width: 120, textAlign: "center" },
    bodyStyle: { width: 120, textAlign: "center" },
    headPdfStyle: function() {
        return this.headStyle
    },
    bodyPdfStyle: function() {
        return this.bodyStyle;
    },
    bodyRender: (row) => $money(row.orders, 3),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}];

visual.refs.wrapper.style.background = Neo.Helper.Theme.colors("LIGHT");
visual.addEventListener("change:loading", e => {
    visual.refs.wrapper.style.background = e.detail.data ? Neo.Helper.Theme.colors("LIGHT") : "";
});

TableVisualizer(visual, "popular");