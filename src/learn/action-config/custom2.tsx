import { TimelineAction, TimelineRow } from '@xzdarcy/react-timeline-editor';
import React, { FC } from 'react';

export const CustomRender0: FC<{
  action: TimelineAction;
  row: TimelineRow;
}> = ({ action, row }) => {
  return (
    <div className='w-full h-full text-[10px] text-[#fff] rounded-[4px] flex flex-row items-center'>
      <div className='ml-[4px] flex-auto text-center flex truncate flex-col justify-center'>{`${
        typeof action.minStart === 'number' ? 'minStart:' + action.minStart : ''
      } ${
        typeof action.maxEnd === 'number' ? 'maxEnd:' + action.maxEnd : ''
      }`}</div>
    </div>
  );
};
