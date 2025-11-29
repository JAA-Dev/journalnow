<?php

namespace App\Http\Controllers;

use App\Models\Trade;
use Illuminate\Http\Request;

class TradeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trade = Trade::select([
            'id',
            'symbol',
            'tradeType',
            'position',
            'entry',
            'riskReward',
            'reward',
            'reasonEntry',
            'learning',
            'stopLoss',
            'takeProfit',
            'result'
        ])->get();
        return response()->json($trade);

        // return response()->json(['message' => 'List of trade will be displayed here']);

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $trade = Trade::create([
            'symbol' => $request->symbol,
            'tradeType' => $request->tradeType,
            'position' => $request->position,
            'entry' => $request->entry,
            'riskReward' => $request->riskReward,
            'reward' => $request->reward,
            'reasonEntry' => $request->reasonEntry,
            'learning' => $request->learning,
            'stopLoss' => $request->stopLoss,
            'takeProfit' => $request->takeProfit,
            'result' => $request->result,
        ]);


        return response()->json([
            'id' => $trade->id,
            'symbol' => $trade->symbol,
            'tradeType' => $trade->tradeType,
            'position' => $trade->position,
            'entry' => $trade->entry,
            'riskReward' => $trade->riskReward,
            'reward' => $trade->reward,
            'reasonEntry' => $trade->reasonEntry,
            'learning' => $trade->learning,
            'stopLoss' => $trade->stopLoss,
            'takeProfit' => $trade->takeProfit,
            'result' => $trade->result,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $trade = Trade::find($id);

        return response()->json([
            'id' => $trade->id,
            'symbol' => $trade->symbol,
            'tradeType' => $trade->tradeType,
            'position' => $trade->position,
            'entry' => $trade->entry,
            'riskReward' => $trade->riskReward,
            'reward' => $trade->reward,
            'reasonEntry' => $trade->reasonEntry,
            'learning' => $trade->learning,
            'stopLoss' => $trade->stopLoss,
            'takeProfit' => $trade->takeProfit,
            'result' => $trade->result,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $trade = Trade::find($id);
        $trade->update([
            'symbol' => $request->symbol,
            'tradeType' => $request->tradeType,
            'position' => $request->position,
            'entry' => $request->entry,
            'riskReward' => $request->riskReward,
            'reward' => $request->reward,
            'reasonEntry' => $request->reasonEntry,
            'learning' => $request->learning,
            'stopLoss' => $request->stopLoss,
            'takeProfit' => $request->takeProfit,
            'result' => $request->result,
        ]);

        return response()->json([
            'id' => $trade->id,
            'symbol' => $trade->symbol,
            'tradeType' => $trade->tradeType,
            'position' => $trade->position,
            'entry' => $trade->entry,
            'riskReward' => $trade->riskReward,
            'reward' => $trade->reward,
            'reasonEntry' => $trade->reasonEntry,
            'learning' => $trade->learning,
            'stopLoss' => $trade->stopLoss,
            'takeProfit' => $trade->takeProfit,
            'result' => $trade->result,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Trade::destroy($id);

        return response('Trade deleted successfully');
    }
}
