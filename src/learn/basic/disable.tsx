import { Switch } from '@/components/ui/switch.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [allow, setAllow] = useState(true);

  return (
    <div>
      <div className='mt-[60px]'>
        <Switch checked={allow} onCheckedChange={(e) => setAllow(e)} />
      </div>
      <div className='timeline-editor-container'>
        <Timeline
          editorData={data}
          onChange={setData}
          effects={mockEffect}
          disableDrag={!allow}
        />
      </div>
    </div>
  );
}
