import React, { useState, useEffect, ChangeEvent } from 'react';
import { AuthRedirectWrapper } from 'wrappers';
import { RouteNamesEnum } from 'localConstants';

function Staking() {
  const [scriptOutput, setScriptOutput] = useState('');
  const [argument, setArgument] = useState(''); // Ajoutez un état pour stocker l'entrée utilisateur

  const logo = '/xlogo.png'; // Remplacez par le chemin de votre logo

  function handleArgumentChange(event: ChangeEvent<HTMLInputElement>): void {
    setArgument(event.target.value);
  }

  const executeScript = async () => {
    if (!argument) {
      alert("Veuillez saisir une adresse de portefeuille ERD.");
      return;
    }

    try {
      // Remplacez '/votre-backend-url' par l'URL de votre backend où vous exécutez le script Bash
      const response = await fetch('/staking', {
        method: 'POST',
        body: JSON.stringify({ argument }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.text();
        setScriptOutput(data);
      } else {
        console.error("Erreur lors de l'exécution du script Bash.");
      }
    } catch (error) {
      console.error("Erreur lors de l'exécution du script Bash :", error);
    }
  };

  return (
    <div className='flex flex-col h-screen justify-center items-start mt-5'>
      <div className='flex flex-1 justify-center items-center bg-transparent'>
        <div className='flex flex-col gap-2 max-w-[70sch] text-center sm:text-left text-xl font-medium md:text-2xl lg:text-3xl text-white'>
          <div>
            <h1>Staking Pool:</h1>
            <input
              type='text'
              placeholder='Wallet addresse erd111...'
              value={argument}
              onChange={handleArgumentChange}
              className='text-black border rounded-md p-2 w-full'
            />
            <p>{scriptOutput}</p>
            <button onClick={executeScript} className='bg-blue-500 text-white rounded-md p-2'>
              Check wallet
            </button>
          </div>
        </div>
        <img src={logo} alt='xArtistsLogo' className='w-64 h-64' />
      </div>
      <div className='w-full text-center bg-blue-500 text-white p-4'>
        TEST ICI
      </div>
      <div className='w-full text-center bg-gray-200 p-4'>
        <p>Autres informations ici</p>
      </div>
    </div>
  );
}

export default Staking;
