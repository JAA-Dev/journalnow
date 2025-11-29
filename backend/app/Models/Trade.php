<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    protected $table = 'trades';
    protected $fillable = [
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
        'result',
    ];
}
