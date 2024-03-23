import { Input } from '@/components/ui/input.js';
import { Label } from '@/components/ui/label.js';
import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const [scale, setScale] = useState(5);
  const [scaleSplitCount, setScaleSplitCount] = useState(10);
  const [scaleWidth, setScaleWidth] = useState(160);
  const [startLeft, setStartLeft] = useState(20);

  return (
    <div>
      <div className='mt-[60px] mb-[20px]'>
        <span>
          <Label>scale：</Label>
          <Input
            className='w-[60px] h-[30px] inline-block'
            value={scale}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, '');
              setScale(Number(value));
            }}
          />
        </span>
        <span className='ml-[20px]'>
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
          <Label>scaleWidth：</Label>
          <Input
            className='w-[60px] h-[30px] inline-block'
            value={scaleWidth}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, '');
              setScaleWidth(Number(value));
            }}
          />
        </span>
        <span className='ml-[20px]'>
          <Label>startLeft：</Label>
          <Input
            className='w-[60px] h-[30px] inline-block'
            value={startLeft}
            onChange={(e) => {
              let value = e.target.value.replace(/[^\d]/g, '');
              setStartLeft(Number(value));
            }}
          />
        </span>
      </div>
      <div className='timeline-editor-container'>
        <Timeline
          editorData={data}
          onChange={setData}
          autoScroll={true}
          effects={mockEffect}
          scale={scale}
          startLeft={startLeft}
          scaleSplitCount={scaleSplitCount}
          scaleWidth={scaleWidth}
        />
      </div>
    </div>
  );
}
