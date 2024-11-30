import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const Brow = () => {
  const [url, setUrl] = useState('https://www.google.com');
  const [input, setInput] = useState(url);

  const loadUrl = () => {
    if (!input.startsWith('http://') && !input.startsWith('https://')) {
      setUrl(`https://${input}`);
    } else {
      setUrl(input);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Enter URL"
          keyboardType="url"
        />
        <Button title="Go" onPress={loadUrl} />
      </View>
      <WebView source={{ uri: url }} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  webview: { flex: 1 },
});

export default Brow;
