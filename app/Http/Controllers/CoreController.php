<?php

namespace App\Http\Controllers;


class CoreController extends Controller
{
    public function index_view()
    {
        $data = [680, 884];
        return view('core.index', compact('data'));
    }

    public function popular_action()
    {
        return response()->json([
            'data' => [
                [
                    'product' => 'some product name',
                    'orders' => 1000
                ]
            ]
        ]);
    }

    public function chart_action()
    {
        return response()->json([
            'data' => [
                'keys' => [
                    'Sunday',
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                ],
                'values' =>  [680, 884, 802, 869, 141, 406, 600]
            ]
        ]);
    }
}
