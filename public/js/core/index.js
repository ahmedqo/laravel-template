const donut = $query("#donut"),
    chart = $query("#chart"),
    loaders = $queryAll(".loader"),
    ldonut = $query(".donut-loader"),
    lchart = $query(".chart-loader"),
    remove = [$query('meta[name=count]'), $query('meta[name=rtl]')],
    counts = JSON.parse(remove[0].content),
    rtl = +remove[1].content;

remove.forEach(r => r.remove());

function flip(arr) {
    return rtl ? arr.reverse() : arr
}

loaders.forEach(loader => {
    setTimeout(() => {
        loader.remove();
    }, Math.floor(Math.random() * 500) + 500);
});

new Chart(donut, {
    type: "doughnut",
    data: {
        labels: flip([$trans("Completed"), $trans("Pending")]),
        datasets: [{
            data: flip(counts),
            borderWidth: 1,
            backgroundColor: flip(["#22C55E", "#EC4899"]),
            borderColor: flip(["#22C55E", "#EC4899"]),
        }, ]
    },
    options: {
        responsive: true,
        cutout: '80%',
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
            labels: flip(data['keys']),
            datasets: [{
                order: 2,
                type: "bar",
                borderWidth: 2,
                data: flip(data['values']),
                backgroundColor: "#22C55E",
                borderColor: "#22C55E",
            }, {
                type: "line",
                borderWidth: 2,
                data: flip([...data['values']].reverse()),
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
            scales: {
                y: {
                    position: rtl ? "right" : "left"
                }
            },
            animation: {
                onComplete: () => {
                    lchart.remove();
                }
            }
        }
    });
})();

TableVisualizer($query("neo-datavisualizer"), () => [{
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



const head = $query("#head"),
    product = $query("#product"),
    content = $query("#content-table"),
    Segment = new Neo.Segment(content, `{$ forelse row into data $}<tr class="border-t border-t-x-light"><td class="w-4 ps-6 px-4 py-2 text-x-black font-x-thin text-base">#{{ @loop.round }}</td><td class="px-4 py-3 text-x-black text-base">{{ row.name }}</td><td class="w-32 px-4 py-3"><input type="number" class="text-x-black outline-x-prime text-base text-center w-full" value="{{ row.price }}" @change="{{ (e) => change(e, @loop.index, 'price') }}" /></td><td class="w-32 px-4 py-3"><input type="number" class="text-x-black outline-x-prime text-base text-center w-full" value="{{ row.qte }}" @change="{{ (e) => change(e, @loop.index, 'qte') }}" /></td><td class="w-32 px-4 py-3 text-center text-x-black text-base">{{ @Str.money(row.qte * row.price, 3) }}</td><td class="pe-6 w-20 text-center px-4 py-3 text-x-black text-base"><button class="mx-auto flex items-center justify-center py-1 px-2 outline-none rounded-sm text-x-white bg-red-400 hover:!bg-opacity-60 focus:!bg-opacity-60" @click="{{ (e) => remove(@loop.index) }}"><svg class="w-4 h-4 pointer-events-none block" fill="currentcolor" viewBox="0 -960 960 960"><path d="M253-99q-36.462 0-64.231-26.775Q161-152.55 161-190v-552h-11q-18.75 0-31.375-12.86Q106-767.719 106-787.36 106-807 118.613-820q12.612-13 31.387-13h182q0-20 13.125-33.5T378-880h204q19.625 0 33.312 13.75Q629-852.5 629-833h179.921q20.279 0 33.179 13.375 12.9 13.376 12.9 32.116 0 20.141-12.9 32.825Q829.2-742 809-742h-11v552q0 37.45-27.069 64.225Q743.863-99 706-99H253Zm104-205q0 14.1 11.051 25.05 11.051 10.95 25.3 10.95t25.949-10.95Q431-289.9 431-304v-324q0-14.525-11.843-26.262Q407.313-666 392.632-666q-14.257 0-24.944 11.738Q357-642.525 357-628v324Zm173 0q0 14.1 11.551 25.05 11.551 10.95 25.8 10.95t25.949-10.95Q605-289.9 605-304v-324q0-14.525-11.545-26.262Q581.91-666 566.93-666q-14.555 0-25.742 11.738Q530-642.525 530-628v324Z"></path></svg></button></td></tr>{$ empty $}<tr class="bg-x-light"><td class="px-6 py-4 text-center text-x-black font-x-thin text-lg" colspan="6">{{ @trans("No product yet") }}</td></tr>{$ endforelse $}{$ if data.length $}<tr class="border-t border-t-x-light"><td class="px-6 py-3 text-center text-x-black font-x-thin" colspan="4">{{ @trans("Total") }}</td><td class="w-32 px-4 py-3 text-center text-x-black text-base">{{ @Str.money(sum(), 3) }}</td><td class="w-20"></td></tr>{$ endif $}`, {
        data: [],
        sum() {
            return this.data.reduce((c, i) => c + (i.price * i.qte), 0);
        },
        change(e, id, type) {
            this.data[id][type] = +e.target.value;
            Segment.upgrade();
        },
        remove(id) {
            this.data = this.data.filter((e, i) => i !== +id);
            Segment.upgrade();
        }
    });

Segment.setEffect(function() {
    head.classList[this.context.data.length ? "remove" : "add"]("hidden");
});

product.addEventListener("input", e => {
    product.data = [{
        name: "test one",
        price: 200,
    }, {
        name: "test two",
        price: 150,
    }, {
        name: "test three",
        price: 300,
    }, {
        name: "test four",
        price: 50,
    }]
});

product.addEventListener("select", e => {
    setTimeout(() => {
        product.reset();
    }, 100);
    Segment.context.data.push({
        name: e.detail.data.name,
        price: e.detail.data.price,
        qte: 1
    });
    Segment.upgrade();
});