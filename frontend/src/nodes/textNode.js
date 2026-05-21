import { useState, useEffect, useRef } from 'react';
import { BaseNode } from '../components/BaseNode';

function parseVariables(text) {
  const re = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
  const seen = new Set();
  let match;
  while ((match = re.exec(text)) !== null) {
    seen.add(match[1]);
  }
  return [...seen];
}

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const [nodeWidth, setNodeWidth] = useState(200);

  const variables = parseVariables(currText);

  useEffect(() => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${el.scrollHeight}px`;

    const maxLineLen = Math.max(0, ...currText.split('\n').map(l => l.length));
    setNodeWidth(Math.max(200, Math.min(600, maxLineLen * 8 + 60)));
  }, [currText]);

  const inputs = variables.map((varName, i) => ({
    id: `${id}-${varName}`,
    style: { top: `${((i + 1) / (variables.length + 1)) * 100}%` },
  }));

  return (
    <BaseNode
      title="Text"
      inputs={inputs}
      outputs={[{ id: `${id}-output` }]}
      width={nodeWidth}
      color="#f59e0b"
    >
      <label>
        Text:
        <textarea
          ref={textareaRef}
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
          style={{
            width: '100%',
            resize: 'none',
            overflow: 'hidden',
            boxSizing: 'border-box',
            display: 'block',
          }}
        />
      </label>
    </BaseNode>
  );
};
