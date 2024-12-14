import { Div } from '@base-framework/atoms';
import { Component, Data, DateTime } from '@base-framework/base';
import { calculateCurrentWeek, getDateFromWeek } from './utils.js';
import { WeekCells } from './week-cells.js';
import { WeekHeader } from './week-header.js';

/**
 * WeekCalendar
 *
 * A navigable calendar focusing on weeks.
 *
 * @class
 */
export class WeekCalendar extends Component {
    /**
     * Initializes the calendar data.
     *
     * @returns {Data}
     */
    setData()
    {
        const today = new Date();
        const currentWeek = this.selectedWeek || calculateCurrentWeek(today);
        const currentDate = getDateFromWeek(currentWeek, today.getFullYear());

        return new Data({
            monthName: this.getMonthName(currentDate.getMonth()),
            year: currentDate.getFullYear(),
            month: currentDate.getMonth(),
            currentDate: currentDate.getDate(),
            currentWeek,
        });
    }

    /**
     * Determines the current selected date.
     *
     * @param {Date} today
     * @returns {Date}
     */
    getSelectedDate(today)
    {
        const selectedDate = this.selectedDate ? new Date(this.selectedDate) : today;
        return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    }

    /**
     * Gets the name of the month.
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
     * Updates the calendar to show the previous month.
     *
     * @returns {void}
     */
    goToPreviousMonth()
    {
        const data = this.data;
        let { year, month } = data;

        if (month === 0)
        {
            month = 11;
            year--;
        }
        else
        {
            month--;
        }

        this.setDate(month, year);
    }

    /**
     * Updates the calendar to show the next month.
     *
     * @returns {void}
     */
    goToNextMonth() {
        const data = this.data;
        let { year, month } = data;

        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }

        this.setDate(month, year);
    }

    /**
     * Sets the selected date.
     *
     * @param {number} month
     * @param {number} year
     * @param {number|null} [date=null]
     * @returns {void}
     */
    setDate(month, year, date)
    {
        this.data.set({
            year,
            month,
            monthName: this.getMonthName(month),
        });

        if (date)
        {
            this.data.currentDate = date;
        }
    }

    /**
     * Handles week selection.
     *
     * @param {number} weekNumber
     * @returns {void}
     */
    selectWeek(weekNumber)
    {
        this.currentWeek = weekNumber;
        const currentDate = getDateFromWeek(weekNumber, today.getFullYear());
        this.setDate(currentDate.getMonth(), currentDate.getFullYear(), currentDate.getDate());

        if (typeof this.selectedCallBack === 'function')
        {
            this.selectedCallBack(weekNumber);
        }
    }

    /**
     * Renders the WeekCalendar component.
     *
     * @returns {object}
     */
    render() {
        return Div({ class: 'week-calendar-container border rounded-md bg-background p-3' }, [
            WeekHeader({
                next: () => this.goToNextMonth(),
                previous: () => this.goToPreviousMonth(),
            }),
            WeekCells({
                selectWeek: (weekNumber) => this.selectWeek(weekNumber),
            }),
        ]);
    }
}
