import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, FlatList, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Avatar, } from "@rneui/themed";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faLocationDot, faEllipsisVertical, faHeart, faComment, faMessage, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons'

const PostComponent = () => {

  // Array fictif contenant les infos relatives à un post pour mapper dessus ensuite
  const postInfo = [
    {
      postPseudo: 'mr Bean',
      postProfilePicture: require('../assets/profilePicture/userPicture1.jpg'),
      postImage: require('../assets/photo/photo1.jpg'),
      likes: 83,
      isLiked: false,
      isComment: false,
      city: 'Bordeaux',
      time: 1,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {postInfo.map((data, index) => {
        // State qui passe à true quand on like
        const [like, setLike] = useState(data.isLiked);
        // State qui passe à true quand on comment
        const [comment, setComment] = useState(data.isComment);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 15,
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                  rounded
                  source={data.postProfilePicture}
                  size={64}
                />
                <View style={styles.subtitleCardHead}>
                  <Text style={{ fontSize: 18, marginTop: 10, color: "white", fontWeight: 'bold' }}> {data.postPseudo} </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <FontAwesomeIcon icon={faLocationDot} size={16} color={'#EBEBEB'} />
                    <Text style={{ marginLeft: 3, color: "#7E7E7E" }}> {data.city} </Text>
                  </View>
                </View>
                <Text style={{ marginTop: 40, color: "#7E7E7E" }}>{data.time}h ago</Text>
              </View>
            </View>
            <View style={{
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center',

            }}>
              <Image source={data.postImage} style={{ width: '100%', height: 400, }} />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
              paddingVertical: 15,
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity>
                  <FontAwesomeIcon icon={faEllipsisVertical} style={{ color: '#fff' }} size={20} />
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => setLike(!like)}>
                    <FontAwesomeIcon icon={like ? faHeart : faHeartRegular} style={{ color: like ? 'red' : 'white', marginRight: 15 }} size={24} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => setComment(!comment)}>
                    <FontAwesomeIcon icon={comment ? faComment : faCommentRegular} style={{ color: '#fff', marginRight: 15 }} size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#fff' }} size={20} />
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151515',
  },
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
  },
  subtitleCardHead: {
    flex: 1,
    marginLeft: 10
  },
  listItem: {
    marginTop: 20,
  }

});

export default PostComponent;
