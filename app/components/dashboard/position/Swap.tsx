import React, { useState } from 'react';
import Image from 'next/image';

function Swap() {
  const [solAmount, setSolAmount] = useState(0);
  const [usdcAmount, setUsdcAmount] = useState(0);

  return (
    <div className="max-w-3xl mx-auto pt-6">
      <div className="swap-input">
        <div className="position-deposit flex pb-2">
          <div className="flex" style={{ alignItems: 'center' }}>
            <Image src="https://exponential.imgix.net/icons/assets/SOL_color.jpg?auto=format&fit=max&w=256" alt="SOL Logo" width={40} height={40} />
            <p className="font-m pl-2 pr-4">SOL</p>
          </div>
          <input
            type="number"
            id="sol"
            value={0}
            onChange={(e) => setSolAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex justify-between">
          <p>Balance: {1.73}</p>
          <div className="quickButtons">
            <button className="font-s">MAX</button>
            <button className="font-s">HALF</button>
          </div>
        </div>
      </div>
      <div className='mt-10 flex'  style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image src="/swap-up.png" alt="Swap Logo" width={40} height={40} />
      </div>
      <div className="swap-input mt-10">
        <div className="position-deposit flex pb-2">
          <div className="flex" style={{ alignItems: 'center' }}>
            <Image src="https://exponential.imgix.net/icons/assets/USDC_color.jpg?auto=format&fit=max&w=256" alt="SOL Logo" width={40} height={40} />
            <p className="font-m pl-2 pr-4">USDC</p>
          </div>
          <input
            type="number"
            id="usdc"
            value={usdcAmount}
            onChange={(e) => setUsdcAmount(parseFloat(e.target.value))}
          />
        </div>
        <div className="flex justify-between">
          <p>Balance: {79.28}</p>
          <div className="quickButtons">
            <button className="font-s">MAX</button>
            <button className="font-s">HALF</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Swap;