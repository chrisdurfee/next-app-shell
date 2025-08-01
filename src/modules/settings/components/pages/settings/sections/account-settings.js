import { Div, H2, H3, P, Td, Tr } from "@base-framework/atoms";
import { FormCardContent } from "@base-framework/ui";
import { Button, Icon, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormCard, FormCardGroup, FormField } from "@base-framework/ui/molecules";
import { DataTable } from "@base-framework/ui/organisms";
import { Page } from "@base-framework/ui/pages";
import { SettingsSection } from "../atoms/settings-section.js";

const projectHeaders = [
    { label: 'Name', key: 'name' },
    { label: 'Plan', key: 'plan' },
    { label: 'Billing cycle', key: 'billingCycle', align: 'justify-end' }
];

const projectRows = [
    { id: 1, name: 'New Website', plan: 'Free', billingCycle: 'Aug 11, 2023 - Sep 11, 2023', selected: false }
];

const projectRowItem = (row, onSelect) =>
    Tr({ class: 'items-center hover:bg-muted/50' }, [
        Td({ class: 'p-4' }, row.name),
        Td({ class: 'p-4' }, row.plan),
        Td({ class: 'p-4 text-right' }, row.billingCycle),
        Td({ class: 'p-4 text-right' }, [
            Button({ variant: 'icon', icon: Icons.chevron.single.right })
        ])
    ]);

/**
 * AccountSettings
 *
 * Billing settings page with project overview, balance, payment methods, and billing email.
 *
 * @returns {object}
 */
export const AccountSettings = () => (
    new Page([
        SettingsSection({
            title: 'Billing Settings',
            description: '',
            class: 'max-w-5xl mx-auto',
            submit: (data) => console.log("Billing Settings:", data)
        }, [

            // Projects at a glance
            Div({ class: 'flex flex-auto flex-col' }, [
                H2({ class: 'text-xl pb-4' }, 'Projects at a glance'),
                FormCard([
                    // Table header
                    new DataTable({
                        key: 'id',
                        headers: projectHeaders,
                        border: false,
                        rows: projectRows,
                        rowItem: projectRowItem
                    })
                ])
            ]),

            // Credit balance
            Div({ class: 'flex flex-auto flex-col' }, [
                H3({ class: 'text-lg font-semibold mb-2' }, 'Credit balance'),
                Div({ class: 'flex items-center justify-between' }, [
                    P({ class: 'text-sm text-muted-foreground' }, 'Charges will be deducted from your balance first'),
                    P({ class: 'text-xl font-semibold' }, '$0')
                ])
            ]),

            Div({ class: 'flex flex-auto flex-col' }, [
                H3({ class: 'text-lg font-semibold mb-2' }, 'Payment methods'),
                Div({ class: 'flex items-center justify-between' }, [
                    P({ class: 'text-sm text-muted-foreground' }, 'When adding a new payment method, either remove the old one or go to your projects\' subscription to explicitly update the payment method. Marking a payment method as “default” is only relevant for new projects or if there are no other payment methods on your account.')
                ])
            ]),

            // Payment methods
            FormCard({ title: '' }, [
                Div({ class: 'flex flex-auto justify-center p-6' }, [
                    Button({ variant: 'withIcon', icon: Icons.plus }, 'Add new card')
                ])
            ]),

            // Billing email
            FormCard({ title: 'Billing email' }, [
                FormCardGroup({ label: 'Email address', description: 'All billing correspondence will go to this email.', border: true }, [
                    new FormField({ name: 'billingEmail', label: '', description: '' }, [
                        Input({ type: 'email', placeholder: 'e.g. jane.doe@example.com', required: true })
                    ])
                ])
            ]),

            // Site URL
            FormCard({ title: 'Site URL' }, [
                FormCardContent([
                    P({ class: 'text-sm text-muted-foreground mb-2' },
                        'Configure the URL of your site. This is used for password reset emails and other links.'
                    ),
                ]),
                FormCardGroup({ label: 'Site URL', description: '', border: true }, [
                    new FormField({
                        name: 'siteUrl',
                        label: '',
                        description: 'The base URL of your website. Used as an allow-list for redirects and for constructing URLs used in emails.'
                    }, [
                        Div({ class: 'flex flex-auto space-x-2' }, [
                            Input({ type: 'url', placeholder: 'http://localhost:3000', required: true }),
                        ])
                    ])
                ]),
                FormCardContent({ border: true }, [
                    Div({ class: 'mt-4 flex justify-end space-x-2' }, [
                        Button({ variant: 'outline' }, 'Cancel'),
                        Button({ variant: 'primary' }, 'Save')
                    ])
                ])
            ]),

            // Redirect URLs
            FormCard({ title: 'Redirect URLs', description: 'URLs that auth providers are permitted to redirect to post authentication. Wildcards are allowed, for example, https://*.domain.com' }, [
                FormCardGroup({ label: '', description: '', border: true }, [
                    new FormField({
                        name: 'redirectUrls',
                        label: '',
                        description: ''
                    }, [
                        Div({ class: 'flex items-center justify-between px-4 py-2' }, [
                            Div({ class: 'flex items-center space-x-2' }, [
                                Icon(Icons.global),
                                P('https://mobbin.com/')
                            ]),
                            Button({ variant: 'icon', icon: Icons.trash.default })
                        ])
                    ])
                ]),
                FormCardContent({ border: true }, [
                    Div({ class: 'mt-4 flex justify-end' }, [
                        Button({ variant: 'primary', icon: Icons.plus.default }, 'Add URL')
                    ])
                ])
            ]),

        ])
    ])
);

export default AccountSettings;
