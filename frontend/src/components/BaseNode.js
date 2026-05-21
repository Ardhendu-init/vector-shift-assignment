import { Handle, Position } from 'reactflow';

const handleStyle = {
  width: 10,
  height: 10,
  background: '#94a3b8',
  border: '2px solid #ffffff',
};

export const BaseNode = ({ title, inputs = [], outputs = [], children, width = 220, color = '#6366f1' }) => {
  return (
    <div style={{
      width,
      background: '#ffffff',
      border: '1px solid #e2e8f0',
      borderRadius: 10,
      boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    }}>
      {inputs.map((handle) => (
        <Handle
          key={handle.id}
          type="target"
          position={Position.Left}
          id={handle.id}
          style={{ ...handleStyle, ...handle.style }}
        />
      ))}

      {/* Header */}
      <div style={{
        background: color,
        padding: '7px 12px',
        color: '#ffffff',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
      }}>
        {title}
      </div>

      {/* Body */}
      <div
        className="node-body nodrag"
        style={{
          padding: '12px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
        }}
      >
        {children}
      </div>

      {outputs.map((handle) => (
        <Handle
          key={handle.id}
          type="source"
          position={Position.Right}
          id={handle.id}
          style={{ ...handleStyle, ...handle.style }}
        />
      ))}
    </div>
  );
};
