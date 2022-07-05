import { Component } from 'react';
import Searchbar from './Searchbar';
import { fetchImages } from 'services/api';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from './ImageGallery';
import Modal from './Modal';
import ModalContent from './ModalContent';
import { BtnLoadMore } from './App.styled';
import Loader from './Loader';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    error: null,
    isLoading: false,
    showModal: false,
    IdOfChooseImage: null,
    totalImages: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query) {
        this.setState(({ isLoading }) => ({ isLoading: !isLoading }));

        const dataFromBackend = await fetchImages(query);
        // console.log(dataFromBackend);
        const { hits } = dataFromBackend;
        const imagesArray = hits.map(hit => ({
          id: hit.id,
          littleImageUrl: hit.webformatURL,
          largeImageUrl: hit.largeImageURL,
          description: hit.tags,
        }));
        // console.log(imagesArray)
        return this.setState(({ isLoading }) => ({
          isLoading: !isLoading,
          images: imagesArray,
          totalImages: dataFromBackend.totalHits,
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
          description: hit.tags,
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
    this.setState({ query, page: 1, images: [] });
  };

  getIdOfChooseImage = IdOfChooseImage => {
    this.setState({ IdOfChooseImage });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handleBtnLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const { images, showModal, IdOfChooseImage, totalImages, isLoading } =
      this.state;

    return (
      <div>
        <Searchbar onSubmitProp={this.getSearchRequest} />
        {images && (
          <ImageGallery
            images={images}
            onImageClickChooseId={this.getIdOfChooseImage}
            onImageClickOpenModal={this.toggleModal}
          />
        )}
        {isLoading && <Loader />}
        {images && images.length < totalImages && (
          <BtnLoadMore type="button" onClick={this.handleBtnLoadMore}>
            Load more
          </BtnLoadMore>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <ModalContent images={images} IdOfChooseImage={IdOfChooseImage} />
          </Modal>
        )}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
    );
  }
}
