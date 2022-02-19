import styled from 'styled-components';
import React, {useState, useEffect} from 'react';


export const withLoading = (WrappedComponent, fetchData) => {
  return() => {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async() => {
      const data = await fetchData();
      setData(data);
    }

    const Loading = (
      <LoadDiv>Loading now...</LoadDiv>
    )

    return data ? <WrappedComponent data={data}/> : Loading;
  }
}

const LoadDiv = styled.div`
  padding: 36px;
`