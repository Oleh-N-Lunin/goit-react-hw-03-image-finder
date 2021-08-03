import React, { Component } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import Api from "./servises/FetchAPI";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGalleryItem from "./components/ImageGalleryItem/ImageGalleryItem";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";

import "./components/styles/styles.css";

class App extends Component {
  state = {
    imageName: "",
    imagesArray: [],
    loading: false,
    selectedImage: null,
    page: 1,
    showModal: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({
        page: 1,
        imageName: this.state.imageName,
        imagesArray: [],
      });
      this.imagesSearchFetch();
    }
  };

  imagesSearchFetch = () => {
    const { page, imageName } = this.state;
    this.setState({ loading: true });

    Api.fetchImage(imageName, page)
      .then((imagesArrayFetch) => this.checkNewFetchImagesArray(imagesArrayFetch.hits))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState((prevState) => ({
        loading: false,
        page: prevState.page + 1,
      })));
  };

  checkNewFetchImagesArray = (imagesArrayFetch) => {
    imagesArrayFetch === []
      ? this.setState({ imagesArray: imagesArrayFetch, })
      : this.setState((prevState) => ({ imagesArray: [...prevState.imagesArray, ...imagesArrayFetch], }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  isHandleFormSubmit = (imageName) => {
    this.setState({ imageName });
  };

  isCurrentImage = (currentImage, tags) => {
    this.setState({
      selectedImage: [currentImage, tags],
      showModal: true,
    });
  };

  scrollGallery = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }, 500);
  };

  onClickLoadMore = () => {
    this.imagesSearchFetch();
    this.scrollGallery();
  };

  render() {
    const { loading, showModal, imageName, imagesArray, selectedImage, } = this.state;
    
    return (
      <>
        <Searchbar onSubmit={this.isHandleFormSubmit} />

        {imagesArray && (
          <ImageGalleryItem
            arrayImages={imagesArray}
            onSubmit={this.isCurrentImage}
          />
        )}
        {showModal && (
          <Modal onClose={() => this.togleModal()}>
            <img src={selectedImage[0]} alt={selectedImage[1]} />
          </Modal>
        )}
        {!imageName && (
          <div className="container-paragraphInfo">
            <p className="paragraphInfo">
              Please input name
            </p>
          </div>
        )}
        <ToastContainer autoClose={3000} />
        {loading && <Loader />}

        {imagesArray.length !== 0 && (
          <Button onClick={this.onClickLoadMore}>More...</Button>
        )}
      </>
    );
  }

}

export default App;
