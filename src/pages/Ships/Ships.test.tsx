import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react';
import { wait } from '@testing-library/user-event/dist/utils';
import { GET_ALL_SHIPS } from '../../query/Ship';
import Ships from './Ships';

afterEach(cleanup);

const mocks: MockedResponse = {
    request: {
        query: GET_ALL_SHIPS,
        variables: {
            limit: 2,
            offset: 1
        }
    },
    result: {
        data: {
            ships: [
                {
                    id: 'GOPURSUIT',
                    image: 'https://i.imgur.com/5w1ZWre.jpg',
                    name: 'GO Pursuit',
                    year_built: 2007
                },
                {
                    id: 'AMERICANCHAMPION',
                    image: 'https://i.imgur.com/woCxpkj.jpg',
                    name: 'American Champion',
                    year_built: 1976
                }
            ]
        }
    }
}

const fetchMoreMocks: MockedResponse = {
    request: {
        query: GET_ALL_SHIPS,
        variables: {
            limit: 5,
            offset: 2
        }
    },
    result: {
        data: {
            ships: [
                {
                    id: 'GONAVIGATOR',
                    image: 'https://i.imgur.com/MjNWzhO.jpg',
                    name: 'GO Navigator',
                    year_built: 2009
                },
                {
                    id: 'GOQUEST',
                    image: 'https://i.imgur.com/ABXtHKa.jpg',
                    name: 'GO Quest',
                    year_built: 2014
                }
            ]
        }
    }
}

const waitForData = () => new Promise(res => setTimeout(res, 0));

describe('Ships view', () => {
    it('Ships view renders', () => {
        const { container } = render(
            <MockedProvider mocks={[mocks]} addTypename={false}>
                <Ships />
            </MockedProvider>
        );

        expect(screen.getByText(/graphQL/)).toBeInTheDocument();
        expect(container.querySelector('.loaderCentered')).toBeInTheDocument();
    });

    it('Ships fetch data from API', async () => {
        await act(async () => {
            render(
                <MockedProvider mocks={[mocks]} addTypename={false}>
                    <Ships />
                </MockedProvider>
            );
        });

        await act(async () => {
            waitForData();
        });

        expect(screen.getByText('GO Pursuit')).toBeInTheDocument();
        expect(screen.getByText('American Champion')).toBeInTheDocument();
    });

    it('Ships infinite scroll works', async () => {
        await act(async () => {
            render(
                <MockedProvider mocks={[mocks, fetchMoreMocks]} addTypename={false}>
                    <Ships />
                </MockedProvider>
            );
        });

        await act(async () => {
            waitForData();
        });
        
        fireEvent.scroll(window, { target: { scrollY: 986 } });
    });
});