import { Div, H2 } from "@base-framework/atoms";
import { Data, DateTime } from "@base-framework/base";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import { BlankPage } from "@components/pages/blank-page.js";
import { FullTemplate } from "@components/pages/templates/full-template.js";
import { CalendarGrid } from "./calendar-grid.js";
import { pad } from "./utils.js";

/**
 * CalendarHeader
 *
 * This will create a calendar header with a title, month navigation, and add event button.
 *
 * @param {object} props
 * @returns {object}
 */
const CalendarHeader = (props) => (
    Div({ class: 'justify-between flex items-center mb-4' }, [
        H2({ class: 'scroll-m-20 text-3xl font-bold tracking-tight md:pl-4' }, '[[monthName]] [[current.year]]'),
        Div({ class: 'flex items-center space-x-2' }, [
            Button({ variant: 'icon', icon: Icons.chevron.single.left, click: props.previous }),
            Button({ variant: 'icon', icon: Icons.chevron.single.right, click: props.next }),
            Tooltip({ content: 'Add Event', position: 'left' }, Button({ variant: 'icon', icon: Icons.circlePlus }))
        ])
    ])
);

/**
 * This will create the month calendar.
 *
 * @param {object} props
 * @returns {object}
 */
export const MonthCalendar = (props) => (
    Div({ class: 'flex flex-auto flex-col w-full space-y-1' }, [
        CalendarHeader(props),
        CalendarGrid({
            current: props.current,
            today: props.today,
            select: props.select
        })
    ])
);

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
        },

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

        render()
        {
            return FullTemplate([
                Div({ class: 'px-4 flex flex-auto flex-col pt-[80px] md:pt-5 md:px-0' }, [
                    Div({ class: 'flex flex-auto flex-col w-full h-full' }, [
                        MonthCalendar({
                            current: this.data.current,
                            today: this.data.today,
                            select: (date) => this.selectDate(date),
                            next: () => this.goToNextMonth(),
                            previous: () => this.goToPreviousMonth()
                        })
                    ])
                ])
            ]);
        }
    })
);

export default CalendarPage;