import { Button, Col, Form, InputGroup, Modal, Row, Image, Card } from "react-bootstrap"
import { useEffect, useState } from "react"
import { produce } from "immer"
import defaultImage from "../assets/images/menu_default_image.png"
import loadingImage from "../assets/images/loading.gif"

const initialFormDataValue = {
  slug: "",
  nama: "",
  harga: "",
  deskripsi: "",
  kategori: [],
  imageURL: ""
}

const initialStateValue = {
  formData: initialFormDataValue,
  formError: {},
  isLoading: false,
  previewImage: "",
  croppedImage: null
}

const MenuModal = ({ action, categories, showModal, onModalToggle, onFormSubmit }) => {
  const [state, setState] = useState(initialStateValue)

  const handleInputChange = (e) => {
    const el = e.target
    if (el.type === "checkbox") {
      const isCategoryAlreadyInState = state.formData.kategori.includes(el.id.toLowerCase())
      if (el.checked && !isCategoryAlreadyInState) {
        setState(
          produce((draft) => {
            draft.formData.kategori.push(el.id.toLowerCase())
            draft.formError = {}
          })
        )
      } else {
        setState(
          produce((draft) => {
            const index = draft.formData.kategori.indexOf(el.id.toLowerCase())
            draft.formData.kategori.splice(index, 1)
          })
        )
      }
    } else {
      setState(
        produce((draft) => {
          if (el.name === "nama") {
            draft.formData.slug = el.value.toLowerCase().replaceAll(" ", "-")
          }
          draft.formData[el.name] = el.value
        })
      )
    }
  }

  const handleImageFormChange = (e) => {
    const el = e.target
    if (el.files[0]) {
      setState(
        produce((draft) => {
          draft.previewImage = URL.createObjectURL(el.files[0])
        })
      )
    } else {
      setState(
        produce((draft) => {
          draft.formData.imageURL = ""
          draft.previewImage = ""
        })
      )
    }
  }

  const cropImage = () => {
    if (state.previewImage) {
      /* Elemen gambar yang akan diubah */
      const imageElement = document.createElement("img")
      imageElement.onload = async () => {
        /* Menyiapkan canvas untuk menggambar elemen gambar */
        const imgCanvas = document.createElement("canvas")
        const imgContext = imgCanvas.getContext("2d")

        /* Menyiapkan ukuran dan posisi crop */
        let cropStartPositionX = 0
        let cropWidthSize = 0
        let cropStartPositionY = 0
        let cropHeightSize = 0
        
        /* Mengambil bagian tengah gambar */
        if (imageElement.width <= imageElement.height) {
          cropWidthSize = imageElement.width
          cropHeightSize = Math.trunc(imageElement.width * 0.75075075075)
          cropStartPositionY = Math.trunc((imageElement.height - cropHeightSize) / 2)
        } else {
          cropHeightSize = imageElement.height
          cropWidthSize = Math.trunc(imageElement.height * 1.332)
          cropStartPositionX = Math.trunc((imageElement.width - cropWidthSize) / 2)
        }

        /* Menyamakan ukuran canvas dengan ukuran crop */
        imgCanvas.width = cropWidthSize
        imgCanvas.height = cropHeightSize
        
        /* Gambar elemen gambar ke dalam canvas */
        imgContext.drawImage(
          imageElement,
          cropStartPositionX,
          cropStartPositionY,
          cropWidthSize,
          cropHeightSize,
          0,
          0,
          cropWidthSize,
          cropHeightSize
        )

        /* Ubah konten canvas menjadi data URL (string) */
        const imgAsDataURL = imgCanvas.toDataURL("image/jpeg")

        /* Ubah data URL menjadi data blob lalu menjadi file untuk dikirim */
        const blob = await (await fetch(imgAsDataURL)).blob()
        const file = new File(
          [blob],
          document.querySelector("[type='file']").files[0].name,
          { type: blob.type }
        )

        setState(
          produce((draft) => {
            draft.croppedImage = file
          })
        )
      }

      imageElement.src = URL.createObjectURL(
        document.querySelector("[type='file']").files[0]
      )
    } else {
      setState(
        produce((draft) => {
          draft.croppedImage = null
        })
      )
    }
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (state.formData.kategori.length > 0) {
      onFormSubmit(state)
        .then((result) => {
          alert(result.message)
        })
        .catch((error) => console.log(error))
        .finally(() => {
          setState(
            produce((draft) => { draft.isLoading = false })
          )
        })
      setState(() => {
        const newState = { ...initialStateValue }
        newState.isLoading = true
        return newState
      })
      document.querySelectorAll("[type='checkbox']").forEach((el) => el.checked = false)
      document.querySelector("[type='file']").value = null
    } else {
      setState(
        produce((draft) => {
          draft.formError.checkbox = "pilih salah satu kategori"
        })
      )
      document.querySelector("[type='checkbox']").focus()
    }
  }

  useEffect(() => {
    if (showModal) {
      setState(
        produce((draft) => {
          return initialStateValue
        })
      )
      document.querySelector("[type='file']").value = null
      document.querySelectorAll("[type='checkbox']").forEach((el) => el.checked = false)
    }
  }, [showModal])

  return (
    <Modal
      size="lg"
      show={showModal}
      onHide={onModalToggle}
    >
      <Form
        id="addMenuForm"
        onSubmit={handleFormSubmit}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Menu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group
            className="mb-3"
            controlId="addMenuForm.Nama"
          >
            <Form.Label>Nama*</Form.Label>
            <Form.Control
              required
              name="nama"
              type="text"
              value={state.formData.nama}
              onChange={handleInputChange}
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="addMenuForm.Harga"
          >
            <Form.Label>Harga*</Form.Label>
            <InputGroup>
              <InputGroup.Text>Rp</InputGroup.Text>
              <Form.Control
                required
                name="harga"
                type="number"
                min="1"
                value={state.formData.harga}
                onChange={handleInputChange}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="addMenuForm.Deskripsi"
          >
            <Form.Label>Deskripsi*</Form.Label>
            <Form.Control
              required
              name="deskripsi"
              as="textarea"
              rows="3"
              value={state.formData.deskripsi}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="addMenuForm.Kategori"
          >
            <Form.Label>Kategori*</Form.Label>
            <Row>
              {categories.map((category, index) => {
                if (category === "Semua") {
                  return null
                }
                return (
                  <Col key={index}>
                    <Form.Check
                      type="checkbox"
                      name="kategori"
                      id={category}
                      label={category}
                      defaultChecked={state.formData.kategori.includes(category.toLowerCase())}
                      isInvalid={state.formError.checkbox}
                      onChange={handleInputChange}
                    />
                  </Col>
                )
              })}
            </Row>
            {(state.formError.checkbox) && <small className="text-danger">{state.formError.checkbox}</small>}
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="addMenuForm.Gambar"
          >
            <Form.Label>Gambar</Form.Label>
            <Form.Control
              type="file"
              accept="image/jpeg, image/jpg"
              onChange={handleImageFormChange}
            />
          </Form.Group>
          <Row className="mb-3">
            <Col xs={12}><Form.Label>Preview</Form.Label></Col>
            <Col>
              <div style={{ maxWidth: '333px', maxHeight: '250px' }}>
                <div
                  style={{
                    position: 'relative',
                    height: '0',
                    paddingBottom: '75.075075075%'
                  }}
                >
                  <Image
                    id="previewImage"
                    src={state.previewImage || defaultImage}
                    style={{
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center'
                    }}
                    fluid
                    onLoad={cropImage}
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Card.Text as="small">
            * Wajib diisi.
          </Card.Text>
        </Modal.Body>
        <Modal.Footer>
          {state.isLoading &&
            <Image
              style={{ width: "2rem" }}
              src={loadingImage}
              alt="Saving..."
              fluid
            />
          }
          <Button
            variant="secondary"
            onClick={onModalToggle}
          >Batal</Button>
          <Button
            type="submit"
            variant="primary"
          >Simpan</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default MenuModal