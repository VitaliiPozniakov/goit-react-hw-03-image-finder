import { Component } from 'react';
import Searchbar from './Searchbar';
import { fetchImages } from 'services/api';
import { ToastContainer } from 'react-toastify';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: null,
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query) {
        this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

        const dataFromBackend = await fetchImages(query);
        // console.log(dataFromBackend.hits)
        const { hits } = dataFromBackend;
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          littleImageUrl: hit.webformatURL,
          largeImageUrl: hit.largeImageURL,
        }));
        // console.log(imagesArray)
        return this.setState(({ isLoading}) => ({
          isLoading: !isLoading,
          images: imagesArray,
        }));
      }

      if (prevState.page !== page && page !== 1) {
        this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

        const dataFromBackend = await fetchImages(query, page);
        // console.log(dataFromBackend.hits)
        const { hits } = dataFromBackend;
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          littleImageUrl: hit.webformatURL,
          largeImageUrl: hit.largeImageURL,
        }));
        // console.log(imagesArray)
        return this.setState(({ isLoading, images }) => ({
          isLoading: !isLoading,
          images: [...images, ...imagesArray],
        }));
      }


    } catch (error) {
      this.setState({ error });
    }
  }



  getSearchRequest = query => {
    this.setState({ query });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmitProp={this.getSearchRequest} />
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }
}
