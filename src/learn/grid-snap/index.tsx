import { Input } from '@/components/ui/input.js';
import { Label } from '@/components/ui/label.js';
import { Switch } from '@/components/ui/switch.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [scaleSplitCount, setScaleSplitCount] = useState(10);
  const [gridSnap, setGridSnap] = useState(true);

  return (
    <>
      <div className='mt-[40px] mb-[20px]'>
        <span>
          <Label>scaleSplitCount：</Label>
          <Input
            className='w-[60px] h-[30px] inline-block'
            value={scaleSplitCount}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, '');
              setScaleSplitCount(Number(value));
            }}
          />
        </span>
        <span className='ml-[20px]'>
          <Label>gridSnip：</Label>
          <Switch checked={gridSnap} onCheckedChange={(e) => setGridSnap(e)} />
        </span>
      </div>
      <div className='timeline-editor-container'>
        <Timeline
          editorData={data}
          onChange={setData}
          effects={mockEffect}
          scale={5}
          scaleSplitCount={scaleSplitCount}
          gridSnap={gridSnap}
        />
      </div>
    </>
  );
}
