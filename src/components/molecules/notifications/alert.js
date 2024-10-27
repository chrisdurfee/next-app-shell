import { Icons } from "../../../components/icons/icons.js";
import { Notification } from "../notification.js";

export class Alert extends Notification
{
    type = 'default';
    icon = '';

    beforeSetup()
    {
        this.class = 'alert ' + this.type;
    }

    getIcon()
    {
        let type = this.type,
        types = ['default', 'danger', 'warning', 'success'],
        icon = this.icon;

        type = (types.includes(type)) ? type : 'default';
        if (!icon)
        {
            switch (type) {
                case 'danger':
                    icon = Icons.circleX;
                    break;
                case 'warning':
                    icon = Icons.warning;
                    break;
                case 'success':
                    icon = Icons.cicleCheck;
                    break;
                default:
                    icon = Icons.information;
            }
        }

        return icon;
    }
}