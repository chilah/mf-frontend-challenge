'use client';

import { Button, DaysBox, HoursBox, Input, TaskBox } from '@/components/common';
import style from './page.module.css';

export default function Home() {
  return (
    <div className="page-container">
      <div className={style.group_page_container}>
        <p>Challenge</p>

        <div className={style.group_box_container}>
          <TaskBox />
          <HoursBox />
          <DaysBox />
        </div>

        <div className={style.group_form_container}>
          <Input label="Task title" type="text" />
          <Input label="Time Required(in Hrs)" type="text" />
          <Button
            label="Add"
            onClick={() => {
              console.log('hi');
            }}
          />
        </div>
      </div>
    </div>
  );
}
