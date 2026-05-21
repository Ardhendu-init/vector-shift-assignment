import { useState } from 'react';
import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || '');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-body` }]}
      outputs={[{ id: `${id}-response` }]}
      width={220}
    >
      <label>
        URL:
        <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://..." />
      </label>
      <label>
        Method:
        <select value={method} onChange={(e) => setMethod(e.target.value)}>
          <option value="GET">GET</option>
          <option value="POST">POST</option>
          <option value="PUT">PUT</option>
          <option value="DELETE">DELETE</option>
        </select>
      </label>
    </BaseNode>
  );
};
