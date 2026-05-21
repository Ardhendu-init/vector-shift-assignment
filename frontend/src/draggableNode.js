export const DraggableNode = ({ type, label, color = '#6366f1' }) => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ nodeType }));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`draggable-chip ${type}`}
      onDragStart={(event) => onDragStart(event, type)}
      draggable
      style={{ borderTop: `3px solid ${color}` }}
    >
      <span style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600 }}>{label}</span>
    </div>
  );
};
