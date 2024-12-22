import { Div, Img, Span } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * AvatarImage
 *
 * Creates an image element for the avatar, hiding it on error.
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

        /**
         * If there's an error loading the image, hide it.
         */
        error: (event) => event.target.style.display = 'none'
    });
});

/**
 * Returns the initials of the name (e.g., "John Doe" => "JD").
 *
 * @param {string} name
 * @returns {string}
 */
const getInitials = (name) =>
{
    return name.split(' ').map((n) => n.charAt(0)).join('');
};

/**
 * Ensures fallback text is at most 2 characters (initials).
 *
 * @param {string} fallbackText
 * @returns {string}
 */
const checkFallbackLength = (fallbackText) =>
{
    if (!fallbackText || fallbackText.length < 2)
    {
        return fallbackText;
    }
    return getInitials(fallbackText);
};

/**
 * WatcherSpan
 *
 * A span that dynamically updates to display fallback text or initials.
 *
 * @param {string} watcherFallback - the property to watch
 * @returns {object}
 */
const WatcherSpan = (watcherFallback) =>
{
    return Span([watcherFallback, (value, ele) => {
        ele.textContent = checkFallbackLength(value);
    }]);
};

/**
 * Maps avatar size to a specific height/width class.
 */
const sizeMap = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
    xl: 'h-24 w-24',
    '2xl': 'h-32 w-32',
    '3xl': 'h-48 w-48',
    default: 'h-12 w-12'
};

/**
 * Maps avatar size to a font-size class for fallback text.
 */
const fontSizeMap = {
    xs: 'text-[7px]',
    sm: 'text-xs',
    md: 'text-base',
    lg: 'text-xl',
    xl: 'text-2xl',
    '2xl': 'text-3xl',
    '3xl': 'text-4xl',
    default: 'text-base'
};

/**
 * Returns the appropriate class for the avatar size (height/width).
 *
 * @param {string} size
 * @returns {string}
 */
const getSize = (size) => sizeMap[size] || sizeMap.default;

/**
 * Returns the appropriate class for the fallback font size.
 *
 * @param {string} size
 * @returns {string}
 */
const getFontSizeClass = (size) => fontSizeMap[size] || fontSizeMap.default;

/**
 * AvatarFallback
 *
 * Creates the fallback element (initials or watcherspan) with
 * background color, text color, etc., plus a dynamic font size.
 *
 * @param {string|null} fallbackText
 * @param {string|null} [watcherFallback=null]
 * @param {string} [size='md']
 * @returns {object}
 */
const AvatarFallback = (fallbackText, watcherFallback = null, size = 'md') =>
{
    const finalText = checkFallbackLength(fallbackText);
    const fontSizeClass = getFontSizeClass(size);

    return Div({
        class: `
            flex items-center justify-center w-full h-full rounded-full
            bg-muted text-muted-foreground font-medium
            ${fontSizeClass}
        `
    },
    [
        (watcherFallback)
            ? WatcherSpan(watcherFallback)
            : Span(finalText)
    ]);
};

/**
 * Avatar
 *
 * Creates an avatar with optional image. If the image fails or is absent,
 * shows fallback text/initials, with font size based on the avatar size.
 *
 * @param {object} props
 *   @prop {string|null} src
 *   @prop {string|null} alt
 *   @prop {string|null} fallbackText
 *   @prop {string|null} watcherFallback
 *   @prop {string} size
 * @returns {object}
 */
export const Avatar = Atom(({ src, alt, fallbackText, watcherFallback, size }) =>
{
    const sizeClass = getSize(size);

    return Div({
        class: `relative flex items-center justify-center ${sizeClass}`
    },
    [
        AvatarImage({ src, alt }),
        AvatarFallback(fallbackText, watcherFallback, size)
    ]);
});