TableVisualizer($query("neo-datavisualizer"), ({
    csrf,
    patch,
    clear
}) => [{
    name: "id",
    text: $trans("Id"),
    headStyle: { width: 20, textAlign: "center", },
    bodyStyle: { width: 20, textAlign: "center", fontWeight: 700 },
    headPdfStyle: function() {
        return this.headStyle
    },
    bodyPdfStyle: function() {
        return this.bodyStyle;
    },
    bodyRender: (row) => "#" + row.id,
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    name: "full_name",
    text: $trans("Full name"),
    bodyRender: (row) => $titlize(row.first_name + " " + row.last_name),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    name: "email",
    text: $trans("Email"),
}, {
    name: "phone",
    text: $trans("Phone"),
}, {
    visible: false,
    name: "birth_date",
    text: $trans("Birth date"),
    headStyle: { width: 120, textAlign: "center" },
    bodyStyle: { width: 120, textAlign: "center" },
    headPdfStyle: function() {
        return this.headStyle
    },
    bodyPdfStyle: function() {
        return this.bodyStyle;
    },
    bodyRender: (row) => row.birth_date ? row.birth_date : empty(),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    visible: false,
    name: "gender",
    text: $trans("Gender"),
    headStyle: { width: 20, textAlign: "center" },
    bodyStyle: { width: 20, textAlign: "center" },
    headPdfStyle: function() {
        return this.headStyle
    },
    bodyPdfStyle: function() {
        return this.bodyStyle;
    },
    bodyRender: (row) => row.gender ? $capitalize($trans(row.gender)) : empty(),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    visible: false,
    name: "address",
    text: $trans("Address"),
    bodyRender: (row) => row.address ? $capitalize(row.address) : empty(),
    bodyPdfRender: function(row) {
        return this.bodyRender(row);
    },
    bodyCsvRender: function(row) {
        return this.bodyRender(row);
    },
}, {
    name: "action",
    text: $trans("Actions"),
    headStyle: { width: 20, textAlign: "center" },
    bodyStyle: { width: 20, textAlign: "center" },
    bodyRender: (row) => `<action-tools target="${row.id}"csrf="${csrf}"patch="${patch}"clear="${clear}"></action-tools>`,
    headPdfStyle: function() {
        return this.headStyle
    },
    bodyPdfStyle: function() {
        return this.bodyStyle;
    },
    bodyPdfRender: () => empty(),
    bodyCsvRender: () => empty(),
}]);