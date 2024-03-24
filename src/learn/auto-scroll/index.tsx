import { Switch } from '@/components/ui/switch.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [autoScroll, setAutoScroll] = useState(true);

  return (
    <>
      <Switch
        className='ml-[100px]'
        checked={autoScroll}
        onCheckedChange={(e) => setAutoScroll(e)}
      />
      <div className='timeline-editor-container ml-[100px]'>
        <Timeline
          editorData={data}
          onChange={setData}
          effects={mockEffect}
          autoScroll={autoScroll}
        />
      </div>
    </>
  );
}
