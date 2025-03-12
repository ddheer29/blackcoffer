import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'

interface Item {
  id: string;
  title: string;
  thumbnailUrl: string;
  duration: string;
  uploadTime: string;
  views: string;
  author: string;
  videoUrl: string;
  description: string;
  subscriber: string;
  isLive: boolean;
}
interface DiscoverScreenCardProps {
  item: Item;
  index: number;
}

const DiscoverScreenCard: FC<DiscoverScreenCardProps> = ({ item, index }) => {
  return (
    <View style={{ paddingHorizontal: 16 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={{ uri: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index + 1}.jpg` }}
            style={{ width: 40, height: 40, borderRadius: 100, marginRight: 12 }}
          />
          <Text>Aditya</Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 0.5,
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 22,
            paddingVertical: 4,
            borderRadius: 20
          }}
        >
          <Text>Follow</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: item.thumbnailUrl }}
        style={{ width: '100%', height: 200, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16 }}>
        <View>
          <Text>{item.uploadTime}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>{item.isLive}</Text>
          <Text>{item.views}</Text>
        </View>
      </View>
      <Text numberOfLines={2}>{item.description}</Text>
    </View>
  )
}

export default DiscoverScreenCard

const styles = StyleSheet.create({})