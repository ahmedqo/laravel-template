(function() {
    const Style = `:host {gap: 1px;display: flex;margin: 0 auto;flex-wrap: wrap;overflow: hidden;width: max-content;border-radius: .25rem;}[part="btns"] {display: flex;border: unset;outline: unset;background: unset;align-items: center;padding: .25rem .5rem;border-radius: .20rem;text-decoration: unset;justify-content: center;color: {{ @Theme.colors("WHITE") }};background: red;}[part="btns"]:hover,[part="btns"]:focus,[part="btns"]:focus-within {cursor: pointer;color: {{ @Theme.colors("BLACK") }};}[part="svgs"] {width: 1rem;height: 1rem;display: block;pointer-events: none;}{$ if @props.scene $}[part="btns"][title="scene"] {background: {{ @Theme.colors("GRAY", 400) }};}[part="btns"][title="scene"]:hover,[part="btns"][title="scene"]:focus,[part="btns"][title="scene"]:focus-within {background: {{ @Theme.colors("GRAY", 400, 60) }};}{$ endif $}{$ if @props.print $}[part="btns"][title="print"] {background: {{ @Theme.colors("GREEN", 400) }};}[part="btns"][title="print"]:hover,[part="btns"][title="print"]:focus,[part="btns"][title="print"]:focus-within {background: {{ @Theme.colors("GREEN", 400, 60) }};}{$ endif $}{$ if @props.patch $}[part="btns"][title="patch"] {background: {{ @Theme.colors("YELLOW", 400) }};}[part="btns"][title="patch"]:hover,[part="btns"][title="patch"]:focus,[part="btns"][title="patch"]:focus-within {background: {{ @Theme.colors("YELLOW", 400, 60) }};}{$ endif $}{$ if @truty(@props.clear) && @truty(@props.csrf) $}[part="btns"][title="clear"] {background: {{ @Theme.colors("RED", 400) }};}[part="btns"][title="clear"]:hover,[part="btns"][title="clear"]:focus,[part="btns"][title="clear"]:focus-within {background: {{ @Theme.colors("RED", 400, 60) }};}{$ endif $}`;

    const Template = `{$ if @props.scene $}<a title="scene" href="{{ @props.scene.replace('XXX', @props.target) }}" part="btns"><svg part="svgs" fill="currentcolor" viewBox="0 -960 960 960"><path d="M99-272q-19.325 0-32.662-13.337Q53-298.675 53-318v-319q0-20.3 13.338-33.15Q79.675-683 99-683h73q18.9 0 31.95 12.85T217-637v319q0 19.325-13.05 32.663Q190.9-272 172-272H99Zm224 96q-20.3 0-33.15-13.05Q277-202.1 277-221v-513q0-19.325 12.85-32.662Q302.7-780 323-780h314q20.3 0 33.15 13.338Q683-753.325 683-734v513q0 18.9-12.85 31.95T637-176H323Zm465-96q-18.9 0-31.95-13.337Q743-298.675 743-318v-319q0-20.3 13.05-33.15Q769.1-683 788-683h73q19.325 0 33.162 12.85Q908-657.3 908-637v319q0 19.325-13.838 32.663Q880.325-272 861-272h-73Z" /></svg></a>{$ endif $}{$ if @props.print $}<a title="print" href="{{ @props.print.replace('XXX', @props.target) }}" part="btns"><svg part="svgs" fill="currentcolor" viewBox="0 -960 960 960"><pathd="M741-701H220v-160h521v160Zm-17 236q18 0 29.5-10.812Q765-486.625 765-504.5q0-17.5-11.375-29.5T724.5-546q-18.5 0-29.5 12.062-11 12.063-11 28.938 0 18 11 29t29 11Zm-75 292v-139H311v139h338Zm92 86H220v-193H60v-264q0-53.65 36.417-91.325Q132.833-673 186-673h588q54.25 0 90.625 37.675T901-544v264H741v193Z" /></svg></a>{$ endif $}{$ if @props.patch $}<a title="patch" href="{{ @props.patch.replace('XXX', @props.target) }}" part="btns"><svg part="svgs" fill="currentcolor" viewBox="0 -960 960 960"><path d="M170-103q-32 7-53-14.5T103-170l39-188 216 216-188 39Zm235-78L181-405l435-435q27-27 64.5-27t63.5 27l96 96q27 26 27 63.5T840-616L405-181Z" /></svg></a>{$ endif $}{$ if @truty(@props.clear) && @truty(@props.csrf) $}<form action="{{ @props.clear.replace('XXX', @props.target) }}" method="POST"><input type="hidden" name="_token" value="{{ @props.csrf }}" autocomplete="off" /><input type="hidden" name="_method" value="delete" /><button type="submit" title="clear" part="btns"><svg part="svgs" fill="currentcolor" viewBox="0 -960 960 960"><path d="M253-99q-36.462 0-64.231-26.775Q161-152.55 161-190v-552h-11q-18.75 0-31.375-12.86Q106-767.719 106-787.36 106-807 118.613-820q12.612-13 31.387-13h182q0-20 13.125-33.5T378-880h204q19.625 0 33.312 13.75Q629-852.5 629-833h179.921q20.279 0 33.179 13.375 12.9 13.376 12.9 32.116 0 20.141-12.9 32.825Q829.2-742 809-742h-11v552q0 37.45-27.069 64.225Q743.863-99 706-99H253Zm104-205q0 14.1 11.051 25.05 11.051 10.95 25.3 10.95t25.949-10.95Q431-289.9 431-304v-324q0-14.525-11.843-26.262Q407.313-666 392.632-666q-14.257 0-24.944 11.738Q357-642.525 357-628v324Zm173 0q0 14.1 11.551 25.05 11.551 10.95 25.8 10.95t25.949-10.95Q605-289.9 605-304v-324q0-14.525-11.545-26.262Q581.91-666 566.93-666q-14.555 0-25.742 11.738Q530-642.525 530-628v324Z" /></svg></button></form>{$ endif $}`;

    Neo.Component({
        tag: "action-tools",
        tpl: Template,
        css: Style
    })({
        props: {
            "csrf": null,
            "scene": null,
            "print": null,
            "patch": null,
            "clear": null,
            "target": null
        },
        cycle: {
            mounted() {
                if (this.hasAttribute("csrf")) {
                    this.props.csrf = this.getAttribute("csrf");
                    this.removeAttribute("csrf");
                }

                if (this.hasAttribute("target")) {
                    this.props.target = this.getAttribute("target");
                    this.removeAttribute("target");
                }

                if (this.hasAttribute("scene")) {
                    this.props.scene = this.getAttribute("scene");
                    this.removeAttribute("scene");
                }

                if (this.hasAttribute("print")) {
                    this.props.print = this.getAttribute("print");
                    this.removeAttribute("print");
                }

                if (this.hasAttribute("patch")) {
                    this.props.patch = this.getAttribute("patch");
                    this.removeAttribute("patch");
                }

                if (this.hasAttribute("clear")) {
                    this.props.clear = this.getAttribute("clear");
                    this.removeAttribute("clear");
                }
            }
        }
    }).define();
})();

Neo.Locales.fr = {
    ...Neo.Locales.fr,
    "Id": "Identifiant",
    "Email": "E-mail",
    "First Name": "Prénom",
    "Last Name": "Nom de famille",
    "Gender": "Genre",
    "Birth Date": "Date de naissance",
    "Phone": "Téléphone",
    "Address": "Adresse",
    "Male": "Homme",
    "Female": "Femme",
    "Actions": "Actions",
}

Neo.Locales.ar = {
    ...Neo.Locales.ar,
    "Id": "المعرف",
    "Email": "البريد الإلكتروني",
    "First Name": "الاسم الأول",
    "Last Name": "الاسم الأخير",
    "Gender": "الجنس",
    "Birth Date": "تاريخ الميلاد",
    "Phone": "الهاتف",
    "Address": "العنوان",
    "Male": "ذكر",
    "Female": "أنثى",
    "Actions": "الإجراءات",
}

const COLS = {
    users: ({
        Csrf,
        Patch,
        Clear
    }) => [{
        name: "id",
        text: Neo.Helper.trans("Id"),
        headStyle: { width: 20, textAlign: "center" },
        bodyStyle: { width: 20, textAlign: "center" },
        headPdfStyle: function() {
            return {...this.headStyle, background: "rgb(33 150 243)", color: "rgb(254 254 254)" };
        },
        bodyPdfStyle: function() {
            return this.bodyStyle;
        },
        bodyRender: (row) =>
            `<span style="font-weight: 500; text-align: center; display: block;">#${row.id}</span>`,
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "first_name",
        text: Neo.Helper.trans("First Name"),
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
        bodyRender: (row) => Neo.Helper.Str.capitalize(row.first_name),
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
        bodyCsvRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "last_name",
        text: Neo.Helper.trans("Last Name"),
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
        bodyRender: (row) => Neo.Helper.Str.capitalize(row.last_name),
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
        bodyCsvRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "gender",
        text: Neo.Helper.trans("Gender"),
        visible: false,
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
        bodyRender: (row) => row.gender ? Neo.Helper.Str.capitalize(Neo.Helper.trans(row.gender)) : empty(),
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
        bodyCsvRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "birth_date",
        text: Neo.Helper.trans("Birth Date"),
        visible: false,
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
        bodyRender: (row) => row.birth_date ? row.birth_date : empty(),
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
        bodyCsvRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "email",
        text: Neo.Helper.trans("Email"),
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
    }, {
        name: "phone",
        text: Neo.Helper.trans("Phone"),
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
    }, {
        name: "address",
        text: Neo.Helper.trans("Address"),
        visible: false,
        headPdfStyle: {
            background: "rgb(33 150 243)",
            color: "rgb(254 254 254)"
        },
        bodyRender: (row) => row.address ? Neo.Helper.Str.capitalize(row.address) : empty(),
        bodyPdfRender: function(row) {
            return this.bodyRender(row);
        },
        bodyCsvRender: function(row) {
            return this.bodyRender(row);
        },
    }, {
        name: "action",
        text: Neo.Helper.trans("Actions"),
        headStyle: { width: 20, textAlign: "center" },
        bodyStyle: { width: 20, textAlign: "center" },
        bodyRender: (row) => {
            return `<action-tools target="${row.id}" csrf="${Csrf}"patch="${Patch}"clear="${Clear}"></action-tools>`;
        },
        headPdfStyle: function() {
            return {...this.headStyle, background: "rgb(33 150 243)", color: "rgb(254 254 254)" };
        },
        bodyPdfStyle: function() {
            return this.bodyStyle;
        },
        bodyPdfRender: () => empty(),
        bodyCsvRender: () => empty(),
    }],
}

Neo.load(function() {
    document.querySelectorAll(".nav-colors svg").forEach((svg, i) => {
        if (i < 10) svg.style.color = "var(--color-" + i + ")";
    });

    document.querySelectorAll(".sys-colors svg").forEach((svg, i) => {
        if (i < 10) svg.style.color = "var(--color-sys-" + i + ")";
    });
});

function empty() {
    return "__";
}

async function getData(url, createLinks) {
    const req = await fetch(url);
    const res = await req.json();
    createLinks && createLinks(res.prev_cursor, res.next_cursor, (new URL(url)).searchParams.get("search"));
    return res.data;
}

function TableVisualizer(dataVisualizer, Type, Data) {
    var timer;
    const Links = document.createElement("div");
    Links.innerHTML = `<a id="prev" slot="end" aria-label="prev_page_link" class="block w-6 h-6 text-x-black outline-none relative isolate before:content-[''] before:rounded-x-thin before:absolute before:block before:w-[130%] before:h-[130%] before:-inset-[15%] before:-z-[1] before:!bg-opacity-40 hover:before:bg-x-shade focus:before:bg-x-shade focus-within:before:bg-x-shade"><svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960"><path d="M452-219 190-481l262-262 64 64-199 198 199 197-64 65Zm257 0L447-481l262-262 63 64-198 198 198 197-63 65Z" /></svg></a><a id="next" slot="end" aria-label="next_page_link" class="block w-6 h-6 text-x-black outline-none relative isolate before:content-[''] before:rounded-x-thin before:absolute before:block before:w-[130%] before:h-[130%] before:-inset-[15%] before:-z-[1] before:!bg-opacity-40 hover:before:bg-x-shade focus:before:bg-x-shade focus-within:before:bg-x-shade"><svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960"><path d="M388-481 190-679l64-64 262 262-262 262-64-65 198-197Zm257 0L447-679l63-64 262 262-262 262-63-65 198-197Z" /></svg></a>`;

    async function event(e) {
        e.preventDefault();
        dataVisualizer.loading = true;
        dataVisualizer.rows = await getData(e.target.href, createLinks);
        dataVisualizer.loading = false;
    }

    function createLinks(prev, next, str) {
        const search = "?search" + (str ? ("=" + str) : "");
        const preva = document.querySelector("#prev");
        const nexta = document.querySelector("#next");
        if (prev) {
            const href = Data.Search + search + "&cursor=" + prev;
            if (preva) preva.href = href
            else {
                const _preva = Links.querySelector("#prev").cloneNode(true);
                _preva.addEventListener("click", event);
                if (nexta) dataVisualizer.insertBefore(_preva, nexta);
                else dataVisualizer.appendChild(_preva);
                _preva.title = Neo.Helper.trans("Prev");
                _preva.href = href;
            }
        } else {
            if (preva) {
                preva.removeEventListener("click", event);
                preva.remove();
            }
        }
        if (next) {
            const href = Data.Search + search + "&cursor=" + next;
            if (nexta) nexta.href = href
            else {
                const _nexta = Links.querySelector("#next").cloneNode(true);
                _nexta.addEventListener("click", event);
                dataVisualizer.appendChild(_nexta);
                _nexta.title = Neo.Helper.trans("Next");
                _nexta.href = href;
            }
        } else {
            if (nexta) {
                nexta.removeEventListener("click", event);
                nexta.remove();
            }
        }
    }

    (async function() {
        dataVisualizer.loading = true;
        dataVisualizer.rows = await getData(Data.Search + window.location.search, createLinks);
        dataVisualizer.loading = false;
    })();

    dataVisualizer.cols = COLS[Type]({
        Currency: Data.Currency,
        Scene: Data.Scene,
        Print: Data.Print,
        Patch: Data.Patch,
        Clear: Data.Clear,
        Csrf: Data.Csrf,
    });

    dataVisualizer.addEventListener("search", async e => {
        e.preventDefault();
        if (timer) clearTimeout(timer);
        dataVisualizer.loading = true;
        dataVisualizer.rows = await new Promise((resolver, rejecter) => {
            timer = setTimeout(async() => {
                const data = await getData(Data.Search + "?search=" +
                    encodeURIComponent(e.detail
                        .data), createLinks);
                resolver(data);
            }, 2000);
        });
        dataVisualizer.loading = false;
    });
}