import type { Day } from '@/stores/types';

export interface ICalendarEvent {
  title: string;
  daysOfWeek: Day[]
  startTime: string;
  endTime: string;
  allDay: boolean;
  color: string;
  groupId: string
}