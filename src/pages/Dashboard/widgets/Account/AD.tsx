import React from 'react';
import { useGetAccountInfo, useGetNetworkConfig } from 'hooks';

export const AD = () => {
  const { network } = useGetNetworkConfig();
  const { address, account } = useGetAccountInfo();

  return address; // Exporte uniquement la valeur de l'adresse
};

export default AD;