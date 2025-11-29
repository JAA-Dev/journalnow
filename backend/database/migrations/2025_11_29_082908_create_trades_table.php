<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
            $table->string('symbol');
            $table->string('tradeType');
            $table->string('position');
            $table->decimal('entry', 10, 2);
            $table->string('riskReward');
            $table->decimal('reward', 10, 2)->nullable();
            $table->text('reasonEntry')->nullable();
            $table->text('learning')->nullable();
            $table->decimal('stopLoss', 10, 2)->nullable();
            $table->decimal('takeProfit', 10, 2)->nullable();
            $table->string('result')->nullable();
            $table->timestamps();
        });
    }


    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('trades');
    }
};
