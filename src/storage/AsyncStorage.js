import AsyncStorage from "@react-native-async-storage/async-storage";

export const FillData = async (key, body) => {
    const res = await AsyncStorage.setItem(key, JSON.stringify(body))
    return res
}

export const GetData = async (key) =>{
    const res = await AsyncStorage.getItem(key)
    return JSON.parse(res)
}