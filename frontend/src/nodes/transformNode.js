import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TransformNode = ({ id, data }) => {
  const [transformType, setTransformType] = useState(data?.transformType || 'uppercase');

  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
      width={220}
      color="#14b8a6"
    >
      <label>
        Operation:
        <select value={transformType} onChange={(e) => setTransformType(e.target.value)}>
          <option value="uppercase">Uppercase</option>
          <option value="lowercase">Lowercase</option>
          <option value="trim">Trim</option>
          <option value="reverse">Reverse</option>
        </select>
      </label>
    </BaseNode>
  );
};
