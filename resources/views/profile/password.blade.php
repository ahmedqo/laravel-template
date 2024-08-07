@extends('shared.core.base')
@section('title', __('Update password'))

@section('content')
    <div class="p-6 bg-x-white rounded-x-thin shadow-x-core">
        <form validate action="{{ route('actions.password.patch') }}" method="POST"
            class="w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-6">
            @csrf
            @method('patch')
            <neo-password rules="required" errors='{"required": "{{ __('The old password field is required') }}"}'
                label="{{ __('Old password') }} (*)" name="old_password" value="{{ old('old_password') }}"
                class="lg:col-span-4"></neo-password>
            <neo-password rules="required" errors='{"required": "{{ __('The new password field is required') }}"}'
                label="{{ __('New password') }} (*)" name="new_password" value="{{ old('new_password') }}"
                class="lg:col-span-2"></neo-password>
            <neo-password rules="required|match:new_password" rules="required"
                errors='{"required": "{{ __('The confirm password field is required') }}", "match": "{{ __('The confirm password field must match the new password field') }}"}'
                label="{{ __('Confirm password') }} (*)" name="confirm_password" value="{{ old('confirm_password') }}"
                class="lg:col-span-2"></neo-password>
            <div class="w-full flex lg:col-span-4">
                <neo-button
                    class="w-full text-base lg:text-lg font-x-huge text-x-white bg-x-prime hover:bg-x-acent focus:bg-x-acent focus-within:bg-x-acent">
                    <span>{{ __('Save') }}</span>
                </neo-button>
            </div>
        </form>
    </div>
@endsection
