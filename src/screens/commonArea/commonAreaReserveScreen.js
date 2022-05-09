import React, {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {Agenda, LocaleConfig} from 'react-native-calendars';
import Back from '../../assets/icons/register/Icon_back';
import styles from '../../styles/screens/commonArea/commonAreaReserveScreen.component.styles';
import IconFlech from '../../assets/icons/commonArea/icon-flecha';
import Paid from '../../assets/icons/commonArea/dollar';
import Pending from '../../assets/icons/commonArea/dollar_negado';

const CommonAreaReserveScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {title} = route.params;

  const [items, setItems] = useState([]);

  const renderItem = item => {
    return (
      <View style={styles.containerCardReserve}>
        <Text style={styles.colorTime}>
          {item.timeInt} - {item.timeOut}
        </Text>
        <Text style={styles.colorName}>{item.name}</Text>
        <Text style={styles.colorState}>
          Estado:
          {item.state ? (
            <Text style={styles.colorName}>
              Pagado <Paid />
            </Text>
          ) : (
            <Text style={styles.colorName}>
              Pendiende <Pending />
            </Text>
          )}
        </Text>
      </View>
    );
  };
  // Traducciones a español calendar Agenda
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
        <Text style={styles.title}>{title}</Text>
        <View>
          <Text style={styles.currentYear}>2022</Text>
        </View>
        <Agenda
          minDate="2022-01-01"
          maxDate="2023-01-01"
          showClosingKnob={true}
          onDayChange={day => {
            console.log('día cargado', day);
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
            console.log('dia precionado', day);
          }}
          // fechas marcadas en el calendario
          markedDates={{
            '2022-05-10': {
              selected: true,
              selectedColor: '#FF3D81',
              disableTouchEvent: true,
            },
            '2022-05-15': {
              selected: true,
              selectedColor: '#FF3D81',
              disableTouchEvent: true,
            },
            '2022-05-17': {disabled: false},
          }}
          renderItem={renderItem}
          items={{
            '2022-05-01': [
              {
                id: '1',
                date: '2022-05-01',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
              {
                id: '02',
                date: '2022-05-01',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Andres Villarroel',
                state: true,
              },
              {
                id: '03',
                date: '2022-05-01',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Andres Villarroel',
                state: true,
              },
              {
                id: '03',
                date: '2022-05-01',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Andres Villarroel',
                state: true,
              },
            ],
            '2022-05-02': [
              {
                id: '2',
                date: '2022-05-02',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Mayra Roman',
                state: true,
              },
            ],
            '2022-05-03': [
              {
                id: '2',
                date: '2022-05-03',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Jose Miguel',
                state: true,
              },
            ],
            '2022-05-04': [
              {
                id: '5',
                date: '2022-05-04',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Kevin Peres',
                state: true,
              },
            ],
            '2022-05-05': [
              {
                id: '6',
                date: '2022-05-05',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Juan Peres',
                state: true,
              },
            ],
            '2022-05-06': [
              {
                id: '7',
                date: '2022-05-06',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Nicol Peres',
                state: true,
              },
            ],
            '2022-05-07': [
              {
                id: '8',
                date: '2022-05-07',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Rene Montero',
                state: true,
              },
            ],
            '2022-05-08': [
              {
                id: '9',
                date: '2022-05-08',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Simon Bolivar',
                state: true,
              },
            ],
            '2022-05-09': [
              {
                id: '10',
                date: '2022-05-09',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Pedro Escamoso',
                state: true,
              },
            ],
            '2022-05-10': [
              {
                id: '11',
                date: '2022-05-10',
                timeInt: '10:00',
                timeOut: '12:00',
                name: 'Juan Del Valle',
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
            '2022-05-21': [],
            '2022-05-22': [],
            '2022-05-23': [],
            '2022-05-24': [],
            '2022-05-25': [],
            '2022-05-26': [],
            '2022-05-27': [],
            '2022-05-28': [],
            '2022-05-29': [],
            '2022-05-30': [],
            '2022-05-31': [],
          }}
          // Método donde se personaliza el icono de apertura de calendario
          renderKnob={() => {
            return (
              <View>
                <IconFlech width={30} height={11} />
              </View>
            );
          }}
          theme={{
            agendaDayTextColor: '#5A66DF',
            agendaDayNumColor: '#5A66DF',
            // color del dia actual de la agenda
            agendaTodayColor: '#363947',
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
            indicatorColor: '#5A66DF',
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
