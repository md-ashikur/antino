 'use client';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Card, Select } from 'antd';
// FullCalendar CSS can be added globally (e.g., in globals.css) or via CDN.
// Removed direct imports because these paths may not exist in the installed package.

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

export default function CalendarPage() {
  // `view` is controlled via `period` (month/week/day). Removed separate view state.
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [period, setPeriod] = useState<'month'|'week'|'day'>('month');
  type CalEvent = { id: string; title: string; start: string };
  const [allEvents, setAllEvents] = useState<CalEvent[]>([]);
  const [displayEvents, setDisplayEvents] = useState<CalEvent[]>([]);
  const calendarRef = React.useRef<FullCalendar>(null);
  
  // API event shape from db.json
  interface ApiEvent {
    id: number | string;
    title: string;
    start: string;
    end?: string;
    allDay?: boolean;
    description?: string;
  }

  useEffect(() => {
    // try to load demo events from local json-server if available
    // Prefer `events` endpoint; otherwise derive events from `sales`.
    const base = 'http://localhost:4000';
    fetch(`${base}/events`)
      .then((res) => {
        if (!res.ok) throw new Error('no events');
        return res.json();
      })
      .then((data: ApiEvent[]) => {
        // map to CalEvent[]
        const ev: CalEvent[] = data.map((e: ApiEvent) => ({ id: String(e.id), title: e.title, start: e.start }));
        setAllEvents(ev);
      })
      .catch(() => {
        // fallback to sales -> events for the selected month
        fetch(`${base}/sales`)
          .then((r) => r.json())
          .then((salesData: { month: string; data: number[] }[]) => {
            const monthName = months[currentMonth];
            const found = salesData.find((m) => m.month === monthName);
            if (found && Array.isArray(found.data)) {
              const ev: CalEvent[] = found.data.map((val, idx) => ({
                id: `${currentMonth}-${idx}`,
                title: `$${val}k`,
                start: new Date(new Date().getFullYear(), currentMonth, Math.min(28, idx + 1)).toISOString().split('T')[0]
              }));
              setAllEvents(ev);
            } else {
              setAllEvents([]);
            }
          })
          .catch(() => setAllEvents([]));
      });
  }, [currentMonth]);

  // derive displayEvents from allEvents and currentMonth/period
  useEffect(() => {
    const year = new Date().getFullYear();

  if (period === 'month') {
      const filtered = allEvents.filter((e) => {
        try {
          const d = new Date(e.start);
          return d.getMonth() === currentMonth && d.getFullYear() === year;
        } catch {
          return false;
        }
      });
      setDisplayEvents(filtered);
      if (calendarRef.current && calendarRef.current.getApi) {
        const api = calendarRef.current.getApi();
        api.changeView('dayGridMonth');
        api.gotoDate(new Date(year, currentMonth, 1));
      }
    } else if (period === 'week') {
      const firstOfMonth = new Date(year, currentMonth, 1);
      const dayIdx = firstOfMonth.getDay();
      const weekStart = new Date(firstOfMonth);
      weekStart.setDate(firstOfMonth.getDate() - dayIdx);
      const weekEnd = new Date(weekStart);
      weekEnd.setDate(weekStart.getDate() + 7);

      const filtered = allEvents.filter((e) => {
        try {
          const d = new Date(e.start);
          return d >= weekStart && d < weekEnd;
        } catch {
          return false;
        }
      });
      setDisplayEvents(filtered);
      if (calendarRef.current && calendarRef.current.getApi) {
        const api = calendarRef.current.getApi();
        api.changeView('timeGridWeek');
        api.gotoDate(weekStart);
      }
    } else {
      // day period: show events only for the first day of the selected month
      const target = new Date(year, currentMonth, 1);
      const filtered = allEvents.filter((e) => {
        try {
          const d = new Date(e.start);
          return d.getFullYear() === target.getFullYear() && d.getMonth() === target.getMonth() && d.getDate() === target.getDate();
        } catch {
          return false;
        }
      });
      setDisplayEvents(filtered);
      if (calendarRef.current && calendarRef.current.getApi) {
        const api = calendarRef.current.getApi();
        api.changeView('timeGridDay');
        api.gotoDate(target);
      }
    }
  }, [allEvents, currentMonth, period]);

  return (
    <div style={{ padding: 16 }}>
      <Card
        title="Calendar"
        extra={
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <Select
              size="small"
              value={months[currentMonth]}
              onChange={(val) => {
                const idx = months.indexOf(val);
                setCurrentMonth(idx >= 0 ? idx : 0);
              }}
              options={months.map(m => ({ label: m, value: m }))}
              style={{ minWidth: 140 }}
            />
            <Select
              size="small"
              value={period}
              onChange={(v) => setPeriod(v as 'month'|'week'|'day')}
              options={[
                { label: 'Month', value: 'month' },
                { label: 'Week', value: 'week' },
                { label: 'Day', value: 'day' },
              ]}
              style={{ minWidth: 110 }}
            />
          </div>
        }
        style={{ borderRadius: 12 }}
      >
        <FullCalendar
          ref={calendarRef}
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView={'dayGridMonth'}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          events={displayEvents}
          height="auto"
        />
      </Card>
    </div>
  );
}
