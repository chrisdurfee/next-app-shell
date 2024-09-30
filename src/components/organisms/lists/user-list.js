import { Div, Img, Li, P, Span, Time, Ul } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';

/**
 * User Image Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserImage = Atom(({ src, alt }) =>
{
    return Img({
        class: 'h-12 w-12 flex-none rounded-full bg-gray-50',
        src,
        alt
    });
});

/**
 * User Info Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserInfo = Atom(({ name, email }) =>
{
    return Div({ class: 'min-w-0 flex-auto' }, [
        P({ class: 'text-sm font-semibold leading-6 text-gray-900' }, name),
        P({ class: 'mt-1 truncate text-xs leading-5 text-gray-500' }, email)
    ]);
});

/**
 * User Online Atom
 *
 * @returns {object}
 */
const UserOnline = () =>
{
    return Div({ class: 'mt-1 flex items-center gap-x-1.5' }, [
        Div({ class: 'flex-none rounded-full bg-emerald-500/20 p-1' }, [
            Div({ class: 'h-1.5 w-1.5 rounded-full bg-emerald-500' })
        ]),
        P({ class: 'text-xs leading-5 text-gray-500' }, 'Online')
    ]);
};

/**
 * User Offline Atom
 *
 * @param {string} lastSeen
 * @returns {object}
 */
const UserOffline = (lastSeen) =>
{
    return P({ class: 'mt-1 text-xs leading-5 text-gray-500' }, [
        Span(`Last seen `),
        Time({ datetime: lastSeen }, '3h ago')
    ]);
};

/**
 * This will get the user status.
 *
 * @param {string} status
 * @param {string} lastSeen
 * @returns {object}
 */
const getStatus = (status, lastSeen) =>
{
    return status === 'online'
        ? UserOnline()
        : UserOffline(lastSeen);
};

/**
 * User Status Atom
 */
const UserStatus = Atom(({ role, lastSeen, status }) =>
{
    return Div({ class: 'hidden shrink-0 sm:flex sm:flex-col sm:items-end' }, [
        P({ class: 'text-sm leading-6 text-gray-900' }, role),
        getStatus(status, lastSeen)
    ]);
});

/**
 * User List Item Atom.
 *
 * @param {object} user
 * @returns {object}
 */
const UserListItem = Atom((user) =>
{
    return Li({ class: 'flex justify-between gap-x-6 py-5' }, [
        Div({ class: 'flex min-w-0 gap-x-4' }, [
            UserImage({ src: user.image, alt: user.name }),
            UserInfo({ name: user.name, email: user.email })
        ]),
        UserStatus({
            role: user.role,
            lastSeen: user.lastSeen,
            status: user.status
        })
    ]);
});

/**
 * User List Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserList = Atom((props) =>
{
    return Ul(
        {
            ...props,
            role: 'list',
            class: 'divide-y divide-gray-100',
            map: [props.users, UserListItem]
        }
    );
});

export default UserList;