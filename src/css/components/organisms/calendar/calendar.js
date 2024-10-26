import { Div, Span } from '@base-framework/atoms';
import { Component, Data, DateTime } from '@base-framework/base';
import { DayCell } from './day-cell.js';
import { DayHeader } from './day-header.js';
import { NavigationButton } from './navigation-button.js';

export class Calendar extends Component
{
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

    getDayHeaders()
    {
        const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
        return daysOfWeek.map(DayHeader);
    }

    getCalendarCells()
    {
        const data = this.data;
        const year = data.current.year;
        const month = data.current.month;

        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const prevMonthDays = new Date(year, month, 0).getDate();

        const cells = [];

        // Previous month's last days
        for (let i = firstDay - 1; i >= 0; i--)
        {
            cells.push(
                DayCell({
                    day: prevMonthDays - i,
                    isOutsideMonth: true,
                })
            );
        }

        const today = data.today;
        // Current month's days
        for (let day = 1; day <= daysInMonth; day++)
        {
            const isToday =
            day === today.date &&
            month === today.month &&
            year === today.year;

            cells.push(
                DayCell({
                    day,
                    isToday,
                    isOutsideMonth: false,
                })
            );
        }

        // Next month's first days to fill the last week
        const totalCells = cells.length;
        const nextMonthDays = (7 - (totalCells % 7)) % 7;
        for (let i = 1; i <= nextMonthDays; i++)
        {
            cells.push(
                DayCell({
                    day: i,
                    isOutsideMonth: true,
                })
            );
        }

        return cells;
    }

    renderCalendar()
    {
        // Month-year display
        const monthYearDisplay = Div({ class: 'text-sm font-medium text-center relative items-center' }, [
            Span('[[monthName]] [[current.year]]'),
            NavigationButton({
                label: 'Previous',
                click: () => this.goToPreviousMonth()
            }),
            NavigationButton({
                label: 'Next',
                click: () => this.goToNextMonth()
            })
        ]);

        // Calendar grid
        return Div({ class: 'rdp w-full space-y-1' }, [
            monthYearDisplay,
            Div({ class: 'grid grid-cols-7' }, [...this.getDayHeaders()]),
            Div({ class: 'grid grid-cols-7' }, [...this.getCalendarCells()]),
        ]);
    }

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

    render()
    {
        return Div({ class: 'calendar-container p-3 rounded-md border' }, [
            this.renderCalendar(),
        ]);
    }
}
