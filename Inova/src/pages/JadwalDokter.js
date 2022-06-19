import {Button} from 'native-base';
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../components/Style';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dokter_id: '',
      nama_dokter: '',
      spesialis: '',
      hari: '',
      waktu: '',
      listData: [],
      idEdit: null,
    };
    this.url = 'http://172.16.96.27:80/backend/JadwalDokter.php';
  }

  componentDidMount() {
    this.listdata();
  }

  async listdata() {
    await fetch(this.url)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }

  save_data() {
    // var dokter_id = this.state.dokter_id;
    var nama_dokter = this.state.nama_dokter;
    var spesialis = this.state.spesialis;
    var hari = this.state.hari;
    var waktu = this.state.waktu;

    if (
      // dokter_id.length == 0 ||
      nama_dokter.length == 0 ||
      spesialis.length == 0 ||
      hari.length == 0 ||
      waktu.length == 0
    ) {
      alert('Anjing kau!!!');
    } else {
      var linking = 'http://172.16.96.27:80/backend/JadwalAdd.php';

      var headers = {
        'Content-Type': 'application/json',
      };
      var Jadwal_Dokter = {
        // dokter_id: dokter_id,
        nama_dokter: nama_dokter,
        spesialis: spesialis,
        hari: hari,
        waktu: waktu,
      };

      fetch(linking, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(Jadwal_Dokter),
      })
        .then(response => response.json())
        .then(response => {
          alert(response.Message);
        })
        .catch(error => {
          alert('Error' + error);
        });
    }
  }

  async editdata(id) {
    await fetch(this.url + '/?op=detailid=' + id)
      .then(response => response.json())
      .then(json => {
        //this.setState({dokter_id: json.data.result[0].dokter_id});
        this.setState({nama_dokter: json.data.result[0].nama_dokter});
        this.setState({spesialis: json.data.result[0].spesialis});
        this.setState({hari: json.data.result[0].hari});
        this.setState({waktu: json.data.result[0].waktu});
        this.setState({weight: json.data.result[0].weight});
        this.setState({idEdit: id});
      });
  }

  async deletedata(id) {
    await fetch(this.url + '/?op=delete&id=' + id)
      .then(response => response.json())
      .then(json => {
        alert('Data berhasil hapus');
        this.listdata();
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      // <ScrollView style={styles.scrollview}>
      <View style={styles.viewWrapper}>
        <View style={styles.viewData}>
          {this.state.listData.map((val, index) => (
            <View style={styles.viewList} key={index}>
              <Text style={styles.textList}>
                {val.nama_dokter +
                  ' ' +
                  val.spesialis +
                  ' ' +
                  val.hari +
                  ' ' +
                  val.waktu}
              </Text>
              <Text
                style={styles.listedit}
                onPress={() => this.editdata(val.id)}
              >
                Edit
              </Text>
              <Text
                style={styles.listdelete}
                onPress={() => this.deletedata(val.id)}
              >
                Delete
              </Text>
            </View>
          ))}
        </View>
        <View style={styles.viewForm}>
          {/* <TextInput
            style={styles.textInput}
            label="Dokter"
            value={this.state.dokter_id}
            onChangeText={text => this.setState({dokter_id: text})}
            placeholder="Input id of dokter"
          /> */}
          <TextInput
            style={styles.textInput}
            label="Nama_Dokter"
            value={this.state.nama_dokter}
            onChangeText={text => this.setState({nama_dokter: text})}
            placeholder="Input nama dokter"
          />
          <TextInput
            style={styles.textInput}
            label="Spesialis"
            value={this.state.spesialis}
            onChangeText={text => this.setState({spesialis: text})}
            placeholder="Input the spesialis of docter"
          />
          <TextInput
            style={styles.textInput}
            label="Day"
            value={this.state.hari}
            onChangeText={text => this.setState({hari: text})}
            placeholder="Input day"
          />
          <TextInput
            style={styles.textInput}
            label="Time"
            value={this.state.waktu}
            onChangeText={text => this.setState({waktu: text})}
            placeholder="Input time"
          />
          <TouchableOpacity
            style={{
              alignItems: 'center',
              backgroundColor: '#56C3F1',
              padding: 10,
              borderRadius: 20,
              marginLeft: 20,
            }}
            onPress={this.save_data}
          >
            <Text style={{textAlign: 'center'}}>Masukkan Data</Text>
          </TouchableOpacity>
        </View>
      </View>
      // </ScrollView>
    );
  }
}

export default List;
