import { Box } from '@mantine/core';
import { ReactNode } from 'react';
import Image from 'next/image';

import QuadradoDireita from '@/assets/quadradoDireta.svg';
import QuadradoEsquerda from '@/assets/quadradoEsquerda.svg';

interface BackgroundProps {
  children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
  return (
    <Box
      style={{
        backgroundColor: '#181818',
      }}
    >
      <Box
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        <Box
          style={{
            position: 'absolute',
            top: '10vh',
            left: 0,
            transform: 'translateX(-50%)',
            width: '25vw',
            maxWidth: '300px',
          }}
        >
          <Image
            src={QuadradoEsquerda}
            alt="Elemento gráfico decorativo: um quadrado no lado esquerdo do fundo"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

        <Box
          style={{
            position: 'absolute',
            top: '65vh',
            right: 0,
            transform: 'translateX(45%)',
            width: '25vw',
            maxWidth: '300px',
          }}
        >
          <Image
            src={QuadradoDireita}
            alt="Elemento gráfico decorativo: um quadrado no lado direito do fundo"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>

      </Box>

      <Box
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
}