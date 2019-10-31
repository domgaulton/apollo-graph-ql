import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ANOTHER = gql`
  {
    rates(currency: "GBP") {
      currency
      rate
    }
  }
`;

function TestQL() {
  const { loading, error, data } = useQuery(ANOTHER);

  if (loading) return <p>Loading!...</p>;
  if (error) return <p>Errors :(</p>;

  return data.rates.map(({ currency, rate }) => (
    <div key={currency}>
      <p>
        {currency}: {rate}
      </p>
    </div>
  ));
}

export default TestQL;