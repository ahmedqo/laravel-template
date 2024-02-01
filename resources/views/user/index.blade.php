@extends('shared.core.base')
@section('title', __('Users List'))

@section('content')
    <div class="flex flex-col gap-2">
        <os-datatable print search filter download title="{{ __('Users List') }}">
            <a slot="end" title="{{ __('Create') }}" href="{{ route('views.users.store') }}"
                class="block p-2 rounded-x-thin text-x-black outline-none !bg-opacity-40 hover:bg-x-shade focus:bg-x-shade focus-within:bg-x-shade">
                <svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960">
                    <path
                        d="M479.825-185q-18.45 0-31.637-12.625Q435-210.25 435-231v-203H230q-18.375 0-31.688-13.56Q185-461.119 185-479.86q0-20.14 13.312-32.64Q211.625-525 230-525h205v-205q0-19.775 13.358-32.388Q461.716-775 480.158-775t32.142 12.612Q526-749.775 526-730v205h204q18.8 0 32.4 12.675 13.6 12.676 13.6 32.316 0 19.641-13.6 32.825Q748.8-434 730-434H526v203q0 20.75-13.65 33.375Q498.699-185 479.825-185Z" />
                </svg>
            </a>
            {{ $data->appends(request()->input())->links('shared.page.table') }}
        </os-datatable>
    </div>
@endsection

@section('scripts')
    <script>
        const datatable = document.querySelector("os-datatable");
        var timer;

        function createLinks(prev, next, str) {
            document.querySelector("#prev")?.remove();
            document.querySelector("#next")?.remove();
            const div = document.createElement("div");
            const link = "{{ route('views.users.index') }}";
            if (prev) {
                div.innerHTML = `
                    <a id="prev" slot="end" title="{{ __('Prev') }}" href="${link + `?search${str ? ("=" + str) : ""}&cursor=` + prev}"
                        class="block p-2 rounded-x-huge text-x-black outline-none !bg-opacity-40 hover:bg-x-shade focus:bg-x-shade focus-within:bg-x-shade">
                        <svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960">
                            <path
                                d="M452-219 190-481l262-262 64 64-199 198 199 197-64 65Zm257 0L447-481l262-262 63 64-198 198 198 197-63 65Z" />
                        </svg>
                    </a>
                `;
                datatable.appendChild(div.querySelector("#prev"));
            }
            if (next) {
                div.innerHTML = `
                    <a id="next" slot="end" title="{{ __('Next') }}" href="${link + `?search${str ? ("=" + str) : ""}&cursor=` + next}"
                        class="block p-2 rounded-x-huge text-x-black outline-none !bg-opacity-40 hover:bg-x-shade focus:bg-x-shade focus-within:bg-x-shade">
                        <svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960">
                            <path
                                d="M388-481 190-679l64-64 262 262-262 262-64-65 198-197Zm257 0L447-679l63-64 262 262-262 262-63-65 198-197Z" />
                        </svg>
                    </a>
                `;
                datatable.appendChild(div.querySelector("#next"));
            }
        }

        async function getUsers(str = "") {
            const req = await fetch("{{ route('actions.users.search') }}?search=" +
                encodeURIComponent(str));
            const res = await req.json();
            createLinks(res.prev_cursor, res.next_cursor, str);
            return res.data;
        }

        datatable.addEventListener("search", async e => {
            e.preventDefault();
            if (timer) clearTimeout(timer);
            datatable.loading = true;
            datatable.rows = await new Promise((resolver, rejecter) => {
                timer = setTimeout(async () => {
                    const data = await getUsers(e.detail.data);
                    resolver(data);
                }, 2000);
            });
            datatable.loading = false;
        });

        datatable.cols = [{
            name: "id",
            text: "{{ __('Id') }}",
            headRender: () => "<center>{{ __('Id') }}</center>",
            headPdfRender: function() {
                return this.headRender();
            },
            bodyRender: (row) =>
                `<span style="font-weight: 500; text-align: center; display: block;">#${row.id}</span>`,
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            name: "first_name",
            text: "{{ __('First Name') }}",
            bodyRender: (row) => capitalize(row.first_name),
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            name: "last_name",
            text: "{{ __('Last Name') }}",
            bodyRender: (row) => capitalize(row.last_name),
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            visible: false,
            name: "gender",
            text: "{{ __('Gender') }}",
            bodyRender: (row) => capitalize(row.gender) ?? "__",
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            visible: false,
            name: "birth_date",
            text: "{{ __('Birth Date') }}",
            bodyRender: (row) => capitalize(row.birth_date) ?? "__",
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            name: "email",
            text: "{{ __('Email') }}"
        }, {
            name: "phone",
            text: "{{ __('Phone') }}"
        }, {
            name: "address",
            text: "{{ __('Address') }}",
            visible: false,
            bodyRender: (row) => capitalize(row.address) ?? "__",
            bodyPdfRender: function(row) {
                return this.bodyRender(row);
            },
            bodyCsvRender: function(row) {
                return this.bodyRender(row);
            },
        }, {
            name: "action",
            text: "{{ __('Actions') }}",
            headRender: () => "<center>{{ __('Actions') }}</center>",
            headPdfRender: function() {
                return this.headRender();
            },
            bodyRender: (row) => {
                return `
                    <action-tools 
                        target="${row.id}" 
                        csrf="{{ csrf_token() }}"
                        patch="{{ route('views.users.patch', 'XXX') }}"
                        clear="{{ route('actions.users.clear', 'XXX') }}"
                    />
                `;
            },
            bodyPdfRender: () => "",
            bodyCsvRender: () => "",
        }];

        datatable.rows = {!! json_encode($data) !!}.data;
    </script>
@endsection
