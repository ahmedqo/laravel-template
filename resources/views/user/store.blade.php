@extends('shared.core.base')
@section('title', __('New user'))

@section('content')
    <div class="p-6 bg-x-white rounded-x-thin shadow-x-core">
        <form validate action="{{ route('actions.users.store') }}" method="POST"
            class="w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-6">
            @csrf
            <neo-textbox rules="required" errors='{"required": "{{ __('The first name field is required') }}"}'
                label="{{ __('First name') }} (*)" name="first_name" value="{{ old('first_name') }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textbox rules="required" errors='{"required": "{{ __('The last name field is required') }}"}'
                label="{{ __('Last name') }} (*)" name="last_name" value="{{ old('last_name') }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-select label="{{ __('Gender') }}" name="gender" class="lg:col-span-2">
                @foreach (Core::genderList() as $gender)
                    <neo-select-item value="{{ $gender }}" {{ $gender == old('gender') ? 'active' : '' }}>
                        {{ ucwords(__($gender)) }}
                    </neo-select-item>
                @endforeach
            </neo-select>
            <neo-datepicker {{ !Core::lang('ar') ? 'full-day=3' : '' }} label="{{ __('Birth date') }}" name="birth_date"
                format="dddd dd mmmm yyyy" value="{{ old('birth_date') }}" class="lg:col-span-2"></neo-datepicker>
            <neo-textbox rules="required|email"
                errors='{"required": "{{ __('The email field is required') }}", "email": "{{ __('The email field must be a valid email') }}"}'
                type="email" label="{{ __('Email') }} (*)" name="email" value="{{ old('email') }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textbox rules="required|phone"
                errors='{"required": "{{ __('The phone field is required') }}", "phone": "{{ __('The phone field must be a valid phone number') }}"}'
                type="tel" label="{{ __('Phone') }} (*)" name="phone" value="{{ old('phone') }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textarea label="{{ __('Address') }}" name="address" value="{{ old('address') }}"
                class="lg:col-span-4"></neo-textarea>
            <div class="w-full flex lg:col-span-4">
                <neo-button
                    class="w-full text-base lg:text-lg font-x-huge text-x-white bg-x-prime hover:bg-x-acent focus:bg-x-acent focus-within:bg-x-acent">
                    <span>{{ __('Save') }}</span>
                </neo-button>
            </div>
        </form>
    </div>
@endsection
