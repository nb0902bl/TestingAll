import React from 'react';
import { StyleSheet, Text, View, Platform, ScrollView } from 'react-native';
import { Rating, RatingProps } from 'react-native-elements';


const Stars = () => {
  const ratingCompleted = (number) => {
    
  };

  const ratingProps = {};
  return (
    <View style={styles.container}>
      <ScrollView style={styles.viewContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <Rating
            showRating
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          
         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top:40,
    
  },
  headingContainer: {
    paddingTop: 50,
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 5,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : '',
    color: '#27ae60',
  },
  subtitleText: {
    fontSize: 14,
    fontWeight: '400',
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'Trebuchet MS' : '',
    color: '#34495e',
  },
  viewContainer: {
    flex: 1,
  },
  rating: {
    paddingVertical: 10,
  },
});

export default Stars;