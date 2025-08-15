import React from "react";

interface PriceProps {
    amount: number;
    currency?: string;
}

export function PriceCard({amount, currency = "$"}: PriceProps) {
    const formatted = amount.toFixed(2); // Always 2 decimals
    const [integer, decimal] = formatted.split(".");

    return (
        <div className="flex items-start">
            <span className="text-2xl-plus font-medium text-slate-800">{currency}</span>
            <span className="text-2xl-plus font-medium text-slate-800">{integer}</span>
            <span className="text-lg font-light text-slate-800 mt-[2px] ml-[4px]">{decimal}</span>
        </div>
    );
}
