import { Div, Img, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';


/**
 * AvatarImage Atom
 *
 * @param {object} props
 * @returns {object}
 */
const AvatarImage = Atom(({ src, alt }) =>
{
    if (!src)
    {
        return null;
    }

    return Img({
        class: 'absolute w-full h-full rounded-full object-cover fadeIn',
        src,
        alt,
        error: (event) => event.target.style.display = 'none'
    });
});

/**
 * This will return the initials of the name.
 *
 * @param {string} name
 * @returns {string}
 */
const getInitials = (name) =>
{
    return name.split(' ').map((n) => n.charAt(0)).join('');
};

/**
 * This will check the length of the fallback text.
 *
 * @param {string} fallbackText
 * @returns {string}
 */
const checkFallbackLength = (fallbackText) =>
{
    if (fallbackText && fallbackText.length > 2)
    {
        fallbackText = getInitials(fallbackText);
    }
    return fallbackText;
};

/**
 * This will create a watcher span.
 *
 * @param {string} watcherFallback
 * @returns {object}
 */
const WatcherSpan = (watcherFallback) =>
{
    return Span([watcherFallback, (value, ele) => ele.textContent = checkFallbackLength(value)]);
};

/**
 * AvatarFallback Atom
 *
 * @param {string|null} fallbackText
 * @param {string|null} [watcherFallback=null]
 * @returns {object}
 */
const AvatarFallback = (fallbackText, watcherFallback = null) =>
{
    fallbackText = checkFallbackLength(fallbackText);

    return Div({ class: 'flex items-center justify-center w-full h-full rounded-full bg-muted text-muted-foreground font-medium' }, [
        (watcherFallback)? WatcherSpan(watcherFallback) : Span(fallbackText)
    ]);
};

/**
 * This will return the size of the avatar.
 *
 * @param {string} size
 * @returns {string}
 */
const getSize = (size) =>
{
    switch(size) {
        case 'xs':
            return 'h-6 w-6';
        case 'sm':
            return 'h-8 w-8';
        case 'md':
            return 'h-12 w-12';
        case 'lg':
            return 'h-16 w-16';
        case 'xl':
            return 'h-24 w-24';
        case '2xl':
            return 'h-32 w-32';
        case '3xl':
            return 'h-48 w-48';
        default:
            return 'h-12 w-12';
    }
};

/**
 * Avatar Component
 *
 * @param {object} props
 * @returns {object}
 */
export const Avatar = Atom(({ src, alt, fallbackText, watcherFallback, size }) =>
{
    size = getSize(size);

    return Div({ class: `relative flex items-center justify-center ${size}` }, [
        AvatarImage({ src, alt }),
        AvatarFallback(fallbackText, watcherFallback)
    ]);
});