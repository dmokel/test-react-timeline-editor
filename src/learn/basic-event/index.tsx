import { Timeline, TimelineAction } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useRef, useState } from 'react';
import { mockData, mockEffect } from './mock.js';

const defaultEditor = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditor);
  const idRef = useRef(0);

  return (
    <div className='timeline-editor-container'>
      <Timeline
        editorData={data}
        onChange={setData}
        effects={mockEffect}
        hideCursor={false}
        onDoubleClickRow={(e, { row, time }) => {
          setData((pre) => {
            const rowIdx = pre.findIndex((rowItem) => rowItem.id === row.id);
            const newAction: TimelineAction = {
              id: `action${idRef.current++}`,
              start: time,
              end: time + 0.5,
              effectId: 'effect0',
            };
            pre[rowIdx] = { ...row, actions: row.actions.concat(newAction) };
            return [...pre];
          });
        }}
      />
    </div>
  );
}
