import { TimelineEffect, TimelineRow } from '@xzdarcy/react-timeline-editor';

export const mockEffect: Record<string, TimelineEffect> = {
  effect0: {
    id: 'effect0',
    name: '效果0',
  },
  effect1: {
    id: 'effect1',
    name: '效果1',
  },
};

export const mockData: TimelineRow[] = [
  {
    id: '0',
    actions: [
      {
        id: 'action00',
        start: 0,
        end: 30,
        effectId: 'effect0',
      },
    ],
  },
  {
    id: '1',
    actions: [
      {
        id: 'action10',
        start: 5,
        end: 20,
        effectId: 'effect1',
      },
    ],
  },
  {
    id: '2',
    actions: [
      {
        id: 'action20',
        start: 30,
        end: 40,
        effectId: 'effect0',
      },
    ],
  },
  {
    id: '3',
    actions: [
      {
        id: 'action30',
        start: 40,
        end: 70,
        effectId: 'effect1',
      },
      {
        id: 'action31',
        start: 100,
        end: 120,
        effectId: 'effect1',
      },
    ],
  },
];
