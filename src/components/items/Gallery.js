import React, { useContext, useEffect, useRef } from 'react';
import { Button, Typography } from '@mui/material';

// components
import { PhotoContext } from '../../context/PhotoContext';
import Photos from './Photos';
import Loader from './Loader';

// global variable
var page = 1

function Gallery({search}) {

  const { photos, runSearch, loading } = useContext(PhotoContext)
  const prevSearchTermRef = usePrevious(search);
  // console.log("prevSearchTermRef", prevSearchTermRef)

  const changePageHandler = (state) => {
    // console.log(page)
    // console.log(search)
    if (state === "next"){
      page += 1
      runSearch(search,page)
    } if ( state === "back"){
      page -= 1
      runSearch(search,page)
    }
  }
  
  useEffect(() => {
    if(search !==  prevSearchTermRef){
      page = 1
      runSearch(search, page)
    }
    runSearch(search, page)
  }, [search])

  return (
    <div>
      {loading ? (
      <Loader />
      ) : (
          photos.length ? (
            <>
              <Photos photos={photos}/>
              <Typography>{page}</Typography>
              <Button onClick={() => changePageHandler("next")}>صفحه بعد</Button>
              <Button onClick={() => changePageHandler("back")}>صفحه قبل</Button>
            </>
        ) : (
          <Typography>
            <span>عکسی وجود ندارد.</span>
            لطفا واژه‌ی دیگری را جستجو نمایید.
          </Typography>
        )
      )}
    </div>
  )
}

export default Gallery

// Custom hook for getting previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value; //assign the value of ref to the argument
  },[value]); //this code will run when the value of 'value' changes
  return ref.current; //in the end, return the current ref value.
}