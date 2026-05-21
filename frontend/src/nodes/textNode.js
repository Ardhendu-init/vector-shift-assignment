import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <BaseNode
      title="Text"
      outputs={[{ id: `${id}-output` }]}
    >
      <label>
        Text:
        <input type="text" value={currText} onChange={(e) => setCurrText(e.target.value)} />
      </label>
    </BaseNode>
  );
};
