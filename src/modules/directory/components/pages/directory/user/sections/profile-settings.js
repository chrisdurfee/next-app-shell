import { Div, On } from "@base-framework/atoms";
import { Fieldset } from "@base-framework/ui/atoms";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../../../../atoms/settings-section.js";
import { UserContent } from "../user-content.js";
import UserHeader from "../user-header.js";
import UserSkeleton from "../user-skeleton";

/**
 * ProfileSettings
 *
 * Settings form for updating profile information.
 *
 * @returns {object}
 */
export const ProfileSettings = () => (
    new Page(([
		On("loaded", (loaded, ele, { data }) =>
		{
			if (!loaded)
			{
				return UserSkeleton();
			}

			const user = data.user;
			if (!user)
			{
				return Div({ class: "text-center" }, "User not found.");
			}

			return SettingsSection({
				title: 'Profile',
				description: 'This is how others will see you on the site.',
				class: 'max-w-[500px]',
				submit: (data) => console.log("Profile Settings:", data)
			}, [
				Fieldset({ legend: 'Profile Information' }, [
					UserHeader({ user }),
					UserContent({ user }),
				])
			]);
		})
    ]))
);

export default ProfileSettings;