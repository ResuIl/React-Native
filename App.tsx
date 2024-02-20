import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const images = [
    { id: 1, title: "Image 1", source: require('./assets/images/image1.png') },
    { id: 2, title: "Image 2", source: require('./assets/images/image1.png') },
    { id: 3, title: "Image 3", source: require('./assets/images/image1.png') },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.carouselItem}>
        <Image source={item.source} style={styles.image} />
        <View style={styles.overlay} />
        <Text style={styles.imageTitle}>{item.title}</Text>
      </View>
    );
  };

  const { width: screenWidth } = Dimensions.get('window');

  const pagination = (
    <Pagination
      dotsLength={images.length}
      activeDotIndex={activeSlide}
      containerStyle={styles.paginationContainer}
      dotStyle={styles.paginationDot}
      inactiveDotStyle={styles.paginationInactiveDot}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
    />
  );

  return (
    <View style={{backgroundColor: '#fff'}}>
      <View className="flex flex-row justify-between mt-[30px] ml-[20px] mr-[10px]">
        <Image source={require('./assets/images/location.png')} />
        <Text className="font-bold text-black text-xl">Caspian Plaza</Text>
      </View>
      <ScrollView className="border-2 border-t-gray-200 border-r-white border-b-white border-l-white" style={{backgroundColor: '#f3f6f4', marginTop: 30}}>
        <Carousel
          layout={'default'}
          data={images}
          renderItem={renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        {pagination}
        <View className="bg-[#f3f6f4]">
          <Text className="text-2xl text-black m-5">Categories</Text>
          <ScrollView horizontal={true} className="overflow-hidden flex flex-row gap-x-[20px] w-full  ml-[5px]">
            <View className="ml-5 mr-5">
              <Image source={require('./assets/images/drinks.png')} />
              <Text className="text-black mt-2">Drinks</Text>
            </View>
            <View className="ml-5 mr-5">
              <Image source={require('./assets/images/pizza.png')} />
              <Text className="text-black mt-2">Pizza</Text>
            </View>
            <View className="ml-5 mr-5">
              <Image source={require('./assets/images/cupcake.png')} />
              <Text className="text-black mt-2">Deserts</Text>
            </View>
            <View className="ml-5 mr-5">
              <Image source={require('./assets/images/vegeterianfood.png')} />
              <Text className="text-black mt-2 w-[70px]">Vegeterian Food</Text>
            </View>
            <View className="ml-5 mr-5">
              <Image source={require('./assets/images/cupcake.png')} />
              <Text className="text-black mt-2">Deserts</Text>
            </View>
          </ScrollView>
        </View>

        <View className="bg-[#f3f6f4]">
           {/* Span Tapa Bilmedim Tarix Üçün*/}
          <Text className="text-2xl text-black m-5">Today's Menu (12 Jan)</Text>
          <ScrollView horizontal={true} className="overflow-hidden flex flex-row gap-x-[20px] w-full ml-[0.1px]">

            <View className="rounded-[18px] bg-white ml-5 mr-5 w-[230px] shadow-lg-black">
              <Image className="m-4" source={require('./assets/images/menu.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-2 ml-[120px] mb-5">from 12 AZN</Text>
            </View>

            <View className="rounded-[18px] bg-white ml-5 mr-5 w-[230px] shadow-lg-black">
              <Image className="m-4" source={require('./assets/images/menu.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-2 ml-[120px] mb-5">from 12 AZN</Text>
            </View>

            <View className="rounded-[18px] bg-white ml-5 mr-5 w-[230px] shadow-lg-black">
              <Image className="m-4" source={require('./assets/images/menu.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-2 ml-[120px] mb-5">from 12 AZN</Text>
            </View>
          </ScrollView>
        </View>

        <View className="bg-[#f3f6f4] mb-24">
           {/* Span Tapa Bilmedim Tarix Üçün*/}
          <Text className="text-2xl text-black m-5">Top Sales</Text>
          <ScrollView horizontal={true} className="overflow-hidden flex flex-row gap-x-[20px] w-full ml-[0.1px]">

            <View className="rounded-[18px] bg-white w-[267px] shadow-lg-black">
              <Image source={require('./assets/images/vegeterian.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-6 ml-[180px] mb-5 font-bold text-lg">12 AZN</Text>
            </View>

            <View className="rounded-[18px] bg-white w-[267px] shadow-lg-black">
              <Image source={require('./assets/images/vegeterian.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-6 ml-[180px] mb-5 font-bold text-lg">12 AZN</Text>
            </View>

            <View className="rounded-[18px] bg-white w-[267px] shadow-lg-black">
              <Image source={require('./assets/images/vegeterian.png')} />
              <Text className="text-black mt-2 font-bold text-xl ml-6">Lunch set</Text>
              <Text className="text-black mt-2 ml-6">Lorem ipsum dolor sit amet, consectetur adipisci</Text>
              <Text className="text-cyan-500 mt-6 ml-[180px] mb-5 font-bold text-lg">12 AZN</Text>
            </View>

          </ScrollView>
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  carouselItem: {
    margin: 20,
    borderRadius: 18,
    backgroundColor: '#E4E4E4',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 10,
  },
  imageTitle: {
    position: 'absolute',
    top: 20,
    left: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  paginationContainer: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    width: '100%',
    height: '10%',

  },
  paginationDot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
  paginationInactiveDot: {
    width: 15,
    height: 15,
    borderRadius: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.32)',
  },
});