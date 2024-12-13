import { Div } from '@base-framework/atoms';
import { Component, Data, DateTime } from '@base-framework/base';
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
    setData() {
        const today = new Date();
        return new Data({
            monthName: this.getMonthName(today.getMonth()),
            year: today.getFullYear(),
            month: today.getMonth(),
            currentWeek: 0,
            currentDate: today.getDate(),
        });
    }

    /**
     * This will get the name of the month.
     *
     * @param {number} month
     * @returns {string}
     */
    getMonthName(month) {
        const monthNames = DateTime.monthNames;
        return monthNames[month];
    }

    /**
     * Updates the calendar to show the previous month.
     */
    goToPreviousMonth() {
        const data = this.data;
        let { year, month } = data;

        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }

        data.year = year;
        data.month = month;
        data.currentWeek = 0; // Reset to the first week
        data.currentDate = 1; // Reset to the first day of the month
    }

    /**
     * Updates the calendar to show the next month.
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

        data.year = year;
        data.month = month;
        data.currentWeek = 0; // Reset to the first week
        data.currentDate = 1; // Reset to the first day of the month
    }

    /**
     * Handles week selection.
     *
     * @param {number} index
     */
    selectWeek(index) {
        this.data.currentWeek = index;

        if (typeof this.selectedCallBack === 'function') {
            this.selectedCallBack(index);
        }
    }

    /**
     * Renders the WeekCalendar component.
     *
     * @returns {object}
     */
    render() {
        const { year, month, currentDate, currentWeek } = this.data;

        return Div({ class: 'week-calendar-container p-4 rounded-md border' }, [
            WeekHeader({
                next: () => this.goToNextMonth(),
                previous: () => this.goToPreviousMonth(),
            }),
            WeekCells({
                year,
                month,
                currentDate,
                currentWeek,
                selectWeek: (index) => this.selectWeek(index),
            }),
        ]);
    }
}