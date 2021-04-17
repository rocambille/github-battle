import React from 'react';

import Card from '../components/Card';
import CatchPhrase from '../components/CatchPhrase';

const grid = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  justifyItems: 'center',
};

const fullLine = {
  gridColumn: '1 / -1',
};

function Home() {
  return (
    <main style={grid}>
      <CatchPhrase
        tagName="h1"
        style={fullLine}
        className="text-center"
      />
      <Card />
      <Card />
    </main>
  );
}

export default Home;
