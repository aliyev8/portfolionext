'use client';

import Link from "next/link";
import { DatePicker } from "perfect-days";
import './styles.css';
import { useEffect, useState } from "react";
import CustomOption from "@/components/option";
import dayjs from 'dayjs'
import Image from "next/image";


export default function PerfectDays() {
    const [props, setProps] = useState([
        {
            title: 'locale',
            options: ['en-US', 'ru-RU', 'tr-TR'],
            selected: 'en-US'
        }, {
            title: 'isMulti',
            options: ['true', 'false'],
            selected: 'true'
        }
    ]);
    const [selectedDates, setSelectedDates] = useState({ startDate: null, endDate: null });
    const [dates, setDates] = useState({
        startDate: '',
        endDate: ''
    });
    const [reset, setReset] = useState(false);
    const [open, setOpen] = useState(false);
    const [viewDate, setViewDate] = useState('');




    const onDateSelect = (selectedDates) => {
        const formattedDates = {
            startDate: selectedDates.startDate
                ? dayjs(selectedDates.startDate).format('YYYY-MM-DD')
                : '',
            endDate: selectedDates.endDate
                ? dayjs(selectedDates.endDate).format('YYYY-MM-DD')
                : ''
        };

        setDates(formattedDates);
        setReset(false);
    };

    const handleReset = () => {
        setDates({ startDate: '', endDate: '' });
        setReset(true);
    };

    useEffect(() => {
        if (dates.startDate && dates.endDate) {
            setViewDate(`${dates.startDate} to ${dates.endDate}`);
        } else if (dates.startDate) {
            setViewDate(dates.startDate);
        } else {
            setViewDate('');
        }
    }, [dates]);

    return (
        <div className='bg-blueTheme-background'>
            <div className='container-lg h-screen max-sm:px-4 overflow-hidden flex flex-col gap-12 max-sm:gap-2'>
                <div className='p-12 max-sm:p-8 flex items-center justify-between'>
                    <Link href='/packages' className='hover:scale-105 transition'>
                        <img src="/images/playground/builder/whiteArrow.svg" alt="" />
                    </Link>

                    <Link href='https://www.npmjs.com/package/perfect-days' target='_blank'>
                        <h1 className='text-center m-auto text-white'>perfect-days</h1>
                    </Link>

                    <div />
                </div>

                <div className='calendar_container p-12 flex flex-col gap-12 items-center'>
                    <div
                        onClick={() => setOpen(!open)}
                        className='calendar_preview'
                    >
                        <input
                            value={viewDate}
                            placeholder='Select a date'
                            readOnly
                        />
                        <button disabled={!viewDate} onClick={handleReset}>Reset</button>
                    </div>

                    <div className='flex gap-12'>
                        <DatePicker
                            open={open}
                            onDateSelect={onDateSelect}
                            locale={props[0].selected}
                            isMulti={JSON.parse(props[1].selected)}
                            dates={dates}
                            reset={reset}
                            nextMonth={<button
                                className='border border-white rounded-md p-1 disabled:bg-gray-400'
                                disabled
                            >
                                <Image
                                    width={16}
                                    height={16}
                                    src='/images/date-picker/arrow.svg'
                                />
                            </button>}
                            prevMonth={<button
                                className='rotate-180 border border-white rounded-md p-1 disabled:bg-gray-400'
                                disabled>
                                <Image
                                    width={16}
                                    height={16}
                                    src='/images/date-picker/arrow.svg'
                                />
                            </button>}
                        />
                        {/*<div className='flex gap-4 flex-col'>*/}
                        {/*    {*/}
                        {/*        props?.map((item, key) => (*/}
                        {/*            <div key={key} className='flex gap-4 items-center'>*/}
                        {/*                <div>{item.title}:</div>*/}

                        {/*                <CustomOption*/}
                        {/*                    setReset={setReset}*/}
                        {/*                    setSelectedDates={setSelectedDates}*/}
                        {/*                    setProps={setProps}*/}
                        {/*                    index={key}*/}
                        {/*                    props={props}*/}
                        {/*                    option={item}*/}
                        {/*                />*/}

                        {/*            </div>*/}
                        {/*        ))*/}
                        {/*    }*/}
                        {/*</div>*/}
                    </div>

                </div>
            </div>
        </div>
    );
}
