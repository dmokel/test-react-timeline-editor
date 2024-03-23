import { TimelineAction, TimelineRow } from '@xzdarcy/react-timeline-editor';
import React, { FC } from 'react';

export const CustomRender0: FC<{
  action: TimelineAction;
  row: TimelineRow;
}> = ({ action, row }) => {
  return (
    <div className='w-full h-full text-[10px] text-[#fff] flex rounded-[4px] flex-row items-center'>
      <div className='ml-[4px] flex-auto text-center flex truncate flex-col justify-center'>
        {`播放音频: ${(action.end - action.start).toFixed(2)}s ${
          action.movable === false ? '（不可移动）' : ''
        } ${action.flexible === false ? '（不可缩放）' : ''}`}
      </div>
    </div>
  );
};

export const CustomRender1: FC<{
  action: TimelineAction;
  row: TimelineRow;
}> = ({ action, row }) => {
  return (
    <div className='w-[25px] h-[28px] absolute left-1/2 translate-x-[-50%]'>
      <img src='/assets/flag.png' className='w-full h-full'></img>
    </div>
  );
};
