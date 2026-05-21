import { Handle, Position } from 'reactflow';

// inputs: [{ id, style? }]
// outputs: [{ id, style? }]
export const BaseNode = ({ title, inputs = [], outputs = [], children, width = 200, minHeight = 80 }) => {
  return (
    <div style={{ width, minHeight, border: '1px solid black', position: 'relative', boxSizing: 'border-box' }}>
      {inputs.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={handle.style}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      <div>
        {children}
      </div>
      {outputs.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};
