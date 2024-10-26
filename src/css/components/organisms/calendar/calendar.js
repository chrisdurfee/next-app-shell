import { Div } from '@base-framework/atoms';
import { Component, Data, DateTime } from '@base-framework/base';
import { MonthCalendar } from './month-calendar.js';

/**
 * Calendar
 *
 * This will create a calendar component.
 *
 * @class Calendar
 */
export class Calendar extends Component
{
    /**
     * This will set up the data for the calendar.
     *
     * @returns {Data}
     */
    setData()
    {
        const today = new Date();
        const current = new Date(today.getFullYear(), today.getMonth(), 1);
        const currentMonth = current.getMonth();

         return new Data({
            monthName: this.getMonthName(currentMonth),
            current: {
                year: current.getFullYear(),
                month: currentMonth
            },
            today: {
                date: today.getDate(),
                month: today.getMonth(),
                year: today.getFullYear()
            }
        });
    }

    /**
     * This will get the name of the month.
     *
     * @param {number} month
     * @returns {string}
     */
    getMonthName(month)
    {
        const monthNames = DateTime.monthNames;
        return monthNames[month];
    }

    /**
     * This will go to the previous month.
     *
     * @returns {void}
     */
    goToPreviousMonth()
    {
        const data = this.data;
        let month = data.current.month;
        let year = data.current.year;
        if (month === 0)
        {
            month = 11;
            year--;
        }
        else
        {
            month--;
        }

        data.current.month = month;
        data.current.year = year;
    }

    /**
     * This will go to the next month.
     *
     * @returns {void}
     */
    goToNextMonth()
    {
        const data = this.data;
        let month = data.current.month;
        let year = data.current.year;
        if (month === 11)
        {
            month = 0;
            year++;
        }
        else
        {
            month++;
        }

        data.current.month = month;
        data.current.year = year;
    }

    /**
     * This will render the calendar.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'calendar-container p-3 rounded-md border' }, [
            MonthCalendar({
                current: this.data.current,
                today: this.data.today,
                next: () => this.goToNextMonth(),
                previous: () => this.goToPreviousMonth()
            }),
        ]);
    }
}
