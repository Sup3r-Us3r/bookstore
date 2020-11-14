/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {COLORS, FONTS, SIZES, icons} from '../../../constants';

interface IBookData {
  id: number;
  bookName: string;
  bookCover: any;
  rating: number;
  language: string;
  pageNo: number;
  author: string;
  genre: string[];
  readed: string;
  description: string;
  backgroundColor: string;
  navTintColor: string;
  completion: String;
  lastRead: String;
}

interface IBookDetailParams {
  book: IBookData;
}

const BookDetail = () => {
  // NAVIGATION
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as IBookDetailParams;

  // STATES
  const [book, setBook] = useState<IBookData>({} as IBookData);

  const LineDivider = () => {
    return (
      <View style={{width: 1, paddingVertical: 5}}>
        <View
          style={{
            flex: 1,
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
          }}
        />
      </View>
    );
  };

  function renderBookInfoSection() {
    return (
      <View style={{flex: 1}}>
        <ImageBackground
          source={book.bookCover}
          resizeMode="cover"
          style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}
        />

        {/* Color Overlay */}
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: book.backgroundColor,
          }}
        />

        {/* Navigation header */}
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.radius,
            height: 60,
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{marginLeft: SIZES.base}}
            onPress={() => navigation.goBack()}>
            <Image
              source={icons.back_arrow_icon}
              resizeMode="contain"
              style={{height: 25, width: 25, tintColor: book.navTintColor}}
            />
          </TouchableOpacity>

          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{...FONTS.h3, color: book.navTintColor}}>
              Book Detail
            </Text>
          </View>

          <TouchableOpacity
            style={{marginRight: SIZES.base}}
            onPress={() => null}>
            <Image
              source={icons.more_icon}
              resizeMode="contain"
              style={{
                height: 30,
                width: 30,
                tintColor: book.navTintColor,
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
        </View>

        {/* Book Cover */}
        <View
          style={{flex: 1, paddingTop: SIZES.padding2, alignItems: 'center'}}>
          <Image
            source={book.bookCover}
            resizeMode="contain"
            style={{flex: 1, height: 'auto', width: 150}}
          />
        </View>

        {/* Book Name and Author */}
        <View
          style={{flex: 0.5, alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{...FONTS.h2, color: book.navTintColor}}>
            {book.bookName}
          </Text>
          <Text style={{...FONTS.body3, color: book.navTintColor}}>
            {book.author}
          </Text>
        </View>

        {/* Book Info */}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            margin: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}>
          {/* Rating */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.rating}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Rating</Text>
          </View>

          <LineDivider />

          {/* Pages */}
          <View
            style={{
              flex: 1,
              paddingHorizontal: SIZES.body3,
              alignItems: 'center',
            }}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.pageNo}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>
              Number of Page
            </Text>
          </View>

          <LineDivider />

          {/* Language */}
          <View style={{flex: 1, alignItems: 'center'}}>
            <Text style={{...FONTS.h3, color: COLORS.white}}>
              {book.language}
            </Text>
            <Text style={{...FONTS.body4, color: COLORS.white}}>Language</Text>
          </View>
        </View>
      </View>
    );
  }

  function renderBookDescription() {
    return (
      <View style={{flex: 1, flexDirection: 'row', padding: SIZES.padding}}>
        {/* Custom Scrollbar */}
        <View
          style={{
            height: '100%',
            width: 4,
            backgroundColor: COLORS.gray1,
          }}
        />

        <ScrollView
          contentContainerStyle={{paddingLeft: SIZES.padding2}}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}>
          <Text
            style={{
              ...FONTS.h2,
              color: COLORS.white,
              marginBottom: SIZES.padding,
            }}>
            Description
          </Text>
          <Text
            style={{
              ...FONTS.body2,
              color: COLORS.lightGray,
            }}>
            {book.description}
          </Text>
        </ScrollView>
      </View>
    );
  }

  function renderBottomButton() {
    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/* Bookmark */}
        <TouchableOpacity
          style={{
            width: 60,
            backgroundColor: COLORS.secondary,
            marginLeft: SIZES.padding,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => null}>
          <Image
            source={icons.bookmark_icon}
            style={{
              height: 25,
              width: 25,
              tintColor: COLORS.lightGray2,
            }}
          />
        </TouchableOpacity>

        {/* Start Reading */}
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            marginHorizontal: SIZES.base,
            marginVertical: SIZES.base,
            borderRadius: SIZES.radius,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => null}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>Start Reading</Text>
        </TouchableOpacity>
      </View>
    );
  }

  useEffect(() => {
    setBook(params.book);
  }, [params]);

  if (!book) {
    return <></>;
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      {/* Book Cover Section */}
      <View style={{flex: 4}}>{renderBookInfoSection()}</View>

      {/* Description */}
      <View style={{flex: 2}}>{renderBookDescription()}</View>

      {/* Buttons */}
      <View style={{height: 70, marginBottom: 30}}>{renderBottomButton()}</View>
    </View>
  );
};

export default BookDetail;
