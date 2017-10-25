import React, { Component } from 'react';
import {
  Platform,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import PhotoView from 'react-native-photo-view';

const images = [
    'http://orig14.deviantart.net/a1a4/f/2016/283/5/2/sci_fi_interior_concept_awakening_by_myfysalim-dakjs0x.jpg',
    'http://orig02.deviantart.net/8076/f/2008/126/6/d/hostile_takeover_by_omen2501.jpg',
    'http://img07.deviantart.net/811b/i/2014/319/0/a/hideout_by_vablo-d86hcdn.jpg',
    'http://pre12.deviantart.net/1d21/th/pre/f/2017/129/6/2/rusts_of_aqradesh_by_julian_faylona-db8k2a9.jpg',
]

export default class Main extends Component {

    static defaultProps = {
        width: Dimensions.get('window').width,
        height: 300,
    }

    state = {
        selectedImageIndex: 0,
    }

    setSelectedImage = selectedImageIndex => {
        this.setState({ selectedImageIndex })
    }

    render(){

        return (
            <ScrollView style = {{ backgroundColor: 'gray' }}>
                <PhotoView
                    source={{ uri: images[this.state.selectedImageIndex] }}
                    minimumZoomScale={1}
                    maximumZoomScale={5}
                    androidScaleType="fitCenter"
                    style={{ width: this.props.width, height: this.props.height }}
                />
                <View style = {{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        images.map((image, i) => {
                            return <TouchableOpacity key = {i} onPress = {this.setSelectedImage.bind(this, i)}
                                style = {this.state.selectedImageIndex === i ? { borderWidth: 3, borderColor: 'white' } : {}}
                            >
                                <Image source = {{uri: image}} style={{width: this.props.width / 4, height: 100}} />
                            </TouchableOpacity>
                        })
                    }
                </View>
            </ScrollView>
        )
    }
}

// "center", "centerCrop", "centerInside", "fitCenter", "fitStart", "fitEnd", "fitXY"
