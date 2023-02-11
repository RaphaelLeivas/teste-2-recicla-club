import { Button } from '@mui/material'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import React from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import useYupValidationResolver from '../../../utils/yup-validator-resolver'

import AppContext, { AppContextType } from '../../../AppContext'
import InputText from '../../../components/Form/Input/Input'
import InputSelect from '../../../components/Form/Select/Select'
import Company from '../../../models/Company/Company'
import { createCompany } from '../../../services/Companies/CompaniesService'
import { getAddressData } from '../../../services/Correios/CorreiosSevice'
import states from '../../../utils/states-and-cities'

const validationSchema = yup.object({
  name: yup.string().required('campo obrigatório'),
  email: yup.string().required('campo obrigatório').email('email inválido'),
  telephone: yup.string().required('campo obrigatório'),
  cnpj: yup.string().required('campo obrigatório'),
  cep: yup.string().required('campo obrigatório'),
  state: yup.string().required('campo obrigatório'),
  city: yup.string().required('campo obrigatório'),
  district: yup.string().required('campo obrigatório'),
  street: yup.string().required('campo obrigatório'),
  number: yup.number().required('campo obrigatório'),
})

const CompaniesForm: React.FC = () => {
  const { setTitle } = React.useContext(AppContext as React.Context<AppContextType>)
  const resolver = useYupValidationResolver(validationSchema)
  const { control, formState, handleSubmit, setValue, trigger } = useForm<Company>({ resolver })
  const statesList = states

  const handleCepChange = (event: React.FormEvent<HTMLDivElement>): void => {
    const cep = (event.target as HTMLInputElement).value
    if (cep.length === 8) {
      getAddressData(cep).then((data) => {
        setValue('district', data.bairro)
        setValue('street', data.logradouro)
        setValue('city', data.localidade)
        setValue('state', data.uf)
        setValue('complement', data.complemento)
        trigger(['district', 'street', 'city', 'state', 'complement'])
      })
    }
  }

  const onSubmit: SubmitHandler<Company> = (data: Company): void => {
    createCompany(data)
  }

  React.useEffect(() => {
    setTitle('Nova Empresa')
  }, [setValue, setTitle])

  return (
    <Card className="card card--form" variant="outlined">
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="none">
        <Grid container spacing={3}>
          <h4 className="temporary">Dados Primários</h4>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="name" label="Nome" errorText={formState.errors?.name?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="cnpj"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="cnpj" label="CNPJ" errorText={formState.errors?.cnpj?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="telephone"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText
                  id="telephone"
                  label="Telefone"
                  errorText={formState.errors?.telephone?.message}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="email" label="Email" errorText={formState.errors?.email?.message} {...field} />
              )}
            />
          </Grid>
          <h4 className="temporary">Endereço</h4>
          <Grid item xs={12} sm={6}>
            <Controller
              name="cep"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText
                  id="cep"
                  label="CEP"
                  errorText={formState.errors?.cep?.message}
                  {...field}
                  onInput={(ev: React.FormEvent<HTMLDivElement>) => handleCepChange(ev)}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="state"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputSelect
                  id="state"
                  label="Estado"
                  errorText={formState.errors?.state?.message}
                  options={statesList}
                  {...field}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="city"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="city" label="Cidade" errorText={formState.errors?.city?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="district"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="district" label="Bairro" errorText={formState.errors?.district?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="street"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <InputText id="street" label="Rua" errorText={formState.errors?.street?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="number"
              control={control}
              defaultValue={0}
              render={({ field }) => (
                <InputText id="number" label="Número" errorText={formState.errors?.number?.message} {...field} />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="complement"
              control={control}
              defaultValue=""
              render={({ field }) => <InputText id="complement" label="Complemento" {...field} />}
            />
          </Grid>
        </Grid>
        <Grid
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '24px',
          }}
        >
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </Grid>
      </form>
    </Card>
  )
}

export default CompaniesForm
