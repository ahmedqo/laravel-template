<?php

namespace App\Functions;

use Illuminate\Support\Str;

class Core
{
    public static function lang($lang = null)
    {
        return $lang ? app()->getLocale() == $lang : app()->getLocale();
    }

    public static function matchRoute($str)
    {
        return Str::contains(request()->path(), $str);
    }

    public static function genderList()
    {
        return ['Male', 'Female'];
    }

    public static function formatNumber($num)
    {
        $formattedNumber = number_format($num);
        if (strpos($formattedNumber, '.') === false) {
            $formattedNumber .= '.000';
        } else {
            list($integerPart, $decimalPart) = explode('.', $formattedNumber);
            switch (strlen($decimalPart)) {
                case 1:
                    $formattedNumber .= '00';
                    break;
                case 2:
                    $formattedNumber .= '0';
                    break;
            }
        }
        return $formattedNumber;
    }
}
