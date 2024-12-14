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
        const currentWeek = this.selectedWeek || this.calculateCurrentWeek(today);
        const currentDate = this.getDateFromWeek(currentWeek, today.getFullYear());

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
     * Calculates the ISO week number for a given date.
     *
     * @param {Date} date
     * @returns {number}
     */
    calculateCurrentWeek(date) {
        const target = new Date(date.valueOf());
        const dayNr = (date.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        const firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() !== 4) {
            target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
        }
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    }

    /**
     * Calculates the first date of the given ISO week number.
     *
     * @param {number} week
     * @param {number} year
     * @returns {Date}
     */
    getDateFromWeek(week, year) {
        const simple = new Date(year, 0, 1 + (week - 1) * 7);
        const dayOfWeek = simple.getDay();
        const ISOweekStart = simple;
        if (dayOfWeek <= 4) {
            ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
        } else {
            ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
        }
        return ISOweekStart;
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
        data.monthName = this.getMonthName(month);
    }

    /**
     * Handles week selection.
     *
     * @param {number} weekNumber
     */
    selectWeek(weekNumber) {
        this.data.currentWeek = weekNumber;

        if (typeof this.selectedCallBack === 'function') {
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
