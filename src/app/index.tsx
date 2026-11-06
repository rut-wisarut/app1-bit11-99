//นำเข้า  วิว  ข้อความ                จาก   ชื่อไลบรารี่
import { Image, StyleSheet, Text, View } from 'react-native';

//ส่งออก  เริ่มต้น  ฟังก์ชัน   ชื่อฟังก์ชัน
export default function App(){
  return(
    <View style={homeStyle.container} >
      {/* ใส่ข้อความ */}
      <Text style={homeStyle.title}>Witsarut Yuensuk</Text>

      {/* ใส่ภาพจากไฟล์ */}
      <Image 
        source={require('@/assets/cat.jpeg')} 
        style={{
          width: 200, // กว้าง
          height: 200, // สูง
          borderRadius: 100, //มุมโค้ง
          borderWidth: 10, // ขอบหนา
          borderColor: "lightblue", //สีขอบ
        }}
      />
      {/* ใส่รูปจากเว็บ */}
      <Image
        source={{uri:"https://moderncat.com/wp-content/uploads/2015/03/bigstock-405819263_-Lena42r-940x640.jpg"}}
        style={{
          width: 200, // กว้าง
          height: 200, // สูง
          borderRadius: 100, //มุมโค้ง
          borderWidth: 10, // ขอบหนา
          borderColor: "red", //สีขอบ
        }}
      />
      {/* เรียงวัตถุแนวนอน ซ้ายไปขวา */}
      <View style={{flexDirection: "row"}}>
        <Text>💀 ผี</Text>
        <Text>😺 แมว</Text>
        <Text>💄 ลิป</Text>
        <Text>🦷 ฟัน</Text>
        <Text>💕 หัวใจ</Text>
        <Text>🙈 ลิง</Text>
      </View>

    </View>
  )
}

//สร้างสไตล์ตกแต่ง
const homeStyle = StyleSheet.create({
  container:{
    backgroundColor: "lightsalmon", // สีพื้นหลัง
    flex:1, //ขยายเต็มพื้นที่
    alignItems: "center"
  },
  title:{
    color: "white", // สีอักษร
    fontSize: 32, // ขนาดอักษร
    fontWeight: 700, // ความหนาอักษร 100-900
    fontStyle: "italic", // เอียง
    textAlign: "center"
  }
})