import { Avatar, Div, Span } from "@base-framework/atoms";
import { Model } from "@base-framework/base";

/**
 * UserData Model
 *
 * This will create a model for user data.
 *
 * @extends Model
 * @class UserData
 */
const UserData = Model.extend({
    url: '/api', // API endpoint for fetching or updating user data
});

// Instantiate UserData
app.data.user = new UserData({
    name: "John Doe", // Example default user name
    avatar: "https://github.com/shadcn.png", // Example avatar image
    status: "online", // Default status
});

// Status class mapping for dynamic binding
const statusClasses = {
    online: "bg-green-500",
    offline: "bg-gray-500",
    busy: "bg-red-500",
    away: "bg-yellow-500",
};

// Navigation Avatar Component
export const NavigationAvatar = () => {
    return Div(
        { class: "absolute bottom-4 left-4 flex items-center gap-4" }, // Align avatar to the bottom of navigation
        [
            // Avatar Container
            Div(
                { class: "relative" },
                [
                    // User Avatar
                    Avatar({
                        src: app.data.user.avatar, // Bind avatar to user data
                        alt: app.data.user.name, // Use user name for alt text
                        fallbackText: app.data.user.name.charAt(0).toUpperCase(), // Fallback to initial
                        size: "lg",
                    }),
                    // Status Indicator
                    Div({
                        class: `absolute bottom-0 right-0 w-3 h-3 border-2 rounded-full ${
                            statusClasses[app.data.user.status]
                        }`, // Dynamically set status color
                    }),
                ]
            ),
            // User Details
            Div(
                {},
                [
                    // User Name
                    Span(
                        { class: "text-sm text-foreground" },
                        app.data.user.name // Bind to user name
                    ),
                    // User Status
                    Span(
                        { class: "text-xs text-muted-foreground" },
                        app.data.user.status.charAt(0).toUpperCase() +
                            app.data.user.status.slice(1) // Capitalized status
                    ),
                ]
            ),
        ]
    );
};

// Example of dynamically updating user data
// Simulate status change (use real API calls in a production environment)
setTimeout(() => {
    app.data.user.set("status", "busy"); // Update status to busy
}, 5000);

setTimeout(() => {
    app.data.user.set("status", "offline"); // Update status to offline
}, 10000);
