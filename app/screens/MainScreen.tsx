import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import {
    Text,
    View,
    FlatList,
    ListRenderItem,
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    TextInput,
  } from 'react-native';

function Main(props){
    return <View>
        <Text>Hello to Ero Fants</Text>

    </View>
}

export const MainScreen = inject('enviromentStore', 'authStore')(observer((props) => Main(props)));