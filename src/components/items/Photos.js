import { ImageList, ImageListItem, Link } from '@mui/material';
import React from 'react';

function Photos({photos}) {

  console.log("photos")

  const download = e => {

    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {}
    })
      .then(response => {

        // console.log(response)
        response.arrayBuffer().then(function(buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "image.png"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <ImageList cols={3} variant="standard" gap={10}>
      {photos.map((photo, index) => {
        return(
          <ImageListItem key={photo.id}>
            <img 
             src={`${photo.urls.regular}?w=161&fit=crop&auto=format`}
             srcSet={`${photo.urls.regular}?w=161&fit=crop&auto=format&dpr=2 2x`}
             alt={photo.title}
             // srcSet={`${photo.urls.small} 300w, ${photo.urls.regular} 768w, ${photo.urls.full} 1280w`}
             loading="lazy"
             style={{backgroundColor: photo.color}}
             width="400px"
             height="600px"
            />
            <Link 
             variant="button"
             target="-blank"
             href={photo.urls.regular}
             download
             onClick={(e) => download(e)}
             underline="none"
            >
              دریافت عکس
            </Link>
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default React.memo(Photos)