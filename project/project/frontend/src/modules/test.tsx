import * as React from 'react';

interface TestProps {
    something: string;
}

export const Test: React.SFC<TestProps> = ({ something }) => (
    <div>{something}</div>
)