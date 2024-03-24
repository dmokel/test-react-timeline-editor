import { Timeline, TimelineState } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useRef, useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

const defaultEditorData = clone(mockData);

export default function TimelineEditor() {
  const [data, setData] = useState(defaultEditorData);
  const domRef = useRef<HTMLDivElement>(null);
  const timelineState = useRef<TimelineState>(null);

  return (
    <div className='timeline-editor-container flex bg-[#191b1d]'>
      <div
        className='w-[150px] mt-[42px] h-[558px]  flex-auto py-0 px-[10px] overflow-y-scroll'
        ref={domRef}
        onScroll={(e) => {
          const element = e.target as HTMLDivElement;
          timelineState.current!.setScrollTop(element.scrollTop);
        }}
      >
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className='h-[32px] p-[2px] w-full flex justify-center items-center'
            >
              <div className='text-white h-[28px] w-full pl-[10px] bg-[#333] rounded-[4px] flex items-center'>{`row: ${item.id}`}</div>
            </div>
          );
        })}
      </div>
      <Timeline
        ref={timelineState}
        editorData={data}
        onChange={setData}
        effects={mockEffect}
        onScroll={({ scrollTop }) => {
          domRef.current!.scrollTop = scrollTop;
        }}
      />
    </div>
  );
}
