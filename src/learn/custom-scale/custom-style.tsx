import { Timeline } from '@xzdarcy/react-timeline-editor';
import { clone } from 'ramda';
import React, { useState } from 'react';
import './index.css';
import { mockData, mockEffect } from './mock.js';

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
        scale={10}
        scaleSplitCount={10}
        getScaleRender={(scale) => <CustomScale scale={scale} />}
      />
    </div>
  );
}
