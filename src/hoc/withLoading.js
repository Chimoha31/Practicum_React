import React, { useState, useEffect, useContext } from "react";
import {ThemeContext} from '../const/contexts/ThemeContext';
import styled from "styled-components";

export const withLoading = (WrappedComponent, fetchData) => {
  return () => {
    const [data, setData] = useState(null);
    const [theme] = useContext(ThemeContext);

    useEffect(() => {
      fetch();
    }, []);

    const fetch = async () => {
      const data = await fetchData();
      setData(data);
    };

    const Loading = <LoadDiv theme={theme}>Loading now...</LoadDiv>;

    return data ? <WrappedComponent data={data} /> : Loading;
  };
};

const LoadDiv = styled.div`
  height: 100%;
  padding: 36px;
  color: ${({theme}) => theme.color};
  background-color: ${({theme}) => theme.backgroundColor}
`;
