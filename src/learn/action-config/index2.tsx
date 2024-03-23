import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import { CustomRender0 } from './custom2.js';
import { mockData, mockEffect } from './mock2.js';

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
        getActionRender={(action, row) => (
          <CustomRender0 action={action} row={row} />
        )}
      />
    </div>
  );
}
