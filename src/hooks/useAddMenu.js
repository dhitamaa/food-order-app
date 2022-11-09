import api, { imageServer } from "../components/api/api_instance"

const saveImageToServer = async (formData) => {
  try {
    const result = await imageServer.post("/", formData)
    if (result.data.status !== "success") throw new Error(result.data.message)
    return result.data.data
  } catch (error) {
    throw error
  }
}

const saveDataToKawahServer = async (state, uploadedImageURL) => {
  try {
    const result = await api.post("/content/create", {
      name: state.formData.nama,
      image: uploadedImageURL,
      description1: state.formData.slug,
      description2: JSON.stringify(state.formData.kategori),
      description3: state.formData.harga,
      description4: state.formData.deskripsi
    }, { headers: { access_token: localStorage.getItem("access_token") } })
    return result.data
  } catch (error) {
    throw error
  }
}

export const useAddMenu = () => {
  return async (state) => {
    const formData = new FormData()
    formData.append("submit", "true")
    formData.append("slug", state.formData.slug)
    if (state.croppedImage) {
      formData.append("image", state.croppedImage)
      try {
        const uploadedImageURL = await saveImageToServer(formData)
        const mainServerResult = await saveDataToKawahServer(state, uploadedImageURL)
        return mainServerResult
      } catch (error) {
        throw error
      }
    } else {
      try {
        const mainServerResult = await saveDataToKawahServer(state, null)
        return mainServerResult
      } catch (error) {
        throw error
      }
    }
  }
}
