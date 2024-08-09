@extends('shared.core.base')
@section('title', __('Edit user') . ' #' . $data->id)

@section('content')
    <div class="p-6 bg-x-white rounded-x-thin shadow-x-core">
        {{-- <form validate action="{{ route('actions.users.patch', $data->id) }}" method="POST"
            class="w-full grid grid-rows-1 grid-cols-1 lg:grid-cols-4 gap-6">
            @csrf
            @method('patch')
            <neo-textbox rules="required" errors='{"required": "{{ __('The first name field is required') }}"}'
                label="{{ __('First name') }} (*)" name="first_name" value="{{ $data->first_name }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textbox rules="required" errors='{"required": "{{ __('The last name field is required') }}"}'
                label="{{ __('Last name') }} (*)" name="last_name" value="{{ $data->last_name }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-select label="{{ __('Gender') }}" name="gender" class="lg:col-span-2">
                @foreach (Core::genderList() as $gender)
                    <neo-select-item value="{{ $gender }}" {{ $gender == $data->gender ? 'active' : '' }}>
                        {{ ucwords(__($gender)) }}
                    </neo-select-item>
                @endforeach
            </neo-select>
            <neo-datepicker {{ !Core::lang('ar') ? 'full-day=3' : '' }} label="{{ __('Birth date') }}" name="birth_date"
                format="dddd dd mmmm yyyy" value="{{ $data->birth_date }}" class="lg:col-span-2"></neo-datepicker>
            <neo-textbox rules="required|email"
                errors='{"required": "{{ __('The email field is required') }}", "email": "{{ __('The email field must be a valid email') }}"}'
                type="email" label="{{ __('Email') }} (*)" name="email" value="{{ $data->email }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textbox rules="required|phone"
                errors='{"required": "{{ __('The phone field is required') }}", "phone": "{{ __('The phone field must be a valid phone number') }}"}'
                type="tel" label="{{ __('Phone') }} (*)" name="phone" value="{{ $data->phone }}"
                class="lg:col-span-2"></neo-textbox>
            <neo-textarea label="{{ __('Address') }}" name="address" value="{{ $data->address }}"
                class="lg:col-span-4"></neo-textarea>
            <div class="w-full flex lg:col-span-4">
                <neo-button
                    class="w-full text-base lg:text-lg font-x-huge text-x-white bg-x-prime hover:bg-x-acent focus:bg-x-acent focus-within:bg-x-acent">
                    <span>{{ __('Save') }}</span>
                </neo-button>
            </div>
        </form> --}}
        <form validate action="{{ route('actions.users.patch', $data->id) }}" method="POST" class="w-full">
            @csrf
            @method('patch')
            <neo-tab-wrapper outlet="outlet-1" class="w-full flex flex-col gap-6 lg:col-span-12">
                <div class="flex flex-wrap items-center justify-between gap-6 relative isolate">
                    <div class="absolute h-1 w-full bg-x-light left-0 right-0 top-1/2 -translate-y-1/2 z-[-1]">
                        <div id="track" class="absolute h-full top-0 bottom-0 w-0 bg-x-prime"></div>
                    </div>
                    @for ($i = 1; $i <= 2; $i++)
                        <neo-tab-trigger tabindex="0" slot="triggers" for="outlet-{{ $i }}"
                            class="flex w-8 h-8 aspect-square items-center justify-center text-lg font-x-thin text-x-black bg-x-white rounded-x-thin outline-none hover:bg-x-acent hover:text-x-white focus:bg-x-acent focus:text-x-white">
                            <span>{{ $i }}</span>
                            <svg class="hidden w-6 h-6 pointer-events-none text-x-prime" fill="currentcolor"
                                viewBox="0 -960 960 960">
                                <path
                                    d="M261-167-5-433l95-95 172 171 95 95-96 95Zm240-32L232-467l97-95 172 171 369-369 96 96-465 465Zm-7-280-95-95 186-186 95 95-186 186Z" />
                            </svg>
                        </neo-tab-trigger>
                    @endfor
                </div>
                <neo-tab-outlet name="outlet-1" class="grid grid-cols-1 grid-rows-1 gap-6">
                    <neo-textbox rules="required" errors='{"required": "{{ __('The first name field is required') }}"}'
                        label="{{ __('First name') }} (*)" name="first_name"
                        value="{{ ucwords($data->first_name) }}"></neo-textbox>
                    <neo-textbox rules="required" errors='{"required": "{{ __('The last name field is required') }}"}'
                        label="{{ __('Last name') }} (*)" name="last_name"
                        value="{{ ucwords($data->last_name) }}"></neo-textbox>
                    <neo-textbox rules="required|email"
                        errors='{"required": "{{ __('The email field is required') }}", "email": "{{ __('The email field must be a valid email') }}"}'
                        type="email" label="{{ __('Email') }} (*)" name="email"
                        value="{{ $data->email }}"></neo-textbox>
                    <neo-textbox rules="required|phone"
                        errors='{"required": "{{ __('The phone field is required') }}", "phone": "{{ __('The phone field must be a valid phone number') }}"}'
                        type="tel" label="{{ __('Phone') }} (*)" name="phone"
                        value="{{ $data->phone }}"></neo-textbox>
                </neo-tab-outlet>
                <neo-tab-outlet name="outlet-2" class="grid grid-cols-1 grid-rows-1 gap-6">
                    <neo-select label="{{ __('Gender') }}" name="gender">
                        @foreach (Core::genderList() as $gender)
                            <neo-select-item value="{{ $gender }}" {{ $gender == $data->gender ? 'active' : '' }}>
                                {{ ucwords(__($gender)) }}
                            </neo-select-item>
                        @endforeach
                    </neo-select>
                    <neo-datepicker {{ !Core::lang('ar') ? 'full-day=3' : '' }} label="{{ __('Birth date') }}"
                        name="birth_date" format="dddd dd mmmm yyyy" value="{{ $data->birth_date }}"></neo-datepicker>
                    <neo-textarea label="{{ __('Address') }}" name="address" value="{{ $data->address }}"
                        rows="4"></neo-textarea>
                </neo-tab-outlet>
                <div class="w-full flex flex-wrap gap-6">
                    <neo-button outline type="button" id="prev" style="display: none"
                        class="w-max me-auto outline outline-2 -outline-offset-2 outline-x-prime px-10 text-base lg:text-lg font-x-huge text-x-prime hover:outline-x-acent hover:text-x-white hover:bg-x-acent focus:outline-x-acent focus:text-x-white focus:bg-x-acent focus-within:outline-x-acent focus-within:text-x-white focus-within:bg-x-acent">
                        <span>{{ __('Prev') }}</span>
                    </neo-button>
                    <neo-button id="save" style="display: none"
                        class="w-full lg:w-max lg:px-10 ms-auto text-base lg:text-lg font-x-huge text-x-white bg-x-prime hover:bg-x-acent focus:bg-x-acent focus-within:bg-x-acent">
                        <span>{{ __('Save') }}</span>
                    </neo-button>
                    <neo-button outline type="button" id="next"
                        class="w-max ms-auto outline outline-2 -outline-offset-2 outline-x-prime px-10 text-base lg:text-lg font-x-huge text-x-prime hover:outline-x-acent hover:text-x-white hover:bg-x-acent focus:outline-x-acent focus:text-x-white focus:bg-x-acent focus-within:outline-x-acent focus-within:text-x-white focus-within:bg-x-acent">
                        <span>{{ __('Next') }}</span>
                    </neo-button>
                </div>
            </neo-tab-wrapper>
        </form>
    </div>
@endsection
