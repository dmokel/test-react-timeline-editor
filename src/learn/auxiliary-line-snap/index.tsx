import { Switch } from '@/components/ui/switch.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [dragLine, setDragLine] = useState(true);

  return (
    <>
      <div className='mt-[40px]'>
        <Switch checked={dragLine} onCheckedChange={(e) => setDragLine(e)} />
      </div>
      <div className='timeline-editor-container'>
        <Timeline
          editorData={data}
          onChange={setData}
          effects={mockEffect}
          scale={5}
          dragLine={dragLine}
        />
      </div>
    </>
  );
}
