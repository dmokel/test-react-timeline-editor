import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import { CustomRender0, CustomRender1 } from './custom1.js';
import './index.css';
import { mockData, mockEffect } from './mock1.js';

const defaultEditorData = clone(mockData);

function CustomScale(props: { scale: number }) {
  const { scale } = props;

  const minute = parseInt(scale / 60 + '');
  const second = ((scale % 60) + '').padStart(2, '0');

  return <>{`${minute}:${second}`}</>;
}

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);

  return (
    <div className='timeline-editor-container'>
      <Timeline
        editorData={data}
        onChange={setData}
        effects={mockEffect}
        hideCursor={false}
        getScaleRender={(scale) => <CustomScale scale={scale} />}
        getActionRender={(action, row) => {
          if (action.effectId === 'effect0') {
            return <CustomRender0 action={action} row={row} />;
          } else if (action.effectId === 'effect1') {
            return <CustomRender1 action={action} row={row} />;
          }
        }}
      />
    </div>
  );
}
