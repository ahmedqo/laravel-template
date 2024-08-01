const donut = $query("#donut"),
    chart = $query("#chart"),
    loaders = $queryAll(".loader"),
    ldonut = $query(".donut-loader"),
    lchart = $query(".chart-loader"),
    visual = $query("neo-datavisualizer"),
    counts = JSON.parse($query('meta[name=count]').content);

loaders.forEach((loader, i) => {
    setTimeout(() => {
        loader.remove();
    }, 250 + (200 * i));
});

visual.refs.wrapper.style.background = Neo.Helper.Theme.colors("LIGHT");
visual.addEventListener("change:loading", e => {
    visual.refs.wrapper.style.background = e.detail.data ? Neo.Helper.Theme.colors("LIGHT") : "";
});

new Chart(donut, {
    type: "line",
    data: {
        labels: [$trans("Completed"), $trans("Pending")],
        datasets: [{
            data: counts,
            borderWidth: 1,
            backgroundColor: ["#22C55E", "#EC4899"],
            borderColor: ["#22C55E", "#EC4899"],
        }, ]
    },
    options: {
        responsive: true,
        // cutout: '80%',
        plugins: {
            legend: {
                display: false
            },
        },
        animation: {
            onComplete: () => {
                ldonut.remove();
            }
        }
    }
});

(async() => {
    const data = await getData($routes.chart);
    data['keys'] = data['keys'].map(e => $trans(e));
    new Chart(chart, {
        data: {
            labels: data['keys'],
            datasets: [{
                order: 2,
                type: "bar",
                borderWidth: 2,
                data: data['values'],
                backgroundColor: "#22C55E",
                borderColor: "#22C55E",
            }, {
                type: "line",
                borderWidth: 2,
                data: [...data['values']].reverse(),
                backgroundColor: "#EC4899",
                borderColor: "#EC4899",
            }, ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false,
                },
            },
            animation: {
                onComplete: () => {
                    lchart.remove();
                }
            }
        }
    });
})();

TableVisualizer(visual, () => [{
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
}]);