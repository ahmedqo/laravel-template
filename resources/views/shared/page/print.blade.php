<style slot="styles" scoped>
    @import url({{ asset('css/print.min.css') }}?v={{ env('APP_VERSION') }});
</style>
<img slot="top" id="backgroun-image" src="{{ asset('img/logo.webp') }}?v={{ env('APP_VERSION') }}" />
@include('shared.page.head')
@include('shared.page.foot')
