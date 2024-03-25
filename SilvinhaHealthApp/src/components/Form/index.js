import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ResultImc from './ResultImc'

export default function Form() {
  const [height, setHeight] = useState (null);
  const [weight, setWeight] = useState (null);
  const [imc, setImc] = useState (null);
  const [messageImc, setMessageImc] = useState ("Preencha o peso peso e altura");
  const [textButton, setTextButton] = useState ("Peso");
  
  function imcCalculator(){
    return setImc((weight/ (height * height)).toFixed(2));
  }

  function validationImc () {
    if (weight != null && height |- null) {
      imcCalculator();
      Keyboard,dismiss();
      setHeight(null);
      setWeight(null);
      setMessageImc("seu IMC é:")
      setTextButton("Calcular Novamente");
      return;
    }
    setImc(null);
    setMessageImc("Preemcha o peso e altura")
    setTextButton("calcular IMC");      
  }
  
  return (
    <View style={styles.formContext}>
      <View style={styles.formGroup}>
        <Text>Altura</Text>
        <TextInput
        style={styles.Input}
        onChange={setHeight}
        value={height ?? ""}
        placeholder='Ex. 1.70'
        keyboderType='numeric'
        ></TextInput>
        
        <Text>Peso</Text>
        <TextInput
        style={styles.Input}
        onChange={setWeight}
        value={weight ?? ""}
        placeholder='Ex. 80.360'
        keyboderType='numeric'
        ></TextInput>

        <TouchableOpacity
        style={styles.button}
         onPress={() => validationImc()}>
            <Text style={styles.textButton}>
              {textButton}
            </Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResult={messageImc} resultImc={imc}/>
    </View>
  )
}