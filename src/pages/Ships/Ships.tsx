import React, { FC, useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import Alert from '../../components/UI/Alert/Alert';
import Button from '../../components/UI/Button/Button';
import Loader from '../../components/UI/Loader/Loader';
import { GET_ALL_SHIPS } from '../../query/Ship';
import { IShip } from '../../models/IShip';
import Card from '../../components/UI/Card/Card';

const Ships: FC = () => {

  const [ships, setShips] = useState<IShip[]>([]);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

  const { data, loading, error, fetchMore } = useQuery(GET_ALL_SHIPS, {
    variables: {
      limit: 2,
      offset: 1
    }
  });

  const loadMore = () => {
    fetchMore({
      variables: {
        limit: 5,
        offset: data.ships.length
      }
    })
  }

  const handleScroll = () => {
    const innerHeight = (window.innerHeight + document.documentElement.scrollTop).toFixed(0);
    const offsetHeight = document.documentElement.offsetHeight;

    if (Number(innerHeight) !== Number(offsetHeight) || loading) return;

    loadMore();
  };

  useEffect(() => {
    if (!loading) {
      setShips(data.ships);
      setFirstLoad(false);
    }
    if (error) console.log(error);

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [data]);

  return (
    <div className='ships-view container'>
      <Alert
        color='info'
        style={{ marginTop: '12px' }}
      >
        This page uses graphQL with infinite scroll
      </Alert>
      <ul>
        {ships.map(ship => (
          <li key={ship.id}>
            <Card
              hoverable
              title={ship.name}
              body={<img src={ship.image} alt={ship.name} width='100%' />}
            >
              <Button
                color='primary'
                size='medium'
                variant='outlined'
                disabled
              >
                Open
              </Button>
            </Card>
          </li>
        ))}
      </ul>
      {loading &&
        <Loader centered={firstLoad} />
      }
    </div>
  )
}

export default Ships