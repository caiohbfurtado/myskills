import React, { useEffect, useState } from 'react';
import { 
  Text, 
  View,
  StyleSheet,
  TextInput,
  Platform,
  Alert,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  const [mySkills, setMySkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning!');
    } else if(currentHour < 18) {
      setGreeting('Good afternoon!');
    } else if(currentHour < 22) {
      setGreeting('Good evening!');
    } else {
      setGreeting('Good night!');
    }
  }, [])

  function handleAddNewSkill() {
    if (!newSkill) {
      return Alert.alert('Informe a nova skill que você deseja adicionar');
    }

    if (mySkills.some(skill => new RegExp(newSkill, 'gi').test(skill))) {
      return Alert.alert('Você já cadastrou essa skill');
    }

    setMySkills(oldState => [newSkill, ...oldState]);
    setNewSkill('');
    return;
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Caieras!</Text>
      <Text style={styles.greeting}>{greeting}</Text>

      <TextInput 
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor='#555'
        value={newSkill}
        onChangeText={setNewSkill}
      />

      <Button 
        title="Add"
        onPress={handleAddNewSkill}
      />

      <Text style={[
        styles.title,
        { marginVertical: 30 }
      ]}>
        My skills
      </Text>

      <FlatList 
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <SkillCard title={item} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingTop: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    marginTop: 30,
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    borderRadius: 7,
  },
  greeting: {
    color: '#fff',
  }
});