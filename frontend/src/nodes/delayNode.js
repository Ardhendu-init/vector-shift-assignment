import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const DelayNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
      color="#f97316"
    >
      <label>
        Delay (ms):
        <input
          type="number"
          value={delay}
          min={0}
          onChange={(e) => setDelay(Number(e.target.value))}
        />
      </label>
    </BaseNode>
  );
};
