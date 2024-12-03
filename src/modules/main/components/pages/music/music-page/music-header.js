import { Div } from "@base-framework/atoms";
import { Button } from "@components/atoms/buttons/buttons.js";
import { Tooltip } from "@components/atoms/tooltip.js";
import { Icons } from "@components/icons/icons.js";
import TabGroup from "@components/organisms/tabs/tab-group.js";
import { MusicModal } from "./music-modal";

/**
 * This will create a music header with tabs and add music button.
 *
 * @returns {object}
 */
export const MusicHeader = () => (
    Div({ class: 'justify-between flex flex-auto items-center' }, [
        new TabGroup({
            options: [
                { label: 'Music', value: 'music' },
                { label: 'Podcasts', value: 'podcasts' },
                { label: 'Live', value: 'live', disabled: true }
            ],
            onSelect: (value, { state }) => state.mode = value
        }),
        Div({ class: 'hidden lg:inline-flex' }, [
            Button({ variant: 'withIcon', class: 'text-muted-foreground hidden', icon: Icons.circlePlus, click: MusicModal }, 'Add music'),
        ]),
        Div({ class: 'flex lg:hidden mr-4' }, [
            Tooltip({ content: 'Add music', position: 'left' }, Button({ variant: 'icon', class: 'outline', icon: Icons.circlePlus, click: MusicModal }))
        ])
    ])
);

export default MusicHeader;