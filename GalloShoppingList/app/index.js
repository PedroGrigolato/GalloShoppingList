import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {link} from 'expo-router'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image source={require('../assets/avatar.jpg')}
         style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          Lista de compras braba!
        </Text>
        <Text style={styles.Text}>
          Não esqueça mais suas compras com esse aplicativo sensacional!
        </Text>
        <Link style={styles.button} href={"/home"}>
          <Text style={styles.buttonText}>Acessar"</Text>
        </Link>
      </View>

      <StatusBar style="light" backgroundColor='#000' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  containerImage: {
    flex: 2,
    alignItems:'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 230,
    height: 230,
    borderRadius: 115,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    backgroundColor: '#dadada',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: '5%'
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    color: 'beige',
  },
  button: {
    position: 'absolute',
    bottom: '15%',
    backgroundColor: '#000',
    alignSelf: 'center',
    borderRadius: 50,
    paddingVertical: 15,
    width:'60%',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold'
  }
});
