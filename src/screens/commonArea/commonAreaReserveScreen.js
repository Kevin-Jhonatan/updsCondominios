import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {
  Agenda,
  DateData,
  AgendaEntry,
  AgendaSchedule,
  LocaleConfig,
} from 'react-native-calendars';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/commonArea/commonAreaScreen.component.styles';
import IconFlech from '../../assets/icons/commonArea/icon-flecha';
import Paid from '../../assets/icons/commonArea/dollar';
import Pending from '../../assets/icons/commonArea/dollar_negado';
const CommonAreaReserveScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {title} = route.params;

  const [items, setItems] = useState([]);
  const renderItem = () => {
    return <View></View>;
  };
  LocaleConfig.locales['es'] = {
    monthNames: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    monthNamesShort: [
      'Ene',
      'Feb',
      'Mar',
      'Abr',
      'May',
      'Jun',
      'Jul',
      'Ago',
      'Sep',
      'Oct',
      'Nov',
      'Dic',
      // Abreviaciones En
    ],
    dayNames: [
      'Domingo',
      'Lunes',
      'Martes',
      'Miércole',
      'Jueves',
      'Viernes',
      'Sábado',
    ],
    dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
    today: "Hoy/'hoy",
  };
  LocaleConfig.defaultLocale = 'es';

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('CommonArea')}>
          <Back style={styles.back} />
        </TouchableOpacity>
        <Text style={styles.title}>
          {title}
          {id}
        </Text>
        <View
          style={{
            alignSelf: 'center',
          }}>
          <Text style={{textAlign: 'center', color: '#5a66df'}}>2022</Text>
        </View>
        <Agenda
          showClosingKnob={true}
          //showWeekNumbers={true}
          onDayChange={day => {
            console.log('day cargado');
          }}
          renderKnob={() => {
            return (
              <View>
                <IconFlech width={30} height={11} />
              </View>
            );
          }}
          items={{
            '2022-05-01': [
              {
                id: '1',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
              {
                id: '12',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol',
                state: true,
              },
            ],
            '2022-05-02': [
              {
                id: '2',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
            ],
            '2022-05-03': [
              {
                id: '2',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
            ],
            '2022-05-04': [
              {
                id: '5',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Kevin Peres',
                state: true,
              },
            ],
            '2022-05-05': [
              {
                id: '6',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Juan Peres',
                state: true,
              },
            ],
            '2022-05-06': [
              {
                id: '7',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
            ],
            '2022-05-07': [
              {
                id: '8',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'soy el 5',
                state: true,
              },
            ],
            '2022-05-08': [
              {
                id: '9',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'soy el 5',
                state: true,
              },
            ],
            '2022-05-09': [
              {
                id: '10',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'soy el 5',
                state: true,
              },
            ],
            '2022-05-10': [
              {
                id: '11',
                date: '2022-03-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'soy el 5',
                state: false,
              },
            ],
            '2022-05-11': [],
            '2022-05-12': [],
            '2022-05-13': [],
            '2022-05-14': [],
            '2022-05-15': [],
            '2022-05-16': [],
            '2022-05-17': [],
            '2022-05-18': [],
            '2022-05-19': [],
            '2022-05-20': [],
          }}
          renderItem={item => {
            return (
              <View style={{flexDirection: 'column'}}>
                <Text>
                  {item.timeInt} - {item.timeOut}
                </Text>
                <Text>{item.name}</Text>
                <Text>
                  Estado:
                  {item.state ? (
                    <Text>
                      Pagado <Paid />
                    </Text>
                  ) : (
                    <Text>
                      Pendiende <Pending />
                    </Text>
                  )}
                </Text>
              </View>
            );
          }}
          loadItemsForMonth={month => {
            console.log(
              'Traigo todas las reservas del mes especificamente en el día actual y me pinto de rojo',
              month,
            );
          }}
          onCalendarToggled={calendarOpened => {
            console.log(
              calendarOpened,
              'Me ejecuto o disparo cuando el calendario este cerrado o abierto',
            );
          }}
          onDayPress={day => {
            console.log('day pressed', day);
          }}
          minDate="2022-01-01"
          maxDate="2023-01-01"
          //selected="2022-05-05"
          calendarStyle={{color: 'red'}}
          // fechas marcadas en el calendario
          markedDates={{
            '2022-05-20': {
              selected: true,
              // este market nos indica ese punto rodo
              marked: false,
              textColor: 'red',
              startingDay: true,
              selectedColor: 'orange',
              disableTouchEvent: true,
            },
            /*'2022-05-23': {
              customStyles: {
                container: {
                  color: 'red',
                },
              },
            },*/
            '2022-05-21': {
              selected: true,
              // este market nos indica ese punto rodo
              textColor: 'red',
              startingDay: true,
              selectedColor: 'orange',
              disableTouchEvent: true,
            },
            '2022-05-17': {
              //marked: true,
              dotColor: 'red',
              color: '#5a66df',
              endingDay: true,
            },
            '2022-06-18': {disabled: false},
          }}
          onDayPress={day => {
            console.log('dia precionado', day);
          }}
          theme={{
            agendaDayTextColor: '#5A66DF',
            agendaDayNumColor: '#5A66DF',
            // color del dia actual de la agenda
            agendaTodayColor: 'green',
            agendaKnobColor: '#5a66df',
            selectedDotColor: 'red',
            // color de fondo del calendario
            calendarBackground: '#ECEFF9',
            // color de letras del header días de la semana
            textSectionTitleColor: '#5A66DF',
            // este es el color del cuerpo del día seleccionado
            selectedDayBackgroundColor: '#5A66DF',
            // color de fondo de la parte de agenda
            backgroundColor: '#E8EAF5',
            // color de texto title mes
            monthTextColor: '#5A66DF',
            arrowColor: 'orange',
            indicatorColor: 'green',
            // tamaño de text se los dias de la semana
            textDayHeaderFontSize: 16,
            textMonthFontSize: 16,
            textDayFontFamily: 'manrope',
            textMonthFontFamily: 'manrope',
            textDayHeaderFontFamily: 'manrope',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default CommonAreaReserveScreen;
