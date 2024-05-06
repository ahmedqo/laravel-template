<script src="{{ asset('js/neo/index.min.js') }}?v={{ env('APP_VERSION') }}"></script>
<script src="{{ asset('js/neo/plugins/index.min.js') }}?v={{ env('APP_VERSION') }}"></script>
<script src="{{ asset('js/index.min.js') }}?v={{ env('APP_VERSION') }}"></script>
@if (Session::has('message'))
    @php
        $messages = is_array(Session::get('message')) ? Session::get('message') : [Session::get('message')];
    @endphp
    <script>
        Neo.load(function() {
            @foreach ($messages as $message)
                Neo.Toaster.toast("{{ $message }}", "{{ Session::get('type') }}");
            @endforeach
        });
    </script>
@endif
