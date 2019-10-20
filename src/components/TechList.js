import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text, FlatList} from 'react-native';

export default function TechList() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');
  function handleAddTech() {
    setTechs([...techs, newTech]);
    setNewTech('');
  }
  return (
    <View>
      <FlatList
        data={techs}
        keyExtractor={tech => tech}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      <TextInput
        testID="tech-input"
        onChangeText={setNewTech}
        value={newTech}
      />
      <TouchableOpacity onPress={handleAddTech}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
