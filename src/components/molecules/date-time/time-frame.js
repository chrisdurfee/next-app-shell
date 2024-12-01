import { Time } from '@base-framework/atoms';
import { DateTime } from '@base-framework/base';
import { DynamicTime } from '@base-framework/organisms';

/**
 * Time Frame
 *
 * This will create a time frame molecule.
 *
 * @param {object} props
 * @returns {object}
 */
export const TimeFrame = ({ dateTime = '', remoteTimeZone = 'America/Denver', filter = null }) => (
    Time([
        new DynamicTime({
            dateTime,
            filter: filter || ((date) =>
            {
                // convert to local time
                const localTime = DateTime.getLocalTime(date, true, false, remoteTimeZone);
                return DateTime.getTimeFrame(localTime);
            })
        })
    ])
);