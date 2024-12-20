import { Div, Li, P, Span, Time } from '@base-framework/atoms';
import { Atom } from '@base-framework/base';
import { List } from '@base-framework/organisms';
import { Avatar } from '../../molecules/avatars/avatar.js';

/**
 * User Info Atom
 *
 * @param {object} props
 * @returns {object}
 */
const UserInfo = Atom(({ name, email }) =>
{
    return Div({ class: 'min-w-0 flex-auto' }, [
        P({ class: 'text-base font-semibold leading-6 m-0' }, name),
        P({ class: 'truncate text-sm leading-5 text-muted-foreground m-0' }, email)
    ]);
});

/**
 * User Online Atom
 *
 * @returns {object}
 */
const UserOnline = () =>
{
    return Div({ class: 'flex items-center gap-x-1.5' }, [
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
    return P({ class: 'text-xs leading-5 text-muted-foreground' }, [
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
        P({ class: 'text-sm leading-6 m-0' }, role),
        getStatus(status, lastSeen)
    ]);
});

/**
 * This will get the initials from the name.
 *
 * @param {string} name
 * @returns {string}
 */
const getInitials = (name) =>
{
    const names = name.split(' ');
    return names.map(n => n[0]).join('');
};

/**
 * User List Item Atom.
 *
 * @param {object} user
 * @returns {object}
 */
export const UserListItem = Atom((user) =>
{
    return Li({ class: 'fadeIn flex justify-between gap-x-6 py-4 px-4 rounded-md hover:bg-muted/50' }, [
        Div({ class: 'flex min-w-0 gap-x-4' }, [
            Avatar({ src: user.image, alt: user.name, fallbackText: getInitials(user.name) }),
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
export const UserList = Atom((props) =>
{
    return new List({
        cache: 'list',
        key: 'name',
        items: props.users,
        role: 'list',
        class: 'divide-y divide-border',
        rowItem: UserListItem
    });
});

export default UserList;