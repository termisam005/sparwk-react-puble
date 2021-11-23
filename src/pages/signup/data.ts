export interface GenderOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
}

export const gendOptions: readonly GenderOption[] = [
    { value: 'Agender', label: 'Agender', color: '#fff' },
    { value: 'Cis', label: 'Cis', color: '#fff' },
    { value: 'Cis male', label: 'Cis male', color: '#fff' },
];

