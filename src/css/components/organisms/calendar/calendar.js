import { Div } from '@base-framework/atoms';
import { Component, Data, DateTime } from '@base-framework/base';
import { MonthCalendar } from './month/month-calendar.js';

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
            currentDate: `${current.getFullYear()}-${currentMonth + 1}-${current.getDate()}`,
            current: {
                date: current.getDate(),
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

        this.setCurrentDate(month, year);
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

        this.setCurrentDate(month, year);
    }

    /**
     * This will set the current month and year.
     *
     * @param {number} month
     * @param {number} year
     * @param {number} [date=null]
     * @returns {void}
     */
    setCurrentDate(month, year, date = null)
    {
        const data = this.data;
        data.current.month = month;
        data.current.year = year;

        if (typeof date === 'number')
        {
            data.current.date = date;
        }

        /**
         * Set the active date and month name.
         */
        data.currentDate = `${year}-${month + 1}-${data.current.date}`;
        data.monthName = this.getMonthName(month);
    }

    /**
     * This will select a date.
     *
     * @param {string} date
     * @returns {void}
     */
    selectDate(date)
    {
        const newDate = new Date(date + 'T00:00:00');
        this.setCurrentDate(newDate.getMonth(), newDate.getFullYear(), newDate.getDate());
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
                select: (date) => this.selectDate(date),
                next: () => this.goToNextMonth(),
                previous: () => this.goToPreviousMonth()
            }),
        ]);
    }
}