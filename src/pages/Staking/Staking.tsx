import React, { useState, useEffect } from 'react';
import { Account } from '../Dashboard/widgets/Account';
import { AuthRedirectWrapper } from 'wrappers';
import io from 'socket.io-client';
import { getAddress } from '@multiversx/sdk-dapp/utils/account';


function Staking() {
  const [scriptOutput, setScriptOutput] = useState('');
  const [stakedScriptOutput, setstakedScriptOutput] = useState(''); // Nouvel état pour la sortie du script de conversion
  const [userAddress, setUserAddress] = useState('');
  const logo = '/xlogo.png';

  useEffect(() => {
    const socket = io('http://localhost:3001');

    // Utilisez cette fonction pour effectuer la requête GET pour obtenir la sortie de staked.sh
    const fetchStakedOutput = () => {
      fetch('http://localhost:3001/execute-staked', {
        method: 'GET',
      })
        .then((response) => response.text())
        .then((data) => setstakedScriptOutput(data))
        .catch((error) => {
          console.error("Erreur lors de la récupération des données de staked.sh :", error);
        });
    };

    // Utilisez getAddress pour obtenir l'adresse de l'utilisateur
    getAddress().then((address) => {
      setUserAddress(address);

      if (address) {
        fetch('http://localhost:3001/execute-script', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ argument: address }),
        })
          .then((response) => response.text())
          .then((data) => setScriptOutput(data))
          .catch((error) => {
            console.error("Erreur lors de l'exécution du script Bash :", error);
          });

        // Une fois que vous avez l'adresse de l'utilisateur, appelez la fonction pour récupérer la sortie de staked.sh
        fetchStakedOutput();
      }
    });

    socket.on('scriptOutput', (data) => {
      setScriptOutput((prevOutput) => prevOutput + data);
    });

    socket.on('stakedScriptOutput', (data) => {
      setstakedScriptOutput((prevOutput) => prevOutput + data); // Mettez à jour l'état local avec la sortie du script de conversion
    });
  }, []);

  return (
    <AuthRedirectWrapper>
      <div className='flex flex-1 items-start mt-0'>
        <div className='flex flex-1 justify-center items-center bg-transparent mt-20'>
          <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl text-white my-0'>
            <Account />
            <div className='mt-4'>
              <h1>Your wallet total stack: </h1>
              <p>{scriptOutput}eGld</p>
              <h2>Stakeur:</h2>
              <p>{stakedScriptOutput}</p> {/* Affichez la sortie du script staked.sh ici */}
            </div>
          </div>
          <img src={logo} alt='xArtistsLogo' className='w-64 h-64' />
        </div>
      </div>
    </AuthRedirectWrapper>
  );
}

export default Staking;
