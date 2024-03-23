import { Switch } from '@/components/ui/switch.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [showCursor, setShowCursor] = useState(true);

  return (
    <div>
      <div className='mt-[60px]'>
        <Switch
          checked={showCursor}
          onCheckedChange={(e) => setShowCursor(e)}
        />
      </div>
      <div className='timeline-editor-container'>
        <Timeline
          editorData={data}
          onChange={setData}
          effects={mockEffect}
          hideCursor={!showCursor}
        />
        div
      </div>
    </div>
  );
}
