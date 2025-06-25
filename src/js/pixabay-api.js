import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export default function getImagesByQuery(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '51039483-d1ef6922b01cd3fd853d7df89',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(getAPIImages);
}

function getAPIImages(resolve) {
  const hitsArray = resolve.data.hits;
  if (hitsArray.length === 0) {
    iziToast.warning({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
      color: 'red',
    });
    return;
  }

  return hitsArray;
}
