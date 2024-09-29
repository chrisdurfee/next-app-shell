import { Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * This will set the badge styles.
 *
 * @type {object} BADGE_STYLES
 */
const BADGE_STYLES = {
    gray: {
        backgroundColor: 'bg-gray-50',
        textColor: 'text-gray-600',
        ringColor: 'ring-gray-500/10'
    },
    red: {
        backgroundColor: 'bg-red-50',
        textColor: 'text-red-700',
        ringColor: 'ring-red-600/10'
    },
    yellow: {
        backgroundColor: 'bg-yellow-50',
        textColor: 'text-yellow-800',
        ringColor: 'ring-yellow-600/20'
    },
    green: {
        backgroundColor: 'bg-green-50',
        textColor: 'text-green-700',
        ringColor: 'ring-green-600/20'
    },
    blue: {
        backgroundColor: 'bg-blue-50',
        textColor: 'text-blue-700',
        ringColor: 'ring-blue-700/10'
    },
    indigo: {
        backgroundColor: 'bg-indigo-50',
        textColor: 'text-indigo-700',
        ringColor: 'ring-indigo-700/10'
    },
    purple: {
        backgroundColor: 'bg-purple-50',
        textColor: 'text-purple-700',
        ringColor: 'ring-purple-700/10'
    },
    pink: {
        backgroundColor: 'bg-pink-50',
        textColor: 'text-pink-700',
        ringColor: 'ring-pink-700/10'
    }
};

/**
 * This will get the badge style.
 *
 * @param {string} type
 * @returns {object}
 */
const getBadgeStyle = (type) => BADGE_STYLES[type] || BADGE_STYLES.gray;

/**
 * This will get the badge classes.
 *
 * @param {string} type
 * @returns {string}
 */
const getBadgeClasses = (type) =>
{
    const { backgroundColor, textColor, ringColor } = getBadgeStyle(type);
    return `inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${backgroundColor} ${textColor} ${ringColor}`;
};

/**
 * This will create a badge.
 *
 * @param {object} props
 * @param {array} children
 * @return {object}
 */
export const Badge = Atom((props, children) =>
{
    const className = getBadgeClasses(props?.type);
    return Span({ ...props, class: className }, children);
});
