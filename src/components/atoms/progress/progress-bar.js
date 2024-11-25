import { Div } from '@base-framework/atoms';
import { VeilJot } from '../veil.js';

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
export const ProgressBar = VeilJot(
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
     * This will reset the progress bar.
     *
     * @returns {void}
     */
    reset()
    {
        this.state.progress = 0;
    },

    /**
     * This will update the progress bar from a file upload.
     *
     * @param {object} evt
     * @returns {void}
     */
    uploadProgress(evt)
    {
        if (evt.lengthComputable)
        {
            const PERCENTAGE = 100;
            const percentComplete = Math.round(evt.loaded * PERCENTAGE / evt.total);
            this.set(percentComplete);
        }
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