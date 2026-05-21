import { useStore } from './store';
import { shallow } from 'zustand/shallow';

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });
      if (!response.ok) throw new Error(`Server error: ${response.status}`);
      const data = await response.json();
      alert(
        `Pipeline Summary\n\nNodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nValid DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  return (
    <div style={{
      background: '#0f172a',
      borderTop: '1px solid #1e293b',
      padding: '14px 24px',
      display: 'flex',
      justifyContent: 'center',
      flexShrink: 0,
    }}>
      <button type="button" className="submit-btn" onClick={handleSubmit}>
        Submit Pipeline
      </button>
    </div>
  );
};
