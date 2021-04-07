import React, { useEffect, useState } from 'react';

import Card from './Components/Card/index'
import Header from './Components/Header/index'
import Loader from './Components/Loader/index'
import FailedState from './Components/FailedState/index'
import EmptyState from './Components/EmptyState/index'

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const maxLimit = 10

function App() {
  const [ imageData, setData ] = useState([])
  const [ page, setPage ] = useState(0)
  const [ loader, setLoader ] = useState(false)
  const [ failed, setFailed ] = useState(false)

  const getImageData = () => {
    const axios = require('axios');

    if (page == 0) {
      setLoader(true)
    }

    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${maxLimit}`).then((res) => {
      if (res.status == 200) {
        setData((prevData) => [ ...prevData, ...res.data ])
        setLoader(false)
      }
      else {
        setLoader(false)
        setFailed(true)
      }
    })
      .catch((err) => {
        setLoader(false)
        setFailed(true)
      })
  }

  useEffect(getImageData, [ page ])

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1)
  }

  const renderContent = () => {
    if (loader) {
      return <Loader />
    }
    if (failed) {
      return <FailedState />
    }
    if (imageData && imageData.length > 0) {
      return imageData.map((item, index) => (
        <Card imageUrl={item.download_url} />
      ))
    }
    return <EmptyState />
  }

  return (
    <div className="mainStyle">

      <Header />

      <div className="row centerAlign">
        {renderContent()}
      </div>
      <div className="headerLineStyle" />
      {imageData && imageData.length > 0 ?
        <div className="row centerAlign">
          <div className="headerLogoStyle" onClick={loadMore}>Load More</div>
        </div>
        : null
      }
    </div >
  );
}

export default App;
