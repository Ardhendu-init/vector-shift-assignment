import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{
      background: '#0f172a',
      padding: '12px 24px',
      borderBottom: '1px solid #1e293b',
      display: 'flex',
      alignItems: 'center',
      gap: 20,
      flexShrink: 0,
    }}>
      <span style={{
        color: '#475569',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}>
        Nodes
      </span>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        <DraggableNode type="customInput"  label="Input"     color="#3b82f6" />
        <DraggableNode type="llm"          label="LLM"       color="#8b5cf6" />
        <DraggableNode type="customOutput" label="Output"    color="#10b981" />
        <DraggableNode type="text"         label="Text"      color="#f59e0b" />
        <DraggableNode type="api"          label="API"       color="#ef4444" />
        <DraggableNode type="delay"        label="Delay"     color="#f97316" />
        <DraggableNode type="transform"    label="Transform" color="#14b8a6" />
        <DraggableNode type="merge"        label="Merge"     color="#6366f1" />
        <DraggableNode type="condition"    label="Condition" color="#ec4899" />
      </div>
    </div>
  );
};
