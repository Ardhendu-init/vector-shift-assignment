import { BaseNode } from '../components/BaseNode';

export const MergeNode = ({ id, data }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[
        { id: `${id}-input-a`, style: { top: '33%' } },
        { id: `${id}-input-b`, style: { top: '67%' } },
      ]}
      outputs={[{ id: `${id}-merged` }]}
    >
      <span>Merges two inputs into one.</span>
    </BaseNode>
  );
};
