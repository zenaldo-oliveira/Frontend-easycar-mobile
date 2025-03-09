import { useEffect, useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { api, HandleError } from "../../constants/api.js"; // Mantive a versão com 'api.js'
import { json_rides } from "../../constants/dados.js"; // Mantive a importação de dados mockados, caso deseje usar
import icons from "../../constants/icons.js";
import { styles } from "./ride.style.js";

function Ride(props) {
  const userId = 2; // id do usuário logado no app (vem do login)
  const [rides, setRides] = useState([]);

  function ClickRide(id) {
    console.log("Ride=" + id);
    props.navigation.navigate("ride-detail", {
      rideId: id,
      userId: userId,
    });
  }

  async function RequestRides() {
    // Acessar dados na API em busca das caronas...
    setRides(json_rides); // Se preferir usar dados mockados, deixe essa linha ativa
    try {
      const response = await api.get("/rides/drivers/" + userId);
      if (response.data[0]) setRides(response.data);
    } catch (error) {
      HandleError(error);
      props.navigation.goBack();
    }
  }

  useEffect(() => {
    RequestRides();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={rides}
        keyExtractor={(ride) => ride.ride_id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.ride}
              onPress={() => ClickRide(item.ride_id)}
            >
              <View style={styles.containerName}>
                {item.driver_user_id == userId && (
                  <Image source={icons.car} style={styles.car} />
                )}
                <Text style={styles.name}>{item.passenger_name}</Text>
              </View>
              <Text style={styles.address}>Origem: {item.pickup_address}</Text>
              <Text style={styles.address}>
                Destino: {item.dropoff_address}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

export default Ride;
