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
        const current = this.getSelectedDate(today);
        return new Data({
            monthName: this.getMonthName(current.getMonth()),
            year: current.getFullYear(),
            month: current.getMonth(),
            currentDate: current.getDate(),
            currentWeek: this.calculateCurrentWeek(current.getFullYear(), current.getMonth(), current.getDate()),
        });
    }

    /**
     * Determines the current selected date.
     *
     * @param {Date} today
     * @returns {Date}
     */
    getSelectedDate(today) {
        const selectedDate = this.selectedDate ? new Date(this.selectedDate) : today;
        return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    }

    /**
     * Gets the name of the month.
     *
     * @param {number} month
     * @returns {string}
     */
    getMonthName(month) {
        const monthNames = DateTime.monthNames;
        return monthNames[month];
    }

    /**
     * Calculates the current week index for a given date.
     *
     * @param {number} year
     * @param {number} month
     * @param {number} date
     * @returns {number}
     */
    calculateCurrentWeek(year, month, date) {
        const firstDay = new Date(year, month, 1).getDay();
        const weekIndex = Math.floor((date + firstDay - 1) / 7);
        return weekIndex;
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
        data.currentWeek = 0;
        data.currentDate = 1;
        data.monthName = this.getMonthName(month);
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
        data.currentWeek = 0;
        data.currentDate = 1;
        data.monthName = this.getMonthName(month);
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
        return Div({ class: 'week-calendar-container border rounded-md bg-background p-3' }, [
            WeekHeader({
                next: () => this.goToNextMonth(),
                previous: () => this.goToPreviousMonth(),
            }),
            WeekCells({
                selectWeek: (index) => this.selectWeek(index),
            }),
        ]);
    }
}
