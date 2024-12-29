import { Div, On } from "@base-framework/atoms";
import { Data, DateTime } from "@base-framework/base";
import { BlankPage } from "@base-framework/ui/pages";
import { FullTemplate } from "@base-framework/ui/templates";
import { createDynamicEvents } from "./events.js";
import { MonthCalendar } from "./month/month-calendar.js";
import { pad } from "./utils.js";

/**
 * CalendarPage
 *
 * The main page layout combining sidebar and calendar content sections.
 *
 * @returns {object}
 */
export const CalendarPage = () => (
    new BlankPage({
        /**
         * This will get the selected data.
         *
         * @param {object} today
         * @returns {Date}
         */
        getSelectedDate(today)
        {
            const selectedDate = this.selectedDate? new Date(addTime(this.selectedDate)) : today;
            return new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        },

        /**
         * This will set up the data for the calendar.
         *
         * @returns {Data}
         */
        setData()
        {
            const today = new Date();
            const current = this.getSelectedDate(today);
            const currentMonth = current.getMonth();
            const currentYear = current.getFullYear();
            const events = createDynamicEvents(currentMonth, currentYear);

            return new Data({
                events,
                monthName: this.getMonthName(currentMonth),
                currentDate: `${currentYear}-${currentMonth + 1}-${current.getDate()}`,
                current: {
                    date: current.getDate(),
                    year: currentYear,
                    month: currentMonth
                },
                today: {
                    date: today.getDate(),
                    month: today.getMonth(),
                    year: today.getFullYear()
                }
            });
        },

        /**
         * This will get the name of the month.
         *
         * @param {number} month
         * @returns {string}
         */
        getMonthName(month)
        {
            return DateTime.getMonthName(month);
        },

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
            this.data.events = createDynamicEvents(month, year);
        },

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
            this.data.events = createDynamicEvents(month, year);
        },

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
                data.current.date = pad(date);
            }

            /**
             * Set the active date and month name.
             */
            data.currentDate = `${year}-${pad(month + 1)}-${data.current.date}`;
            data.monthName = this.getMonthName(month);
        },

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

            if (typeof this.selectedCallBack === 'function')
            {
                this.selectedCallBack(this.data.currentDate);
            }
        },

        /**
         * This will update the calendar.
         *
         * @returns {void}
         */
        update()
        {
            const route = this.route;
            if(route.date)
            {
                this.selectDate(route.date);
            }
        },

        /**
         * This will render the calendar page.
         *
         * @returns {object}
         */
        render()
        {
            return FullTemplate([
                Div({ class: 'px-4 flex flex-auto flex-col pt-[80px] md:pt-5 md:px-0' }, [
                    Div({ class: 'flex flex-auto flex-col w-full h-full' }, [
                        On(this.route, 'view', (view) =>
                        {
                            switch(view)
                            {
                                case 'month':
                                    return MonthCalendar({
                                        current: this.data.current,
                                        today: this.data.today,
                                        select: (date) => this.selectDate(date),
                                        next: () => this.goToNextMonth(),
                                        previous: () => this.goToPreviousMonth()
                                    });
                                default:
                                    return null;
                            }
                        })
                    ])
                ])
            ]);
        }
    })
);

export default CalendarPage;