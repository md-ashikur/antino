 'use client';

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Card, Select } from 'antd';
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';

const months = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

export default function page() {
  const [view, setView] = useState('dayGridMonth');
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // try to load demo events from local json-server if available
    fetch(`http://localhost:4000/sales`)
      .then(res => res.json())
      .then(data => {
        const monthName = months[currentMonth];
        const found = data.find((m) => m.month === monthName);
        if (found && found.data) {
          const ev = found.data.map((val, idx) => ({
            id: `${currentMonth}-${idx}`,
            title: `$${val}k`,
            start: new Date(new Date().getFullYear(), currentMonth, Math.min(28, idx + 1)).toISOString().split('T')[0]
          }));
          setEvents(ev);
        } else {
          setEvents([]);
        }
      })
      .catch(() => {
        // fallback: empty events
        setEvents([]);
      });
  }, [currentMonth]);

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
              value={view}
              onChange={(v) => setView(v)}
              options={[
                { label: 'Month', value: 'dayGridMonth' },
                { label: 'Week', value: 'timeGridWeek' },
                { label: 'Day', value: 'timeGridDay' },
              ]}
              style={{ minWidth: 110 }}
            />
          </div>
        }
        style={{ borderRadius: 12 }}
      >
        <FullCalendar
          plugins={[ dayGridPlugin, timeGridPlugin, interactionPlugin ]}
          initialView={view}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: ''
          }}
          events={events}
          height="auto"
        />
      </Card>
    </div>
  );
}
