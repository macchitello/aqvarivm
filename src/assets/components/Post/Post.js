import PropTypes from 'prop-types';
import React, { Component } from 'react';
import moment from 'moment';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Map as ImmutableMap } from 'immutable';
import ImageUploader from 'react-images-upload';
import { Settings } from '../../utils/settings';
import './Post.css';

// Upload file
// https://github.com/baaraak/react-images-upload

const BASE = "aqv-post";

class Post extends Component {
  static get propTypes() {
    return {
      id: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      visibleItem: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
      className: PropTypes.string,
      item: PropTypes.object,
      index: PropTypes.number,
      users: PropTypes.instanceOf(ImmutableMap)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      idUser: 1,
      src: '',
      title: '',
      body: '',
      dtIns: '',
      isUserInfoVisible: 0,
      newImage: false
    };
    this.onDropNewImage = this.onDropNewImage.bind(this);
    this.renderPostTemplate = this.renderPostTemplate.bind(this);
  }

  componentDidMount() {
    const { item } = this.props;

    this.setState({
      ...item.toJS(),
      src: item.id ? `/static_assets/acquario${item.id}.jpg` : '',
      isNew: item.id ? false : true,
      idUser: item.id ? item.idUser : 1
    });
  }

  onDropNewImage(attr) {
    if (attr[0]) {
      let reader = new FileReader();
      reader.onloadend = () => {
        this.setState({
          newImage: reader.result
        });
      }
      reader.readAsDataURL(attr[0]);
    }
    this.createNewUser(attr[0]);
  }

  createNewUser(file) {
    var formData  = new FormData();
    formData.append('image', file);


    const URL = `${Settings.HOST}/postService/uploadImg`;
    const OPTIONS = {
      method: 'POST',
      body: formData
    };

    fetch(URL, OPTIONS)
      .then(response => Promise.resolve([response, response.json()]))
      .then(([response, json]) => {
        if (response.ok) {
          console.log(json);
        }
        const errorMessage = json.errorMessage ? json.errorMessage : 'Unexpected error';
        Promise.reject(errorMessage);
      })
      .catch(err => Promise.reject(err));

    // fetch(url, {
    //   method: 'POST',
    //   body: formData
    // }).then(function (response) {
    //    ...
    // });
  }


  renderPostTemplate() {
    let image = (
      <ImageUploader
        withIcon={true}
        buttonText='Choose new Image'
        onChange={this.onDropNewImage}
        imgExtension={['.jpg', '.gif', '.png', '.gif']}
        maxFileSize={5242880}
      />
    );
    if (this.state.newImage) {
      image = (
        <Image
          className={`${BASE}__image`}
          src={this.state.newImage}
          href="#"
        />
      );
    }
    return (
      <Card className={`${BASE} ${this.props.className}`}>
        {image}
        <Card.Content>
          <Image
            className={`${BASE}__userImage`}
            floated='right'
            size='mini'
            shape='rounded'
            src={`/static_assets/user${this.state.idUser}.jpg`}
          />
          <Card.Header>
            <input
              className={`${BASE}__titlePlaceholder`}
              type="text"
              placeholder="Title:"
            />
          </Card.Header>
          <Card.Meta>
            <span className='date'>
              {moment().format('HH:mm - DD/MM/YYYY')}
            </span>
          </Card.Meta>
          <Card.Description>
            <textarea
              className={`${BASE}__bodyPlaceholder`}
              type="text"
              placeholder="Description:"
              width="100%"
              height="auto"
            />
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }

  render() {
    let post = this.renderPostTemplate();
    if (this.state.src !== '') {
      post = (
        <Card className={`${BASE} ${this.props.className}`}>
          <div
            className={`${BASE}__image`}
            style={{
              backgroundImage: `url(${this.state.src})`
            }}
          />
          <Card.Content>
            <Image
              className={`${BASE}__userImage`}
              floated='right'
              size='mini'
              shape='rounded'
              src={`/static_assets/user${this.state.idUser}.jpg`}
            />
            <Card.Header>
              {this.state.title}
            </Card.Header>
            <Card.Meta>
              <span className='date'>
                {this.state.dtIns}
              </span>
            </Card.Meta>
            <Card.Description>
              {this.state.body}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name='unhide' />
              View more
            </a>
          </Card.Content>
        </Card>
      )
    }
    return post;
  }
}

export default Post;
