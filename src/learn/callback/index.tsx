import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);

  return (
    <div className='timeline-editor-container'>
      <Timeline
        editorData={data}
        onChange={setData}
        effects={mockEffect}
        hideCursor={false}
        getActionRender={(action, row) => {
          if (action.id === 'action10') {
            return (
              <div className='text-[#fff] w-full h-full flex items-center justify-center'>
                只能拖拽左侧缩放
              </div>
            );
          }
        }}
        onActionResizing={({ action, dir }) => {
          if (action.id === 'action10' && dir !== 'left') return false;
        }}
      />
    </div>
  );
}
