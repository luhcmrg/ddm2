import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5EDE0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6B3E26', 
  },
  subtitle: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 5,
    color: '#8B5E3C', 
  },
  input: {
    height: 45,
    borderColor: '#A47148', 
    borderWidth: 2,
    borderRadius: 10,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#C97C5D', 
    padding: 12,
    borderRadius: 12,
    marginTop: 15,
    width: '60%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 15,
    marginBottom: 15,
    borderWidth: 3,
    borderColor: '#A47148',
  },
  listItem: {
    fontSize: 16,
    color: '#6B3E26',
    marginVertical: 3,
  },
});
