import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList, RouteNames} from '../../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = NativeStackScreenProps<RootStackParamList>;
export default function ShoppingScreen({navigation}: Props) {
  return (
    <View>
      <Text>Shopping Screen</Text>
      <View>
        <MaterialCommunityIcons name="shopping" size={30} color="#f00" />
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>Go Browser</Text>
      </TouchableOpacity>
    </View>
  );
}
