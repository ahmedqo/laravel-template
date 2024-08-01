@extends('shared.auth.base')
@section('title', __('Reset password'))

@section('content')
    <div style="background-image: url({{ asset('img/bg-reset.webp') }}?v={{ env('APP_VERSION') }})"
        alt="{{ env('APP_NAME') }} reset background image"
        class="block bg-center bg-cover bg-no-repeat fixed w-full h-[100dvh] inset-0 z-[-1] lg:w-1/2 lg:relative">
        <div class="absolute inset-0 w-full h-full bg-x-black bg-opacity-30 backdrop-blur-sm"></div>
    </div>
    <div class="w-full flex justify-center items-center p-4 lg:w-1/2">
        <div class="w-full lg:w-2/3 flex flex-col gap-4">
            <a href="{{ route('views.login.index') }}" class="block w-36 mx-auto" aria-label="login_page_link">
                <img src="{{ asset('img/logo.webp') }}?v={{ env('APP_VERSION') }}" alt="{{ env('APP_NAME') }} logo image"
                    class="block w-full" width="916" height="516" loading="lazy" />
            </a>
            <form require action="{{ route('actions.reset.index', $token) }}" method="POST"
                class="w-full flex flex-col gap-6 lg:gap-8 p-6 lg:p-8 bg-x-white rounded-x-thin shadow-x-core">
                @csrf
                <neo-password require label="{{ __('New password') }} (*)" name="new_password"></neo-password>
                <neo-password require label="{{ __('Confirm password') }} (*)" name="confirm_password"></neo-password>
                <neo-button
                    class="w-full text-base lg:text-lg font-x-huge text-x-white bg-x-prime hover:bg-x-acent focus:bg-x-acent focus-within:bg-x-acent">
                    <span>{{ __('Reset') }}</span>
                </neo-button>
            </form>
        </div>
    </div>
@endsection
