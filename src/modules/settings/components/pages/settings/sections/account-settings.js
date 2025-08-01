import { Div, H2, P, Td, Tr } from "@base-framework/atoms";
import { Button, Input } from "@base-framework/ui/atoms";
import { Icons } from "@base-framework/ui/icons";
import { FormCard, FormCardContent, FormCardGroup, FormField } from "@base-framework/ui/molecules";
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
            H2({ class: 'text-xl mt-0' }, 'Projects at a glance'),
            FormCard([
                // Table header
                new DataTable({
                    key: 'id',
                    headers: projectHeaders,
                    border: false,
                    rows: projectRows,
                    rowItem: projectRowItem
                })
            ]),

            // Credit balance
            FormCard({ title: 'Credit balance' }, [
                FormCardContent([
                    Div({ class: 'flex items-center justify-between' }, [
                        P({ class: 'text-sm text-muted-foreground' }, 'Charges will be deducted from your balance first'),
                        P({ class: 'text-xl font-semibold' }, '$0')
                    ])
                ])
            ]),

            // Payment methods
            FormCard({ title: 'Payment methods' }, [
                FormCardContent([
                    P({ class: 'text-sm text-muted-foreground max-w-[700px]' },
                        'When adding a new payment method, either remove the old one or go to your projects\' subscription to explicitly update the payment method. Marking a payment method as “default” is only relevant for new projects or if there are no other payment methods on your account.'
                    )
                ]),
                FormCardGroup({ description: 'No payment methods', border: true }, [
                    Div({ class: 'flex flex-auto justify-end' }, [
                        Button({ variant: 'withIcon', icon: Icons.plus }, 'Add new card')
                    ])
                ])
            ]),

            // Billing email
            FormCard({ title: 'Billing email' }, [
                FormCardGroup({ label: 'Email address', description: 'All billing correspondence will go to this email.', border: true }, [
                    new FormField({ name: 'billingEmail', label: '', description: '' }, [
                        Input({ type: 'email', placeholder: 'e.g. jane.doe@example.com', required: true })
                    ])
                ])
            ])

        ])
    ])
);

export default AccountSettings;
