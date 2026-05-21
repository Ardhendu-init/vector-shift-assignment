import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || '');

  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-true`, style: { top: '33%' } },
        { id: `${id}-false`, style: { top: '67%' } },
      ]}
      width={220}
      color="#ec4899"
    >
      <label>
        If:
        <input
          type="text"
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="e.g. value > 10"
        />
      </label>
    </BaseNode>
  );
};
