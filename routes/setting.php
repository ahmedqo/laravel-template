<?php


use App\Http\Controllers\SettingController;
use Illuminate\Support\Facades\Route;

Route::group(['middleware' => ['auth']], function () {
    Route::get('/settings/patch', [SettingController::class, 'patch_view'])->name('views.settings.patch');
    Route::patch('/settings/patch', [SettingController::class, 'patch_action'])->name('actions.settings.patch');
});
