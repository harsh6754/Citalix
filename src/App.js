import React from 'react';
import { Routes, Route  } from 'react-router-dom'
import Home from './pages/home';
import Activities from './pages/Activities';
import Analytics from './pages/Analytics';
import Tranformation from './pages/Tranformation';
import Library from './pages/Library';
import Settings from './pages/Settings';
import CraeteReport from './components/CreateReport';
import SelectDuration from './components/SelectDuration';
import ShareThisDuration from './components/ShareThisDuration';
import CompareDuration from './components/CompareDuration';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/activitie' element={<Activities />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/transformation' element={<Tranformation />} />
          <Route path='/library' element={<Library />} />
          <Route path='/settings' element={<Settings />} />

          <Route path='/create-report' element={<CraeteReport />} />
          <Route path='/select-duration' element={<SelectDuration />} />
          <Route path='/share-duration' element={<ShareThisDuration />} />
          <Route path='/compare-duration' element={<CompareDuration/>} />
      </Routes>
    </div>
  );
}

export default App;
