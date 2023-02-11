import axios from 'axios'

const baseUrl = 'https://viacep.com.br/ws'

export type Address = {
  cep: string
  logradouro: string
  complemento: string
  bairro: string
  localidade: string
  uf: string
  ibge: string
  gia: string
  ddd: string
  siafi: string
}

const getAddressData = (cep: string): Promise<Address> =>
  axios.get<Address>(`${baseUrl}/${cep}/json`).then((response) => response.data)

export { getAddressData }
