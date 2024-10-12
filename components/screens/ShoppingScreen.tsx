import {Text, TouchableOpacity, View} from 'react-native';
import {RootStackParamList, RouteNames} from '../../routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList>;
export default function ShoppingScreen({navigation}: Props) {
  return (
    <View>
      <Text>Shopping Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(RouteNames.BROWSER);
        }}>
        <Text>Go Browser</Text>
      </TouchableOpacity>
    </View>
  );
}
