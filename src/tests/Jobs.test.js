import { render, screen } from '@testing-library/react';
import AllJobs from '../components/AllJobs.js';

test('Lists the jobs if they are available', () => {
    render(<AllJobs></AllJobs>);

    const items = screen.findByLabelText('Job Title')
    expect(items)
})
