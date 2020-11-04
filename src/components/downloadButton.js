import React,{useState} from 'react';
import {View} from 'react-native';
import RNFetchBlob from 'react-native-fetch-blob';
import RNDownloadButton from 'react-native-download-button';

const App = () => {
  const [done, setDone] = useState(0)
  return (
    <>
<View style={{flex:1 ,backgroundColor:'red'}}>

<RNDownloadButton  size={300} progress={done} onPress={()=>{

RNFetchBlob
  .config({
    // add this option that makes response data to be stored as a file,
    // this is much more performant.
    fileCache : true,
    addAndroidDownloads: {
        useDownloadManager: true,
         path: RNFetchBlob.fs.dirs.DownloadDir + '/path-to-file.mp3', // Android platform
        description: 'Downloading the file',
      },

  })
  .fetch('GET', 'http://docs.google.com/uc?export=open&id=18_kcR9izZi1ty-Cj5Yj-43h5GWnl627m', {
    //some headers ..
  })
  .progress({ count : 10 }, (received, total) => {
        console.log('progress', 100-(received / total)/-100000)
        
        setDone(100+((received / (total*100000))))
        })
  .then((res) => {
    setDone(100)
    // the temp file path
    console.log('The file saved to ', res.path())
  })
}}/>
</View>
    </>
  );
};

export default App;
