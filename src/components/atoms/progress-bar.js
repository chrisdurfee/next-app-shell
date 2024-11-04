import { Div } from '@base-framework/atoms';
import { Jot } from '@base-framework/base';

/**
 * This will create a progress bar.
 *
 * @returns {object}
 */
const Progress = () => (
    Div({
        class: 'absolute h-full rounded-full bg-primary transition-all duration-300',
        style: `width: [[progress]]%;`,
    })
);

/**
 * Progress Bar
 *
 * This will create a progress bar component.
 *
 * @param {object} props
 * @returns {object}
 */
export const ProgressBar = Jot(
{
    /**
     * This will render the progress bar component.
     *
     * @returns {object}
     */
    render()
    {
        return Div({ class: 'relative w-full h-4 rounded-full bg-muted' }, [
            Progress()
        ]);
    },

    /**
     * This will initialize the state.
     *
     * @returns {object}
     */
    state()
    {
        return {
            progress: this.progress ?? 0
        };
    },

    /**
     * This will set the progress of the progress bar.
     *
     * @param {number} progress
     * @returns {void}
     */
    set(progress)
    {
        if (progress < 0)
        {
            progress = 0;
        }

        if (progress > 100)
        {
            progress = 100;
        }

        this.state.progress = progress
    }
});