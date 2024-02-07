@extends('shared.core.base')
@section('title', __('Users List'))

@section('content')
    <div class="flex flex-col gap-2">
        <os-data-visual print search filter download title="{{ __('Users List') }}">
            <a slot="end" title="{{ __('Create') }}" href="{{ route('views.users.store') }}"
                class="block w-6 h-6 text-x-black outline-none relative isolate before:content-[''] before:rounded-x-thin before:absolute before:block before:w-[130%] before:h-[130%] before:-inset-[15%] before:-z-[1] before:!bg-opacity-40 hover:before:bg-x-shade focus:before:bg-x-shade focus-within:before:bg-x-shade">
                <svg class="block w-6 h-6 pointer-events-none" fill="currentcolor" viewBox="0 -960 960 960">
                    <path
                        d="M479.825-185q-18.45 0-31.637-12.625Q435-210.25 435-231v-203H230q-18.375 0-31.688-13.56Q185-461.119 185-479.86q0-20.14 13.312-32.64Q211.625-525 230-525h205v-205q0-19.775 13.358-32.388Q461.716-775 480.158-775t32.142 12.612Q526-749.775 526-730v205h204q18.8 0 32.4 12.675 13.6 12.676 13.6 32.316 0 19.641-13.6 32.825Q748.8-434 730-434H526v203q0 20.75-13.65 33.375Q498.699-185 479.825-185Z" />
                </svg>
            </a>
            {{ $data->appends(request()->input())->links('shared.page.table') }}
        </os-data-visual>
    </div>
@endsection

@section('scripts')
    <script>
        const dataVisual = document.querySelector("os-data-visual");

        run(dataVisual, {
            Search: "{{ route('actions.users.search') }}",
            Prev: "{{ __('Prev') }}",
            Next: "{{ __('Next') }}",
        });


        dataVisual.cols = [{
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

        dataVisual.rows = {!! json_encode($data) !!}.data;
    </script>
@endsection
