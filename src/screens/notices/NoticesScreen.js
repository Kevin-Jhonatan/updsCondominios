import React from 'react';
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import Back from '../../assets/icons/register/Icon_back';
import Logo from '../../assets/icons/notices/logo';
import News from '../../assets/icons/notices/News';
import PageStar from '../../assets/icons/notices/page-star';
import styles from '../../styles/screens/notices/NoticesScreen.component.styles';

const DATA = [
  {
    id: 1,
    title: "Mantenimiento del Ascensor, Mantenimiento del Ascensor.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis quis risus quis aliquet. Nulla a accumsan enim. Nullam aliquet aliquet nisl, quis dictum mi viverra a. Fusce ac ornare lorem, in ornare eros. Quisque aliquam eget risus et lobortis. Vivamus pharetra odio leo, at feugiat risus dapibus sit amet. Phasellus vulputate ligula et elit pharetra pulvinar. Suspendisse malesuada ex id velit auctor, eget maximus nunc suscipit. Vestibulum eu sollicitudin ligula, eget tempor mi. Nullam at facilisis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt convallis dolor sit amet laoreet. Aliquam mattis ullamcorper quam eget consequat. Morbi nec justo neque. Praesent quis lectus massa. Fusce sit amet viverra justo, quis porta tellus.', 
    date: "25-03-2022",
  },
  {
    id: 2,
    title: "Mantenimiento de camaras de seguridad.",
    description: 'Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante.Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante. Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante. Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et.',
    date: "30-03-2022",
  },
  {
    id: 3,
    title: "Comunicado 3",
    description: 'Nam dapibus sed urna sit amet blandit. Vivamus malesuada tempor sagittis. Morbi eget ipsum sit amet eros pellentesque hendrerit in et leo. Sed id libero ac enim sagittis placerat eu ut leo. Suspendisse iaculis viverra augue quis auctor. Aliquam quis tempus leo. Quisque dolor tellus, molestie eget sollicitudin nec, dapibus in dui. Nulla quis enim nibh. Aenean viverra, enim ut euismod facilisis, nibh libero viverra nulla, nec porttitor diam est ornare eros. In hac habitasse platea dictumst. Mauris placerat felis a varius placerat. Cras rhoncus, odio eu mattis consequat, arcu orci tempor nibh, vel vehicula dolor eros eu lectus.',
    date: "15-04-2022",
  },
  {
    id: 4,
    title: "Comunicado 4",
    description: 'Suspendisse bibendum, augue in vehicula malesuada, dolor libero maximus sapien, in auctor ex tellus non sem. Nulla facilisi. Nam a ligula ligula. Proin pharetra, mi eget porttitor ultricies, magna magna fermentum velit, vitae condimentum eros dolor sed quam. Nulla pulvinar est eu molestie efficitur. Proin ultricies tempor libero ac convallis. Donec diam tortor, malesuada vitae varius hendrerit, porttitor at velit. Cras elementum tempor massa viverra bibendum. Aliquam id convallis eros, eget pharetra nulla. In rhoncus justo quis elit scelerisque imperdiet. Phasellus tellus massa, pulvinar sed elit et, auctor tincidunt purus. Sed facilisis odio ut sapien aliquet, non scelerisque nisi porta.',
    date: "25-03-2022",
  },
  {
    id: 5,
    title: "Comunicado 5",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis quis risus quis aliquet. Nulla a accumsan enim. Nullam aliquet aliquet nisl, quis dictum mi viverra a. Fusce ac ornare lorem, in ornare eros. Quisque aliquam eget risus et lobortis. Vivamus pharetra odio leo, at feugiat risus dapibus sit amet. Phasellus vulputate ligula et elit pharetra pulvinar. Suspendisse malesuada ex id velit auctor, eget maximus nunc suscipit. ',
    date: "30-03-2022",
  },
  {
    id: 6,
    title: "Comunicado 6",
    description: 'Vestibulum eu sollicitudin ligula, eget tempor mi. Nullam at facilisis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt convallis dolor sit amet laoreet. Aliquam mattis ullamcorper quam eget consequat. Morbi nec justo neque. Praesent quis lectus massa. Fusce sit amet viverra justo, quis porta tellus.',
    date: "15-04-2022",
  },
  {
    id: 7,
    title: "Mantenimiento del Ascensor, Mantenimiento del Ascensor.",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis quis risus quis aliquet. Nulla a accumsan enim. Nullam aliquet aliquet nisl, quis dictum mi viverra a. Fusce ac ornare lorem, in ornare eros. Quisque aliquam eget risus et lobortis. Vivamus pharetra odio leo, at feugiat risus dapibus sit amet. Phasellus vulputate ligula et elit pharetra pulvinar. Suspendisse malesuada ex id velit auctor, eget maximus nunc suscipit. Vestibulum eu sollicitudin ligula, eget tempor mi. Nullam at facilisis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt convallis dolor sit amet laoreet. Aliquam mattis ullamcorper quam eget consequat. Morbi nec justo neque. Praesent quis lectus massa. Fusce sit amet viverra justo, quis porta tellus.', 
    date: "25-03-2022",
  },
  {
    id: 8,
    title: "Mantenimiento de camaras de seguridad.",
    description: 'Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante.Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante. Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et, ultrices orci. Proin hendrerit orci ut imperdiet ultricies. Aenean cursus lacus metus, id scelerisque orci ultrices sed. In accumsan imperdiet magna, sed mattis eros cursus et. Nulla lacinia tellus nisi, eu vehicula eros porttitor ut. Vestibulum massa mauris, congue lobortis tellus et, sodales dignissim neque. Duis eget tempor tortor, in semper ante. Duis tempus tristique tellus, id dapibus lectus tincidunt nec. Mauris aliquam tincidunt quam id varius. Sed laoreet mattis orci, a tincidunt tellus viverra et. Curabitur tempor, orci vel lacinia convallis, elit diam dignissim mi, sed euismod risus turpis sit amet nunc. Nulla elementum convallis finibus. Quisque vitae risus ultrices, elementum nunc et.',
    date: "30-03-2022",
  },
  {
    id: 9,
    title: "Comunicado 9",
    description: 'Nam dapibus sed urna sit amet blandit. Vivamus malesuada tempor sagittis. Morbi eget ipsum sit amet eros pellentesque hendrerit in et leo. Sed id libero ac enim sagittis placerat eu ut leo. Suspendisse iaculis viverra augue quis auctor. Aliquam quis tempus leo. Quisque dolor tellus, molestie eget sollicitudin nec, dapibus in dui. Nulla quis enim nibh. Aenean viverra, enim ut euismod facilisis, nibh libero viverra nulla, nec porttitor diam est ornare eros. In hac habitasse platea dictumst. Mauris placerat felis a varius placerat. Cras rhoncus, odio eu mattis consequat, arcu orci tempor nibh, vel vehicula dolor eros eu lectus.',
    date: "15-04-2022",
  },
  {
    id: 10,
    title: "Comunicado 10",
    description: 'Suspendisse bibendum, augue in vehicula malesuada, dolor libero maximus sapien, in auctor ex tellus non sem. Nulla facilisi. Nam a ligula ligula. Proin pharetra, mi eget porttitor ultricies, magna magna fermentum velit, vitae condimentum eros dolor sed quam. Nulla pulvinar est eu molestie efficitur. Proin ultricies tempor libero ac convallis. Donec diam tortor, malesuada vitae varius hendrerit, porttitor at velit. Cras elementum tempor massa viverra bibendum. Aliquam id convallis eros, eget pharetra nulla. In rhoncus justo quis elit scelerisque imperdiet. Phasellus tellus massa, pulvinar sed elit et, auctor tincidunt purus. Sed facilisis odio ut sapien aliquet, non scelerisque nisi porta.',
    date: "25-03-2022",
  },
  {
    id: 11,
    title: "Comunicado 11",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla iaculis quis risus quis aliquet. Nulla a accumsan enim. Nullam aliquet aliquet nisl, quis dictum mi viverra a. Fusce ac ornare lorem, in ornare eros. Quisque aliquam eget risus et lobortis. Vivamus pharetra odio leo, at feugiat risus dapibus sit amet. Phasellus vulputate ligula et elit pharetra pulvinar. Suspendisse malesuada ex id velit auctor, eget maximus nunc suscipit. ',
    date: "30-03-2022",
  },
  {
    id: 12,
    title: "Comunicado 12",
    description: 'Vestibulum eu sollicitudin ligula, eget tempor mi. Nullam at facilisis dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt convallis dolor sit amet laoreet. Aliquam mattis ullamcorper quam eget consequat. Morbi nec justo neque. Praesent quis lectus massa. Fusce sit amet viverra justo, quis porta tellus.',
    date: "15-04-2022",
  },
];

const NoticesListItem = ({ item, navigation }) => {

  console.log('ITEM',navigation);

  return <TouchableOpacity onPress={ () => navigation.navigate('DetailNotice', { item: item, navigation: navigation })}>
          <View style={styles.card} id={item.id}>
            <News />
            <View style={styles.containerText}>
              <Text style={styles.titleDoc} numberOfLines = {3} ellipsizeMode = { 'tail' }>{item.title}</Text>
              <View style={styles.row}>
                <Text style={styles.date}>{item.date}</Text>
                <View style={styles.column}>
                  <Text style={styles.columnText}>Ver</Text>
                  <PageStar/>
                </View>  
              </View>
            </View>
          </View>
        </TouchableOpacity> 
};

const NoticesScreen = ({navigation}) => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>Comunicados</Text> */}
        <View style={styles.containerLogo}>
          <Logo />
        </View>
        {
          DATA.length > 0 ? 
          <FlatList
            data={DATA}
            renderItem={({item}) => 
              <NoticesListItem item={item} navigation={navigation}></NoticesListItem>
            }
          /> : 
          <View >
            <Text style={styles.txtNoItems}>
              No tiene Comunicados para mostrar.
            </Text>
          </View>
        }
        
      </View>
    </SafeAreaView>
  );
};

export default NoticesScreen;
