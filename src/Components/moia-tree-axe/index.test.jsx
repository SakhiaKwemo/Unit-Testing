import { render, fireEvent, waitForElement, prettyDOM } from '@testing-library/react';
import Index from './index';

describe('Computer component', () => {

    it('renders properly', () => {
        render(<Index/>)
    });

    it('The waiting to load is displayed', () => {
        const {getByText} = render(<Index/>)
        expect(getByText('Waiting for a choice...')).toBeInTheDocument()
    });

});