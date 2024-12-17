import { Div, Span } from '@base-framework/atoms';
import { Component, Data, Jot } from '@base-framework/base';

/**
 * This will store the sizes for the avatar.
 *
 * @type {object} sizeMap
 */
const sizeMap = {
    xs: 'h-1 w-1',
    sm: 'h-2 w-2',
    md: 'h-4 w-4',
    lg: 'h-8 w-8',
    xl: 'h-12 w-12',
    '2xl': 'h-16 w-16',
    '3xl': 'h-24 w-24',
    default: 'h-4 w-4'
};

/**
 * This will get the size of the avatar.
 *
 * @param {string} size
 * @returns {string}
 */
const getSize = (size) => sizeMap[size] || sizeMap.default;

/**
 * This will create a dot for the dots indicator.
 *
 * @param {number} index
 * @returns {object}
 */
const Dot = ({ index, size }) => (
    Div({ class: `${size} rounded-full bg-muted cursor-pointer` }, [
        Span({
            class: 'block w-full h-full rounded-full transition-colors',
            onSet: ['activeIndex', {
                'bg-primary': index,
                'shadow-md': index
            }],
            click: (e, {data, onClick}) =>
            {
                data.activeIndex = index;

                if (onClick)
                {
                    onClick(index);
                }
            }
        })
    ])
);

/**
 * This will create an array of dots for the dots indicator.
 *
 * @param {number} count
 * @param {string} size
 * @returns {array<object>}
 */
const getDots = (count, size) => Array.from({ length: count }, (_, index) => Dot({
    index,
    size
}));

/**
 * DotsIndicator
 *
 * Renders a row of circular dots, one of which is "active."
 *
 * @class
 * @extends Component
 * @example
 *   new DotsIndicator({ count: 4, activeIndex: 0 })
 */
export const DotsIndicator = Jot(
{
    /**
     * Defines component data (props).
     *
     * @returns {Data}
     */
    setData()
    {
        return new Data({
            count: this.count || 4,         // total dots
            activeIndex: this.activeIndex || 0
        });
    },

    /**
     * Renders the dots.
     *
     * @returns {object}
     */
    render()
    {
        const gap = this.gap || "gap-2";
        const size = getSize(this.size || 'sm');
        const dots = getDots(this.data.count, size);
        return Div({ class: 'flex justify-center items-center py-2' },
        [
            Div({ class: `flex ${gap}` }, dots)
        ]);
    }
});

export default DotsIndicator;