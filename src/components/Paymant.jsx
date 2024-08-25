import React from 'react';

export default function Payment() {
    const paymentList = [
        "Deposit to Account",
        "Credit Card/Debit Card",
        "Wallets (PayTM/PhonePe/Amazon etc.)",
        "Net Banking",
        "UPI",
    ];

    return (
        <div className="my-6">
            <div className="bg-white md:p-5 p-3 rounded-lg">
                <h5 className="px-4 text-base font-semibold">Payment Mode</h5>
                <ul className='list-style mt-4 grid md:grid-cols-2 grid-cols-1 gap-3 max-w-2xl'>
                    {paymentList.map((item, index) => (
                        <li key={index}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

